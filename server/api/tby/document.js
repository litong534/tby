var express = require('express');
var app = express();
var router = express.Router();
var document = require('../../service/tby/document/document');
router.route('/adddoc')
  .post((req, res) => {
    const doc = req.body.doc;
    document.adddoc(doc).then(result => {
      res.json(result);
    }).catch(e => res.json(e));
  });

router.route('/getdoc')
.get((req,res) => {
  document.getdoc().then(result => {
    res.json(result);
  }).catch(e => res.json(e));
})

router.route('/togglecollect')
.post((req,res) => {
  document.togglecollect(req.body.collect,req.body.id).then(result => {
    res.json(result);
  }).catch(e => res.json(e));
})

router.route('/getcollect')
.get((req,res) => {
  document.getcollect().then(result => {
    res.json(result);
  }).catch(e => res.json(e));
})

router.route('/modifydoc')
.post((req, res) => {
  document.modifyDoc(req.body.doc).then(result => {
    res.json(result);
  }).catch(e => res.json(e));
});
module.exports = router;