import Page from '../models/dummies/page';
import modelHandler from '../helpers/modelHandler';

export default modelHandler(Page, (data) => (new Page(data)));