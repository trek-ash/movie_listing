const router = require('express').Router();
const Items = require('../../models/Items')
router.get('/allItems',async (req, res)=>{
    let items = await Items.find()
    res.status(200).json({
        'items': items
    })
})


module.exports = router;