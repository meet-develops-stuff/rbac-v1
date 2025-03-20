import * as Yup from "yup";

const DepartmentValidation = Yup.object({
    id: Yup.string()
    .required("Department ID is required")
    .matches(
      /^[A-Za-z]{2}\d{3}$/,
      "Department ID must start with two letters followed by three digits"
    ),
  name: Yup.string()
    .required("Department name is required")
    .min(3, "Department name must be at least 3 characters long"),
  manager: Yup.string().required("Manager name is required"),
  accessLevel: Yup.string()
    .oneOf(["Admin", "Manager", "Editor", "User"], "Invalid access level")
    .required("Access Level is required"),
  description: Yup.string()
  .required("Description is required")
  .max(200, "Description limit exceeded :("),
});

export default DepartmentValidation;
