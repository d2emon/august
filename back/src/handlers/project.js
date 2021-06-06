import Project from '../models/project';
import modelHandler from '../helpers/modelHandler';

export default modelHandler(
    'projects',
    'project',
    Project,
    (data) => (new Project(data)),
);

export const getLatestProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ date: -1 });
        return res.json({ projects });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}
