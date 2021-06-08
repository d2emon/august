import Feedback from '../models/feedback';
import modelHandler from '../helpers/modelHandler';

export default modelHandler(
    'emails',
    'email',
    Feedback,
    (data) => (new Feedback(data)),
);
