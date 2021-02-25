"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(3333, function () {
    console.log("\n  ---------------------------------\n  \n  Wolf Server started on port 3333\n  \uD83D\uDC3A \uD83E\uDD1F\n  \n  ---------------------------------\n  ");
});
