import * as types from './mutation-type';

const mutations = {
  [types.SET_DETAIL](state,detail) {
    state.detail = detail;
  },
  [types.TOGGLE_COLLECT](state,collect) {
    state.detail.collect = collect;
  },
  [types.RESET_DOC](state, doc) {
    state.add = doc;
  },
  [types.SET_DOC](state, doc) {
    state.add = doc
  },
  [types.SET_DETAIL_TO_ADD](state, detail) {
    let obj = Object.assign({}, detail);
    obj.sex = [...(obj.sex + "")];
    obj.emotion = [...(obj.emotion + "")];
    delete obj.delete_flg;
    delete obj.create_dt;
    state.add = obj;
  },
  [types.SET_MODIFY_STATUS](state, modify) {
    state.modify = modify;
  }
}

export default mutations;