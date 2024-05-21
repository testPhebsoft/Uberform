
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
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("react-phone-input-2");
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\DELL\\Desktop\\sb6-portal-client-uber\\src\\pages\\home.js";








const flag = (0,fusion_core__WEBPACK_IMPORTED_MODULE_3__.assetUrl)(__webpack_require__("./node_modules/fusion-cli/build/loaders/file-loader.js!./node_modules/react-phone-input-2/lib/style.css?assetUrl=true"));
const css = (0,fusion_core__WEBPACK_IMPORTED_MODULE_3__.assetUrl)(__webpack_require__("./node_modules/fusion-cli/build/loaders/file-loader.js!./src/pages/home.css?assetUrl=true"));
const Home = () => {
  const tick = (0,fusion_core__WEBPACK_IMPORTED_MODULE_3__.assetUrl)(__webpack_require__("./node_modules/fusion-cli/build/loaders/file-loader.js!./src/images/tick.svg?assetUrl=true"));
  const previous = (0,fusion_core__WEBPACK_IMPORTED_MODULE_3__.assetUrl)(__webpack_require__("./node_modules/fusion-cli/build/loaders/file-loader.js!./src/images/previous.svg?assetUrl=true"));
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
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();
  const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(3);
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const handleDateChange = e => {
    const selectedDate = e.target.value;
    setValue("displayDate", selectedDate);
  };
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("link", {
        rel: "stylesheet",
        href: css
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("link", {
        rel: "stylesheet",
        href: flag
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("nav", {
      children: "Uber"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "container form",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "container border",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("form", {
          onSubmit: handleSubmit(onSubmit),
          children: [currentStep === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_images_pair__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
              children: ["Uber Insurance quote in ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 43
              }, undefined), " under 2 minutes"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
              children: "Compare all Uber approved Private Hire motor insurance providers in one place. All Private Hire motor policies must be purchased online. All providers offer automatic uploads of your insurance certificate directly to your Uber account, which will help streamline your verification process."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "fields",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                htmlFor: "selectField",
                className: "labelName",
                children: "Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                className: "licField",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("select", {
                  id: "selectField",
                  defaultValue: "",
                  className: `inputFields ${errors.title ? "error" : ""}`,
                  name: "title",
                  ...register("title", {
                    required: true
                  }),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                    value: "",
                    disabled: true,
                    hidden: true,
                    children: "e.g Mrs"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                    value: "Mr",
                    children: "Mr"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                    value: "Ms",
                    children: "Ms"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                    value: "Mrs",
                    children: "Mrs"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 21
                }, undefined), watch("title") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
                  src: tick,
                  alt: "Tick Icon",
                  className: "tickIcon"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 19
              }, undefined), errors.title && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                className: "errorField",
                children: "This field is required"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 21
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                className: "nameFields",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                    className: "labelName",
                    htmlFor: "firstName",
                    children: "First Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                    className: "licField",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                      placeholder: "Enter your first name",
                      type: "text",
                      id: "firstName",
                      name: "firstName",
                      className: `inputFields nameinput ${errors.firstName ? "error" : ""}`,
                      ...register("firstName", {
                        required: true
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 121,
                      columnNumber: 25
                    }, undefined), watch("firstName") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
                      src: tick,
                      alt: "Tick Icon",
                      className: "tickIcon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 132,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 23
                  }, undefined), errors.firstName && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                    className: "errorField",
                    children: "This field is required"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                    className: "labelName",
                    htmlFor: "lastName",
                    children: "Last Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                    className: "licField",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                      placeholder: "Enter your last name",
                      type: "text",
                      id: "lastName",
                      name: "lastName",
                      className: `inputFields nameinput ${errors.lastName ? "error" : ""}`,
                      ...register("lastName", {
                        required: true
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 25
                    }, undefined), watch("lastName") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
                      src: tick,
                      alt: "Tick Icon",
                      className: "tickIcon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 161,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 23
                  }, undefined), errors.lastName && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                    className: "errorField",
                    children: "This field is required"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 169,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                  htmlFor: "dob",
                  className: "labelName",
                  children: "Date of Birth"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  className: "dobFields",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("select", {
                      id: "day",
                      className: `inputFields dateInputFields text-padding ${errors.day ? "error" : ""}`,
                      name: "day",
                      defaultValue: "",
                      ...register("day", {
                        required: true
                      }),
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                        value: "",
                        disabled: true,
                        hidden: true,
                        children: "Day"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 190,
                        columnNumber: 27
                      }, undefined), Array.from({
                        length: 31
                      }, (_, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                        value: i + 1,
                        children: i + 1
                      }, i, false, {
                        fileName: _jsxFileName,
                        lineNumber: 194,
                        columnNumber: 29
                      }, undefined))]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 181,
                      columnNumber: 25
                    }, undefined), errors.day && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                      className: "errorField",
                      children: "This field is required"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 200,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 180,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("select", {
                      id: "month",
                      className: `inputFields dateInputFields text-padding ${errors.month ? "error" : ""}`,
                      name: "month",
                      defaultValue: "",
                      ...register("month", {
                        required: true
                      }),
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                        value: "",
                        disabled: true,
                        hidden: true,
                        children: "Month"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 215,
                        columnNumber: 27
                      }, undefined), months.map(month => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                        value: month.value,
                        children: month.name
                      }, month.value, false, {
                        fileName: _jsxFileName,
                        lineNumber: 219,
                        columnNumber: 29
                      }, undefined))]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 206,
                      columnNumber: 25
                    }, undefined), errors.month && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                      className: "errorField",
                      children: "This field is required"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 225,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("select", {
                      id: "year",
                      defaultValue: "",
                      className: `inputFields dateInputFields text-padding ${errors.year ? "error" : ""}`,
                      name: "year",
                      ...register("year", {
                        required: true
                      }),
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                        value: "",
                        disabled: true,
                        hidden: true,
                        children: "Year"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 240,
                        columnNumber: 27
                      }, undefined), Array.from({
                        length: 100
                      }, (_, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                        value: new Date().getFullYear() - i,
                        children: new Date().getFullYear() - i
                      }, new Date().getFullYear() - i, false, {
                        fileName: _jsxFileName,
                        lineNumber: 244,
                        columnNumber: 29
                      }, undefined))]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 231,
                      columnNumber: 25
                    }, undefined), errors.year && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                      className: "errorField",
                      children: "This field is required"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 253,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 230,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                className: "licField",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "name",
                  children: "Driving License Number"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  className: "licField",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
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
                    lineNumber: 265,
                    columnNumber: 23
                  }, undefined), watch("license") && watch("license").match(/^[a-zA-Z0-9]{3}-[a-zA-Z0-9]{2}-[a-zA-Z0-9]{3}\/[a-zA-Z0-9]{5}$/) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
                    src: tick,
                    alt: "Tick Icon",
                    className: "tickIcon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 285,
                    columnNumber: 27
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 264,
                  columnNumber: 21
                }, undefined), errors.license && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                  className: "errorMessage",
                  children: errors.license.message
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 293,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
                type: "button",
                className: "getStartedButton",
                onClick: handleSubmit(onSubmit),
                children: "Get Started"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 298,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 17
            }, undefined)]
          }, void 0, true), currentStep === 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
              children: "Welcome Pete!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "fields",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "address",
                  children: "House name or number"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 315,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  className: "licField",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                    placeholder: "e.g 12",
                    type: "text",
                    id: "address",
                    name: "address",
                    className: `inputFields nameinput ${errors.address ? "error" : ""}`,
                    ...register("address", {
                      required: true
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 319,
                    columnNumber: 23
                  }, undefined), watch("address") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
                    src: tick,
                    alt: "Tick Icon",
                    className: "tickIcon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 330,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 318,
                  columnNumber: 21
                }, undefined), errors.address && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                  className: "errorField",
                  children: "This field is required"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 334,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 314,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "postcode",
                  children: "Postcode"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 338,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  className: "licField",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                    placeholder: "e.g M50 3YJ",
                    type: "text",
                    id: "postcode",
                    name: "postcode",
                    className: `inputFields nameinput ${errors.postcode ? "error" : ""}`,
                    ...register("postcode", {
                      required: true
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 342,
                    columnNumber: 23
                  }, undefined), watch("postcode") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
                    src: tick,
                    alt: "Tick Icon",
                    className: "tickIcon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 353,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 341,
                  columnNumber: 21
                }, undefined), errors.postcode && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                  className: "errorField",
                  children: "This field is required"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 357,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 337,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                className: "addressButton",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
                  type: "button",
                  className: "lookAddbtn",
                  children: "Look up address"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 361,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
                  type: "button",
                  className: "addManbtn",
                  children: "Enter address manually"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 364,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 360,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                className: "addressFind",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
                  className: "findAddbtn",
                  href: "#",
                  children: "Having trouble finding your address?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 369,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 368,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "phone",
                  children: "Contact Form"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 375,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  className: "licField conMar",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_1__.Controller, {
                    name: "phone",
                    control: control,
                    rules: {
                      required: true
                    },
                    render: ({
                      field
                    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((react_phone_input_2__WEBPACK_IMPORTED_MODULE_6___default()), {
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
                        className: ` phoneInput nameinput ${errors.phone ? "error" : ""}`
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 384,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 379,
                    columnNumber: 23
                  }, undefined), watch("phone") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
                    src: tick,
                    alt: "Tick Icon",
                    className: "tickIcon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 404,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 378,
                  columnNumber: 21
                }, undefined), errors.phone && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                  className: "errorField",
                  children: "This field is required"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 408,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 374,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                className: "emailField",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "email",
                  children: "Email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 412,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  className: "licField",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                    placeholder: "example@email.com",
                    type: "email",
                    id: "email",
                    name: "email",
                    className: `inputFields nameinput ${errors.email ? "error" : ""}`,
                    ...register("email", {
                      required: "This field is required",
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                        message: "Invalid email address"
                      }
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 416,
                    columnNumber: 23
                  }, undefined), watch("email") && /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(watch("email")) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
                    src: tick,
                    alt: "Tick Icon",
                    className: "tickIcon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 436,
                    columnNumber: 27
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 415,
                  columnNumber: 21
                }, undefined), errors.email && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                  className: "errorField",
                  children: errors.email.message
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 444,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 411,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                htmlFor: "selectField",
                className: "labelName",
                children: "Uber Driving Rating"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 448,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                className: "licField",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("select", {
                  id: "selectField",
                  defaultValue: "",
                  className: `inputFields ${errors.Rating ? "error" : ""}`,
                  name: "title",
                  ...register("Rating", {
                    required: true
                  }),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                    value: "",
                    disabled: true,
                    hidden: true,
                    children: "Please Select"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 459,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                    value: "Mr",
                    children: "Blue"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 462,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                    value: "Ms",
                    children: "Gold"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 463,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                    value: "Mrs",
                    children: "Platinum"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 464,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                    value: "Mrs",
                    children: "Diamond"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 465,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 452,
                  columnNumber: 21
                }, undefined), watch("Rating") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
                  src: tick,
                  alt: "Tick Icon",
                  className: "tickIcon"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 468,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 451,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
                className: "contactDetail",
                children: "This is your Uber Pro Status. Please ensure this is accurate as it will be validated by Uber and will affect your price."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 471,
                columnNumber: 19
              }, undefined), errors.Rating && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                className: "errorField",
                children: "This field is required"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 476,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "multiBtn",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
                type: "Button",
                className: "prevBtn",
                onClick: handlePrevious,
                children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
                  className: "PrevImg",
                  src: previous,
                  alt: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 486,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 480,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
                type: "submit",
                className: "nextBtn",
                children: "Next"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 488,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 479,
              columnNumber: 17
            }, undefined)]
          }, void 0, true), currentStep === 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
              children: "Quote Details"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 497,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 498,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "fields",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "date",
                  children: "When would you like your cover to start?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 501,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  className: "licField",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                    type: "date",
                    id: "date",
                    name: "date",
                    className: `inputFields nameinput ${errors.date ? "error" : ""}`,
                    ...register("date", {
                      required: true
                    }),
                    onChange: handleDateChange,
                    style: {
                      display: "none"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 505,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                    placeholder: "MM/DD/YYYY",
                    type: "text",
                    id: "displayDate",
                    name: "displayDate",
                    className: `inputFields nameinput ${errors.date ? "error" : ""}`,
                    ...register("displayDate", {
                      required: true
                    }),
                    onFocus: e => {
                      e.target.blur();
                      document.getElementById("date").focus();
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 516,
                    columnNumber: 23
                  }, undefined), watch("displayDate") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
                    src: tick,
                    alt: "Tick Icon",
                    className: "tickIcon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 531,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 504,
                  columnNumber: 21
                }, undefined), errors.date && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                  className: "errorField",
                  children: "This field is required"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 535,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 500,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "VehicleReg",
                  children: "Vehicle Registration"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 540,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  className: "licField",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                    placeholder: "e.g EA21 WLP",
                    type: "text",
                    id: "VehicleReg",
                    name: "VehicleReg",
                    className: `inputFields nameinput ${errors.VehicleReg ? "error" : ""}`,
                    ...register("VehicleReg", {
                      required: true
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 544,
                    columnNumber: 23
                  }, undefined), watch("VehicleReg") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
                    src: tick,
                    alt: "Tick Icon",
                    className: "tickIcon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 555,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 543,
                  columnNumber: 21
                }, undefined), errors.VehicleReg && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                  className: "errorField",
                  children: "This field is required"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 559,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 539,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                className: "addressButton",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
                  type: "button",
                  className: "lookAddbtn lookBtn",
                  children: "Look up registration"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 563,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
                  type: "button",
                  className: "addManbtn",
                  children: "Enter manually"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 566,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 562,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                className: "addressFind",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
                  className: "findAddbtn",
                  href: "#",
                  children: "Having trouble finding your vehicle?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 571,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 570,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                className: "labelName",
                children: "Who owns this vehicle?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 575,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                className: "radioGroup",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                  className: "radioLabel",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                    type: "radio",
                    value: "me",
                    ...register("ownership", {
                      required: true
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 578,
                    columnNumber: 23
                  }, undefined), "Me"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 577,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                  className: "radioLabel",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                    type: "radio",
                    value: "someone_else",
                    ...register("ownership", {
                      required: true
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 586,
                    columnNumber: 23
                  }, undefined), "Someone else"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 585,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 576,
                columnNumber: 19
              }, undefined), errors.ownership && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                className: "errorField",
                children: "This field is required"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 595,
                columnNumber: 21
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                className: "dateStyle",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                  htmlFor: "quotedob",
                  className: "labelName",
                  children: "Date of Birth"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 599,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  className: "dobFields",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("select", {
                      id: "quoteDay",
                      className: `inputFields dateInputFields text-padding ${errors.quoteDay ? "error" : ""}`,
                      name: "quoteDay",
                      defaultValue: "",
                      ...register("quoteDay", {
                        required: true
                      }),
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                        value: "",
                        disabled: true,
                        hidden: true,
                        children: "Day"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 613,
                        columnNumber: 27
                      }, undefined), Array.from({
                        length: 31
                      }, (_, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                        value: i + 1,
                        children: i + 1
                      }, i, false, {
                        fileName: _jsxFileName,
                        lineNumber: 617,
                        columnNumber: 29
                      }, undefined))]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 604,
                      columnNumber: 25
                    }, undefined), errors.quoteDay && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                      className: "errorField",
                      children: "This field is required"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 623,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 603,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("select", {
                      id: "quoteMonth",
                      className: `inputFields dateInputFields text-padding ${errors.quoteMonth ? "error" : ""}`,
                      name: "quoteMonth",
                      defaultValue: "",
                      ...register("quoteMonth", {
                        required: true
                      }),
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                        value: "",
                        disabled: true,
                        hidden: true,
                        children: "Month"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 638,
                        columnNumber: 27
                      }, undefined), months.map(month => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                        value: month.value,
                        children: month.name
                      }, month.value, false, {
                        fileName: _jsxFileName,
                        lineNumber: 642,
                        columnNumber: 29
                      }, undefined))]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 629,
                      columnNumber: 25
                    }, undefined), errors.quoteMonth && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                      className: "errorField",
                      children: "This field is required"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 648,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 628,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("select", {
                      id: "quoteYear",
                      defaultValue: "",
                      className: `inputFields dateInputFields text-padding ${errors.quoteYear ? "error" : ""}`,
                      name: "quoteYear",
                      ...register("quoteYear", {
                        required: true
                      }),
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                        value: "",
                        disabled: true,
                        hidden: true,
                        children: "Year"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 663,
                        columnNumber: 27
                      }, undefined), Array.from({
                        length: 100
                      }, (_, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                        value: new Date().getFullYear() - i,
                        children: new Date().getFullYear() - i
                      }, new Date().getFullYear() - i, false, {
                        fileName: _jsxFileName,
                        lineNumber: 667,
                        columnNumber: 29
                      }, undefined))]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 654,
                      columnNumber: 25
                    }, undefined), errors.quoteYear && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                      className: "errorField",
                      children: "This field is required"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 676,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 653,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 602,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 598,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                className: "emailField",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "seats",
                  children: "How Many Seats Does Your Taxi Have"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 685,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  className: "licField",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                    placeholder: "e.g. 4",
                    type: "number",
                    id: "seats",
                    name: "seats",
                    className: `inputFields nameinput ${errors.seats ? "error" : ""}`,
                    ...register("seats", {
                      required: "This field is required"
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 689,
                    columnNumber: 23
                  }, undefined), watch("seats") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
                    src: tick,
                    alt: "Tick Icon",
                    className: "tickIcon"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 702,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 688,
                  columnNumber: 21
                }, undefined), errors.seats && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                  className: "errorField",
                  children: errors.seats.message
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 706,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 684,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                className: "inputFieldContainer",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
                  className: "labelName",
                  htmlFor: "marketValue",
                  children: "Estimated market value of vehicle"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 710,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  className: "inputRow",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("select", {
                    id: "currency",
                    name: "currency",
                    defaultValue: "",
                    className: "currencySelect",
                    ...register("currency", {
                      required: true
                    }),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                      value: "",
                      disabled: true,
                      hidden: true,
                      children: "\xA3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 721,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                      value: "\xA3",
                      children: "\xA3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 724,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                      value: "$",
                      children: "$"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 725,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                      value: "\u20AC",
                      children: "\u20AC"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 726,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 714,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                    className: "inputWithIcon",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                      placeholder: "e.g 7,000",
                      type: "number",
                      id: "marketValue",
                      name: "marketValue",
                      className: `inputFields  ${errors.marketValue ? "error" : ""}`,
                      ...register("marketValue", {
                        required: "This field is required"
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 729,
                      columnNumber: 25
                    }, undefined), watch("marketValue") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
                      src: tick,
                      alt: "Tick Icon",
                      className: "tickIcon"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 742,
                      columnNumber: 27
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 728,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 713,
                  columnNumber: 21
                }, undefined), errors.marketValue && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                  className: "errorField",
                  children: errors.marketValue.message
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 751,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 709,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 499,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "multiBtn",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
                type: "Button",
                className: "prevBtn",
                onClick: handlePrevious,
                children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
                  className: "PrevImg",
                  src: previous,
                  alt: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 764,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 758,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
                type: "submit",
                className: "nextBtn",
                children: "Next"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 766,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 757,
              columnNumber: 17
            }, undefined)]
          }, void 0, true)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
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
/******/ 	__webpack_require__.h = () => ("c9e93e9d40353956")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=main.1cc2819a13e57b03.hot-update.js.map