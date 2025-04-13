const express = require('express');
const { createTODO } = require('../models/todo');
const router = express.Router();


router.post('/',async(req,res)=>{
  const {title,description}=req.body;
  const todo = await createTODO(title,description);
  // console.log({body:req.body});
  res.send(todo);
});

module.exports= router;