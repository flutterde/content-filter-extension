
export const loginAdminValidator = {
    email: {
        in: ["body"],
        notEmpty: {
            errorMessage: "Must not be empty",
        },
        isString: {
            errorMessage: "Must be a string",
        },
        isEmail: {
            errorMessage: "Must be a valid email Address",
        },
    },
    password: {
        in: ["body"],
        notEmpty: {
            errorMessage: "Must not be empty",
        },
        isString: {
            errorMessage: "Must be a string",
        },
    },
}