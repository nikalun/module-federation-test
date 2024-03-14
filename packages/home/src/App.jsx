import React from "react";
import ReactDOM from "react-dom";
import { HOCFederatedWrapper } from "./HOCFederatedWrapper";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

function cartReducer(state = { count: 0 }, action) {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1,
            };
        case "RESET":
            return {
                ...state,
                count: 0,
            };
        default:
            return state;
    }
}
const store = createStore(cartReducer);

import "./index.css";

const Header = HOCFederatedWrapper(React.lazy(() => import("nav/Header")));

const App = connect((state) => state)(({ count, dispatch }) => {
    const onAddToCart = () => {
        dispatch({
            type: "INCREMENT",
        });
    };
    return (
        <div>
            <Header />
            <div>Hi there, I'm React from Webpack 5.</div>
            <button onClick={onAddToCart}>Buy me!</button>
            <div>Cart count is {count}</div>
        </div>
    );
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("app")
);
