import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import EduviCoursesDetails from "pages/EduviCoursesDetails";
import EduviShop from "pages/EduviShop";
import EduviJoinAsTeacher from "pages/EduviJoinAsTeacher";
import Singlementordetails from "pages/Singlementordetails";
import SignUp from "./modals/SignUp";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <EduviCoursesDetails />,
    },
    {
      path: "/signup",
      element: <SignUp isOpen={true}/>,
    }, 
    {
      path: "eduvishop",
      element: <EduviShop />,
    },
    {
      path: "eduvijoinasteacher",
      element: <EduviJoinAsTeacher />,
    },
    {
      path: "singlementordetails",
      element: <Singlementordetails />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
