import React from "react";
import ReactDOM from "react-dom";
import { HOCFederatedWrapper } from "./HOCFederatedWrapper";
import { observable } from "mobx";
import { observer } from "mobx-react";

const store = observable({
    count: 0,
});

import "./index.css";

const Header = HOCFederatedWrapper(React.lazy(() => import("nav/Header")));

const App = observer(({ store }) => {
    return (
        <div>
            <Header store={store} />
            <div>Hi there, I'm React from Webpack 5.</div>
            <button onClick={() => (store.count = store.count + 1)}>Buy me!</button>
            <div>Cart count is {store.count}</div>
        </div>
    );
});

ReactDOM.render(<App store={store}/>, document.getElementById("app"));
