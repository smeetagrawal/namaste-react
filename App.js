import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "hello", abc: "xyz" }, "This is h3 tag"),
    React.createElement("h2", { id: "heading", abc: "xyz" }, "This is h6 tag"),
  ]),
]);

root.render(parent);
