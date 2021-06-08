import cors from 'cors';
import express from 'express';
import path from 'path';
import logger from 'morgan';
import mongoose from 'mongoose';
import passport from 'passport';
import passportHelper from './helpers/passportHelper';
import {
    error404,
    errorHandler,
} from './handlers/error';
import config from './helpers/config';
import debug from './helpers/debug';
import db, {connect} from './helpers/mongo';

// Импортируем маршрутизаторы

import authRoutes from './routes/auth';
import blogRoutes from './routes/blog';
import pageRoutes from './routes/pages';
import projectRoutes from './routes/projects';
import serviceRoutes from './routes/services';
import socialRoutes from './routes/social';
import userRoutes from './routes/users';
import emailRoutes from './routes/emails';

const app = express();

const publicPath = path.join(__dirname, '..', 'public');

// Подключаем промежуточные обработчики

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(publicPath));
app.use(passport.initialize());

app.locals.oauth = passportHelper;

app.set('dbConnection', connect(config.MONGO_URI))

mongoose.connection.on('error', error => debug('db')(error || ''));
mongoose.connection.once('open', () => debug('db')('MongoDB connected'));

// Подключаем маршрутизаторы

app.use('/api/v1.0/auth', authRoutes);
app.use('/api/v1.0/blog', blogRoutes);
app.use('/api/v1.0/page', pageRoutes);
app.use('/api/v1.0/project', projectRoutes);
app.use('/api/v1.0/service', serviceRoutes);
app.use('/api/v1.0/social', socialRoutes);
app.use('/api/v1.0/user', userRoutes);
app.use('/api/v1.0/email', emailRoutes);

// Подключаем обработчики ошибок

app.use(error404);
app.use(errorHandler(app.get('env')));

export default app;
