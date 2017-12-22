import base from '../base/base';

export function addDoc(obj) {
  return base.post('/adddoc', {
    doc: obj
  });
}

export function getDoc() {
  return base.get('/getdoc');
}

export function toggleCollect(collect,id) {
  return base.post('/togglecollect', {
    collect,
    id
  });
}

export function getCollect(collect) {
  return base.get('/getcollect');
}

export function modifyDoc(doc) {
  return base.post('/modifydoc', {
    doc
  });
}