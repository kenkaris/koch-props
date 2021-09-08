const express = require('express')
const router = express.Router()
const controll = require('./Controll')
const U = require('./MulterStore')


//user related routes
router.post('/send', controll.send)
router.get('/sendAssets',controll.sendAssets)
router.get('/sendAsset/:category/:id',controll.sendAsset)
router.post('/upload-prop-img/:propId/:category',U.upload_prop.array('prop-images',4),controll.PropImgHandler)
router.post('/add-asset',controll.addAsset)
router.post('/delete-asset',controll.deleteProp)

module.exports = router