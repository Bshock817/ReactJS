const title = React.createElement("h1", null, "Hello Dojo!");
const message = React.createElement("h2", null, "Things i need to do:");
const items = ["Learn React", "Climb Mt. Rainier", "Feed the dogs"];
const list = React.createElement("ul", null, items.map((item,index) =>
    React.createElement("li",{key: index}, `${item}`)
    ));
const app = React.createElement("div", null, title, message, list);

ReactDOM.render(app, document.getElementById("app"));