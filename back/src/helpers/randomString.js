import crypto from 'crypto';

export default (size=32) => crypto
    .randomBytes(size)
    .toString('base64');
