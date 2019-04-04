const router = require('express').Router();
router.get('/', (req, res, next) => {
  return res.send([
  {id:0,name:"first device", active:true},
  {id:1,name:"second device", active:false},
  {id:2,name:"third device", active:true}]);
});
module.exports = router;