"use strict";
(() => {
var exports = {};
exports.id = 734;
exports.ids = [734,660];
exports.modules = {

/***/ 9733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2FpcBuilder_preferredRegion_absolutePagePath_private_next_pages_2FpcBuilder_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/pcBuilder/index.js
var pcBuilder_namespaceObject = {};
__webpack_require__.r(pcBuilder_namespaceObject);
__webpack_require__.d(pcBuilder_namespaceObject, {
  "default": () => (pcBuilder)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(5244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(2940);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
// EXTERNAL MODULE: ./src/pages/_app.js + 1 modules
var _app = __webpack_require__(799);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/components/layout/RootLayout.js + 3 modules
var RootLayout = __webpack_require__(5636);
// EXTERNAL MODULE: ./src/components/ui/CategoriData.js + 7 modules
var CategoriData = __webpack_require__(4268);
// EXTERNAL MODULE: ./src/redux/features/pcBuilder/pcBuilderSlice.js
var pcBuilderSlice = __webpack_require__(5842);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/ri"
var ri_ = __webpack_require__(8098);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/pages/pcBuilder/index.js
/* eslint-disable @next/next/no-img-element */ 








const PcBuilder = ()=>{
    const categoriItems = CategoriData/* categoriData */.A;
    const pcComponents = (0,external_react_redux_.useSelector)((state)=>state?.pcBuilder?.pc);
    console.log(pcComponents);
    const dispatch = (0,external_react_redux_.useDispatch)();
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "py-40 bg-white",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "pb-10 rounded-xl bg-white w-9/12 px-20 mx-auto border-2 border-gray-500",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("h1", {
                    className: "py-10 text-2xl font-semibold tracking-wider",
                    children: "PC Builder - Build your own PC here!"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "my-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h1", {
                            className: "text-lg tracking-wider my-4",
                            children: "Core Components"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "flex flex-col",
                            children: categoriItems?.map((item)=>/*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "border-2 p-4 border-gray-300 mb-4 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center justify-between ",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex gap-4 items-center rounded-md",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: item?.icon,
                                                                alt: "",
                                                                width: 80
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                                                className: "text-lg tracking-wider",
                                                                children: item?.name
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            className: "border-2 border-[#F4D94A] px-4 py-2 bg-[#F4D94A] text-white transition duration-300 rounded-sm hover:bg-transparent hover:text-black",
                                                            href: `/pcBuilder/choose/${item?.categor}`,
                                                            children: "Choose"
                                                        })
                                                    })
                                                ]
                                            }),
                                            pcComponents?.[item?.categor]?.name && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "py-4 flex items-center gap-10 justify-evenly",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        children: pcComponents?.[item?.categor]?.name && /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            className: "w-20",
                                                            src: pcComponents?.[item.categor]?.img,
                                                            alt: "component"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        children: pcComponents?.[item?.categor]?.name && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                                                children: pcComponents?.[item.categor]?.name
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        children: pcComponents?.[item?.categor]?.name && /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                                            onClick: ()=>dispatch((0,pcBuilderSlice/* removeFromPc */.lK)({
                                                                    category: item?.categor
                                                                })),
                                                            className: "text-xl cursor-pointer",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx(ri_.RiDeleteBin6Line, {})
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }))
                        }),
                        Object.keys(pcComponents).length === 7 && Object.values(pcComponents).every((component)=>component?.name) && /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "block mx-auto text-center mt-8",
                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                onClick: ()=>alert("Successfully built PC!"),
                                className: "text-lg tracking-wider px-5 py-2 bg-[#F4D94A] text-white border-2 border-[#F4D94A] transition duration-300 hover:bg-transparent hover:text-black rounded-md",
                                children: "Complete Build"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const pcBuilder = (PcBuilder);
PcBuilder.getLayout = function getLayout(page) {
    return /*#__PURE__*/ jsx_runtime.jsx(RootLayout/* default */.Z, {
        children: page
    });
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2FpcBuilder&preferredRegion=&absolutePagePath=private-next-pages%2FpcBuilder%2Findex.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2FpcBuilder_preferredRegion_absolutePagePath_private_next_pages_2FpcBuilder_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(pcBuilder_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(pcBuilder_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(pcBuilder_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(pcBuilder_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(pcBuilder_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(pcBuilder_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(pcBuilder_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pcBuilder_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(pcBuilder_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(pcBuilder_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pcBuilder_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/pcBuilder",
        pathname: "/pcBuilder",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: (_document_default())
    },
    userland: pcBuilder_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 8098:
/***/ ((module) => {

module.exports = require("react-icons/ri");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,815,636,61,799,396,268], () => (__webpack_exec__(9733)));
module.exports = __webpack_exports__;

})();