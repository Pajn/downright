import React from "react";

// TODO: By default render a plain <a> tag. Consumers can pass in react-dom-router's
// Link if they want. Could export the default styles to use them on react-dom-router?
// Or pass them all in from the top?

export default ({ children, ...others }) => <a {...others}>{children}</a>;
