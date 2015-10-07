(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// 全局Pub/Sub

'use strict';

var data = {};
var events = {};

module.exports = {

  // 支持对象元素:get/set('obj.item')
  get: function get(name) {
    var arr = name.split('.');
    var res = data;
    for (var i = 0; i < arr.length; i++) {
      res = res[arr[i]];
    }
    return res;
  },

  set: function set(name, value) {
    var arr = name.split('.');
    var item = data;
    for (var j = 0; j < arr.length - 1; j++) {
      if (typeof item[arr[j]] !== 'object') item[arr[j]] = {};
      item = item[arr[j]];
    }
    item[arr.pop()] = value;
  },

  remove: function remove(name) {
    var arr = name.split('.');
    var res = data;
    for (var i = 0; i < arr.length - 1; i++) {
      if (typeof res[arr[i]] !== 'object') return false;
      res = res[arr[i]];
    }
    return delete res[arr.pop()];
  },

  // 绑定事件
  on: function on(eventName, callback) {
    if (!events[eventName]) events[eventName] = [];
    events[eventName].forEach(function (item) {
      if (item === callback) return;
    });
    events[eventName].push(callback);
  },

  // 触发事件(需要自己的执行域)
  emit: function emit(eventName) {
    var arg = arguments;
    if (!events[eventName]) return;
    events[eventName].forEach(function (item) {
      item.apply(null, Array.prototype.slice.call(arg, 1));
    });
  },

  // 根据引用注销事件,只传名称则注销该名称的所有事件，传入名称和引用则删除引用事件。
  exit: function exit(eventName, func) {
    events[eventName];
    if (!events[eventName] || !events[eventName].length) return;
    if (!func) {
      delete events[eventName];
      return;
    }
    events[eventName].forEach(function (item, i) {
      if (func === item) {
        delete events[eventName][i];
        events[eventName].splice(i, 1);
      }
    });
  }
};

},{}]},{},[1])