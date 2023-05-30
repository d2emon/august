/**
 * Обработчики запросов, связанных с авторизацией
 */
import Stat from '../models/stat';

/**
 * Обработчик запроса на запись в статистику
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const addStats = async (req, res) => {
    try {
        console.log(req.body);
        const data = {
            date: new Date(),
            ip: req.ip,
            userAgent: req.get('User-Agent'),
            isMobile: req.get('Sec-CH-UA-Mobile'),
            platform: req.get('Sec-CH-UA-Platform'),
            referrer: req.body.referrer,
            width: req.body.width,
            height: req.body.height,
            page: req.body.page,
        };
        const record = new Stat(data);
        await record.save();

        return res.json({
            result: true,
        });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};

/**
 * Обработчик запроса на получение статистики
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const getStats = async (req, res) => {
    const parseDate = (date) => {
        const [
            year,
            month,
            day,
        ] = date.split('-');
        return new Date(date.split('-'));
    };

    try {
        const startDate = parseDate(req.query.startDate);
        const endDate = parseDate(req.query.endDate);
        endDate.setDate(endDate.getDate() + 1);

        console.log(
            startDate,
            endDate,
        );

        const dateMatch = {
            $match: {
                date: {
                    $gte: new Date(startDate),
                    $lte: new Date(endDate),
                },
            },
        };

        const page = await Stat.aggregate([
            dateMatch,
            {
                $group: {
                    _id: '$page',
                    count: { $sum: 1 },
                },
            },
        ]);
        const userAgent = await Stat.aggregate([
            dateMatch,
            {
                $group: {
                    _id: '$userAgent',
                    count: { $sum: 1 },
                },
            },
        ]);
        const referrer = await Stat.aggregate([
            dateMatch,
            {
                $group: {
                    _id: '$referrer',
                    count: { $sum: 1 },
                },
            },
        ]);
        const platform = await Stat.aggregate([
            dateMatch,
            {
                $group: {
                    _id: '$platform',
                    count: { $sum: 1 },
                },
            },
        ]);
        const isMobile = await Stat.aggregate([
            dateMatch,
            {
                $group: {
                    _id: '$isMobile',
                    count: { $sum: 1 },
                },
            },
        ]);

        return res.json({
            stats: {
                page,
                userAgent,
                referrer,
                isMobile,
                platform,
            },
        });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};
