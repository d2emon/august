import Page from '../models/dummies/page';
import modelHandler from '../helpers/modelHandler';

export default modelHandler(
    'pages',
    'page',
    Page,
    (data) => (new Page(data)),
);
