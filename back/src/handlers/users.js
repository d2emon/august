/*
import { errorResponse } from '../oauth/helpers/response';
import UserModel from '../oauth/models/user';

const validateUser = (data) => {
    const {
        username,
        password,
    } = data;

    if (!username) {
        throw new Error('Username is required!');
    }
    if (!password) {
        throw new Error('Password is required!');
    }

    return {
        username,
        password,
    };
}

export const listUsers = async (req, res) => {
    try {
        const users = await UserModel.find({});
        return res.json({ users });
    } catch (e) {
        res.status(500).json(errorResponse(e));
    }
}

export const addUser = async (req, res) => {
    try {
        const user = new UserModel(validateUser(req.body));
        await user.save();
        return res.json({ result: true });
    } catch (e) {
        res.status(500).json(errorResponse(e));
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        return res.json({ user });
    } catch (e) {
        res.status(500).json(errorResponse(e));
    }
}

export const editUser = async (req, res) => {
    try {
        const userId = req.params.id || req.user.id;
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json(errorResponse({ message: 'Not found!' }));
        }

        const data = validateUser(req.body);
        user.username = data.username;
        user.password = data.password;

        await user.save();
        return res.json({ user });
    } catch (e) {
        res.status(500).json(errorResponse(e));
    }
};

export const delUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json(errorResponse({ message: 'Not found!' }));
        }

        await user.deleteOne();
        return res.json({ result: true });
    } catch (e) {
        res.status(500).json(errorResponse(e));
    }
}

export const getMe = (req, res) => res.json({
    user: req.user,
    scope: req.authInfo.scope,
    authInfo: req.authInfo,
});

export const getPreferences = async (req, res) => {
    try {
        *//*
        if (req.playerDead) {
            res.redirect('/death');
        }
         *//*

        const user = await UserModel.findById(req.user.userId);
        const result = {
            email: user.email,
        }
        *//*
        if (playerId) {
            const playerConfig = new MePlayerConfig();
            playerConfig.getPlayerConfig(playerId);

            // Following a successful purchase that leaves your merchant with no open cargo holds,
            // which screen do you want to appear?
            // This value also determines the screen that appears after taking off from a planet
            // and jumping to a new sector.
            result.screen = playerConfig.postTradeScreen;
            // - local_map
            // - current_sector

            // Adjust your ship scanner to ignore the presence of Newbies when displaying the local map.
            result.ignoreNewbie = playerConfig.ignoreNewbie;

            // Participate in ship to ship combat when not directly attacked?
            result.groupCombatShips = playerConfig.groupCombatShips;

            // Defend forces when not directly attacked?
            result.groupCombatForces = playerConfig.groupCombatForces;

            // Participate in group attacks on planets?
            result.groupCombatPlanets = playerConfig.groupCombatPlanets;

            // Local map size
            result.groupMapSize = playerConfig.groupMapSize;
            // 5 x 5
            // 7 x 7
        }
         *//*

        // 1 'Please fill out all of the fields.'
        // 2 'Your password was not successfully verified.'
        // 3 'Password length limit is 10 characters.'
        // 4 'Illegal character in submitted.'

        return res.json(result);
    } catch (e) {
        res.status(500).json(errorResponse(e));
    }
}

const updateUser = async (userId, values) => {
    const user = await UserModel.findById(userId);
    if (!user) {
        throw new Error('You are not authenticated');
    }
    Object.keys(values).forEach((field) => {
        user[field] = values[field];
    })
    await user.save();
}

export const updatePassword = async (req, res) => {
    try {
        const {
            password,
            verify,
        } = req.body;

        if (!password && !verify) {
            res.status(400).json(errorResponse(new Error('Please fill out all of the fields')));
        }
        if (password !== verify) {
            res.status(400).json(errorResponse(new Error('Your password was not successfully verified')));
        }
        if (password.length > 10) {
            res.status(400).json(errorResponse(new Error('Password length limit is 10 characters')));
        }

        await updateUser(req.user.userId, {
            password,
        })

        return res.json({ result: true });
    } catch (e) {
        res.status(500).json(errorResponse(e));
    }
}

export const updateEmail = async (req, res) => {
    try {
        const {
            email,
        } = req.body;

        if (!email) {
            res.status(400).json(errorResponse(new Error('Please fill out all of the fields')));
        }

        await updateUser(req.user.userId, {
            email,
        })

        return res.json({ result: true });
    } catch (e) {
        res.status(500).json(errorResponse(e));
    }
}

export const updatePlayerConfig = async (req, res) => {
    try {
        // - screen ?playerId
        // - ignoreNewbie ?playerId
        // - groupCombatShips ?playerId
        // - groupCombatForces ?playerId
        // - groupCombatPlanets ?playerId
        // - groupMapSize ?playerId

        *//*
        const {
            screen,
            ignoreNewbie,
            groupCombatForces,
            groupCombatPlanets,
            groupCombatShips,
            groupMapSize,
        } = req.body;

        // include("./lib/player_config.php");

        const playerConfig = new MePlayerConfig();
        playerConfig.getPlayerConfig(playerId);

        playerConfig.setPostTradeScreen(screen);
        playerConfig.setIgnoreNewbie(ignoreNewbie);
        playerConfig.setGroupCombatForces(groupCombatForces);
        playerConfig.setGroupCombatPlanets(groupCombatPlanets);
        playerConfig.setGroupCombatShips(groupCombatShips);
        playerConfig.setMapSize(groupMapSize);

        await playerConfig.save();
         *//*

        return res.json({ result: true });
    } catch (e) {
        res.status(500).json(errorResponse(e));
    }
}

export const updatePostTrade = async (req, res) => {
    try {
        // - screen ?playerId

        *//*
        const {
            screen,
        } = req.body;

        // include("./lib/player_config.php");

        const playerConfig = new MePlayerConfig();
        playerConfig.getPlayerConfig(playerId);

        playerConfig.setPostTradeScreen(screen);

        await playerConfig.save();
         *//*

        return res.json({ result: true });
    } catch (e) {
        res.status(500).json(errorResponse(e));
    }
}
*/