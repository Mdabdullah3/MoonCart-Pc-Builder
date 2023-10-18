exports.id = 799;
exports.ids = [799];
exports.modules = {

/***/ 799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./src/redux/features/pcBuilder/pcBuilderSlice.js
var pcBuilderSlice = __webpack_require__(5842);
;// CONCATENATED MODULE: ./src/redux/store.js


const store = (0,toolkit_.configureStore)({
    reducer: {
        pcBuilder: pcBuilderSlice/* default */.ZP
    }
});

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/pages/_app.js





function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page)=>page);
    return /*#__PURE__*/ jsx_runtime.jsx(react_.SessionProvider, {
        session: pageProps.session,
        children: /*#__PURE__*/ jsx_runtime.jsx(external_react_redux_.Provider, {
            store: store,
            children: getLayout(/*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            }))
        })
    });
}


/***/ }),

/***/ 5842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   a1: () => (/* binding */ addToPc),
/* harmony export */   lK: () => (/* binding */ removeFromPc)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
    pc: {
        processor: {},
        RAM: {},
        monitor: {},
        other: {},
        psu: {},
        Storage: {},
        motherboard: {}
    }
};
const PcBuilderSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "PcBuilder",
    initialState,
    reducers: {
        addToPc: (state, action)=>{
            const { category, product } = action.payload;
            state.pc[category] = product;
        },
        removeFromPc: (state, action)=>{
            const { category, product } = action.payload;
            state.pc[category] = {};
        }
    }
});
const { addToPc, removeFromPc } = PcBuilderSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PcBuilderSlice.reducer);


/***/ }),

/***/ 108:
/***/ (() => {



/***/ })

};
;