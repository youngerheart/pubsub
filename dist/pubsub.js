!function r(t,e,n){function o(u,f){if(!e[u]){if(!t[u]){var c="function"==typeof require&&require;if(!f&&c)return c(u,!0);if(i)return i(u,!0);throw new Error("Cannot find module '"+u+"'")}var p=e[u]={exports:{}};t[u][0].call(p.exports,function(r){var e=t[u][1][r];return o(e?e:r)},p,p.exports,r,t,e,n)}return e[u].exports}for(var i="function"==typeof require&&require,u=0;u<n.length;u++)o(n[u]);return o}({1:[function(r,t,e){"use strict";var n={},o={};t.exports={get:function(r){for(var t=r.split("."),e=n,o=0;o<t.length;o++)e=e[t[o]];return e},set:function(r,t){for(var e=r.split("."),o=n,i=0;i<e.length-1;i++)"object"!=typeof o[e[i]]&&(o[e[i]]={}),o=o[e[i]];o[e.pop()]=t},remove:function(r){for(var t=r.split("."),e=n,o=0;o<t.length-1;o++){if("object"!=typeof e[t[o]])return!1;e=e[t[o]]}return delete e[t.pop()]},on:function(r,t){o[r]||(o[r]=[]),o[r].forEach(function(r){}),o[r].push(t)},emit:function(r){var t=arguments;o[r]&&o[r].forEach(function(r){r.apply(null,Array.prototype.slice.call(t,1))})},exit:function(r,t){return o[r],o[r]&&o[r].length?t?void o[r].forEach(function(e,n){t===e&&(delete o[r][n],o[r].splice(n,1))}):void delete o[r]:void 0}}},{}]},{},[1]);