"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSessionSchema = exports.createUserSchema = void 0;
var yup_1 = require("yup");
exports.createUserSchema = yup_1.object({
    body: yup_1.object({
        name: yup_1.string().required("Name is required"),
        password: yup_1.string()
            .required("Password is required")
            .min(6, "Password is too short - should be 6 chars minimum.")
            .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain Latin letters."),
        passwordConfirmation: yup_1.string().oneOf([yup_1.ref("password"), null], "Passwords must match"),
        email: yup_1.string()
            .email("Must be a valid email")
            .required("Email is required"),
    }),
});
exports.createUserSessionSchema = yup_1.object({
    body: yup_1.object({
        password: yup_1.string()
            .required("Password is required")
            .min(6, "Password is too short - should be 6 chars minimum.")
            .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain Latin letters."),
        email: yup_1.string()
            .email("Must be a valid email")
            .required("Email is required"),
    }),
});
