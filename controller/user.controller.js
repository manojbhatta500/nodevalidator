const express = require('express');

async function handleRootGet(req,res){
    res.json({
        message : "successfully get method"
    });

}


async function handleRootPost(req,res){
    const body = req.body;
    const id = body.id;
    if(id == 0){
        console.log('this is o id ');
        res.json({
            message : 'this is false'
        });
    }else if(id == 1){
        console.log('this is 1 id ');

        res.json({
            message : 'this is true'
        });
    }else{
        console.log('this is other  id ');

        res.json({
            message : 'out of index '
        });
    }
}


module.exports = {
    handleRootGet,
    handleRootPost
}