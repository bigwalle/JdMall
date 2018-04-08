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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
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

/***/ 11:
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

/***/ 45:
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
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ 9:
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

/***/ })

/******/ });