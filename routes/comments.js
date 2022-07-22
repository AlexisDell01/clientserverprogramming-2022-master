const { response } = require('express');
var express = require('express');
var router = express.Router();

const comments = require('../services/comments');

/* GET comments listing. */
router.get('/', async function(req, res, next) {
    try{
        res.json(await comments.getMultiple(req.query.page));
    }catch(err){
        console.error('Error'+err.message);
        next(err);

    }
});

module.exports = router;

router.post('/',async function(req,res,next){
    try{
        res.json(await comments.create(req.body));
    }catch(error){
        console.log('Error while creating a comment',error.message);
        next(error);
    }
});

router.put('/:id', async function(req,res,next){
    try{
        res.json(await comments.update(req.params.id,req.body));
    }catch(error){
        console.log('Error while updating a comment',error.message);
        next(error);
    }
});

router.delete('/:id', async function(req,res,next){
    try{
        res.json(await comments.remove(req.params.id));
    }catch(error){
        console.log('Error while deleting a comment',error.message);
        next(error);
    }
});