"use strict";
(() => {
var exports = {};
exports.id = 694;
exports.ids = [694,660];
exports.modules = {

/***/ 9443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ next_route_loaderkind_PAGES_page_2Fcategory_2F_5Bcategory_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategory_2F_5Bcategory_5D_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fcategory_2F_5Bcategory_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategory_2F_5Bcategory_5D_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderkind_PAGES_page_2Fcategory_2F_5Bcategory_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategory_2F_5Bcategory_5D_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2Fcategory_2F_5Bcategory_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategory_2F_5Bcategory_5D_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/category/[category]/index.js
var _category_namespaceObject = {};
__webpack_require__.r(_category_namespaceObject);
__webpack_require__.d(_category_namespaceObject, {
  "default": () => (_category_),
  getStaticPaths: () => (getStaticPaths),
  getStaticProps: () => (getStaticProps)
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
// EXTERNAL MODULE: ./src/components/ui/ProductCard.js
var ProductCard = __webpack_require__(2396);
;// CONCATENATED MODULE: ./src/components/ui/ProductsData.js
const productData = [
    {
        "id": 1,
        "img": "https://www.startech.com.bd/image/cache/catalog/monitor/dell/d1918h/d1918h-01-500x500.jpg",
        "categori": "monitor",
        "name": "Dell D1918H LED Monitor",
        "stock": true,
        "description": "Dell D1918H Screen Size 18.5 inch (47 cm) HD Ready (1366 X 768) TN Panel.It has Feature of Connectivity 1 VGA Port, 1 HDMI Port,Aspect Ratio 16:9, Brightness (Typical): 200 cd/m\xc2\xb2.Refresh Rate: 60 Hz, Response Time 5 ms. Viewing Angle 90 degree horizontal 65 degree vertical.Flicker Free Technology.",
        "rating": 4,
        "price": 120
    },
    {
        "id": 2,
        "img": "https://www.startech.com.bd/image/cache/catalog/processor/intel/core-i3-10105/core-i3-10105-001-500x500.jpg",
        "categori": "processor",
        "name": "Intel Core i3 10105 10th Gen",
        "stock": true,
        "description": "The Intel Core i3 10105 10th Gen Processor comes with 3.70 GHz up to 4.40 GHz clock speed, 4 cores and 8 threads. This new 10th gen Comet Lake microarchitecture is manufactured with the 14nm process that comes with four cores but lacks in HyperThreading. As this chip is updated to the latest BIOS revision, it nicely fits into any Intel 400 and 500 series motherboard.",
        "rating": 4,
        "price": 150
    },
    {
        "id": 3,
        "img": "https://www.startech.com.bd/image/cache/catalog/motherboard/asrock/h81m-vg4-r4-0/h81m-vg4-r4-0-01-500x500.jpg",
        "categori": "motherboard",
        "name": "Micro ATX Motherboard",
        "stock": true,
        "description": "The ASRock H81M-VG4 R4.0 4th Gen Micro ATX Motherboard supports Intel 4th Generation Intel Core Processors (Socket 1150) and Dual Channel DDR3 1600. The Motherboard comes with 1 PCIe 2.0 x16, 1 PCIe 2.0 x1. It features a D-Sub port for graphic output. It is built with a High-Density Glass Fabric PCB design that reduces the gaps between the PCB layers to protect the motherboard against electrical shorts caused by humidity. This ASRock motherboard uses a Realtek gigabit LAN chip to support extremely fast internet connections. The ASRock H81M-VG4 R4.0 features a solid capacitor design. The motherboard offers full spike protection. It includes various technologies to prevent your motherboard’s components from being damaged by these unexpected voltage spikes. It also comes with ASRock Live Update & APP Shop. The ASRock H81M-VG4 R4.0 comes with 3 years of warranty.",
        "rating": 5,
        "price": 100
    },
    {
        "id": 4,
        "img": "https://www.startech.com.bd/image/cache/catalog/graphics-card/colorful/geforce-gt710-2gd3/geforce-gt710-2gd3-1-500x500.jpg",
        "categori": "Graphics Card",
        "name": "Colorful GeForce GT710",
        "stock": false,
        "description": "Large fan, strong heat dissipation effeact. It has less calorific value but stronger and more stable performance. Strong processing chip can run multi-task, like design, working, web and movies and so on. Compared with integrated graphics, this video card can give you 10 times video edition speed, 9 times picture edition speed and 5 times web browsing speed, getting you enjoy your picture and video on high resolution settings. What's more, single card also has strong horse-power that can drive 3 high definition display. Can provide relative to the traditional analog technology more high-definition picture quality. HDMI HD mainly in its supports 1280 x 720p, 1920 x 1080i, 1920 x 1080P three modes. HDTV video signal using MPEG2 compression.",
        "rating": 5,
        "price": 70
    },
    {
        "id": 5,
        "img": "https://www.startech.com.bd/image/cache/catalog/monitor/lenovo/v20-10/V20-10-03-500x500.webp",
        "categori": "monitor",
        "name": "Lenovo V20-10 Led Monitor",
        "stock": true,
        "description": "The Lenovo V20-10 LCD Monitor has a black glossy outlook and offers a TN display with a resolution of 1600 x 900 and 72% NTSC color gamut. The monitor has built-in power and a VGA cable connection port that provides advantage to join with another device. V20-10 model is low blue light certificated, which ensures your best health for using the device.",
        "rating": 4,
        "price": 120
    },
    {
        "id": 6,
        "img": "https://www.startech.com.bd/image/cache/catalog/casing/revenger/ghost/ghost-01-500x500.webp",
        "categori": "case",
        "name": "RGB ATX Gaming Case",
        "stock": true,
        "description": "The Revenger GHOST Mid Tower RGB ATX Gaming Case is supported with M-ATX / ATX motherboards. It offers 6 expansion slots. The casing is made of Metal and it has a Tempered Glass Side Panel. It has 2x 120mm RGB Fan Pre-Installed on the front side. The Revenger GHOST Mid Tower RGB Gaming Case looks very stunning and it offers optimal cooling to keep your components cool and dissipate the heat. The case supports 3x 120mm fans on the Front, 2x120mm on the Top, and 1x 120mm fan on the Rear. The Revenger GHOST RGB Gaming Case comes with no warranty.",
        "rating": 4,
        "price": 30
    }
];

// EXTERNAL MODULE: ./src/lib/config.js
var config = __webpack_require__(2553);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/pages/category/[category]/index.js







const Category = ({ products })=>{
    const router = (0,router_.useRouter)();
    const { category } = router.query;
    console.log(category);
    // Filter products based on the category
    const categoryProducts = products.filter((item)=>item.categori === category.toString());
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: " relative",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                className: "pt-40 text-3xl capitalize text-center font-semibold tracking-wider",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "text-[#F4D94A]",
                        children: [
                            category,
                            " "
                        ]
                    }),
                    "Devices"
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: " capitalize absolute top-20 font-semibold text-[#f4d84a1e] text-[220px] left-1/4",
                children: category
            }),
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "text-lg tracking-wider text-center mt-1",
                children: "Check & Get Your Desired Product & Trending Products"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 w-10/12 mx-auto gap-10 my-20",
                children: categoryProducts.map((product)=>/*#__PURE__*/ jsx_runtime.jsx(ProductCard/* default */.Z, {
                        product: product
                    }, product.id))
            })
        ]
    });
};
/* harmony default export */ const _category_ = (Category);
Category.getLayout = function getLayout(page) {
    return /*#__PURE__*/ jsx_runtime.jsx(RootLayout/* default */.Z, {
        children: page
    });
};
const getStaticPaths = async ()=>{
    const res = await fetch(`${config/* apiLink */.w}/api/products`);
    const allProduct = await res.json();
    // Extract unique categories from your data
    const uniqueCategories = [
        ...new Set(allProduct?.data.map((product)=>product.categori))
    ];
    // Generate paths for each unique category
    const paths = uniqueCategories.map((category)=>({
            params: {
                category
            }
        }));
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ()=>{
    const res = await fetch(`${config/* apiLink */.w}/api/products`);
    const allProduct = await res.json();
    return {
        props: {
            products: allProduct?.data
        },
        revalidate: 10
    };
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fcategory%2F%5Bcategory%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fcategory%2F%5Bcategory%5D%2Findex.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fcategory_2F_5Bcategory_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategory_2F_5Bcategory_5D_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_category_namespaceObject, "default"));
// Re-export methods.
const next_route_loaderkind_PAGES_page_2Fcategory_2F_5Bcategory_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategory_2F_5Bcategory_5D_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_category_namespaceObject, "getStaticProps");
const next_route_loaderkind_PAGES_page_2Fcategory_2F_5Bcategory_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategory_2F_5Bcategory_5D_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticPaths = (0,helpers/* hoist */.l)(_category_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(_category_namespaceObject, "getServerSideProps");
const next_route_loaderkind_PAGES_page_2Fcategory_2F_5Bcategory_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategory_2F_5Bcategory_5D_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_config = (0,helpers/* hoist */.l)(_category_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(_category_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(_category_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_category_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(_category_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(_category_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_category_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/category/[category]",
        pathname: "/category/[category]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: (_document_default())
    },
    userland: _category_namespaceObject
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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,815,636,61,799,396,163], () => (__webpack_exec__(9443)));
module.exports = __webpack_exports__;

})();