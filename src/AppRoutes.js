import React from "react";

const HomePage = React.lazy(() =>
    import ("./pages/Home"));
const ContactPage = React.lazy(() =>
    import ("./pages/Contact"));
const BlogPage = React.lazy(() =>
    import ("./pages/Blog"));
const AproposPage = React.lazy(() =>
    import ("./pages/Apropos"));

const PostDetail = React.lazy(() =>
    import ("./components/blog/PostDetail"));

const FullCat = React.lazy(() =>
    import ("./components/cards/PostCategory"));

const AppRoutes = [{
        path: "/accueil",
        exact: true,
        name: "Home",
        component: HomePage,
    },
    {
        path: "/blog",
        exact: true,
        name: "Blog",
        component: BlogPage,
    },
    {
        path: "/blog/:slug",
        exact: true,
        name: "Blog",
        component: PostDetail,
    },
    {
        path: "/blog-by-category/:slug",
        exact: true,
        name: "Blog",
        component: FullCat,
    },
    {
        path: "/contacts",
        exact: true,
        name: "Contacts",
        component: ContactPage,
    },
    {
        path: "/a-propos",
        exact: true,
        name: "A Propos",
        component: AproposPage,
    },
];

export default AppRoutes;