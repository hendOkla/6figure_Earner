(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);



const GoTop = ({ scrollStepInPx , delayInMs  })=>{
    const [thePosition, setThePosition] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const timeoutRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        document.addEventListener("scroll", ()=>{
            if (window.scrollY > 170) {
                setThePosition(true);
            } else {
                setThePosition(false);
            }
        });
    }, []);
    const onScrollStep = ()=>{
        if (window.pageYOffset === 0) {
            clearInterval(timeoutRef.current);
        }
        window.scroll(0, window.pageYOffset - scrollStepInPx);
    };
    const scrollToTop = ()=>{
        timeoutRef.current = setInterval(onScrollStep, delayInMs);
    };
    const renderGoTopIcon = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: `go-top ${thePosition ? "active" : ""}`,
            onClick: scrollToTop,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_2__.ArrowUp, {})
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: renderGoTopIcon()
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoTop);


/***/ }),

/***/ 852:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GoTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9235);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9614);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_5__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
                        children: "Education Platform - React Next IT Startup & Digital Agency Template"
                    })
                ]
            }),
            children,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.Toaster, {
                position: "top-right"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GoTop__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                scrollStepInPx: "100",
                delayInMs: "10.50"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Sidebar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Sidebar = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "lang-didebar",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                    href: "/",
                    title: "Default Demo",
                    children: "LTR"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                    href: "/ar",
                    title: "RTL Demo",
                    children: "RTL"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2620);
/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5544);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_boxicons_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7851);
/* harmony import */ var _styles_boxicons_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_boxicons_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_flaticon_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8628);
/* harmony import */ var _styles_flaticon_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_flaticon_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6655);
/* harmony import */ var _styles_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_slick_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7600);
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1631);
/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css_bundle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8702);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6050);
/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_rtl_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(733);
/* harmony import */ var _styles_rtl_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_rtl_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(852);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6096);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_App_Layout__WEBPACK_IMPORTED_MODULE_13__]);
_components_App_Layout__WEBPACK_IMPORTED_MODULE_13__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










