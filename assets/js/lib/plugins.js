// Avoid `console` errors in browsers that lack a console.
(function() {
  var noop = function noop() {};
  var methods = [
      'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
      'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
      'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
      'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = window.console || {};
  
  while (length--) {
      // Only stub undefined methods.
      console[methods[length]] = console[methods[length]] || noop;
  }
}());

// Moomba Preloader
$(function() {
  $('#preloader').moombaPreloader({
    type        : 2,                  // Rectangle(1), Square(2)
    bg_color    : 'rgb(208,202,189)', // Background Color
    // Rectangle(1) 
    r_box_color : 'rgb(254,254,254)', // Outer shell
    r_bar_color : 'rgb(204,102,51)' , // Inner Bar
    // Square(2)
    s_box_color : 'rgb(242,239,223)', // Outer shell
    s_square_1  : 'rgb(40,55,64)',    // Top Left
    s_square_2  : 'rgb(138,178,159)', // Top Right
    s_square_3  : 'rgb(191,168,118)', // Bottom Left
    s_square_4  : 'rgb(89,51,37)',    // Bottom Right 
  });
});


/*
 * JQuery URL Parser plugin, v2.2.1
 * Developed and maintanined by Mark Perkins, mark@allmarkedup.com
 * Source repository: https://github.com/allmarkedup/jQuery-URL-Parser
 * Licensed under an MIT-style license. See https://github.com/allmarkedup/jQuery-URL-Parser/blob/master/LICENSE for details.
 */ 
(function(a){"function"==typeof define&&define.amd?"undefined"!=typeof jQuery?define(["jquery"],a):define([],a):"undefined"!=typeof jQuery?a(jQuery):a()})(function(a,b){function i(a,b){for(var c=decodeURI(a),e=f[b?"strict":"loose"].exec(c),g={attr:{},param:{},seg:{}},h=14;h--;)g.attr[d[h]]=e[h]||"";return g.param.query=n(g.attr.query),g.param.fragment=n(g.attr.fragment),g.seg.path=g.attr.path.replace(/^\/+|\/+$/g,"").split("/"),g.seg.fragment=g.attr.fragment.replace(/^\/+|\/+$/g,"").split("/"),g.attr.base=g.attr.host?(g.attr.protocol?g.attr.protocol+"://"+g.attr.host:g.attr.host)+(g.attr.port?":"+g.attr.port:""):"",g}function j(a){var d=a.tagName;return d!==b?c[d.toLowerCase()]:d}function k(a,b){if(0==a[b].length)return a[b]={};var c={};for(var d in a[b])c[d]=a[b][d];return a[b]=c,c}function l(a,c,d,e){var f=a.shift();if(f){var g=c[d]=c[d]||[];"]"==f?r(g)?""!=e&&g.push(e):"object"==typeof g?g[s(g).length]=e:g=c[d]=[c[d],e]:~f.indexOf("]")?(f=f.substr(0,f.length-1),!h.test(f)&&r(g)&&(g=k(c,d)),l(a,g,f,e)):(!h.test(f)&&r(g)&&(g=k(c,d)),l(a,g,f,e))}else r(c[d])?c[d].push(e):c[d]="object"==typeof c[d]?e:c[d]===b?e:[c[d],e]}function m(a,b,c){if(~b.indexOf("]")){var d=b.split("[");d.length,l(d,a,"base",c)}else{if(!h.test(b)&&r(a.base)){var g={};for(var i in a.base)g[i]=a.base[i];a.base=g}o(a.base,b,c)}return a}function n(a){return q((a+"").split(/&|;/),function(a,b){try{b=decodeURIComponent(b.replace(/\+/g," "))}catch(c){}var d=b.indexOf("="),e=p(b),f=b.substr(0,e||d),g=b.substr(e||d,b.length),g=g.substr(g.indexOf("=")+1,g.length);return""==f&&(f=b,g=""),m(a,f,g)},{base:{}}).base}function o(a,c,d){var e=a[c];b===e?a[c]=d:r(e)?e.push(d):a[c]=[e,d]}function p(a){for(var c,d,b=a.length,e=0;b>e;++e)if(d=a[e],"]"==d&&(c=!1),"["==d&&(c=!0),"="==d&&!c)return e}function q(a,c){for(var d=0,e=a.length>>0,f=arguments[2];e>d;)d in a&&(f=c.call(b,f,a[d],d,a)),++d;return f}function r(a){return"[object Array]"===Object.prototype.toString.call(a)}function s(a){var b=[];for(prop in a)a.hasOwnProperty(prop)&&b.push(prop);return b}function t(a,c){return 1===arguments.length&&a===!0&&(c=!0,a=b),c=c||!1,a=a||""+window.location,{data:i(a,c),attr:function(a){return a=e[a]||a,a!==b?this.data.attr[a]:this.data.attr},param:function(a){return a!==b?this.data.param.query[a]:this.data.param.query},fparam:function(a){return a!==b?this.data.param.fragment[a]:this.data.param.fragment},segment:function(a){return a===b?this.data.seg.path:(a=0>a?this.data.seg.path.length+a:a-1,this.data.seg.path[a])},fsegment:function(a){return a===b?this.data.seg.fragment:(a=0>a?this.data.seg.fragment.length+a:a-1,this.data.seg.fragment[a])}}}var c={a:"href",img:"src",form:"action",base:"href",script:"src",iframe:"src",link:"href"},d=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","fragment"],e={anchor:"fragment"},f={strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/},h=(Object.prototype.toString,/^[0-9]+$/);a!==b?(a.fn.url=function(b){var c="";return this.length&&(c=a(this).attr(j(this[0]))||""),t(c,b)},a.url=t):window.purl=t});

