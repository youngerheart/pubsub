// 全局Pub/Sub

var data = {};
var events = {};

module.exports = {

  // 支持对象元素:get/set('obj.item')
  get(name) {
    var arr = name.split('.');
    var res = data;
    for(var i = 0; i < arr.length; i++) {
      res = res[arr[i]];
    }
    return res;
  },

  set(name, value) {
    var arr = name.split('.');
    var item = data;
    for(var j = 0; j < arr.length - 1; j++) {
      if(typeof item[arr[j]] !== 'object') item[arr[j]] = {};
      item = item[arr[j]];
    }
    item[arr.pop()] = value;
  },

  remove(name) {
    var arr = name.split('.');
    var res = data;
    for(var i = 0; i < arr.length - 1; i++) {
      if(typeof res[arr[i]] !== 'object') return false;
      res = res[arr[i]];
    }
    return delete res[arr.pop()];
  },

  // 绑定事件
  on(eventName, callback) {
    if(!events[eventName]) events[eventName] = [];
    events[eventName].forEach((item) => {
      if(item === callback) return;
    });
    events[eventName].push(callback);
  },

  // 触发事件(需要自己的执行域)
  emit(eventName) {
    var arg = arguments;
    if(!events[eventName]) return;
    events[eventName].forEach(function(item) {
      item.apply(null, Array.prototype.slice.call(arg, 1));
    });
  },

  // 根据引用注销事件,只传名称则注销该名称的所有事件，传入名称和引用则删除引用事件。
  exit(eventName, func) {
    events[eventName];
    if(!events[eventName] || !events[eventName].length) return;
    if(!func) {
      delete events[eventName];
      return;
    }
    events[eventName].forEach(function(item, i) {
      if(func === item) {
        delete events[eventName][i];
        events[eventName].splice(i, 1);
      }
    });
  }
};
