"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./mylabel.css");
var MyLabel = function (_a) {
    var _b = _a.allCaps, allCaps = _b === void 0 ? true : _b, _c = _a.backgroundColor, backgroundColor = _c === void 0 ? 'transparent' : _c, _d = _a.color, color = _d === void 0 ? 'primary' : _d, fontColor = _a.fontColor, _e = _a.label, label = _e === void 0 ? 'No label' : _e, _f = _a.size, size = _f === void 0 ? 'normal' : _f;
    return ((0, jsx_runtime_1.jsx)("span", __assign({ className: "label ".concat(size, " text-").concat(color), style: { color: fontColor, backgroundColor: backgroundColor } }, { children: allCaps ? label.toUpperCase() : label })));
};
exports.MyLabel = MyLabel;
