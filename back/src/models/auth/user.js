/*
import crypto from 'crypto';
import {
    model,
    Schema,
} from 'mongoose';
import randomString from '../../helpers/randomString';

const User = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    validationCode: {
        type: String,
        required: true,
    },
    isValid: {
        type: Boolean,
        default: false,
    },
    isBanned: {
        type: Boolean,
        default: false,
    },
    created: {
        type: Date,
        default: Date.now
    },
});

User
    .methods
    .encryptPassword = function (password) {
        return crypto
            .createHmac('sha1', this.salt)
            .update(password)
            .digest('hex');
    };

User
    .methods
    .checkPassword = function(password) {
        return this.encryptPassword(password) === this.hashedPassword;
    };

User
    .virtual('userId')
    .get(function () {
        return this.id;
    });

User
    .virtual('password')
    .set(function(password) {
        this._plainPassword = password;
        this.salt = randomString();
        this.hashedPassword = this.encryptPassword(password);
    })
    .get(function() {
        return this._plainPassword;
    });

User
    .path('email')
    .validate(
        (email) => /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email),
        'Email is not valid',
    );

User
    .options
    .toJSON = {
        transform: (doc) => ({
            userId: doc.userId,
            username: doc.username,
            created: doc.created,
            isValid: doc.isValid,
            isBanned: doc.isBanned,
        }),
    };

const UserModel = model('User', User);

export default UserModel;
*/
