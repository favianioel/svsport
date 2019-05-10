import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogPosts from "./views/BlogPosts";

export default [

  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },

];
