webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(18)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(24),
  /* scopeId */
  "data-v-7f8c7f08",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(15)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(21),
  /* scopeId */
  "data-v-03ab5d7c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(19)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(25),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(20)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(26),
  /* scopeId */
  "data-v-bc3ff12a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(17)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(23),
  /* scopeId */
  "data-v-5e349d4a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(16)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(22),
  /* scopeId */
  "data-v-2d65cfe8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_resume__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_resume___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_resume__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_about__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_about___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_about__);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: {
    resume: __WEBPACK_IMPORTED_MODULE_0__components_resume___default.a, about: __WEBPACK_IMPORTED_MODULE_1__components_about___default.a
  }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'about',
    data() {
        return {};
    },
    methods: {}
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'ads',
    data() {
        return {
            videos: [{
                title: 'Chatbooks',
                href: 'https://www.youtube.com/embed/PTTs7ewuDY8',
                role: 'Co-Writer with David Vance'
            }, {
                title: 'Unicorn Gold',
                href: 'https://www.youtube.com/embed/LqL4DRZ2EkA',
                role: 'Co-Writer with David Vance'
            }, {
                title: 'Camp Chef',
                href: 'https://www.youtube.com/embed/DJgz7CStWlY',
                role: 'Co-Composer with David Vance'
            }, {
                title: 'Temp',
                href: 'https://www.youtube.com/embed/am1tzttZ8Pc',
                role: 'Co-Composer with David Vance'
            }, {
                href: 'https://www.youtube.com/embed/6OmQ7BnvWDU',
                role: 'Co-Composer with David Vance'
            }]
        };
    },
    methods: {}
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'contact',
    data() {
        return {};
    },
    methods: {}
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'test',
    props: {
        msg: {
            type: String,
            default: "Foo"
        }
    },
    data() {
        return {
            title: 'Hello World',
            user: {
                firstName: 'Cassi',
                lastName: 'Vance'
            },
            showName: true,
            items: [{ title: 'Item One' }, { title: 'Item Two' }, { title: 'Item Tree' }]
        };
    },
    methods: {
        greet: function () {
            alert('Hello!');
        },
        pressKey: function () {
            console.log("pressed");
        },
        enterHit: function () {
            console.log("you hit enter");
        }
    },
    computed: {
        fullName: function () {
            return this.user.firstName + " " + this.user.lastName;
        }
    }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'studioC',
    data() {
        return {
            videos: [{
                href: 'https://www.youtube.com/embed/ayBmsWKqdnc',
                role: 'Writer'
            }, {
                href: 'https://www.youtube.com/embed/JXO44xIvyuY',
                role: 'Co-Composer with David Vance'
            }, {
                href: 'https://www.youtube.com/embed/DJgz7CStWlY',
                role: 'Co-Composer with David Vance'
            }, {
                href: 'https://www.youtube.com/embed/am1tzttZ8Pc',
                role: 'Co-Composer with David Vance'
            }, {
                href: 'https://www.youtube.com/embed/6OmQ7BnvWDU',
                role: 'Co-Composer with David Vance'
            }]
        };
    },
    methods: {}
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
throw new Error("Cannot find module \"vue-router\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_about__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_resume__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_resume___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_resume__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_studioC__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_studioC___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_studioC__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_contact__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_contact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_contact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ads__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ads___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_ads__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.









__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

const router = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
  mode: 'history',
  base: __dirname,
  routes: [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_3__components_about___default.a }, { path: '/resume', component: __WEBPACK_IMPORTED_MODULE_4__components_resume___default.a }, { path: '/studioC', component: __WEBPACK_IMPORTED_MODULE_5__components_studioC___default.a }, { path: '/contact', component: __WEBPACK_IMPORTED_MODULE_6__components_contact___default.a }, { path: '/ads', component: __WEBPACK_IMPORTED_MODULE_7__components_ads___default.a }]
});
/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  router,
  template: `
  <div id="app">
    <router-link to="/" id="name">
       <h1>jonny vance</h1>
    </router-link>
    <nav>
      <router-link to="/">about</router-link>
      <router-link to="/ads">ads</router-link>
      <router-link to="/studioC">studio c</router-link>    
      <router-link to="/resume">resume</router-link>  
      <router-link to="/contact">contact</router-link>
    </nav>         
      <hr />
    <router-view class="view"></router-view>
  </div>
`
}).$mount('#app');
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "/"))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "test"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.title),
      expression: "title"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.title = $event.target.value
      }
    }
  }), _c('br'), _vm._v(" "), _c('h1', [_vm._v(" " + _vm._s(_vm.title) + " ")]), _vm._v(" "), (_vm.showName) ? _c('p', [_vm._v(_vm._s(_vm.user.firstName))]) : _c('p', [_vm._v("Nobody")]), _vm._v(" "), _c('ul', _vm._l((_vm.items), function(item) {
    return _c('li', [_vm._v(" " + _vm._s(item.title) + " ")])
  })), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.greet
    }
  }, [_vm._v("Say Greeting")]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "text"
    },
    on: {
      "keyup": [_vm.pressKey, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.enterHit($event)
      }]
    }
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _c('label', [_vm._v("First Name: ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.firstName),
      expression: "user.firstName"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.user.firstName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.user.firstName = $event.target.value
      }
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('label', [_vm._v("Last Name: ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.lastName),
      expression: "user.lastName"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.user.lastName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.user.lastName = $event.target.value
      }
    }
  }), _vm._v(" "), _c('h3', [_vm._v(_vm._s(_vm.fullName))]), _vm._v(" "), _c('h2', [_vm._v(_vm._s(_vm.msg))])])
},staticRenderFns: []}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "studioC"
  }, [_c('h1', [_vm._v("Studio C")]), _vm._v(" "), _vm._l((_vm.videos), function(video) {
    return _c('div', [_c('iframe', {
      attrs: {
        "width": "560",
        "height": "315",
        "src": video.href,
        "frameborder": "0",
        "allowfullscreen": ""
      }
    }), _vm._v(" "), _c('h3', [_vm._v(_vm._s(video.role))])], 1)
  })], 2)
},staticRenderFns: []}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "contact"
  }, [_c('h1', [_vm._v("Contact")])])
}]}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "about"
  }, [_c('h1', [_vm._v("About")])])
}]}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('about')], 1)
},staticRenderFns: []}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ads"
  }, [_c('h1', [_vm._v("Advertisements")]), _vm._v(" "), _vm._l((_vm.videos), function(video) {
    return _c('div', {
      attrs: {
        "id": "videos"
      }
    }, [_c('h3', [_vm._v(_vm._s(video.title))]), _vm._v(" "), _c('div', {
      staticClass: "embed-container"
    }, [_c('iframe', {
      attrs: {
        "src": video.href,
        "frameborder": "0",
        "webkitAllowFullScreen": "",
        "mozallowfullscreen": "",
        "allowFullScreen": ""
      }
    })], 1), _vm._v(" "), _c('h4', [_vm._v(_vm._s(video.role))])])
  })], 2)
},staticRenderFns: []}

/***/ })
],[14]);
//# sourceMappingURL=app.fa206c343202a93f1049.js.map