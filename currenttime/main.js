function update(){
    const element = React.createElement("h2", null, `The Time is: ${new Date().toLocaleTimeString()}`);
    ReactDOM.render(element, document.getElementById("app"));
}
setInterval(func => {
    1000,
    update()   
});