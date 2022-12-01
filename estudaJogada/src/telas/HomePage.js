import React from "react";
import Home from "./Home";
import home from "../mocks/homemock";

export default function HomePage(){
    return <Home {...home} />
}