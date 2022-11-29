const express= require("express");
const router= express.Router();
router.get('/', (req, res) => {
    obj={
        name:"tirthesh",
        number:34
    }
    res.json(obj);
  //   res.send('Fuck You')
  })
  module.exports = router