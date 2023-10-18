(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,660];
exports.modules = {

/***/ 6030:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5244);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7182);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2940);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(799);
/* harmony import */ var private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5901);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__]);
private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/index",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ getAllProducts)
/* harmony export */ });
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2553);

// api.js
async function getAllProducts() {
    const res = await fetch(`${_lib_config__WEBPACK_IMPORTED_MODULE_0__/* .apiLink */ .w}/api/products`);
    const allProduct = await res.json();
    return allProduct?.data;
}


/***/ }),

/***/ 820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ui_Banner)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/Assets/bg-8.png
/* harmony default export */ const bg_8 = ({"src":"/_next/static/media/bg-8.b1d39ed1.png","height":931,"width":1921,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAAKUlEQVR42lXDQQoAIBACQP//4GIVtK0OEcNgZhv9MCrMWwbzg3yxKfICW6E/ADqWX6AAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/Assets/mouse.png
/* harmony default export */ const mouse = ({"src":"/_next/static/media/mouse.8d97a3cf.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA0UlEQVR42mOYN28eIwMQzJ83X6W3t79gytRp6WvWrBYFiS1ZshgsBwYLFiy8VFff9L+zs/v/7DlzV4PETp0+wwxXUFfffC0hMeV/ekbO/4rK2i0gse7eCWAFYGMiI2PPeXr5/vfw9PkPZO8GifkFhIAVMIGI0LDIPQryCv91dfX/h4RGXmVAADawCR4eXpcYGBX+6xla/4+Oib8GEnvx6hMjg46WBtgYYzPnlbmJ6v9zko3/K2o5ZYPEHJ1cWRhMTc2hXjHljQ8zLIoP0w5hQAIAwbZGQ7aDEY8AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/ui/Banner.js





const Banner = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "background md:h-screen relative",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "absolute hidden md:block text-[320px] font-semibold top-1/4  left-1/4 text-[#9083431e]",
                children: "Mouse"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "md:flex justify-center items-center w-9/12 mx-auto pt-40",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-[#24262B]",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "text-7xl font-semibold tracking-wider",
                                children: "ASSUS P305 TUF M3 Gaming Mouse"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-4xl mt-4 font-semibold",
                                children: "$34"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "mt-4 px-8 py-4 border-2 border-[#F4D94A]   text-lg tracking-widest hover:bg-[#F4D94A] transition duration-300 hover:text-white",
                                children: "See Details"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: " relative",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: mouse,
                                alt: "mouse",
                                width: 900,
                                className: ""
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                className: "font-semibold rounded-full bottom-4 right-10 absolute text-lg tracking-wider px-8 py-10 bg-[#F4D94A] text-white",
                                children: [
                                    "Sale Up to",
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "text-2xl",
                                        children: "60% off"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const ui_Banner = (Banner);


/***/ }),

/***/ 7044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ui_Brands)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/Assets/brands/oppo.png
/* harmony default export */ const oppo = ({"src":"/_next/static/media/oppo.6129ed93.png","height":189,"width":267,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAM1BMVEX////+/v79/v39/f37/Pz7/Pvs7+3q7uvg5eHd4t7c4t7c4d3a4NvW3djS2dTQ2NPN1c8yXqRqAAAAI0lEQVR42mNghAIGOGDlEuDj5+VmYWBm4+HgZGdnYoADmGIAEYYAnyW1tFAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/Assets/brands/mi.png
/* harmony default export */ const mi = ({"src":"/_next/static/media/mi.7242d9fd.png","height":163,"width":310,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAWElEQVR42l3MzQ1AQBAG0ClZIQ56UIIGnMWRmwS7B8msjQkZv/EtV14Bj/C6TuAOX4SmRhqHIp/XbXTOe8/MqkqoSiRRyDOepO9aY4y1VkQIxw43QJdf9QB88Flu9z7IUwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/Assets/brands/samsung.png
/* harmony default export */ const samsung = ({"src":"/_next/static/media/samsung.7cdcac21.png","height":129,"width":390,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAVklEQVR42gFLALT/AP////b3+cXK3JOew2J4sUloqi9apXCCtQC5v9WstM+nsM2rs86gqsmpsc2yudK6wdYAb4K1MlumRmapY3mxkp7DxMnb9vf5////Peoxi2oU5DAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/Assets/brands/lenova.png
/* harmony default export */ const lenova = ({"src":"/_next/static/media/lenova.ebf798a2.png","height":181,"width":278,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAOVBMVEX////+/v79/f38/f38/P38/Pz7+/z6+/v6+vv19vjz9Pbn6O3JzdfEydS9w9C8wc+6wM25v822vMpi/uhNAAAAJklEQVR42mOAAy5ONjZ2Vg5mBh4hXgE+fkFuBkYmJhYmZmZGuBIAEhQAvRmA8roAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/Assets/brands/apple.png
/* harmony default export */ const apple = ({"src":"/_next/static/media/apple.3b362d83.png","height":360,"width":537,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAAAAABd+vKJAAAALElEQVR42mP4DwUMX96duvXn+6/fDJ37t2/dtWPtBYYXD1+/vnz3+lMGmBoALc0kDWdVMbgAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/Assets/brands/assus.png
/* harmony default export */ const assus = ({"src":"/_next/static/media/assus.a6bded01.png","height":168,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAEBAMAAABB42PDAAAAMFBMVEX////q7PHg4+ve4erU2OTP1OG9xNe5wNS1vdO1vdK0vNKwuNCut8+rtM2qtM2nscvGLpFaAAAAFUlEQVR42mMAA8l+5ecMrmfTdoF5ACRBA+UjCgWyAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/ui/Brands.js
/* eslint-disable @next/next/no-img-element */ 








const Brands = ()=>{
    const brands = [
        {
            id: 1,
            img: oppo,
            dis: "The Worlds leading smart device manufacturers and innovators"
        },
        {
            id: 2,
            img: mi,
            dis: "Making Quality Technology Accessible to Everyone"
        },
        {
            id: 3,
            img: samsung,
            dis: "Samsung Taking the lead in tech innovation. Make Smart World"
        },
        {
            id: 4,
            img: lenova,
            dis: "Lenovo is one of the worlds leading personal technology companies"
        },
        {
            id: 5,
            img: apple,
            dis: "The power and flexibility to do whatever needs doing"
        },
        {
            id: 6,
            img: assus,
            dis: "Dedicated to creating products for today’s and tomorrow’s smart life"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "text-center text-2xl font-bold mt-28 tracking-wider",
                children: "Our Brands"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "text-lg tracking-wider pt-1 text-center",
                children: "We Work With the Best Partners"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 relative font-mono",
                children: brands.map((brand)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            class: "w-11/12 h-52 mb-10 bg-white shadow-xl rounded-lg mx-auto",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                class: "px-10 pt-8",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        class: "justify-center",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            className: "w-36 items-center pb-2",
                                            src: brand.img,
                                            alt: "assus-img"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "",
                                        children: brand.dis
                                    })
                                ]
                            })
                        })
                    }, brand.id))
            })
        ]
    });
};
/* harmony default export */ const ui_Brands = (Brands);


/***/ }),

/***/ 5522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ui_Categori)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-fast-marquee"
const external_react_fast_marquee_namespaceObject = require("react-fast-marquee");
var external_react_fast_marquee_default = /*#__PURE__*/__webpack_require__.n(external_react_fast_marquee_namespaceObject);
// EXTERNAL MODULE: ./src/components/ui/CategoriData.js + 7 modules
var CategoriData = __webpack_require__(4268);
;// CONCATENATED MODULE: ./src/components/ui/Categori.js





