import Project from '../models/project';
import modelHandler from '../helpers/modelHandler';
import Service from "../models/service";

export default modelHandler(
    'projects',
    'project',
    Project,
    (data) => (new Project(data)),
);

export const getLatestProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ date: -1 }).limit(3);
        return res.json({ projects });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

export const getServiceProjects = async (req, res) => {
    try {
        const projects = await Project.find({ serviceId: req.params.serviceId });
        return res.json({ projects });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}
