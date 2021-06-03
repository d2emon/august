import Project from '../models/dummies/project';
import modelHandler from '../helpers/modelHandler';

export default modelHandler(Project, (data) => (new Project(data)));
