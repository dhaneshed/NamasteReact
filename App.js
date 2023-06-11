const heading = React.createElement("h1",{style:{color:'red'}},"Namaste EveryOne from React!!!!");
  const heading2 = React.createElement("h1",{style:{color:'blue'}},"Namaste Everyone from Javascript!!!");
  const heading3 = React.createElement("h1",{style:{color:'green'}}, "Namaste Everyone from HTML!!!");
  const container = React.createElement("div", {id:"container"},[heading,heading2,heading3]);
  const root= ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);