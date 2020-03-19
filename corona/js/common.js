/* --------------------------------------------------------------------------------------
 * common.js
 * version 1.65
 * @20100319
-------------------------------------------------------------------------------------- */
var COMN;
if (!COMN) {
  COMN = {};
}

/* version 1.30 or earlier compatible code */
function EventObserve(elem,name,func,cap){COMN.EventObserve(elem,name,func,cap);};
function fncSwapImage(){COMN.swapImage();}
function comHasClass(id,className){COMN.hasClass(id,className);}
function comAddClass(id,addClassStr){COMN.addClass(id, addClassStr);}
function comRemoveClass(id,removeClassStr){COMN.removeClass(id,removeClassStr);}
function comSetCookie(cookieName,cookieVal,expireDay,domain,path){COMN.setCookie(cookieName,cookieVal,expireDay,domain,path);}
function comGetCookie(cookieName){return COMN.getCookie(cookieName);}
function fncWinOpenBase(src,type){COMN.winOpenBase(src, type, arguments[2], arguments[3]);}
function fncWinOpen(src){COMN.winOpen(src, arguments[1], arguments[2]);}
function fncWinLiquidOpen(src){COMN.winLiquidOpen(src, arguments[1], arguments[2]);}
function fncWinFixOpen(src){COMN.winFixOpen(src, arguments[1], arguments[2]);}
function fncWinClose(){COMN.winClose();}
function fncWinChange(src){COMN.winChange(src);}
function fncWinChangeAndClose(src){COMN.winChangeAndClose(src);}
function fncWinCheckOpener(){COMN.winCheckOpener();}
function popupWindow(url){COMN.popupWindow(url);}
function fncSmoothScroll(id){COMN.smoothScroll(id);}
function fncAddBookmark(tags){COMN.addBookmark(tags);}
function addBookmarkCore(title,url){COMN.addBookmarkCore(title,url);}
function fncPagePrint(tags){COMN.pagePrint(tags);}

// =====================================
// Utility Functions
// =====================================

// --------------------
// Browser check
// --------------------
COMN.env = {
  isIE:     !!(window.attachEvent && !window.opera),
  isOpera:  !!window.opera,
  isSafari: navigator.userAgent.indexOf('AppleWebKit/') > -1,
  isGecko:  navigator.userAgent.indexOf('Gecko') > -1 && navigator.userAgent.indexOf('KHTML') == -1,
  isNN:     document.layers
};

(function() {
  var _start = 
    navigator.userAgent.indexOf('MSIE') > -1 ? (navigator.userAgent.indexOf('MSIE') + 5) :
    navigator.userAgent.indexOf('Opera') > -1 ? (navigator.userAgent.indexOf('Opera') + 6) :
    navigator.userAgent.indexOf('Version') > -1 ? (navigator.userAgent.indexOf('Version') + 8) :
    navigator.userAgent.indexOf('Gecko') > -1 ? (navigator.userAgent.lastIndexOf('/') + 1) :
    navigator.userAgent.indexOf('Mozilla') > -1 ? (navigator.userAgent.indexOf('Mozilla') + 8) : 0;
  var _match =  navigator.userAgent.substr(_start).match(/^([\d\.]*)/);
  COMN.env.version = _match ? _match[0] : '';
})();

COMN.env.os =
  navigator.appVersion.indexOf('Mac') > -1 ? 'Macintosh' :
  navigator.appVersion.indexOf('Win') > -1 ? 'Windows' :
  navigator.appVersion.indexOf('Linux') > -1 ? 'Linux' :
  'Unknown';


COMN.DOM = {};
COMN.DOM.loaded = false;
COMN.DOM.onLoadeds = [];
COMN.ObservedEvents = [];
/* --------------------------------------------------------------------------------------
 * DOM loaded function
 *   ObserveDOMLoaded
-------------------------------------------------------------------------------------- */
COMN.ObserveDOMLoaded = function() {
  if (arguments.length < 1) return;
  var func = arguments[0];
  var object = arguments[1] || this;
  var args = [];
  for (var i = 2; i < arguments.length; i++) {
    args[args.length] = arguments[i];
  }
  if (COMN.DOM.loaded) {
    func.apply(object, args);
  } else {
    COMN.DOM.onLoadeds[COMN.DOM.onLoadeds.length] = {func: func, object: object, args: args};
  }
};

