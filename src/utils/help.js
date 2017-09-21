import addressData from '../assets/data/addressData'
const help = {
  pushState(title, url) {
    let state = {
      title: title || 'title',
      url: url || '#'
    }
    window.history.pushState(state, state.title, state.url)
  },
  scrollAnchor(id, box) {
    if (!box) {
      box = document.querySelector('.mu-content-block')
    }
    let element = document.querySelector('#' + id)
    box.scrollTop = element.offsetTop
  },
  getScrollTop(box) {
    if (!box) {
      box = document.querySelector('.mu-content-block')
    }
    return box.scrollTop
  },
  scrollPosition(top, box) {
    if (!box) {
      box = document.querySelector('.mu-content-block')
    }
    box.scrollTop = top
  },
  //获取省市区对应的中文
  getAddressOfCn(key = "0") {
    return addressData[key]
  },
  //生产UUID
  uuid(len = 36) {
    let radix = 10;
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let uuid = [],
      i;
    radix = radix || chars.length;
    if (false) {
      // Compact form
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
      // rfc4122, version 4 form
      let r;
      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '';
      uuid[14] = '4';
      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (i = 0; i < 26; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }
    return uuid.join('');
  },
  //复制一个对象
  copy(obj = {}) {
    return JSON.parse(JSON.stringify(obj))
  },
  /**
   * 键盘弹出 键盘消失
   */
  keyBoardShow() {
    let list = document.getElementsByClassName("footer_fixd");
    for (let i = 0; i < list.length; i++) {
      list[i].classList.add("noFixed");
    }
  },
  /**
   * 键盘弹出 键盘消失
   */
  keyBoardHide() {
    let list = document.getElementsByClassName("footer_fixd");
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove("noFixed");
    }
  },
  /**
   * 窗口变化
   */
  sizeChange(e) {
    if (e.target.innerHeight >= 500) {
      help.keyBoardHide()
    } else {
      help.keyBoardShow()
    }
  }
};
export default help;
//
(function() {
  document.getElementsByTagName("body")[0].onresize = help.sizeChange;
})(help);