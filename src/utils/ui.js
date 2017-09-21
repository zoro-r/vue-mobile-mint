import store from '../vuex/store'
import common from '../vuex/modules/common';

const ui = {
  toast(msg, img) {
    store.commit('TOGGLE_TOAST', {
      toast: true,
      toastMsg: msg,
      toastImg: img
    })
  },
  snackbar(msg, img, callback) {
    store.commit('TOGGLE_SNACKBAR', {
      snackbar: true,
      snackbarMsg: msg,
      snackbarImg: img,
    })
  },
  dialog(msg, img, buttons, callback) {
    store.commit('TOGGLE_DIALOG', {
      dialog: true,
      dialogMsg: msg,
      dialogImg: img,
      dialogButtons: buttons,
      dialogCallback: callback
    })
  },
  popup(title, msg, callback) {
    store.commit('TOGGLE_POPUP', {
      popup: true,
      popupMsg: msg,
      popupTitle: title,
      popupCallback: callback
    })
  },
  //新增普通提示
  alert(msg, callback = e => {}) {
    store.commit('TOGGLE_DIALOG', {
      dialog: true,
      dialogMsg: msg,
      dialogImg: 'static/img/common/icon_warning.png',
      dialogButtons: ["确定"],
      dialogCallback: callback
    })
  }
}

export default ui