(function() {
  var timer = null;
  function onLoaded() {
    if(COMN.DOM.loaded) return;
    COMN.DOM.loaded = true;
    if (timer){
       clearInterval(timer);
       timer = null;
    }
    var loaded;
    for (var i = 0; i < COMN.DOM.onLoadeds.length; i++) {
      loaded = COMN.DOM.onLoadeds[i];
      loaded.func.apply(loaded.object, loaded.args);
    }
    COMN.DOM.onLoadeds = [];
  }
  var d = document;
  if (d.addEventListener) {
    if (navigator.userAgent.match(/webkit|safari|khtml/i)) {// for Safari
      timer = setInterval(function() {
        if (d.readyState.match(/loaded|complete/)) {
          onLoaded();
        }
      }, 0);
    } else { // for Mozilla/Opera9
      d.addEventListener('DOMContentLoaded', onLoaded, false);
    }
    if (COMN.env.isSafari) {
      window.addEventListener('unload', function () {}, false);
    }
  } else {
    // for IE
    d.write('<script id="_decoy_" defer src=//:><\/script>');
    d.getElementById('_decoy_').onreadystatechange = function() {
      if (this.readyState == 'complete') {
        this.onreadystatechange = function() {};
        onLoaded();
      }
    }
    window.attachEvent('onunload', function() {
      for (var i = 0; i < COMN.ObservedEvents.length; i++) {
        var elem = COMN.ObservedEvents[i].elem;
        var name = COMN.ObservedEvents[i].name;
        var func = COMN.ObservedEvents[i].func;
        COMN.EventStopObserve(elem, name, func);
      }
    });
  }
})();

/* --------------------------------------------------------------------------------------
 * bind function
 *   bindFunc
-------------------------------------------------------------------------------------- */
COMN.bindFunc = function(method, object) {
  var args = [];
  for (var i = 2; i < arguments.length; i++) {
    args[args.length] = arguments[i];
  }
  return function () {
    var _args = [];
    for (var i = 0; i < arguments.length; i++) {
      _args[_args.length] = arguments[i];
    }
    return method.apply(object, args.concat(_args));
  }
};

/* --------------------------------------------------------------------------------------
 * Event Observe
 *   EventObserve
-------------------------------------------------------------------------------------- */
COMN.EventObserve = function(elem, name, func, cap) {
  if (elem.addEventListener) {
    elem.addEventListener(name, func, cap);
  } else if (elem.attachEvent) {
    elem.attachEvent('on' + name, func);
  }
  COMN.ObservedEvents.push({elem: elem, name: name, func: func});
};

/* --------------------------------------------------------------------------------------
 * Event StopObserve
 *   EventStopObserve
-------------------------------------------------------------------------------------- */
COMN.EventStopObserve = function(elem, name, func) {
  if (elem.removeEventListener) {
    elem.removeEventListener(name, func, false);
  } else {
    elem.detachEvent('on' + name, func);
  }
};

/* --------------------------------------------------------------------------------------
 * get search params
 *   getSearchParams
-------------------------------------------------------------------------------------- */
COMN.getSearchParams = function () {
  var search = location.search.replace(/^\?/, '');
  if (search) {
    var searches = {};
    var params = search.split('&');
    for (var i = 0; i < params.length; i++) {
      var values = params[i].split('=');
      if (!values[0]) continue;
      searches[values[0]] = values[1];
    }
    return searches;
  }
}

/* --------------------------------------------------------------------------------------
 * get element node list by class name
 *   getElementsByClassName
-------------------------------------------------------------------------------------- */
COMN.getElementsByClassName = function (className, elem) {
  elem = elem || document;
  if (typeof document.body.getElementsByClassName == 'function' &&
    typeof elem.getElementsByClassName == 'function') {
    return elem.getElementsByClassName(className);
  }
  if (document.evaluate) {
    var results = new Array();
    var q = ".//*[contains(concat(' ', @class, ' '), ' " + className + " ')]";
    var ret = document.evaluate(q, elem, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i = 0, len = ret.snapshotLength; i < len; i++) {
      results.push(ret.snapshotItem(i));
    }
    return results;
  }
  elem = elem || document.body;
  var elems = elem.getElementsByTagName('*');
  var res = new Array();
  for (var i = 0; i < elems.length; i++) {
    if (COMN.hasClass(elems[i], className)) {
      res[res.length] = elems[i];
    }
  }
  return res;
}

