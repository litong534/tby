const promise = require('promise');
const Document = require('../../../models/tby/document');
const moment = require('moment-timezone');
function adddoc(doc) {
  let document = new Document();
  document.name = doc.name;
  document.sex = doc.sex;
  document.job = doc.job;
  document.school = doc.school;
  document.company = doc.company;
  document.emotion = doc.emotion;
  document.ill = doc.ill;
  document.hobby = doc.hobby;
  document.warning = doc.warning;
  document.note = doc.note;
  document.create_dt = moment().format('x');
  document.delete_flg = false;
  document.collect = false;
  return new promise((res, rej) => {
    document.save(err => {
      if (err) {
        rej(err);
      }
      res({ code: 0 });
    })
  })
}

function getdoc() {
  return new promise(function (res, rej) {
    Document.find()
      .sort('name')
      .exec((err, recommend) => {
        if (err) {
          rej(err);
        }
        else {
          res(recommend);
        }
      });
  });
}

function togglecollect(c, id) {
  return new promise(function (res, rej) {
    Document.update({ _id: id }, { collect: c }, {}, function (err) {
      if (err) rej(err);
      res({ code: 0 });
    })
  })
}

function getcollect() {
  return new promise((res, rej) => {
    Document.find({ collect: true }).sort('-create_dt').exec(function (err, collect) {
      if (err) rej(err);
      res({ code: 0, collect });
    })
  })
}

function modifyDoc(obj) {
  const id = obj._id;
  let obj_m = obj;
  obj_m.sex = Number.isNaN(parseInt(obj_m.sex[0])) ? null : parseInt(obj_m.sex[0]);
  obj_m.emotion = Number.isNaN(parseInt(obj_m.emotion[0])) ? null : parseInt(obj_m.emotion[0]);
  delete obj_m._id;
  return new Promise((res, rej) => {
    Document.update({ _id: id },obj_m,function (err, doc) {
      if (err) rej(err);
      res({ code: 0 });
    });
  });  
}

exports.adddoc = adddoc;
exports.getdoc = getdoc;
exports.togglecollect = togglecollect;
exports.getcollect = getcollect;
exports.modifyDoc = modifyDoc;