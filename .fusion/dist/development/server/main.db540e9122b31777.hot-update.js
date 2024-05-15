
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  if (false) {
    throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);
  } else {
    console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');
    process.env.NODE_ENV = 'development';
  }
} else {
  process.env.NODE_ENV = 'development';
}
  
"use strict";
exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/pages/home.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("fusion-plugin-react-helmet-async");
/* harmony import */ var fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_pair__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/images/pair.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\DELL\\Desktop\\Uber Insurance\\uberForm\\src\\pages\\home.js";





// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const css = (0,fusion_core__WEBPACK_IMPORTED_MODULE_3__.assetUrl)(__webpack_require__("./node_modules/fusion-cli/build/loaders/file-loader.js!./src/pages/home.css?assetUrl=true"));
const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const onSubmit = data => {
    console.log(data); // You can handle form submission here
    setFormData(data); // Update formData state with form data
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("link", {
        rel: "stylesheet",
        href: css
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("nav", {
      children: "Uber"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "container form",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "container border",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_images_pair__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
          children: ["Uber Insurance quote in ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 37
          }, undefined), " under 2 minutes"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: "Compare all Uber approved Private Hire motor insurance providers in one place. All Private Hire motor policies must be purchased online. All providers after automatic uploads of your insurance certificate directly to your uber account, which will help streamline your verification process."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("form", {
          onSubmit: handleSubmit(onSubmit),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "fields",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "licField",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
                className: "labelName",
                htmlFor: "name",
                children: "Driving License Number"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
                placeholder: "xxx-xx-xxx/xxxxx",
                type: "text",
                id: "name",
                name: "license",
                className: `inputFields ${errors.license ? "error" : ""}`,
                ...register("license", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9]{3}-[a-zA-Z0-9]{2}-[a-zA-Z0-9]{3}\/[a-zA-Z0-9]{5}$/,
                    message: "Invalid format (xxx-xx-xxx/xxxxx)"
                  }
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, undefined), errors.license && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                className: "errorMessage",
                children: errors.license.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
              htmlFor: "selectField",
              className: "labelName",
              children: "Title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("select", {
              id: "selectField",
              className: `inputFields ${errors.title ? "error" : ""}`,
              name: "title",
              ...register("title", {
                required: true
              }),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
                value: "",
                disabled: true,
                selected: true,
                hidden: true,
                children: "e.g Mrs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
                value: "Mr",
                children: "Mr"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
                value: "Ms",
                children: "Ms"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
                value: "Mrs",
                children: "Mrs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, undefined), errors.title && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              className: "errorField",
              children: "This field is required"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "nameFields",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "firstName",
                  children: "First Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
                  placeholder: "Enter your First Name",
                  type: "text",
                  id: "firstName",
                  name: "firstName",
                  className: `inputFields ${errors.firstName ? "error" : ""}`,
                  ...register("firstName", {
                    required: true
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 19
                }, undefined), errors.firstName && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                  className: "errorField",
                  children: "This field is required"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "lastName",
                  children: "Last Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
                  placeholder: "Enter Your Last Name",
                  type: "text",
                  id: "lastName",
                  name: "lastName",
                  className: `inputFields ${errors.lastName ? "error" : ""}`,
                  ...register("lastName", {
                    required: true
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 19
                }, undefined), errors.lastName && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                  className: "errorField",
                  children: "This field is required"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
                htmlFor: "dob",
                className: "labelName",
                children: "Date of Birth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "dobFields",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("select", {
                    id: "day",
                    className: `inputFields text-padding ${errors.day ? "error" : ""}`,
                    name: "day",
                    defaultValue: "",
                    ...register("day", {
                      required: true
                    }),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
                      value: "",
                      disabled: true,
                      hidden: true,
                      children: "Day"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
                      columnNumber: 23
                    }, undefined), Array.from({
                      length: 31
                    }, (_, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
                      value: i + 1,
                      children: i + 1
                    }, i, false, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 25
                    }, undefined))]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 21
                  }, undefined), errors.day && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                    className: "errorField",
                    children: "This field is required"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("select", {
                    id: "month",
                    className: `inputFields text-padding ${errors.month ? "error" : ""}`,
                    name: "month",
                    defaultValue: "",
                    ...register("month", {
                      required: true
                    }),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
                      value: "",
                      disabled: true,
                      hidden: true,
                      children: "Month"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 160,
                      columnNumber: 23
                    }, undefined), Array.from({
                      length: 12
                    }, (_, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
                      value: i + 1,
                      children: i + 1
                    }, i + 1, false, {
                      fileName: _jsxFileName,
                      lineNumber: 164,
                      columnNumber: 25
                    }, undefined))]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 21
                  }, undefined), errors.month && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                    className: "errorField",
                    children: "This field is required"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 170,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("select", {
                    id: "year",
                    defaultValue: "",
                    className: `inputFields text-padding ${errors.year ? "error" : ""}`,
                    name: "year",
                    ...register("year", {
                      required: true
                    }),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
                      value: "",
                      disabled: true,
                      hidden: true,
                      children: "Year"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 23
                    }, undefined), Array.from({
                      length: 100
                    }, (_, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
                      value: new Date().getFullYear() - i,
                      children: new Date().getFullYear() - i
                    }, new Date().getFullYear() - i, false, {
                      fileName: _jsxFileName,
                      lineNumber: 187,
                      columnNumber: 25
                    }, undefined))]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 21
                  }, undefined), errors.year && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                    className: "errorField",
                    children: "This field is required"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 196,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
                type: "submit",
                children: "Get Started"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9006fc482aec924f")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=main.db540e9122b31777.hot-update.js.map