/* --------------------------------------------------------------------------------------
 * set element opacity
 * 0.0 - 1.0, ''
 *   setOpacity
-------------------------------------------------------------------------------------- */
COMN.setOpacity = function (elem, value) {
  if (COMN.env.isIE) {
    function stripAlpha(filter){
      return filter.replace(/alpha\([^\)]*\)/gi,'');
    }
    var currentStyle = elem.currentStyle;
    if ((currentStyle && !currentStyle.hasLayout) ||
      (!currentStyle && elem.style.zoom == 'normal')) {
      elem.style.zoom = 1;
    }

    var filter = elem.style.filter;
    var style = elem.style;
    if (value == 1 || value === '') {
      (filter = stripAlpha(filter)) ?
        style.filter = filter : style.removeAttribute('filter');
      return;
    } else if (value < 0.00001) {
      value = 0;
    }
    style.filter = stripAlpha(filter) + 'alpha(opacity=' + (value * 100) + ')';
  } else {
    var opacity = (value == 1 || value === '') ? '' : (value < 0.00001) ? 0 : value;
    if (value == 1 && COMN.env.isGecko && /rv:1\.8\.0/.test(navigator.userAgent)) {
      opacity = 0.999999;
    }
    elem.style.opacity = opacity;
    if (value == 1 && COMN.env.isSafari) {
      if(elem.tagName.toUpperCase() == 'IMG' && elem.width) {
        elem.width++; elem.width--;
      } else try {
        var n = document.createTextNode(' ');
        elem.appendChild(n);
        elem.removeChild(n);
      } catch (e) { }
    }
  }
}

/* --------------------------------------------------------------------------------------
 * get element opacity
 * 0.0 - 1.0, ''
 *   getOpacity
-------------------------------------------------------------------------------------- */
COMN.getOpacity = function (elem, value) {
  var style = COMN.env.isIE ? 'filter' : 'opacity';
  var value = element.style[style];
  if (!value || value == 'auto') {
    var css = document.defaultView.getComputedStyle(elem, null);
    value = css ? css[style] : '';
  }
  if (value) {
    if (style == 'opacity') {
      return parseFloat(value);
    }
    if (value = value.match(/alpha\(opacity=(.*)\)/)) {
      if (value[1]) {
        return parseFloat(value[1]) / 100;
      }
    }
  }
  return 1.0;
}

/* --------------------------------------------------------------------------------------
 * cumulative offset
 *   cumulativeOffset
-------------------------------------------------------------------------------------- */
COMN.cumulativeOffset = function(element) {
  var valueT = 0, valueL = 0;
  do {
    valueT += element.offsetTop  || 0;
    valueL += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);
  return [valueL, valueT];
};

/* --------------------------------------------------------------------------------------
 * get browser size
 *   getBrowserSize
-------------------------------------------------------------------------------------- */
COMN.getBrowserSize = function() {
  if (document.documentElement && document.documentElement.clientWidth) {
    return [document.documentElement.clientWidth, document.documentElement.clientHeight];
  } else if (document.body) {
    return [document.body.clientWidth, document.body.clientHeight];
  } else if (window.innerWidth) {
    return [window.innerWidth, window.innerHeight];
  }
  return [0, 0];
};

/* --------------------------------------------------------------------------------------
 * get mouse coordinates
 *   getMousePosition
-------------------------------------------------------------------------------------- */
COMN.getMousePosition = function (evt) {
  var x = (evt && evt.pageX !== undefined) ? evt.pageX : event.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft);
  var y = (evt && evt.pageY !== undefined) ? evt.pageY : event.clientY + (document.body.scrollTop || document.documentElement.scrollTop);
  return {x: x, y: y};
}

