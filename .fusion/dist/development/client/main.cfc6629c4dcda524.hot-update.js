"use strict";
self["webpackHotUpdateFusion"]("main",{

/***/ "./src/pages/home.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/react-helmet-async/lib/index.module.js");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/fusion-core/dist-browser-esm/virtual/index.js");
/* harmony import */ var _images_pair__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/images/pair.js");
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-phone-input-2/lib/lib.js");
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\DELL\\Desktop\\sb6-portal-client-uber\\src\\pages\\home.js";







const flag = (0,fusion_core__WEBPACK_IMPORTED_MODULE_4__.assetUrl)(__webpack_require__("./node_modules/fusion-cli/build/loaders/file-loader.js!./node_modules/react-phone-input-2/lib/style.css?assetUrl=true"));
const css = (0,fusion_core__WEBPACK_IMPORTED_MODULE_4__.assetUrl)(__webpack_require__("./node_modules/fusion-cli/build/loaders/file-loader.js!./src/pages/home.css?assetUrl=true"));
const Home = () => {
  const tick = (0,fusion_core__WEBPACK_IMPORTED_MODULE_4__.assetUrl)(__webpack_require__("./node_modules/fusion-cli/build/loaders/file-loader.js!./src/images/tick.svg?assetUrl=true"));
  const previous = (0,fusion_core__WEBPACK_IMPORTED_MODULE_4__.assetUrl)(__webpack_require__("./node_modules/fusion-cli/build/loaders/file-loader.js!./src/images/previous.svg?assetUrl=true"));
  // const Right = assetUrl("../images/Right.svg");
  const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    },
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();
  const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2);
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const onSubmit = data => {
    setFormData(prevData => ({
      ...prevData,
      ...data
    }));
    if (currentStep === 2) {
      console.log({
        ...formData,
        ...data
      }); // Handle form submission
      reset();
      setCurrentStep(1);
    } else {
      setCurrentStep(prevStep => prevStep + 1);
    }
  };
  const handlePrevious = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };
  const months = [{
    value: "1",
    name: "January"
  }, {
    value: "2",
    name: "February"
  }, {
    value: "3",
    name: "March"
  }, {
    value: "4",
    name: "April"
  }, {
    value: "5",
    name: "May"
  }, {
    value: "6",
    name: "June"
  }, {
    value: "7",
    name: "July"
  }, {
    value: "8",
    name: "August"
  }, {
    value: "9",
    name: "September"
  }, {
    value: "10",
    name: "October"
  }, {
    value: "11",
    name: "November"
  }, {
    value: "12",
    name: "December"
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_6__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
        rel: "stylesheet",
        href: css
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
        rel: "stylesheet",
        href: flag
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("nav", {
      children: "Uber"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "container form",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "container border",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
          onSubmit: handleSubmit(onSubmit),
          children: [currentStep === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_images_pair__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
              children: ["Uber Insurance quote in ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 43
              }, undefined), " under 2 minutes"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
              children: "Compare all Uber approved Private Hire motor insurance providers in one place. All Private Hire motor policies must be purchased online. All providers offer automatic uploads of your insurance certificate directly to your Uber account, which will help streamline your verification process."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "fields",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                htmlFor: "selectField",
                className: "labelName",
                children: "Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "licField",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("select", {
                  id: "selectField",
                  defaultValue: "",
                  className: "inputFields ".concat(errors.title ? "error" : ""),
                  name: "title",
                  ...register("title", {
                    required: true
                  }),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                    value: "",
                    disabled: true,
                    hidden: true,
                    children: "e.g Mrs"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                    value: "Mr",
                    children: "Mr"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                    value: "Ms",
                    children: "Ms"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                    value: "Mrs",
                    children: "Mrs"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 21
                }, undefined), watch("title") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                  src: tick,
                  alt: "Tick Icon",
                  className: "tickIcon"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 19
              }, undefined), errors.title && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                className: "errorField",
                children: "This field is required"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 21
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "nameFields",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                    className: "labelName",
                    htmlFor: "firstName",
                    children: "First Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "licField",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                      placeholder: "Enter your first name",
                      type: "text",
                      id: "firstName",
                      name: "firstName",
                      className: "inputFields nameinput ".concat(errors.firstName ? "error" : ""),
                      ...register("firstName", {
                        required: true
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 114,
                      columnNumber: 25
                    }, undefined), watch("firstName") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                      src: tick,
                      alt: "Tick Icon",
                      className: "tickIcon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 125,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 23
                  }, undefined), errors.firstName && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    className: "errorField",
                    children: "This field is required"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                    className: "labelName",
                    htmlFor: "lastName",
                    children: "Last Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "licField",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                      placeholder: "Enter your last name",
                      type: "text",
                      id: "lastName",
                      name: "lastName",
                      className: "inputFields nameinput ".concat(errors.lastName ? "error" : ""),
                      ...register("lastName", {
                        required: true
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 143,
                      columnNumber: 25
                    }, undefined), watch("lastName") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                      src: tick,
                      alt: "Tick Icon",
                      className: "tickIcon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 154,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 23
                  }, undefined), errors.lastName && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    className: "errorField",
                    children: "This field is required"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                  htmlFor: "dob",
                  className: "labelName",
                  children: "Date of Birth"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "dobFields",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("select", {
                      id: "day",
                      className: "inputFields dateInputFields text-padding ".concat(errors.day ? "error" : ""),
                      name: "day",
                      defaultValue: "",
                      ...register("day", {
                        required: true
                      }),
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                        value: "",
                        disabled: true,
                        hidden: true,
                        children: "Day"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 183,
                        columnNumber: 27
                      }, undefined), Array.from({
                        length: 31
                      }, (_, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                        value: i + 1,
                        children: i + 1
                      }, i, false, {
                        fileName: _jsxFileName,
                        lineNumber: 187,
                        columnNumber: 29
                      }, undefined))]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 174,
                      columnNumber: 25
                    }, undefined), errors.day && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                      className: "errorField",
                      children: "This field is required"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 193,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("select", {
                      id: "month",
                      className: "inputFields dateInputFields text-padding ".concat(errors.month ? "error" : ""),
                      name: "month",
                      defaultValue: "",
                      ...register("month", {
                        required: true
                      }),
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                        value: "",
                        disabled: true,
                        hidden: true,
                        children: "Month"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 208,
                        columnNumber: 27
                      }, undefined), months.map(month => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                        value: month.value,
                        children: month.name
                      }, month.value, false, {
                        fileName: _jsxFileName,
                        lineNumber: 212,
                        columnNumber: 29
                      }, undefined))]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 199,
                      columnNumber: 25
                    }, undefined), errors.month && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                      className: "errorField",
                      children: "This field is required"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 218,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 198,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("select", {
                      id: "year",
                      defaultValue: "",
                      className: "inputFields dateInputFields text-padding ".concat(errors.year ? "error" : ""),
                      name: "year",
                      ...register("year", {
                        required: true
                      }),
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                        value: "",
                        disabled: true,
                        hidden: true,
                        children: "Year"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 233,
                        columnNumber: 27
                      }, undefined), Array.from({
                        length: 100
                      }, (_, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                        value: new Date().getFullYear() - i,
                        children: new Date().getFullYear() - i
                      }, new Date().getFullYear() - i, false, {
                        fileName: _jsxFileName,
                        lineNumber: 237,
                        columnNumber: 29
                      }, undefined))]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 224,
                      columnNumber: 25
                    }, undefined), errors.year && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                      className: "errorField",
                      children: "This field is required"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 246,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 223,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "licField",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "name",
                  children: "Driving License Number"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "licField",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                    placeholder: "xxx-xx-xxx/xxxxx",
                    type: "text",
                    id: "name",
                    name: "license",
                    className: "inputFields ".concat(errors.license ? "error" : ""),
                    ...register("license", {
                      required: true,
                      pattern: {
                        value: /^[a-zA-Z0-9]{3}-[a-zA-Z0-9]{2}-[a-zA-Z0-9]{3}\/[a-zA-Z0-9]{5}$/,
                        message: "Invalid format (xxx-xx-xxx/xxxxx)"
                      }
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 258,
                    columnNumber: 23
                  }, undefined), watch("license") && watch("license").match(/^[a-zA-Z0-9]{3}-[a-zA-Z0-9]{2}-[a-zA-Z0-9]{3}\/[a-zA-Z0-9]{5}$/) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                    src: tick,
                    alt: "Tick Icon",
                    className: "tickIcon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 278,
                    columnNumber: 27
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 257,
                  columnNumber: 21
                }, undefined), errors.license && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  className: "errorMessage",
                  children: errors.license.message
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 286,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 253,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                type: "button",
                className: "getStartedButton",
                onClick: handleSubmit(onSubmit),
                children: "Get Started"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 291,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 17
            }, undefined)]
          }, void 0, true), currentStep === 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
              children: "Welcome Pete!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 305,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "fields",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "address",
                  children: "House name or number"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 308,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "licField",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                    placeholder: "e.g 12",
                    type: "text",
                    id: "address",
                    name: "address",
                    className: "inputFields nameinput ".concat(errors.address ? "error" : ""),
                    ...register("address", {
                      required: true
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 312,
                    columnNumber: 23
                  }, undefined), watch("address") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                    src: tick,
                    alt: "Tick Icon",
                    className: "tickIcon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 323,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 311,
                  columnNumber: 21
                }, undefined), errors.address && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  className: "errorField",
                  children: "This field is required"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 327,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "postcode",
                  children: "Postcode"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 331,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "licField",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                    placeholder: "e.g M50 3YJ",
                    type: "text",
                    id: "postcode",
                    name: "postcode",
                    className: "inputFields nameinput ".concat(errors.postcode ? "error" : ""),
                    ...register("postcode", {
                      required: true
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 335,
                    columnNumber: 23
                  }, undefined), watch("postcode") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                    src: tick,
                    alt: "Tick Icon",
                    className: "tickIcon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 346,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 334,
                  columnNumber: 21
                }, undefined), errors.postcode && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  className: "errorField",
                  children: "This field is required"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 350,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 330,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "addressButton",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                  type: "button",
                  className: "lookAddbtn",
                  children: "Look up address"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 354,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                  type: "button",
                  className: "addManbtn",
                  children: "Enter address manually"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 357,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 353,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "addressFind",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                  className: "findAddbtn",
                  href: "#",
                  children: "Having trouble finding your address?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 362,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 361,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "phone",
                  children: "Contact Form"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 368,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "licField",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Controller, {
                    name: "phone",
                    control: control,
                    rules: {
                      required: true
                    },
                    render: _ref => {
                      let {
                        field
                      } = _ref;
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react_phone_input_2__WEBPACK_IMPORTED_MODULE_2___default()), {
                        ...field,
                        country: "us",
                        placeholder: "99 999 9999 999",
                        disableCountryCode: true,
                        onChange: value => {
                          field.onChange(value);
                          setPhone(value);
                        },
                        inputProps: {
                          name: "phone",
                          required: true,
                          autoFocus: true,
                          className: "inputFields nameinput ".concat(errors.phone ? "error" : "")
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 377,
                        columnNumber: 27
                      }, undefined);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 372,
                    columnNumber: 23
                  }, undefined), watch("phone") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                    src: tick,
                    alt: "Tick Icon",
                    className: "tickIcon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 398,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 371,
                  columnNumber: 21
                }, undefined), errors.phone && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  className: "errorField",
                  children: "This field is required"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 402,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 367,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "emailField",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "email",
                  children: "Email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 406,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                  placeholder: "example@email.com",
                  type: "email",
                  id: "email",
                  name: "email",
                  className: "inputFields nameinput ".concat(errors.email ? "error" : ""),
                  ...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                      message: "Invalid email address"
                    }
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 410,
                  columnNumber: 21
                }, undefined), watch("email") && /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(watch("email")) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                  src: tick,
                  alt: "Tick Icon",
                  className: "tickIcon"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 430,
                  columnNumber: 25
                }, undefined), errors.email && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  className: "errorField",
                  children: errors.email.message
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 434,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 405,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                htmlFor: "selectField",
                className: "labelName",
                children: "Uber Driving Rating"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 437,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "licField",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("select", {
                  id: "selectField",
                  defaultValue: "",
                  className: "inputFields ".concat(errors.Rating ? "error" : ""),
                  name: "title",
                  ...register("Rating", {
                    required: true
                  }),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                    value: "",
                    disabled: true,
                    hidden: true,
                    children: "Please Select"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 448,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                    value: "Mr",
                    children: "Blue"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 451,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                    value: "Ms",
                    children: "Gold"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 452,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                    value: "Mrs",
                    children: "Platinum"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 453,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                    value: "Mrs",
                    children: "Diamond"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 454,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 441,
                  columnNumber: 21
                }, undefined), watch("Rating") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                  src: tick,
                  alt: "Tick Icon",
                  className: "tickIcon"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 457,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 440,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                className: "contactDetail",
                children: "This is your Uber Pro Status. Please ensure this is accurate as it will be validated by Uber and will affect your price."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 460,
                columnNumber: 19
              }, undefined), errors.Rating && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                className: "errorField",
                children: "This field is required"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 465,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "multiBtn",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                type: "Button",
                className: "prevBtn",
                onClick: handlePrevious,
                children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                  className: "PrevImg",
                  src: previous,
                  alt: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 475,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 469,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                type: "submit",
                className: "nextBtn",
                children: "Next"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 477,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 468,
              columnNumber: 17
            }, undefined)]
          }, void 0, true)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ })

});
//# sourceMappingURL=main.cfc6629c4dcda524.hot-update.js.map