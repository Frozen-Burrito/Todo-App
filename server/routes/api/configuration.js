const express = require('express');
const Config = require('../../models/config');

const router = express.Router();

// GET api/v1/app-config/:id - Get app config - public
router.get('/:id', async ( req, res ) => {
    try {
        let configList = await Config.find();

        appConfig = await configList.find(config => config._id === req.params.id);
        
        if (!appConfig) {
            appConfig = new Config();
        }

        await appConfig.save();

        res.status(200).json({
            success: true,
            appConfig,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'An error occured while loading the app\'s config.',
        })
    }
})

// PUT api/v1/app-config/:id - Edit config - public
router.put('/:id', async ( req, res ) => {
    try {
        let config = await Config.findById( req.params.id );
        config.set(req.body);

        const updatedConfig = await config.save();

        res.status(200).json({
            success: true,
            updatedConfig,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Could not update configuration',
        })
    }
})

module.exports = router;