/* --------------------------------------------------------------------------------------
 * Swap Images
 *   swapImage
-------------------------------------------------------------------------------------- */
COMN.swapImage = function(parent) {
  if (!parent || !parent.getElementsByTagName) {
    parent = document;
  }
  var imgs = parent.getElementsByTagName('img');

  for(var i=0; i<imgs.length; i++){
    if (COMN.hasClass(imgs[i], 'swap')) {
      COMN.swapImageInit(imgs[i]);
    }
  }
}

COMN.swapImageInit = function(element, forceInit) {
  // FileName Split.
  var tempSrc = element.src;
  var paths = tempSrc.split('/');
  var fileNameFull = paths[paths.length - 1];
  var names = fileNameFull.split('.');
  var extension = names.pop();
  var fileNameOrg = names.join('.');
  if (!forceInit && fileNameOrg.match(/_on|_ac_no$/)) {
    return;
  }
  fileName = fileNameOrg.replace(/_off|_ac_re|_on|_ac_no$/, '');
  var onFileNameFull = fileName + '_on' + '.' + extension;

  // submit 'On' and 'Off' fileName split.
  element.offSrc = element.src;
  if (forceInit && fileNameOrg.match(/_on|_ac_no$/)) {
    element.offSrc = element.src.replace(fileNameFull, fileName + '.' + extension);
  }
  element.onSrc = element.src.replace(fileNameFull, onFileNameFull);
  var img = document.createElement('IMG');
  img.src = element.onSrc;
  element.onImg = img;

  // Events.
  element.onmouseover = function(){
    this.src = this.onSrc;
  }
  element.onmouseout = function(){
    this.src = this.offSrc;
  }
  if (!COMN.swapImages) {
    COMN.swapImages = [];
  }
  COMN.swapImages[COMN.swapImages.length] = element;
}

COMN.ObserveDOMLoaded(COMN.swapImage);

/* --------------------------------------------------------------------------------------
 * Add Child Class
 *   addChildClass
-------------------------------------------------------------------------------------- */
COMN.addChildClass = function(parent) {
  var CLASS_NAME = {
    TARGET: 'hasChild',
    HAS_E: 'hasE',
    HAS_O: 'hasO',
    HAS_EO: 'hasEO',
    FIRST: 'firstChild',
    LAST: 'lastChild',
    ODD: 'odd',
    EVEN: 'even',
    NEST: 'nest'
  };
  function _addChildClass(parent) {
    var childs = [];
    for (var i = 0; i < parent.childNodes.length; i++) {
      if (parent.childNodes[i].nodeType == 1) {
        childs.push(parent.childNodes[i]);
      }
    }
    var nest_interval = -1;
    var nest_repeat = false;
    var matched = parent.className.match(/(^|\s)has(\d+)(n?)(\s|$)/);
    if (matched) {
      nest_interval = +matched[2];
      nest_repeat = !!matched[3];
    }
    COMN.addClass(childs[0], CLASS_NAME.FIRST);
    COMN.addClass(childs[childs.length - 1], CLASS_NAME.LAST);
    var hasE = COMN.hasClass(parent, CLASS_NAME.HAS_E) || COMN.hasClass(parent, CLASS_NAME.HAS_EO);
    var hasO = COMN.hasClass(parent, CLASS_NAME.HAS_O) || COMN.hasClass(parent, CLASS_NAME.HAS_EO);
    for (var i = 0; i < childs.length; i++) {
      if (i % 2 == 0 && hasO) {
        COMN.addClass(childs[i], CLASS_NAME.ODD);
      }
      if (i % 2 == 1 && hasE) {
        COMN.addClass(childs[i], CLASS_NAME.EVEN);
      }
      if (nest_interval - 1 == i || (nest_repeat && (i + 1) % nest_interval == 0)) {
        COMN.addClass(childs[i], CLASS_NAME.NEST);
      }
    }
  }
  if (!parent || !parent.getElementsByTagName) {
    parent = document;
  }
  if (COMN.hasClass(parent, CLASS_NAME.TARGET)) {
    _addChildClass(parent);
  } else {
    var elements = COMN.getElementsByClassName(CLASS_NAME.TARGET, parent);
    for (var i = 0; i < elements.length; i++) {
      _addChildClass(elements[i]);
    }
  }
}

