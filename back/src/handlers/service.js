import Service from '../models/dummies/service';
import modelHandler from '../helpers/modelHandler';

export default modelHandler(Service, (data) => (new Service(data)));
