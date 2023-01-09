import React from "react";

const Dashboard = React.lazy(() => import("./components/backOffice/Dashboard"));

const ListPosts = React.lazy(() =>
  import("./components/backOffice/Posts/ListPosts")
);
const EditPost = React.lazy(() =>
  import("./components/backOffice/Posts/EditPost")
);
const ShowPost = React.lazy(() =>
  import("./components/backOffice/Posts/ShowPost")
);
const AddPost = React.lazy(() =>
  import("./components/backOffice/Posts/AddPost")
);

const ListCategories = React.lazy(() =>
  import("./components/backOffice/Categories/ListCategories")
);
const EditCategory = React.lazy(() =>
  import("./components/backOffice/Categories/EditCategory")
);
const ShowCategory = React.lazy(() =>
  import("./components/backOffice/Categories/ShowCategory")
);
const AddCategory = React.lazy(() =>
  import("./components/backOffice/Categories/AddCategory")
);

const AdminRoutes = [
  {
    path: "/dashboard/accueil",
    exact: true,
    name: "Tableau de bord",
    component: Dashboard,
  },
  {
    path: "/dashboard/all-posts",
    exact: true,
    name: "Posts",
    component: ListPosts,
  },
  {
    path: "/dashboard/posts/edit/:slug",
    exact: true,
    name: "Posts",
    component: EditPost,
  },
  {
    path: "/dashboard/posts/show/:slug",
    exact: true,
    name: "Posts",
    component: ShowPost,
  },
  {
    path: "/dashboard/posts/add",
    exact: true,
    name: "Posts",
    component: AddPost,
  },
  {
    path: "/dashboard/all-categories",
    exact: true,
    name: "Categories",
    component: ListCategories,
  },
  {
    path: "/dashboard/categories/edit/:slug",
    exact: true,
    name: "Categories",
    component: EditCategory,
  },
  {
    path: "/dashboard/categories/show/:slug",
    exact: true,
    name: "Categories",
    component: ShowCategory,
  },
  {
    path: "/dashboard/categories/add",
    exact: true,
    name: "Categories",
    component: AddCategory,
  },
];

export default AdminRoutes;
