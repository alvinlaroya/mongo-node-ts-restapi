"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var nanoid_1 = require("nanoid");
var PostSchema = new mongoose_1.default.Schema({
    postId: {
        type: String,
        required: true,
        unique: true,
        default: function () { return nanoid_1.nanoid(10); },
    },
    user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, default: true },
    body: { type: String, default: true },
}, { timestamps: true });
var Post = mongoose_1.default.model("Post", PostSchema);
exports.default = Post;