const Categori = ()=>{
    const categori = CategoriData/* categoriData */.A;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mt-32",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "text-2xl text-center tracking-wider font-semibold",
                children: " Featured Categories"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "text-lg tracking-wider text-center",
                children: "Get Your Desired Product from Featured Category!"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mt-16 w-10/12 mx-auto",
                children: /*#__PURE__*/ jsx_runtime.jsx((external_react_fast_marquee_default()), {
                    gradient: false,
                    speed: 80,
                    pauseOnHover: true,
                    pauseOnClick: true,
                    delay: 0,
                    play: true,
                    direction: "left",
                    children: categori.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mb-8 px-12 rounded-lg py-6 bg-white shadow-lg ml-10",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: item.icon,
                                    alt: "categori img",
                                    width: 100
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "light-effect tracking-wider text-center text-lg pt-3",
                                    children: item.name
                                })
                            ]
                        }, item.id))
                })
            })
        ]
    });
};
/* harmony default export */ const ui_Categori = (Categori);


/***/ }),

/***/ 929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2396);



const FeaturedProducts = ({ product })=>{
    console.log(product);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-20 relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "hidden md:block absolute top-0 font-semibold text-[#f4d84a1e] text-[220px] left-1/4",
                children: "Products"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: " text-2xl font-semibold tracking-wider text-center",
                children: "Our Products"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-lg tracking-wider text-center mt-1",
                children: "Check & Get Your Desired Product & Trending Products"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid w-10/12 gap-10 mx-auto grid-cols-1 md:grid-cols-3 mt-20",
                children: product?.slice(0, 6).map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            product: product
                        }, product?.id)
                    }))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center w-11/12 mx-auto mt-14",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/product",
                    className: "transition ease-in duration-300  items-center text-md font-medium mb-2 md:mb-0 px-5 py-2 hover:shadow-lg tracking-wider hover:text-white rounded-md hover:bg-[#F4D94A] border-2 border-[#F4D94A]",
                    children: "See All Product"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedProducts);


