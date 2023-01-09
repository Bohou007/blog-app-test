import React from "react";

const SignUp = React.lazy(() => import("./components/authentications/SignUp"));
const Signin = React.lazy(() => import("./components/authentications/SignIn"));
const SingUpMessage = React.lazy(() =>
  import("./components/authentications/SingUpMessage")
);

const ResetPassword = React.lazy(() =>
  import("./components/authentications/ResetPassword")
);

const ForgotPassword = React.lazy(() =>
  import("./components/authentications/ForgotPassword")
);
// const ResetPasswordForms = React.lazy(() =>
//   import("./components/Authentication/ResetPasswordForms/ResetPasswordForms")
// );

const route = [
  { path: "/auth/signup", exact: true, name: "Signup", component: SignUp },
  { path: "/auth/signin", exact: true, name: "Signin", component: Signin },
  {
    path: "/sign-up/message",
    exact: true,
    name: "SingUpMessage",
    component: SingUpMessage,
  },
  {
    path: "/auth/reset-password",
    exact: true,
    name: "ResetPassword",
    component: ResetPassword,
  },
  {
    path: "/auth/forgot-password",
    exact: true,
    name: "ForgotPassword",
    component: ForgotPassword,
  },
];

export default route;
