
const { response } = require('express');
var express = require('express');
var router = express.Router();

const posts = require('../services/posts');

/* GET posts listing. */
router.get('/', async function(req, res, next) {
    try{
        res.json(await posts.getMultiple(req.query.page));
    }catch(err){
        console.error('Error'+err.message);
        next(err);

    }
});

module.exports = router;

router.post('/',async function(req,res,next){
    try{
        res.json(await posts.create(req.body));
    }catch(error){
        console.log('Error while creating a post',error.message);
        next(error);
    }
});

router.put('/:id', async function(req,res,next){
    try{
        res.json(await posts.update(req.params.id,req.body));
    }catch(error){
        console.log('Error while updating a post',error.message);
        next(error);
    }
});

router.delete('/:id', async function(req,res,next){
    try{
        res.json(await post.remove(req.params.id));
    }catch(error){
        console.log('Error while deleting a language',error.message);
        next(error);
    }
});

