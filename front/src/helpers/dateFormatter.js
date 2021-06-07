import moment from 'moment';
import 'moment/min/locales.min';

moment.locale('ru');

export default (date) => moment(date).format('LL');
