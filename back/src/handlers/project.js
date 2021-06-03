import Project from '../models/project';
import modelHandler from '../helpers/modelHandler';

export default modelHandler(Project, (data) => (new Project(data)));
