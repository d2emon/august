import Project from '../models/dummies/project';
import modelHandler from '../helpers/modelHandler';

export default modelHandler(
    'projects',
    'project',
    Project,
    (data) => (new Project(data)),
);

export const getLatestProjects = async (req, res) => {
    try {
        const projects = await Project.findLatest();
        return res.json({ projects });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}
