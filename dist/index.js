"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (res, req) {
    res.send('Hello from Express and TypeScript');
});
var port = process.env.PORT || 3000;
app.listen(port, function () { return console.log("App Listening on Port " + port); });
