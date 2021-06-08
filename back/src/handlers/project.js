/**
 * Обработчики запросов, связанных с портфолио
 */
import Project from '../models/project';
import modelHandler from '../helpers/modelHandler';

/**
 * Обработчики запросов на создание, просмотр, редактирование и удаление
 * проекта из БД
 */
export default modelHandler(
    'projects',
    'project',
    Project,
    (data) => (new Project(data)),
);

/**
 * Обработчик запроса на получение недавних проектов
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const getLatestProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ date: -1 }).limit(3);
        return res.json({ projects });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

/**
 * Обработчик события на получение проектов по услуге
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const getServiceProjects = async (req, res) => {
    try {
        const projects = await Project.find({ serviceId: req.params.serviceId });
        return res.json({ projects });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}
