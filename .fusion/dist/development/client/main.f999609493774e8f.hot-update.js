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
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "C:\\Users\\DELL\\Desktop\\sb6-portal-client-uber\\src\\pages\\home.js";








const flag = (0,fusion_core__WEBPACK_IMPORTED_MODULE_4__.assetUrl)(__webpack_require__("./node_modules/fusion-cli/build/loaders/file-loader.js!./node_modules/react-phone-input-2/lib/style.css?assetUrl=true"));
const datePicker = (0,fusion_core__WEBPACK_IMPORTED_MODULE_4__.assetUrl)(__webpack_require__("./node_modules/fusion-cli/build/loaders/file-loader.js!./node_modules/react-datepicker/dist/react-datepicker.css?assetUrl=true"));
const css = (0,fusion_core__WEBPACK_IMPORTED_MODULE_4__.assetUrl)(__webpack_require__("./node_modules/fusion-cli/build/loaders/file-loader.js!./src/pages/home.css?assetUrl=true"));
const Home = () => {
  const tick = (0,fusion_core__WEBPACK_IMPORTED_MODULE_4__.assetUrl)(__webpack_require__("./node_modules/fusion-cli/build/loaders/file-loader.js!./src/images/tick.svg?assetUrl=true"));
  const previous = (0,fusion_core__WEBPACK_IMPORTED_MODULE_4__.assetUrl)(__webpack_require__("./node_modules/fusion-cli/build/loaders/file-loader.js!./src/images/previous.svg?assetUrl=true"));
  // const Right = assetUrl("../images/Right.svg");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: {
      errors
    },
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();
  const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(3);
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

      setCurrentStep(3);
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
        lineNumber: 69,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
        rel: "stylesheet",
        href: css
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
        rel: "stylesheet",
        href: flag
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
        rel: "stylesheet",
        href: datePicker
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("nav", {
      children: "Uber"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
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
              lineNumber: 80,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
              children: ["Uber Insurance quote in ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 43
              }, undefined), " under 2 minutes"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
              children: "Compare all Uber approved Private Hire motor insurance providers in one place. All Private Hire motor policies must be purchased online. All providers offer automatic uploads of your insurance certificate directly to your Uber account, which will help streamline your verification process."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "fields",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                htmlFor: "selectField",
                className: "labelName",
                children: "Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
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
                    lineNumber: 103,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                    value: "Mr",
                    children: "Mr"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                    value: "Ms",
                    children: "Ms"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                    value: "Mrs",
                    children: "Mrs"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 21
                }, undefined), watch("title") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                  src: tick,
                  alt: "Tick Icon",
                  className: "tickIcon"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 19
              }, undefined), errors.title && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                className: "errorField",
                children: "This field is required"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
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
                    lineNumber: 119,
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
                      lineNumber: 123,
                      columnNumber: 25
                    }, undefined), watch("firstName") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                      src: tick,
                      alt: "Tick Icon",
                      className: "tickIcon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 134,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 23
                  }, undefined), errors.firstName && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    className: "errorField",
                    children: "This field is required"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                    className: "labelName",
                    htmlFor: "lastName",
                    children: "Last Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
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
                      lineNumber: 152,
                      columnNumber: 25
                    }, undefined), watch("lastName") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                      src: tick,
                      alt: "Tick Icon",
                      className: "tickIcon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 163,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 23
                  }, undefined), errors.lastName && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    className: "errorField",
                    children: "This field is required"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                  htmlFor: "dob",
                  className: "labelName",
                  children: "Date of Birth"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 178,
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
                        lineNumber: 192,
                        columnNumber: 27
                      }, undefined), Array.from({
                        length: 31
                      }, (_, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                        value: i + 1,
                        children: i + 1
                      }, i, false, {
                        fileName: _jsxFileName,
                        lineNumber: 196,
                        columnNumber: 29
                      }, undefined))]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 25
                    }, undefined), errors.day && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                      className: "errorField",
                      children: "This field is required"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 202,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 182,
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
                        lineNumber: 217,
                        columnNumber: 27
                      }, undefined), months.map(month => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                        value: month.value,
                        children: month.name
                      }, month.value, false, {
                        fileName: _jsxFileName,
                        lineNumber: 221,
                        columnNumber: 29
                      }, undefined))]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 208,
                      columnNumber: 25
                    }, undefined), errors.month && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                      className: "errorField",
                      children: "This field is required"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 207,
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
                        lineNumber: 242,
                        columnNumber: 27
                      }, undefined), Array.from({
                        length: 100
                      }, (_, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                        value: new Date().getFullYear() - i,
                        children: new Date().getFullYear() - i
                      }, new Date().getFullYear() - i, false, {
                        fileName: _jsxFileName,
                        lineNumber: 246,
                        columnNumber: 29
                      }, undefined))]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 233,
                      columnNumber: 25
                    }, undefined), errors.year && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                      className: "errorField",
                      children: "This field is required"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 255,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 232,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "licField",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "name",
                  children: "Driving License Number"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 263,
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
                    lineNumber: 267,
                    columnNumber: 23
                  }, undefined), watch("license") && watch("license").match(/^[a-zA-Z0-9]{3}-[a-zA-Z0-9]{2}-[a-zA-Z0-9]{3}\/[a-zA-Z0-9]{5}$/) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                    src: tick,
                    alt: "Tick Icon",
                    className: "tickIcon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 287,
                    columnNumber: 27
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 266,
                  columnNumber: 21
                }, undefined), errors.license && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  className: "errorMessage",
                  children: errors.license.message
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 295,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 262,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                type: "button",
                className: "getStartedButton",
                onClick: handleSubmit(onSubmit),
                children: "Get Started"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 300,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 17
            }, undefined)]
          }, void 0, true), currentStep === 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
              children: "Welcome Pete!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 314,
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
                  lineNumber: 317,
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
                    lineNumber: 321,
                    columnNumber: 23
                  }, undefined), watch("address") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                    src: tick,
                    alt: "Tick Icon",
                    className: "tickIcon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 332,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 320,
                  columnNumber: 21
                }, undefined), errors.address && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  className: "errorField",
                  children: "This field is required"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 336,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 316,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "postcode",
                  children: "Postcode"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 340,
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
                    lineNumber: 344,
                    columnNumber: 23
                  }, undefined), watch("postcode") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                    src: tick,
                    alt: "Tick Icon",
                    className: "tickIcon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 355,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 343,
                  columnNumber: 21
                }, undefined), errors.postcode && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  className: "errorField",
                  children: "This field is required"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 359,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 339,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "addressButton",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                  type: "button",
                  className: "lookAddbtn",
                  children: "Look up address"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 363,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                  type: "button",
                  className: "addManbtn",
                  children: "Enter address manually"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 366,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 362,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "addressFind",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                  className: "findAddbtn",
                  href: "#",
                  children: "Having trouble finding your address?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 371,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 370,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "phone",
                  children: "Contact Form"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 377,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "licField conMar",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.Controller, {
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
                        className: "PhoneNo",
                        ...field,
                        country: "us",
                        placeholder: "99 999 9999 999"
                        // disableCountryCode
                        ,
                        onChange: field.onChange,
                        inputProps: {
                          name: "phone",
                          required: true,
                          autoFocus: true,
                          className: " phoneInput nameinput ".concat(errors.phone ? "error" : "")
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 386,
                        columnNumber: 27
                      }, undefined);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 381,
                    columnNumber: 23
                  }, undefined), watch("phone") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                    src: tick,
                    alt: "Tick Icon",
                    className: "tickIcon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 406,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 380,
                  columnNumber: 21
                }, undefined), errors.phone && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  className: "errorField",
                  children: "This field is required"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 410,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 376,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "emailField",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "email",
                  children: "Email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 414,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "licField",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
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
                    lineNumber: 418,
                    columnNumber: 23
                  }, undefined), watch("email") && /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(watch("email")) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                    src: tick,
                    alt: "Tick Icon",
                    className: "tickIcon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 438,
                    columnNumber: 27
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 417,
                  columnNumber: 21
                }, undefined), errors.email && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  className: "errorField",
                  children: errors.email.message
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 446,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 413,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                htmlFor: "selectField",
                className: "labelName",
                children: "Uber Driving Rating"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 450,
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
                    lineNumber: 461,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                    value: "Mr",
                    children: "Blue"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 464,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                    value: "Ms",
                    children: "Gold"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 465,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                    value: "Mrs",
                    children: "Platinum"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 466,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                    value: "Mrs",
                    children: "Diamond"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 467,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 454,
                  columnNumber: 21
                }, undefined), watch("Rating") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                  src: tick,
                  alt: "Tick Icon",
                  className: "tickIcon"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 470,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 453,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                className: "contactDetail",
                children: "This is your Uber Pro Status. Please ensure this is accurate as it will be validated by Uber and will affect your price."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 473,
                columnNumber: 19
              }, undefined), errors.Rating && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                className: "errorField",
                children: "This field is required"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 478,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 315,
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
                  lineNumber: 488,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 482,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                type: "submit",
                className: "nextBtn",
                children: "Next"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 490,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 481,
              columnNumber: 17
            }, undefined)]
          }, void 0, true), currentStep === 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
              children: "Quote Details"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 499,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 500,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "fields",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                className: "labelName",
                htmlFor: "date",
                children: "When would you like your cover to start?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 502,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.Controller, {
                name: "date",
                control: control,
                rules: {
                  required: true
                },
                render: _ref2 => {
                  let {
                    field
                  } = _ref2;
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react_datepicker__WEBPACK_IMPORTED_MODULE_7___default()), {
                    placeholderText: "MM/DD/YYYY",
                    onChange: date => field.onChange(date),
                    selected: field.value,
                    dateFormat: "MM/dd/yyyy",
                    showMonthDropdown: true,
                    showYearDropdown: true,
                    dropdownMode: "select",
                    className: "inputFields nameinput ".concat(errors.date ? "error" : "")
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 510,
                    columnNumber: 23
                  }, undefined);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 505,
                columnNumber: 19
              }, undefined), errors.date && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                className: "errorField",
                children: "This field is required"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 525,
                columnNumber: 21
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "VehicleReg",
                  children: "Vehicle Registration"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 528,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "licField",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                    placeholder: "e.g EA21 WLP",
                    type: "text",
                    id: "VehicleReg",
                    name: "VehicleReg",
                    className: "inputFields nameinput ".concat(errors.VehicleReg ? "error" : ""),
                    ...register("VehicleReg", {
                      required: true
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 532,
                    columnNumber: 23
                  }, undefined), watch("VehicleReg") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                    src: tick,
                    alt: "Tick Icon",
                    className: "tickIcon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 543,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 531,
                  columnNumber: 21
                }, undefined), errors.VehicleReg && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  className: "errorField",
                  children: "This field is required"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 547,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 527,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "addressButton",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                  type: "button",
                  className: "lookAddbtn lookBtn",
                  children: "Look up registration"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 551,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                  type: "button",
                  className: "addManbtn",
                  children: "Enter manually"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 554,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 550,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "addressFind",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                  className: "findAddbtn",
                  href: "#",
                  children: "Having trouble finding your vehicle?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 559,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 558,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                className: "labelName",
                children: "Who owns this vehicle?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 563,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "radioGroup",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                  className: "radioLabel",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                    type: "radio",
                    value: "me",
                    ...register("ownership", {
                      required: true
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 566,
                    columnNumber: 23
                  }, undefined), "Me"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 565,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                  className: "radioLabel",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                    type: "radio",
                    value: "someone_else",
                    ...register("ownership", {
                      required: true
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 574,
                    columnNumber: 23
                  }, undefined), "Someone else"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 573,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 564,
                columnNumber: 19
              }, undefined), errors.ownership && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                className: "errorField",
                children: "This field is required"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 583,
                columnNumber: 21
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "dateStyle",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                  htmlFor: "quotedob",
                  className: "labelName",
                  children: "Date of Birth"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 587,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "dobFields",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("select", {
                      id: "quoteDay",
                      className: "inputFields dateInputFields text-padding ".concat(errors.quoteDay ? "error" : ""),
                      name: "quoteDay",
                      defaultValue: "",
                      ...register("quoteDay", {
                        required: true
                      }),
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                        value: "",
                        disabled: true,
                        hidden: true,
                        children: "Day"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 601,
                        columnNumber: 27
                      }, undefined), Array.from({
                        length: 31
                      }, (_, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                        value: i + 1,
                        children: i + 1
                      }, i, false, {
                        fileName: _jsxFileName,
                        lineNumber: 605,
                        columnNumber: 29
                      }, undefined))]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 592,
                      columnNumber: 25
                    }, undefined), errors.quoteDay && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                      className: "errorField",
                      children: "This field is required"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 611,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 591,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("select", {
                      id: "quoteMonth",
                      className: "inputFields dateInputFields text-padding ".concat(errors.quoteMonth ? "error" : ""),
                      name: "quoteMonth",
                      defaultValue: "",
                      ...register("quoteMonth", {
                        required: true
                      }),
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                        value: "",
                        disabled: true,
                        hidden: true,
                        children: "Month"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 626,
                        columnNumber: 27
                      }, undefined), months.map(month => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                        value: month.value,
                        children: month.name
                      }, month.value, false, {
                        fileName: _jsxFileName,
                        lineNumber: 630,
                        columnNumber: 29
                      }, undefined))]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 617,
                      columnNumber: 25
                    }, undefined), errors.quoteMonth && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                      className: "errorField",
                      children: "This field is required"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 636,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 616,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("select", {
                      id: "quoteYear",
                      defaultValue: "",
                      className: "inputFields dateInputFields text-padding ".concat(errors.quoteYear ? "error" : ""),
                      name: "quoteYear",
                      ...register("quoteYear", {
                        required: true
                      }),
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                        value: "",
                        disabled: true,
                        hidden: true,
                        children: "Year"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 651,
                        columnNumber: 27
                      }, undefined), Array.from({
                        length: 100
                      }, (_, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                        value: new Date().getFullYear() - i,
                        children: new Date().getFullYear() - i
                      }, new Date().getFullYear() - i, false, {
                        fileName: _jsxFileName,
                        lineNumber: 655,
                        columnNumber: 29
                      }, undefined))]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 642,
                      columnNumber: 25
                    }, undefined), errors.quoteYear && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                      className: "errorField",
                      children: "This field is required"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 664,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 641,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 590,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 586,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "emailField",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "seats",
                  children: "How Many Seats Does Your Taxi Have"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 673,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "licField",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                    placeholder: "e.g. 4",
                    type: "number",
                    id: "seats",
                    name: "seats",
                    className: "inputFields nameinput ".concat(errors.seats ? "error" : ""),
                    ...register("seats", {
                      required: "This field is required"
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 677,
                    columnNumber: 23
                  }, undefined), watch("seats") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                    src: tick,
                    alt: "Tick Icon",
                    className: "tickIcon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 690,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 676,
                  columnNumber: 21
                }, undefined), errors.seats && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  className: "errorField",
                  children: errors.seats.message
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 694,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 672,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "inputFieldContainer",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "marketValue",
                  children: "Estimated market value of vehicle"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 698,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "inputRow",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("select", {
                    id: "currency",
                    name: "currency",
                    defaultValue: "",
                    className: "currencySelect",
                    ...register("currency", {
                      required: true
                    }),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                      value: "",
                      disabled: true,
                      hidden: true,
                      children: "\xA3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 709,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                      value: "\xA3",
                      children: "\xA3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 712,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                      value: "$",
                      children: "$"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 713,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                      value: "\u20AC",
                      children: "\u20AC"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 714,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 702,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "inputWithIcon",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                      placeholder: "e.g 7,000",
                      type: "number",
                      id: "marketValue",
                      name: "marketValue",
                      className: "inputFields  ".concat(errors.marketValue ? "error" : ""),
                      ...register("marketValue", {
                        required: "This field is required"
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 717,
                      columnNumber: 25
                    }, undefined), watch("marketValue") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                      src: tick,
                      alt: "Tick Icon",
                      className: "tickIcon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 730,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 716,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 701,
                  columnNumber: 21
                }, undefined), errors.marketValue && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  className: "errorField",
                  children: errors.marketValue.message
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 739,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 697,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 501,
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
                  lineNumber: 752,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 746,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                type: "submit",
                className: "nextBtn",
                children: "Next"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 754,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 745,
              columnNumber: 17
            }, undefined)]
          }, void 0, true)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ })

});
//# sourceMappingURL=main.f999609493774e8f.hot-update.js.map