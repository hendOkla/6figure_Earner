"use strict";
(() => {
var exports = {};
exports.id = 234;
exports.ids = [234];
exports.modules = {

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 9421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const stripe = __webpack_require__(8174)("sk_test_51NGPEkD9XEKkDfre8Bh4W29JPlkYgMojXGiugvHZ3aANyky3VZzfCkx9Ad0aezcV1MPoNmdly8MDRg9VltkLk3ve00WRqTL2ji");
async function handler(req, res) {
    const { amount , name , id  } = req.body;
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            description: name,
            payment_method: id,
            confirm: true
        });
        return res.status(200).json({
            success: true,
            amount: amount,
            plan: name
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            error: error.message,
            amount: amount,
            plan: name
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9421));
module.exports = __webpack_exports__;

})();