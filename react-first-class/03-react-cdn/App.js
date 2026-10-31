const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World from React"
);

const paragraph = React.createElement(
    "p",
    null,
    "My first React program"
);

const container = React.createElement(
    "div",
    { className: "container" },
    heading,
    paragraph
);

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(container);

