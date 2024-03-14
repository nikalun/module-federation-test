import React from "react";
import ReactDOM from "react-dom";
import {HOCFederatedWrapper} from "./HOCFederatedWrapper";

import "./index.css";

const Header = HOCFederatedWrapper(React.lazy(() => import("nav/Header")));

const App = () => {
    const [itemCount, itemCountSet] = React.useState(0);
    const onAddToCart = () => {
        itemCountSet(itemCount + 1);
    };
    return (
        <div>
            <Header count={itemCount} onClear={() => itemCountSet(0)} />
            <div>Hi there, I'm React from Webpack 5.</div>
            <button onClick={onAddToCart}>Buy me!</button>
            <div>Cart count is {itemCount}</div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
