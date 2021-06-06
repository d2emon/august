import Service from '../models/service';
import modelHandler from '../helpers/modelHandler';

export default modelHandler(
    'services',
    'service',
    Service,
    (data) => (new Service(data)),
);
