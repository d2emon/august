import Service from '../models/dummies/service';
import modelHandler from '../helpers/modelHandler';

export default modelHandler(
    'services',
    'service',
    Service,
    (data) => (new Service(data)),
);