/***/ }),

/***/ 5731:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7644);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5392);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3039);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2184);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _reviesData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9781);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper_modules__WEBPACK_IMPORTED_MODULE_6__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper_modules__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @next/next/no-img-element */ 









const Reviews = ()=>{
    const reviews = _reviesData__WEBPACK_IMPORTED_MODULE_9__/* .reviewsData */ .o;
    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const handleSlideChange = (swiper)=>{
        setActiveIndex(swiper.activeIndex);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "my-32 relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-center text-2xl font-semibold font-mono",
                children: "Customers Reviews"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-center text-lg capitalize font-mono",
                children: "Checkout What Our Customers are Saying About us"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                        slidesPerView: 1,
                        centeredSlides: true,
                        autoplay: {
                            delay: 5000,
                            disableOnInteraction: false
                        },
                        pagination: {
                            el: ".custom-swiper-pagination",
                            clickable: true
                        },
                        modules: [
                            swiper_modules__WEBPACK_IMPORTED_MODULE_6__.Autoplay,
                            swiper_modules__WEBPACK_IMPORTED_MODULE_6__.Pagination
                        ],
                        className: "mySwiper w-8/12",
                        // style={customPaginationStyle}
                        onSlideChange: handleSlideChange,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: reviews.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "card card-side grid md:grid-cols-2 pb-14 pt-20 grid-cols-1 px-2 items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "w-80 h-80 mx-auto",
                                                src: item.img,
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "mb-2 text-xl font-semibold",
                                                        children: item.name
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "text-3xl font-semibold",
                                                        children: item.address
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "text-[18px] mt-4",
                                                        children: [
                                                            item.description,
                                                            "."
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex justify-start mt-3 gap-3",
                                                        children: Array?.from(Array(parseInt(item?.rating)), (e, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiTwotoneStar, {
                                                                className: "w-6 text-4xl text-yellow-500"
                                                            }, i))
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, item?.name))
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute bottom-0 left-0 right-0 flex justify-center mt-4",
                        children: reviews.map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `mx-2 cursor-pointer ${index === activeIndex ? "text-xl -mt-1" : "text-[10px]"}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaCircle, {
                                    style: {
                                        color: index === activeIndex ? "#f4d94a" : "#cccccc82"
                                    }
                                })
                            }, index))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reviews);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ui_Service)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/ri"
var ri_ = __webpack_require__(8098);
;// CONCATENATED MODULE: external "react-icons/md"
const md_namespaceObject = require("react-icons/md");
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: ./src/components/ui/Service.js





const Service = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "service grid grid-cols-1 mt-20 px-10  md:grid-cols-4 text-white font-mono py-20",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-5 pl-10 mb-5",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-6xl text-white",
                        children: /*#__PURE__*/ jsx_runtime.jsx(ri_.RiShoppingCart2Line, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                children: "Free Shipping"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: " For all oders over $50 "
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-5 pl-10 mb-5",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-6xl text-white",
                        children: /*#__PURE__*/ jsx_runtime.jsx(md_namespaceObject.MdAssignmentReturn, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                children: "90 Days Return "
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: " If goods have problems "
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-5 pl-10 mb-5",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-6xl text-white",
                        children: /*#__PURE__*/ jsx_runtime.jsx(bs_.BsFillCreditCard2BackFill, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                children: "Secure Payment "
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: " 100% secure payment "
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-5 pl-10 mb-5",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-6xl text-white",
                        children: /*#__PURE__*/ jsx_runtime.jsx(md_namespaceObject.MdOutlineEditNote, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                children: "Online Support "
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: " Technical 24/7 "
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const ui_Service = (Service);


/***/ }),

/***/ 9149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ui_Snap)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/Assets/offer-banner-1.webp
/* harmony default export */ const offer_banner_1 = ({"src":"/_next/static/media/offer-banner-1.87a28bb8.webp","height":515,"width":960,"blurDataURL":"data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAAAQAgCdASoIAAQAAkA4JagCdLoAArr/aAsAAP70O2W8+3/sPf3By5Ygx4f/Fohuz0Nc2nM29HgAAA==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/Assets/offer-banner-2.jpg
/* harmony default export */ const offer_banner_2 = ({"src":"/_next/static/media/offer-banner-2.1217f332.jpg","height":515,"width":960,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAwEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAgC1//8QAGhAAAgIDAAAAAAAAAAAAAAAAAQMAAhIhYf/aAAgBAQABPwBpOKeV1P/EABcRAAMBAAAAAAAAAAAAAAAAAAABAjL/2gAIAQIBAT8AvTP/xAAWEQADAAAAAAAAAAAAAAAAAAAAAjL/2gAIAQMBAT8AST//2Q==","blurWidth":8,"blurHeight":4});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/ui/Snap.js





const Snap = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mt-40 md:flex",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: offer_banner_1,
                        alt: "offer-img"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "absolute md:top-40 top-10 text-white right-20",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                className: "text-lg uppercase tracking-wider mb-2",
                                children: "Get up to 50% off"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                className: "text-2xl font-semibold tracking-wider capitalize",
                                children: " Bluetooth headphones "
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "transition ease-in duration-300 inline-flex items-center text-md font-medium mb-2 md:mb-0 px-5 py-2 hover:shadow-lg tracking-wider hover:text-white mt-4 hover:bg-[#F4D94A] border-2 border-[#F4D94A]",
                                children: "See Details"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: offer_banner_2,
                        alt: "offer-img"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "absolute md:top-40 top-10 text-white right-20",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                className: "text-lg uppercase tracking-wider mb-2",
                                children: "Get up to 30% off"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                className: "text-2xl font-semibold tracking-wider capitalize",
                                children: "  Laptop I5 collection  "
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "transition ease-in duration-300 inline-flex items-center text-md font-medium mb-2 md:mb-0 px-5 py-2 hover:shadow-lg tracking-wider hover:text-white mt-4 bg-[#F4D94A] border-2 hover:bg-transparent border-[#F4D94A]",
                                children: "See Details"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const ui_Snap = (Snap);


/***/ }),

/***/ 9781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ reviewsData)
/* harmony export */ });
const reviewsData = [
    {
        "name": "Travis Head",
        "description": "This is amazing Product, And Good Services",
        "address": "Canada",
        "img": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        rating: 5
    },
    {
        "name": "Kate Pretty",
        "description": "Extremely professional and great at giving directions. Products turned out perfect!",
        "address": "Finland",
        "img": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        rating: 4
    },
    {
        "name": "Samantha Aliye",
        "description": "Very Good Prices Delivery Was Fast",
        "address": "Norway",
        "img": "https://images.unsplash.com/photo-1616065298043-67646192dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg3fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        rating: 5
    },
    {
        "name": "Michel Jack",
        "description": "Products Ok ! Thank You Sir",
        "address": "China",
        "img": "https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ2fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        rating: 4
    },
    {
        "name": "Zyan Malik",
        "description": "All Are Ok ! increase Stock Thank You",
        "address": "Pakistan",
        "img": "https://images.unsplash.com/photo-1514794749374-fb67509dbb7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkyfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        rating: 5
    },
    {
        "name": "Alisha Tioo",
        "description": "Well Done Few day I will Byes Cars Tools Product is Good",
        "address": "Bangladesh",
        "img": "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjAxfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        rating: 4
    }
];


/***/ }),

/***/ 5901:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_layout_RootLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5636);
/* harmony import */ var _components_ui_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(820);
/* harmony import */ var _components_ui_Brands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7044);
/* harmony import */ var _components_ui_Categori__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5522);
/* harmony import */ var _components_ui_Reviews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5731);
/* harmony import */ var _components_ui_Service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1264);
/* harmony import */ var _components_ui_Snap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9149);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ui_FeaturedProducts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(929);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6861);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_Reviews__WEBPACK_IMPORTED_MODULE_5__]);
_components_ui_Reviews__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const HomePage = ({ products })=>{
    console.log(products);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Home"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "Home",
                        description: "this page in created by next js"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Banner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_FeaturedProducts__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                product: products
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Categori__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Snap__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Brands__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Service__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Reviews__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);
HomePage.getLayout = function getLayout(page) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_RootLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: page
    });
};
async function getStaticProps() {
    const products = await (0,_api__WEBPACK_IMPORTED_MODULE_11__/* .getAllProducts */ .D)();
    return {
        props: {
            products
        },
        revalidate: 10
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3039:
/***/ (() => {



/***/ }),

/***/ 5392:
/***/ (() => {



/***/ }),

/***/ 7644:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 567:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 2750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ 8098:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ri");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 2184:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/modules");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,815,636,61,799,396,163,268], () => (__webpack_exec__(6030)));
module.exports = __webpack_exports__;

})();