COMN.ObserveDOMLoaded(COMN.addChildClass);

/* get element */
COMN.getElement = function(elem) {
  if (typeof elem == 'string') {
    elem = document.getElementById(elem);
  }
  return elem;
}

/* get className */
COMN.hasClass = function(id, className) {
  var elem = COMN.getElement(id);
  if (!elem || elem.className == undefined) return false;
  var elementClassName = elem.className;
  if (elementClassName.length == 0) return false;
  if (elementClassName == className ||
    elementClassName.match(new RegExp("(^|\\s)" + className + "(\\s|$)")))
    return true;
  return false;
}
/* add className */
COMN.addClass = function(id, addClassStr) {
  var elem = COMN.getElement(id);
  if (!elem || elem.className == undefined) return false;
  if(elem.className == ''){
    elem.className = addClassStr;
  } else if (!COMN.hasClass(elem, addClassStr)) {
    elem.className += ' ' + addClassStr;
  }
}
/* remove className */
COMN.removeClass = function(id, removeClassStr) {
  var elem = COMN.getElement(id);
  if (!elem || elem.className == undefined) return false;
  if (!COMN.hasClass(elem, removeClassStr)) return;
  var classes = elem.className.split(' ');
  var defaultClassName= '';
  for (var i=0; i < classes.length; i++){
    if (classes[i] != removeClassStr) {
      defaultClassName += classes[i] + ' ';
    }
  }
  elem.className = defaultClassName;
}
/* set cookie */
COMN.setCookie = function(cookieName, cookieVal, expireDay, domain, path) {
  var cookie = cookieName + '=' + escape(cookieVal);
  if (expireDay >= 10000) {
    cookie += '; expires=Tue, 19 Jan 2038 00:00:00 UTC';
  } else if (+expireDay == expireDay && expireDay != '') {
    cookie += '; expires=' + new Date(new Date().getTime() + expireDay*24*60*60*1000).toGMTString();
  }
  if (domain) {
    cookie += '; domain=' + domain;
  }
  if (path) {
    cookie += '; path=' + path;
  }
  document.cookie = cookie;
}
/* get cookie */
COMN.getCookie = function(cookieName) {
  var isName = cookieName + "=";
  var isCookie = document.cookie + ";";
  startPos = isCookie.indexOf(isName);
  if (startPos != -1) {
    endPos = isCookie.indexOf(";", startPos);
    var isVal = unescape(isCookie.substring(startPos + isName.length, endPos));
  }
  if(isVal){
    return isVal;
  }
}

// =====================================
// Public Functions
// =====================================

/* --------------------------------------------------------------------------------------
 * Window Open
 *   winOpen, winLiquidOpen, winFixOpen
 *   @param arguments[1]  src
 *   @param arguments[2]  width
 *   @param arguments[3]  height
-------------------------------------------------------------------------------------- */
//_blank Window Base
COMN.winOpenBase = function(src, type, width, height) {
  width = width || 600;
  height = height || 500;
  switch (type) {
  case 'lequid':
    var param = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes";
    break;
  case 'fix':
    var param = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no";
    break;
  default:
    var param = "toolbar=yes,location=yes,directories=no,status=yes,menubar=yes,scrollbars=yes,resizable=yes";
  break;
  }
  var wo = window.open(src, "_blank", param + ",width=" + width + ",height=" + height);
  wo.window.focus();
}

//_blank Window normal
COMN.winOpen = function(src) {
  COMN.winOpenBase(src, '', arguments[1], arguments[2]);
}
//_blank Window lequid
COMN.winLiquidOpen = function(src) {
  COMN.winOpenBase(src, 'lequid', arguments[1], arguments[2]);
}
//_blank Window fix
COMN.winFixOpen = function(src) {
  COMN.winOpenBase(src, 'fix', arguments[1], arguments[2]);
}

/* --------------------------------------------------------------------------------------
 * Window Close
 *   winClose
-------------------------------------------------------------------------------------- */
COMN.winClose = function(){
  self.window.close();
}

