import '@/common/js/pinyin_dict_firstletter.js';
import '@/common/js/pinyinUtil.js';
export function formatDocs(docs) {
  let format = [];
  let hashArray = [];
  for (let doc of docs) {
    let upper = pinyinUtil.getFirstLetter(doc.name)[0].toUpperCase();
    let words = pinyinUtil.getPinyin(doc.name).split(' ')[0].toUpperCase();
    doc.words = words;
    if (hashArray.includes(upper)) {
      for (let group of format) {
        if (group.name === upper) {
          group.items.push(doc);
        }
      }
    } else {
      hashArray.push(upper);
      let group = {
        name: upper,
        items: [doc]
      };
      format.push(group);

      for (let group of format) {
        group.items.sort((a, b) => {
          return a.words > b.words;
        });
      }
    }
    format.sort((a, b) => {
      return a.name.charCodeAt(0) - b.name.charCodeAt(0);
    })
  }
  console.log(format);
  return format;
}

let elementStyle = document.createElement('div').style;

let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransfrom',
    standard: 'transform'
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key;
    }
  }

  return false;
})();

export function prefixStyle(style) {
  if (vendor === false) {
    return false;
  }

  if (vendor === 'standard') {
    return style;
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}
