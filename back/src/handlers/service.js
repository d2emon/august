import Service from '../models/service';
import modelHandler from '../helpers/modelHandler';

export default modelHandler(Service, (data) => (new Service(data)));
