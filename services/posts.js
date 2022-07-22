const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page=1){
    const offset=helper.getOffset(page,config.listPerPage);
    const rows = await db.query(
        `SELECT id_post,title,content,day,month,author,category
        FROM posts LIMIT ${offset},${config.listPerPage}
        `
    );

    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }


}

async function create(post){
    const result = await db.query(
        `INSERT INTO posts(title,content,day,month,athor,category) VALUES
        ('${post.title}','${post.content}',${post.day},'${post.month}','${post.author}','${post.category}')
        `
    );

    let message = "Error in creating a new post";
    if(result.affectedRows){
        message="A new post has been added!";
    }

    return{message}
}

async function update(id,post){
    const result = await db.query(
        `UPDATE posts
        SET
        title = '${post.title}',
        content = '${post.content}',
        day= ${post.day},
        month = '${post.month}',
        author = '${post.author}',
        category = '${post.category}'
        WHERE id = ${id_post}
        `
    );

    let message = "Error in updating the post";
    if(result.affectedRows){ 
        message="A new post has been updated!";
    }

    return{message}
}

async function remove(id,post){
    const result = await db.query(
        `DELETE FROM posts WHERE id = ${id_post}
        `
    );

    let message = "Error in deleting the post";
    if(result.affectedRows){
        message="A new post has been deleted!";
    }

    return{message}
}






module.exports = {
    getMultiple,
    create,
    update,
    remove
};