import config from './helpers/config';
import {connect} from './helpers/mongo';
import UserModel from './models/user';

connect(config.MONGO_URI)
    .then(() => {
        const user = new UserModel();
        user.username = process.env.USERNAME;
        user.password = process.env.PASSWORD;
        return user.save();
    });
