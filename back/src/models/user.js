import mongoose, { Schema } from 'mongoose';
import crypto from 'crypto';
import randomString from '../helpers/randomString';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true,
    },
    name: String,
    patronymic: String,
    surname: String,
    email: String,
    phone: String,
    date: Date,
    group: [String],
});

userSchema.methods.encryptPassword = function (password) {
    return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
};

userSchema.methods.checkPassword = function (password) {
    return this.encryptPassword(password) === this.passwordHash;
};

userSchema.virtual('password')
    .get(function () {
        return this._password;
    })
    .set(function (value) {
        this._password = value;
        this.salt = randomString();
        this.passwordHash = this.encryptPassword(value);
    });

userSchema.options.toJSON = {
    transform: (doc) => ({
        username: doc.username,
        name: doc.name,
        patronymic: doc.patronymic,
        surname: doc.surname,
        email: doc.email,
        phone: doc.phone,
        date: doc.date,
        group: doc.group,
    }),
};

export default mongoose.model('User', userSchema);
