import User from '../models/user';
import modelHandler from '../helpers/modelHandler';

export default modelHandler(
    'users',
    'user',
    User,
    (data) => (new User(data)),
);
