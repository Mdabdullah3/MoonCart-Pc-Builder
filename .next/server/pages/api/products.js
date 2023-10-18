"use strict";
(() => {
var exports = {};
exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fproducts_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fproducts_2Findex_js_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./src/pages/api/products/index.js
var products_namespaceObject = {};
__webpack_require__.r(products_namespaceObject);
__webpack_require__.d(products_namespaceObject, {
  "default": () => (products)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
// EXTERNAL MODULE: ./src/lib/mongodb.js
var mongodb = __webpack_require__(4667);
;// CONCATENATED MODULE: ./src/pages/api/products/index.js

async function main(req, res) {
    try {
        const client = await mongodb/* default */.Z;
        const productCollection = client.db("Builder").collection("Product");
        if (req.method === "GET") {
            const product = await productCollection.find({}).toArray();
            res.status(200).json({
                message: "Products fetched successfully!",
                data: product
            });
        }
    } catch (error) {
        console.log(error);
        throw new Error(error).message;
    }
}
/* harmony default export */ const products = (main);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fproducts&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fproducts%2Findex.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fproducts_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fproducts_2Findex_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(products_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(products_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/products",
        pathname: "/api/products",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: products_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ }),

/***/ 4667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const { MongoClient, ServerApiVersion } = __webpack_require__(8013);
const uri = "mongodb+srv://mdabdullah:jqKxW8AC8tYBbwYB@cluster0.2oufhoy.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});
const clientPromise = client.connect();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(3028)));
module.exports = __webpack_exports__;

})();