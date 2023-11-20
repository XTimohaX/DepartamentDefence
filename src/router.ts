import Home from "./Home";
import React from "react";

import History from "./History";


interface Route {
    path: string;
    Component: React.ComponentType;
}

export const Router:Route[] =[
    {
        path:"/",
        Component: Home

    },
    {
        path: "/history",
        Component: History
    }
]