import Wiki from '../models/wiki';
import modelHandler from '../helpers/modelHandler';

export default modelHandler(
    'pages',
    'page',
    Wiki,
    (data) => (new Wiki(data)),
);