(axios__WEBPACK_IMPORTED_MODULE_9___default().defaults.baseURL) = "https://6figure-earner.net/LarReApi/public/";
(axios__WEBPACK_IMPORTED_MODULE_9___default().defaults.headers.post["Content-Type"]) = "application/json";
(axios__WEBPACK_IMPORTED_MODULE_9___default().defaults.headers.post.Accept) = "application/json";
(axios__WEBPACK_IMPORTED_MODULE_9___default().defaults.withCredentials) = true;
axios__WEBPACK_IMPORTED_MODULE_9___default().interceptors.request.use(function(config) {
    const token = localStorage.getItem("auth_token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});
// Global Style

// Global Responsive Style

// Global RTL Style

// Multicolor if you want this color comment out 
// import '@/styles/colors/brink-pink-style.css'
// import '@/styles/colors/pink-style.css'
// import '@/styles/colors/purple-style.css'  



function App({ Component , pageProps  }) {
    const store = (0,_store__WEBPACK_IMPORTED_MODULE_15__/* .useStore */ .o)(pageProps.initialReduxState);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_14__.Provider, {
            store: store,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_App_Layout__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                    ...pageProps
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* binding */ useStore)
});

// UNUSED EXPORTS: initializeStore

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: ./products.js
const productsData = [
    {
        id: "wood-pencil",
        name: "Wood Pencil",
        price: 19.99,
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        availability: "In Stock",
        image: "/images/shop-image/shop-image1.jpg",
        images: [
            {
                id: 1,
                img: "/images/shop-image/shop-image1.jpg"
            },
            {
                id: 2,
                img: "/images/shop-image/shop-image1.jpg"
            },
            {
                id: 3,
                img: "/images/shop-image/shop-image1.jpg"
            },
            {
                id: 4,
                img: "/images/shop-image/shop-image1.jpg"
            }
        ]
    },
    {
        id: "t-shirt",
        name: "T-Shirt",
        price: 22.99,
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        availability: "In Stock",
        image: "/images/shop-image/shop-image2.jpg",
        images: [
            {
                id: 1,
                img: "/images/shop-image/shop-image1.jpg"
            },
            {
                id: 2,
                img: "/images/shop-image/shop-image2.jpg"
            },
            {
                id: 3,
                img: "/images/shop-image/shop-image1.jpg"
            },
            {
                id: 4,
                img: "/images/shop-image/shop-image2.jpg"
            }
        ]
    },
    {
        id: "casual-shoe",
        name: "Casual Shoe",
        price: 31.99,
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        availability: "In Stock",
        image: "/images/shop-image/shop-image3.jpg",
        images: [
            {
                id: 1,
                img: "/images/shop-image/shop-image3.jpg"
            },
            {
                id: 2,
                img: "/images/shop-image/shop-image2.jpg"
            },
            {
                id: 3,
                img: "/images/shop-image/shop-image1.jpg"
            },
            {
                id: 4,
                img: "/images/shop-image/shop-image2.jpg"
            }
        ]
    },
    {
        id: "coffee-bag",
        name: "Coffee Bag",
        price: 4.99,
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        availability: "In Stock",
        image: "/images/shop-image/shop-image4.jpg",
        images: [
            {
                id: 1,
                img: "/images/shop-image/shop-image4.jpg"
            },
            {
                id: 2,
                img: "/images/shop-image/shop-image2.jpg"
            },
            {
                id: 3,
                img: "/images/shop-image/shop-image1.jpg"
            },
            {
                id: 4,
                img: "/images/shop-image/shop-image4.jpg"
            }
        ]
    },
    {
        id: "single-chair",
        name: "Single Chair",
        price: 149.99,
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        availability: "In Stock",
        image: "/images/shop-image/shop-image5.jpg",
        images: [
            {
                id: 1,
                img: "/images/shop-image/shop-image5.jpg"
            },
            {
                id: 2,
                img: "/images/shop-image/shop-image2.jpg"
            },
            {
                id: 3,
                img: "/images/shop-image/shop-image1.jpg"
            },
            {
                id: 4,
                img: "/images/shop-image/shop-image4.jpg"
            }
        ]
    },
    {
        id: "business-card",
        name: "Business Card",
        price: 1.99,
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        availability: "In Stock",
        image: "/images/shop-image/shop-image6.jpg",
        images: [
            {
                id: 1,
                img: "/images/shop-image/shop-image6.jpg"
            },
            {
                id: 2,
                img: "/images/shop-image/shop-image2.jpg"
            },
            {
                id: 3,
                img: "/images/shop-image/shop-image1.jpg"
            },
            {
                id: 4,
                img: "/images/shop-image/shop-image4.jpg"
            }
        ]
    },
    {
        id: "book-cover",
        name: "Book Cover",
        price: 3.99,
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        availability: "In Stock",
        image: "/images/shop-image/shop-image7.jpg",
        images: [
            {
                id: 1,
                img: "/images/shop-image/shop-image7.jpg"
            },
            {
                id: 2,
                img: "/images/shop-image/shop-image2.jpg"
            },
            {
                id: 3,
                img: "/images/shop-image/shop-image1.jpg"
            },
            {
                id: 4,
                img: "/images/shop-image/shop-image4.jpg"
            }
        ]
    },
    {
        id: "wall-watch",
        name: "Wall Watch",
        price: 9.99,
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        availability: "In Stock",
        image: "/images/shop-image/shop-image8.jpg",
        images: [
            {
                id: 1,
                img: "/images/shop-image/shop-image8.jpg"
            },
            {
                id: 2,
                img: "/images/shop-image/shop-image2.jpg"
            },
            {
                id: 3,
                img: "/images/shop-image/shop-image1.jpg"
            },
            {
                id: 4,
                img: "/images/shop-image/shop-image4.jpg"
            }
        ]
    }
];

;// CONCATENATED MODULE: ./store.js




let store;
const initialState = {
    products: productsData,
    cart: [],
    total: 0
};
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            let addedItem = state.products.find((item)=>item.id === action.id);
            let existed_item = state.cart.find((item)=>action.id === item.id);
            if (existed_item) {
                addedItem.quantity += 1;
                return {
                    ...state,
                    total: state.total + addedItem.price
                };
            } else {
                addedItem.quantity = 1;
                let newTotal = state.total + addedItem.price;
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        addedItem
                    ],
                    total: newTotal
                };
            }
        case "ADD_QUANTITY":
            let existingItem = state.cart.find((item)=>item.id === action.id);
            existingItem.quantity += 1;
            let newTotal = state.total + existingItem.price;
            return {
                ...state,
                total: newTotal
            };
        case "SUB_QUANTITY":
            let exItem = state.products.find((item)=>item.id === action.id);
            if (exItem.quantity === 1) {
                let new_items = state.cart.filter((item)=>item.id !== action.id);
                let newTotal = state.total - exItem.price;
                return {
                    ...state,
                    cart: new_items,
                    total: newTotal
                };
            } else {
                exItem.quantity -= 1;
                let newTotal = state.total - exItem.price;
                return {
                    ...state,
                    total: newTotal
                };
            }
        case "ADD_QUANTITY_WITH_NUMBER":
            let addedItemD = state.products.find((item)=>item.id === action.id);
            //check if the action id exists in the addedItems
            let existed_itemd = state.cart.find((item)=>action.id === item.id);
            if (existed_itemd) {
                addeaddedItemDdItem.quantity += action.qty;
                return {
                    ...state,
                    total: state.total + addedItemD.price * action.qty
                };
            } else {
                addedItemD.quantity = action.qty;
                //calculating the total
                let newTotal = state.total + addedItemD.price * action.qty;
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        addedItemD
                    ],
                    total: newTotal
                };
            }
        case "REMOVE_ITEM":
            let itemToRemove = state.cart.find((item)=>action.id === item.id);
            let new_items = state.cart.filter((item)=>action.id !== item.id);
            //calculating the total
            let newTotalRemove = state.total - itemToRemove.price * itemToRemove.quantity;
            return {
                ...state,
                cart: new_items,
                total: newTotalRemove
            };
        case "RESET":
            return {
                ...state,
                cart: []
            };
        default:
            return state;
    }
};
function initStore(preloadedState = initialState) {
    return (0,external_redux_namespaceObject.createStore)(reducer, preloadedState, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)()));
}
const initializeStore = (preloadedState)=>{
    let _store = store ?? initStore(preloadedState);
    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState
        });
        // Reset the current store
        store = undefined;
    }
    // For SSG and SSR always create a new store
    if (true) return _store;
    // Create the store once in the client
    if (!store) store = _store;
    return _store;
};
function useStore(initialState) {
    const store = (0,external_react_.useMemo)(()=>initializeStore(initialState), [
        initialState
    ]);
    return store;
}


/***/ }),

/***/ 5544:
/***/ (() => {



/***/ }),

/***/ 7600:
/***/ (() => {



/***/ }),

/***/ 1631:
/***/ (() => {



/***/ }),

/***/ 8722:
/***/ (() => {



/***/ }),

/***/ 2620:
/***/ (() => {



/***/ }),

/***/ 7851:
/***/ (() => {



/***/ }),

/***/ 8628:
/***/ (() => {



/***/ }),

/***/ 6050:
/***/ (() => {



/***/ }),

/***/ 733:
/***/ (() => {



/***/ }),

/***/ 6655:
/***/ (() => {



/***/ }),

/***/ 8702:
/***/ (() => {



/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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

/***/ 9101:
/***/ ((module) => {

"use strict";
module.exports = require("react-feather");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6201:
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8484));
module.exports = __webpack_exports__;

})();