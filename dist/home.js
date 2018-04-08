// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  "slider": {
    "height": "332"
  },
  "frame": {
    "justifyContent": "center",
    "height": "332"
  },
  "indicator": {
    "bottom": "25",
    "height": "40",
    "width": "750",
    "justifyContent": "center",
    "alignItems": "center",
    "itemColor": "#cccccc",
    "itemSelectedColor": "#ffffff",
    "itemSize": "10"
  },
  "image": {
    "width": "750",
    "height": "332"
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//

exports.default = {
    props: ["imageList"],
    data: function data() {
        return {};
    },

    methods: {
        onchange: function onchange(event) {}
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('slider', {
    staticClass: ["slider"],
    attrs: {
      "interval": "3000",
      "autoPlay": "true"
    },
    on: {
      "change": _vm.onchange
    }
  }, [_vm._l((_vm.imageList), function(img) {
    return _c('div', {
      staticClass: ["frame"]
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "resize": "cover",
        "src": img.src
      }
    })])
  }), _c('indicator', {
    staticClass: ["indicator"]
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  "ads1": {
    "width": "750",
    "height": "300"
  },
  "ads1Image": {
    "width": "750",
    "height": "300"
  },
  "image": {
    "width": "100",
    "height": "100"
  },
  "text": {
    "fontSize": "20"
  },
  "wapper": {
    "top": "-10",
    "height": "600",
    "width": "750",
    "justifyContent": "center",
    "borderRadius": "20",
    "backgroundColor": "#ffffff"
  },
  "hor": {
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "flexDirection": "row",
    "width": "750",
    "height": "140",
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "ver": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center",
    "marginLeft": "10"
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
   props: ["horImages1", "horImages2", "ads1"],
   data: function data() {
      return {};
   }
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wapper"]
  }, [_c('div', {
    staticClass: ["hor"]
  }, _vm._l((_vm.horImages1), function(img) {
    return _c('div', {
      staticClass: ["ver"]
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "src": img.src
      }
    }), _c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(img.text))])])
  })), _c('div', {
    staticClass: ["hor"]
  }, _vm._l((_vm.horImages2), function(img) {
    return _c('div', {
      staticClass: ["ver"]
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "src": img.src
      }
    }), _c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(img.text))])])
  })), _c('div', {
    staticClass: ["ads1"]
  }, [_c('image', {
    staticClass: ["ads1Image"],
    attrs: {
      "src": _vm.ads1
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  "text1": {
    "marginTop": "10",
    "marginLeft": "10"
  },
  "text2": {
    "marginLeft": "10",
    "color": "#FF0000",
    "fontSize": "27"
  },
  "div1": {
    "flexDirection": "row",
    "height": "100"
  },
  "div2": {
    "flex": 1,
    "height": "100",
    "alignItems": "center"
  },
  "div3": {
    "flex": 1,
    "height": "250",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "hroiamge1": {
    "height": "68.64"
  },
  "image": {
    "width": "110",
    "height": "100",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "hor": {
    "flexDirection": "row",
    "height": "200",
    "backgroundColor": "#FFFFFF"
  },
  "hor3": {
    "flexDirection": "row",
    "height": "250",
    "backgroundColor": "#FFFFFF"
  },
  "ver": {
    "marginLeft": "5",
    "flex": 1,
    "height": "200"
  },
  "ver3": {
    "marginLeft": "5",
    "flex": 1,
    "height": "250"
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: "IndexBlcok2",
    data: function data() {
        return {
            img1: "https://m.360buyimg.com/n1/s220x220_jfs/t16933/127/1288939545/17090/1da36d9f/5ac338a2N20592ec7.jpg!q70.jpg",
            img2: "https://m.360buyimg.com/mobilecms/s220x220_jfs/t16456/344/2645349223/29673/6cc294d1/5ab363a5N4872ecc5.jpg!q70.jpg",
            img3: "https://m.360buyimg.com/mobilecms/s240x240_jfs/t16666/69/1162943642/19615/b3efe6e6/5abe2146Na83ad354.jpg!q70.jpg",
            img4: "https://m.360buyimg.com/mobilecms/s240x240_jfs/t19348/84/1154586915/27203/f0bd788f/5abe214eNf9b79da5.jpg!q70.jpg",
            img5: "https://m.360buyimg.com/mobilecms/s240x240_jfs/t18952/107/838294221/82113/df0a4e03/5aa8f20dN7404a287.jpg!q70.jpg",
            img6: "https://m.360buyimg.com/n1/jfs/t15100/204/2594596516/52960/9f510bfe/5aa8f21fN57406abd.jpg!q70.jpg",
            img7: "https://m.360buyimg.com/mobilecms/s240x240_jfs/t15244/283/356547262/47743/b6607b0f/5a2a6d51N8830e8b8.jpg!q70.jpg",
            img8: "https://m.360buyimg.com/mobilecms/s240x240_jfs/t16057/38/102057973/36179/b957e4ec/5a2a6d55N83655f7f.jpg!q70.jpg",
            img9: "https://m.360buyimg.com/n1/s142x142_jfs/t17929/299/899794385/17291/d90318f9/5ab4c680N7d291625.jpg!q70.jpg",
            img10: "https://m.360buyimg.com/mobilecms/s142x142_jfs/t14404/182/2233072937/23500/a8a4358a/5a7ae00aN39255413.jpg!q70.jpg",
            img11: "https://m.360buyimg.com/mobilecms/s142x142_jfs/t19138/246/988178224/70816/def3410/5ab5c34eNaca75b87.jpg!q70.jpg",
            img12: "https://m.360buyimg.com/mobilecms/s142x142_jfs/t17224/292/1408295814/59105/f2f956f8/5ac97e98N3aaa8af8.jpg!q70.jpg"
        };
    }
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wapper"]
  }, [_c('image', {
    staticClass: ["hroiamge1"],
    attrs: {
      "src": "https://m.360buyimg.com/mobilecms/jfs/t15526/56/2344102455/23273/d8e15d5a/5aa0dbc1Nefd2bd2a.png!q70.jpg"
    }
  }), _c('div', {
    staticClass: ["hor"]
  }, [_c('div', {
    staticClass: ["ver"]
  }, [_c('text', {
    staticClass: ["text1"]
  }, [_vm._v("玩3C")]), _c('text', {
    staticClass: ["text2"]
  }, [_vm._v("周末放假大牌直降千元")]), _c('div', {
    staticClass: ["div1"]
  }, [_c('div', {
    staticClass: ["div2"]
  }, [_c('image', {
    staticClass: ["image"],
    attrs: {
      "src": _vm.img1
    }
  })]), _c('div', {
    staticClass: ["div2"]
  }, [_c('image', {
    staticClass: ["image"],
    attrs: {
      "src": _vm.img2
    }
  })])])]), _c('text', {
    staticStyle: {
      backgroundColor: "#cccccc",
      width: "1px",
      height: "200px"
    }
  }), _c('div', {
    staticClass: ["ver"]
  }, [_c('text', {
    staticClass: ["text1"]
  }, [_vm._v("京东家电")]), _c('text', {
    staticClass: ["text2"]
  }, [_vm._v("每满1000减100")]), _c('div', {
    staticClass: ["div1"]
  }, [_c('div', {
    staticClass: ["div2"]
  }, [_c('image', {
    staticClass: ["image"],
    attrs: {
      "src": _vm.img3
    }
  })]), _c('div', {
    staticClass: ["div2"]
  }, [_c('image', {
    staticClass: ["image"],
    attrs: {
      "src": _vm.img4
    }
  })])])])]), _c('text', {
    staticStyle: {
      backgroundColor: "#cccccc",
      height: "1px"
    }
  }), _c('div', {
    staticClass: ["hor"]
  }, [_c('div', {
    staticClass: ["ver"]
  }, [_c('text', {
    staticClass: ["text1"]
  }, [_vm._v("京东超市")]), _c('text', {
    staticClass: ["text2"]
  }, [_vm._v("好货部分满99-50")]), _c('div', {
    staticClass: ["div1"]
  }, [_c('div', {
    staticClass: ["div2"]
  }, [_c('image', {
    staticClass: ["image"],
    attrs: {
      "src": _vm.img5
    }
  })]), _c('div', {
    staticClass: ["div2"]
  }, [_c('image', {
    staticClass: ["image"],
    attrs: {
      "src": _vm.img6
    }
  })])])]), _c('text', {
    staticStyle: {
      backgroundColor: "#cccccc",
      width: "1px",
      height: "200px"
    }
  }), _c('div', {
    staticClass: ["ver"]
  }, [_c('text', {
    staticClass: ["text1"]
  }, [_vm._v("爱家")]), _c('text', {
    staticClass: ["text2"]
  }, [_vm._v("家纺热卖  部分低至9.9元")]), _c('div', {
    staticClass: ["div1"]
  }, [_c('div', {
    staticClass: ["div2"]
  }, [_c('image', {
    staticClass: ["image"],
    attrs: {
      "src": _vm.img7
    }
  })]), _c('div', {
    staticClass: ["div2"]
  }, [_c('image', {
    staticClass: ["image"],
    attrs: {
      "src": _vm.img8
    }
  })])])])]), _c('text', {
    staticStyle: {
      backgroundColor: "#cccccc",
      height: "1px"
    }
  }), _c('div', {
    staticClass: ["hor3"]
  }, [_c('div', {
    staticClass: ["ver3"]
  }, [_c('div', {
    staticClass: ["div1"]
  }, [_c('div', {
    staticClass: ["div3"]
  }, [_c('text', {
    staticClass: ["text1"]
  }, [_vm._v("爱宝宝")]), _c('text', {
    staticClass: ["text2"]
  }, [_vm._v("爆款低至5折")]), _c('image', {
    staticClass: ["image"],
    attrs: {
      "src": _vm.img9
    }
  })]), _c('text', {
    staticStyle: {
      backgroundColor: "#cccccc",
      width: "1px",
      height: "250px"
    }
  }), _c('div', {
    staticClass: ["div3"]
  }, [_c('text', {
    staticClass: ["text1"]
  }, [_vm._v("爱美丽")]), _c('text', {
    staticClass: ["text2"]
  }, [_vm._v("满199减100")]), _c('image', {
    staticClass: ["image"],
    attrs: {
      "src": _vm.img10
    }
  })])])]), _c('text', {
    staticStyle: {
      backgroundColor: "#cccccc",
      width: "1px",
      height: "250px"
    }
  }), _c('div', {
    staticClass: ["ver3"]
  }, [_c('div', {
    staticClass: ["div1"]
  }, [_c('div', {
    staticClass: ["div3"]
  }, [_c('text', {
    staticClass: ["text1"]
  }, [_vm._v("爱吃")]), _c('text', {
    staticClass: ["text2"]
  }, [_vm._v("踏青寻好味")]), _c('image', {
    staticClass: ["image"],
    attrs: {
      "src": _vm.img11
    }
  })]), _c('text', {
    staticStyle: {
      backgroundColor: "#cccccc",
      width: "1px",
      height: "250px"
    }
  }), _c('div', {
    staticClass: ["div3"]
  }, [_c('text', {
    staticClass: ["text1"]
  }, [_vm._v("爱穿搭")]), _c('text', {
    staticClass: ["text2"]
  }, [_vm._v("穿搭风向标")]), _c('image', {
    staticClass: ["image"],
    attrs: {
      "src": _vm.img12
    }
  })])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

module.exports = {
  "scroller": {
    "flex": 1,
    "flexDirection": "column"
  },
  "scrolldiv": {
    "flexDirection": "column"
  },
  "newstext": {
    "fontSize": "29"
  },
  "newsblock": {
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "row",
    "height": "60",
    "borderRadius": "10",
    "backgroundColor": "#FFFFFF"
  },
  "newsmore": {
    "width": "100",
    "height": "60",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "imgeNews": {
    "marginLeft": "5",
    "flex": 2,
    "width": "100",
    "height": "40"
  },
  "wrapper": {
    "backgroundColor": "#dddddd"
  },
  "searchImg": {
    "width": "30",
    "height": "30",
    "marginLeft": "10"
  },
  "line": {
    "marginLeft": "10",
    "color": "#dddddd"
  },
  "login": {
    "color": "#ffffff",
    "fontSize": "28",
    "marginLeft": "15"
  },
  "search-input-div": {
    "flexDirection": "row",
    "height": "70",
    "backgroundColor": "#FFFFFF",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "30"
  },
  "jdimage": {
    "width": "40",
    "height": "40",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "marginLeft": "20"
  },
  "input-search": {
    "height": "70",
    "borderRadius": "30",
    "width": "500",
    "marginLeft": "10",
    "marginRight": "10",
    "paddingLeft": "10"
  },
  "search": {
    "alignItems": "center",
    "justifyContent": "center",
    "height": "100",
    "width": "750",
    "flexDirection": "row",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "top": "0",
    "position": "absolute"
  }
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _CyjSlider = __webpack_require__(24);

var _CyjSlider2 = _interopRequireDefault(_CyjSlider);

var _IndexBlock = __webpack_require__(25);

var _IndexBlock2 = _interopRequireDefault(_IndexBlock);

var _IndexBlock3 = __webpack_require__(26);

var _IndexBlock4 = _interopRequireDefault(_IndexBlock3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    // name: 'App',
    components: {
        CyjSlider: _CyjSlider2.default,
        IndexBlock1: _IndexBlock2.default,
        IndexBlock2: _IndexBlock4.default
    },
    data: function data() {
        return {
            imgeNews: "https://m.jd.com//images/index/jd-news-tit.png",
            ads1Images: "https://m.360buyimg.com/mobilecms/s1280x394_jfs/t15394/261/2608430081/102825/134b22bf/5aa903f1Nb5500948.png!q70.jpg",
            horImagesXX1: [{ "src": "https://m.360buyimg.com/mobilecms/jfs/t5668/159/160398199/14046/acfe1fa3/591d9424N068a7ad0.png", "text": "京东超市" }, { "src": "https://m.360buyimg.com/mobilecms/jfs/t11425/73/2288282326/13451/e11c7697/5a14d167Ne5414496.png", "text": "京东超市" }, { "src": "https://m.360buyimg.com/mobilecms/jfs/t5656/351/153181074/12227/e35aa8d/591d9456Naa85e195.png", "text": "京东超市" }, { "src": "https://m.360buyimg.com/mobilecms/jfs/t5707/83/1407890143/14681/29321e2c/59263c71Nc7d16503.png", "text": "京东超市" }, { "src": "https://m.360buyimg.com/mobilecms/jfs/t9511/185/243002105/6399/cfe6874b/59ca07dcN9b1c275e.png", "text": "京东超市" }],
            horImagesXX2: [{ "src": "https://m.360buyimg.com/mobilecms/jfs/t5647/156/156583179/12255/981e942a/591d94a1Nfde63a47.png", "text": "京东超市" }, { "src": "https://m.360buyimg.com/mobilecms/jfs/t16915/82/1076788629/11955/4c646d09/5ab89057Nd51d35bc.png", "text": "京东超市" }, { "src": "https://m.360buyimg.com/mobilecms/jfs/t18616/5/1232465332/17104/54aa9e7a/5ac1ca60N707fa069.png", "text": "京东超市" }, { "src": "https://m.360buyimg.com/mobilecms/jfs/t5824/248/156712927/7215/1ad6be5f/591d94c6Nc4711ad2.png", "text": "京东超市" }, { "src": "https://m.360buyimg.com/mobilecms/jfs/t5842/205/151189300/13247/a6de2d/591d94edNc42fb94d.png", "text": "京东超市" }],
            searchImg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAFN++nkAAAAAXNSR0IArs4c6QAACbJJREFUaAXtmg1sVtUZgGlp+Yk1Zf5NVNSRRTQxQZhiYBJRZ9Aax2ICUYkt0ELjxuJGosnU6BKjEknUsGXKv+3sNmH+B9T4U4kG1CFmssSljYFFrHOiEIW0o6X1eW/ve3zv/c79eu/3fa2fiSe533vOe97/856/e79Ro9KWNWvWDCitrQe4HARYH04FFAB94nJwFiF1207UmYooxx249gYiqVycJLuSjrd8naJTOosoiNixbt26ZSJi7dq1L9I+aUhxFXGK0PocI5ubm3NoHa9Yj+q7HcJTERqeHZEuQUYQeRrimwrIHKqlS5euRfZMkZ+ZWaIJ313C7Aqm7B3KfOnnccPgjSAEEpTAtFD6XUT7HtUkQvJGXwnzwRzNItXDsAVNC+J4x7x+/frzjx07tqeioqJu2bJlL1hCBL5Le7rX1Pb29qoEjVZGzqQKhqqjo6PXKzXCyrhWVs63SjKNMwnydyuvEkl/A7HUItPWRfMV1dXVz6ZlsHTC/ARRvsUi09YrCdTy/v7+O9IyWDoXsJaWlhNth6/OpOgELxMjWmQIZLyj2G9aMD5oh0l6XIZJQzvtmLe2tp7S3d39qfRT+uWH/tECI8yC2Lhx48m9vb3/k3pY+iCu1gYKjkldBSg+NVQBOZrzSYCpif6f8cziGc8k6hgYGHhvzJgxdy5evPhQPt54X6JiCXxnZ2cPgoPYhIx7gKtRuKuqqurjvr6+C+m/BNztVjDz5zamwSqLi9dzFOuSEBLuJKbiXeoiqdbT03NAGDDwU5aVU33MEcWkUF/oYWaFceESMVlhBD9u3LgzGhoaPrY0TrGmpW/xswxZ6yqX9eKUJUuWfKb8wWwMk0Zwe+IrrhIWChmqwLnYVHH7Y7Df4W19oQqy8gUeo/CjkHFiVgGF0geKif81IoDE2laooCQ+Wb7Cvj5LEygOJ/8W6WC8ZRctWdE1k7F2y58Id1ktDU5Wt7JnPCB1TQqpF1JkdSeCvxVen6yIYlUA039h+qG0ZRePb8ZK54PwdsL7Y9PXj2K7+gVdXsXKxCp0OqvQfm2ngSTqS0zJq5SWoZNdRYY0YkBexcpcCphkQClkfzdkpA41oZrI+K3ArVkkz0+A+3g6SL7HSL6nqGcqQyomS9tRNCeF1H726OmNjY3/TEEbnceWAQ8fov0bi6O+Eg/fGDt27C4W/YnMeTkILOe5wND1kdVjiI7vfuDIvB6j9EMoJgsVAt5H0FTHkVDhAHEFp91XtBu+GfD9Q9txmKOY0H6JB8cLId6dyvjpMTHO623D/zr8l4b8k+Hf6yOMKMbT1yC6TAh9y5xPgA9nl95JkyaNq6ur+3+cLtgkBLlhw4YpgECpEMcJs7TxchX07cKzf//+z328TjEnxn+HBIt8FvqY8+GI2OXST9iPIwKz47SBYjrO0w4YWrReLCTB5ogMsl+GMFICxXRsCrGyQJSskNXbQ2FVcaEa6uDNEd7K3C1pwevgnQ5RnWcFq2KLK2kdxatFIFEdWcUkV3CUwoC51qNh95hbRHCDwICvRlTx0aNHZSeT8sUgGPwddo/xVG6TUrYOgsHfQDHxl3ORHG3PtJ2lqJNU94ic8ePHP2zlqeKVgsSAx21nieqBjvr6+iNWXoBkbb1TkIRlNk+FJSimzk71pvDj0Ia4nEBx2PmcQIj3CSy2MGy1OPFTkcMK1hSX5xTTqRP8TJQ/GicsoB28E2FPX+LjjYS1ra3tB4cPH9a0f4Ql9Jc+pny4zZs3jz548KBe0A4g42QfvfNYOhcuXHgQoPPuZsLlPT34BAlO1mOjVFAngfPeuSMeC6UU+wJlEDPqVeBNWP9J2I4AhDcybdYrkmR6mucZcC2CI9wNJHCr9gv0KlYCxvovJMgN2k4DUeLOWeJtkvK8ilURAn6FgD9q2wN3c7m/yr5cUZok5akUq5BCoVWOjAUM2ZZIchUqeCg+GV8ZZ6Fj7OUg+H0ZsQiULLfIn/OYeb/gmccwzgBmkg2P7MzvAl8GtpEWHwxHFDIZZQ2QCw93j/vAXWfxpazj/ADynmc+/L6pqem9UsjO5HC4gMvrv8sSlO8EvwUDn2GEMu0uXK7PYmn8OfzzyY7ZCfKfr6mpaQh3sgSS/OhUDrNRzMUI+cxWY8UxAl3gb+cA8Wfq/bav2LpMCYJwPUGQs2D8AHoY3KUsu7uz6snrcDii7yB0ckxwC/f25lJcoWNyvU3OItUE9A8EodkSgOvgHdAsPnV47/2WVuuJDqPkIYjiL5paiOoiZf42IHb9Cb03W904Lll2v8Ul1b0OI/RJGNxihMAununMy0zvnJKUFosPM28Xcs5WWdj3V5y+UdtJMMdh5ms7qTNHGRD0Po5OA5Z0jqr8YiC2vo2tM1QGNr6A03Xa9sHIUQsBv7POwrATAVPL0VlxBtvkXZEc9YOC7VfLQVjbPugcJo3l29q9lojtZaFtl2n9JgZE9uugyKkfX+Kruna7L5lyyF1BhGyKr8y6lzqpI1iRSxx23x1TeX2s7ZpuhMFEPsMzum84qjKvxG1l8PTFQo7lzmGipHfwgEi+ceRQlymitrY2Yiu+nJFkqnMYgn2WSD7o2HY5148cORKxlRHWNzc5ZluHO2wvk/9C2y7nOoMTyU5G+KMke53DzIPHLBFMy227zOtxW+WU6C3OYVbkp0gFOTcHBYcvYF/+tbbLFbLvNmJr8Io0tHE3K3d7kr3OYSHA4UUAd6JC0Gr5Jip95Vi4k89k6tn3hz3ydi2frRGHGeUP5BM3jruNXD4AE8VM7xDzKSxVHzbN4wVE5E/LTMuLfK8SrU570HB4RnUajkp6VymSIGxnxK8kXXoV921Aefd96NChrdgyV/Vj21c8U9MclLwOiyAEVjCH5Z+w16pggURxyD8bWvpS1uWcLEdHKxNHn+ZM7W52ts9XT3RYiXH6Ipx/jXaN4kLYzhfC+Vku3zH+VE3OxbU49YQdUcPYzwAsZmRbDS5vdUiHlZvo/gilL/KcoziFGCTpfxuR3q64YqAsRkypVeiyq6+KPEDlBB67/qR2PLXDqm3btm1j+SvFCtp3YNBxireQAMii9zbPVuofQtdF/ZMJEyZ08Qe0AZw5jUf+mnMa/ZPpr+OZCY11guZggUbm6C2M5CbFMQD18Evb8gzpeGaHVaFCFMv3TrlHXwnOLXLaXwjEuR742kjXh3k9+698MrI6XrTDPmPkPoqx0wjCuTxTcGAKdGdTly+L3bS7qXdTl/SUTNjB5+t34l+SwacuaR0fFodTWzkMhD7HCXAX68vpos7m/zCoH3mRsmJzVhiN5gXiKM9/qDeMvCVlovFrqkgnJp++gdIAAAAASUVORK5CYII=",
            jdImge: "data:image/png;base64,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",
            imageArray: [{ "src": "https://m.360buyimg.com/mobilecms/s828x404_jfs/t19393/319/1129005431/326071/607f320/5abdf63fN6748b889.jpg!cr_1125x549_0_72!q70.jpg" }, { "src": "https://img1.360buyimg.com/da/s828x404_jfs/t16693/253/781113151/390126/5f761100/5aa791e4N4966c8b9.jpg!cr_1125x549_0_72" }, { "src": "https://img1.360buyimg.com/da/jfs/t7126/320/659870532/48955/e21e8d63/5982f42bN12204337.jpg!cr_1125x549_0_72" }, { "src": "https://img1.360buyimg.com/da/s1280x626_jfs/t14266/215/2572780778/369879/ce9cbf8e/5aa74a7aNb682fd61.jpg!cr_1125x549_0_72" }, { "src": "https://m.360buyimg.com/mobilecms/s1280x626_jfs/t19300/101/1111020813/179354/f5211c63/5abc4936N13d5df29.jpg!cr_1125x549_0_72!q70.jpg" }]
        };
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(5)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\WeexProject\\JdMall\\src\\components\\CyjSlider.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-31b83cd9"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(8)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\WeexProject\\JdMall\\src\\components\\IndexBlock1.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-846c254c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(9)
)

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(11)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\WeexProject\\JdMall\\src\\components\\IndexBlock2.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-844ff64a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["scroller"]
  }, [_c('scroller', {
    staticClass: ["scroller"],
    attrs: {
      "scrollDirection": "vertical"
    }
  }, [_c('div', {
    staticClass: ["scrolldiv"]
  }, [_c('div', [_c('CyjSlider', {
    attrs: {
      "imageList": _vm.imageArray
    }
  }), _c('div', {
    staticClass: ["search"]
  }, [_c('div', {
    staticClass: ["search-input-div"]
  }, [_c('image', {
    staticClass: ["jdimage"],
    attrs: {
      "src": _vm.jdImge
    }
  }), _c('text', {
    staticClass: ["line"]
  }, [_vm._v("|")]), _c('image', {
    staticClass: ["searchImg"],
    attrs: {
      "src": _vm.searchImg
    }
  }), _c('input', {
    staticClass: ["input-search"],
    attrs: {
      "type": "text",
      "placeholder": "海尔超级品牌日,每满1000减100！"
    }
  })]), _c('text', {
    staticClass: ["login"]
  }, [_vm._v("登录")])])], 1), _c('IndexBlock1', {
    attrs: {
      "horImages1": _vm.horImagesXX1,
      "horImages2": _vm.horImagesXX2,
      "ads1": _vm.ads1Images
    }
  }), _c('div', {
    staticClass: ["newsblock"]
  }, [_c('image', {
    staticClass: ["imgeNews"],
    attrs: {
      "src": _vm.imgeNews
    }
  }), _vm._m(0), _c('text', {
    staticClass: ["line"]
  }, [_vm._v("|")]), _vm._m(1)]), _c('IndexBlock2')], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticClass: ["newstext"]
  }, [_vm._v("热门:网吧的low配置为什么那么快？")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["newsmore"]
  }, [_c('text', [_vm._v("更多")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(22)
)

/* script */
__vue_exports__ = __webpack_require__(23)

/* template */
var __vue_template__ = __webpack_require__(27)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\WeexProject\\JdMall\\src\\home.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-00cd1669"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ })
/******/ ]);