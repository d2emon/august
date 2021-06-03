// import bodyParser from 'body-parser'
// import cookieParser from 'cookie-parser'; // Deprecated
// import cors from 'cors';
import express from 'express';
import path from 'path';
import logger from 'morgan';
import mongoose from 'mongoose';
import {error404, errorHandler,} from './handlers/error';

import db, {connect} from './helpers/mongo';
import debug from './helpers/debug';

import blogRoutes from './routes/blog';
import pageRoutes from './routes/pages';
import projectRoutes from './routes/projects';
import serviceRoutes from './routes/services';
import socialRoutes from './routes/social';

const app = express();

const publicPath = path.join(__dirname, '..', 'public');

app.use(logger('dev'));
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(publicPath));

app.set('dbConnection', connect(process.env.MONGO_URI))

mongoose.connection.on('error', error => debug('db')(error || ''));
mongoose.connection.once('open', () => debug('db')('MongoDB connected'));

app.use('/api/v1.0/blog', blogRoutes);
app.use('/api/v1.0/page', pageRoutes);
app.use('/api/v1.0/project', projectRoutes);
app.use('/api/v1.0/service', serviceRoutes);
app.use('/api/v1.0/social', socialRoutes);

app.use(error404);
app.use(errorHandler(app.get('env')));

export default app;
