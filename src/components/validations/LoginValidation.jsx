import * as Yup from "yup";

const LoginValidation = Yup.object({
    email: Yup.string()
        .lowercase()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .required('Password is required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
});

export default LoginValidation;