/* --------------------------------------------------------------------------------------
 * Window Change
 *   winChange
 *   @param arguments[1]  src
-------------------------------------------------------------------------------------- */
COMN.winChange = function(src){
  if(COMN.winCheckOpener()){
    COMN.popupWindow (src);
  }else{
    window.opener.location.href = src;
  }
}
COMN.winChangeAndClose = function(src){
  if(COMN.winCheckOpener()){
    COMN.popupWindow (src);
  }else{
    window.close();
    window.opener.location.href = src;
  }
}


//check Window Opener
COMN.winCheckOpener = function() {
  return (!window.opener || window.opener.closed) ? true : false;
}

//winCheckOpener -> open Window
COMN.popupWindow = function(url) {
  COMN.winOpen(url);
}


/* --------------------------------------------------------------------------------------
 * Smooth Scroll
 *   smoothScroll
 *   @param id  target element id
 *   @param arguments[1]  speed
 *   @param arguments[2]  interval
 *   @param arguments[3]  acceleration
-------------------------------------------------------------------------------------- */
COMN.smoothScroll = function(id) {
  id = id.replace(/^#/, '');
  this.speed = arguments[1] != undefined ? arguments[1] : 10;
  this.interval = arguments[2] != undefined ? arguments[2] : 10;
  var acceleration = arguments[3] != undefined ? arguments[3] : 0.3;
  var targetElem = document.getElementById(id);
  if (!targetElem) return;
  this.targetPos = targetElem.offsetTop;
  var obj = targetElem;
  if (obj.offsetParent) {
    while (obj = obj.offsetParent) {
      this.targetPos += obj.offsetTop;
    }
  }
  var docHeight = document.body.offsetHeight;
  var winHeight = document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight;
  var scrHeight = document.documentElement.scrollTop || document.body.scrollTop;
  this.scrLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
  if (this.targetPos + winHeight > docHeight) {
    this.targetPos = docHeight - winHeight;
  }
  this.position = 0;
  if (this.targetPos < scrHeight) {
    this.position = scrHeight;
    } else {
    this.position = (this.targetPos - scrHeight) * acceleration;
  }
  this.moveObj = (function (_this) {
    return function(){
      var move = (_this.targetPos - _this.position) / _this.speed;
      if (parseInt(move) == 0) {
        move = (_this.position > _this.targetPos) ? -1 : 1;
      }
      var point = parseInt(_this.position + move);
      scrollTo(_this.scrLeft, point);
      if ((_this.targetPos > _this.position && _this.targetPos > point) ||
        (_this.targetPos < _this.position && _this.targetPos < point)) {
        setTimeout(function () { _this.moveObj(); }, _this.interval);
      }
      _this.position = point;
    };
  })(this);
  this.moveObj();
}

/* --------------------------------------------------------------------------------------
 * Add Bookmark
 *   addBookmark
 *   @param arguments[1]  html tags
-------------------------------------------------------------------------------------- */
COMN.addBookmark = function(tags) {
  if(navigator.userAgent.indexOf('AppleWebKit')==-1){
    if(navigator.userAgent.indexOf('Opera')!=-1){
      document.write('<a href="' + location.href + '" rel="sidebar" title="' + document.title +'">' + tags + '</a>');
    }else{
      document.write('<a href="#" onClick="COMN.addBookmarkCore(document.title, location.href);return false;">' + tags + '</a>');
    }
  }
}

COMN.addBookmarkCore = function(title,url) {
  if (window.sidebar) {
    window.sidebar.addPanel(title, url, "");
  } else if( document.all ) {
    window.external.AddFavorite(url, title);
  } else if( window.opera && window.print ) {
    return true;
  }
}

/* --------------------------------------------------------------------------------------
 * Page Print
 *   windowPrint
 *   @param arguments[1]  html tags
-------------------------------------------------------------------------------------- */
COMN.pagePrint = function(tags){
 var isIEMac = ((navigator.userAgent.indexOf('MSIE') != -1) && (navigator.userAgent.indexOf('Mac') != -1));
 if(!isIEMac){
  document.write('<a href="javascript:print();">' + tags + '</a>');
 }
}