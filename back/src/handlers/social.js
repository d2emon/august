import Social from '../models/dummies/social';
import modelHandler from '../helpers/modelHandler';

export default modelHandler(
    'socials',
    'social',
    Social,
    (data) => (new Social(data)),
);
