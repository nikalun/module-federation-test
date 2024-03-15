import React from "react";
import ReactDOM from "react-dom";
import { HOCFederatedWrapper } from "./HOCFederatedWrapper";
import { useSubject } from "./useSubject";
import { count } from "./Subject";
import analyticsBus from "home/analytics";

analyticsBus.subscribe((evt) => {
    console.log(`analytics: ${JSON.stringify(evt)}`);
});

import "./index.css";

const Header = HOCFederatedWrapper(React.lazy(() => import("nav/Header")));

const App = () => {
    const itemCount = useSubject(count, 0);
    const onAddToCart = () => {
        const value = itemCount + 1;
        analyticsBus.next({ type: "addToCart", value });
        count.next(value);
    };
    const onClear = () => {
        count.next(0);
    };

    return (
        <div>
            <Header count={count} onClear={onClear} />
            <div>Hi there, I'm React from Webpack 5.</div>
            <button onClick={onAddToCart}>Buy me!</button>
            <div>Cart count is {itemCount}</div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
