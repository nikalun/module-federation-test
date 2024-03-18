import React from "react";
import ReactDOM from "react-dom";
import { HOCFederatedWrapper } from "./HOCFederatedWrapper";
import {SingleValue} from "./SingleValue";
import {sendAnalytics} from "./analytics";
import {sendAnalytics2, sendAnalytics1} from "./analytics2";
import { newClassObject } from './exportClass'
import {GetArray} from "./exportArray";
import { ObjectValue } from './exportObject'
import {System} from "./dynamicImport";
import "./index.css";

const Header = HOCFederatedWrapper(React.lazy(() => import("nav/Header")));


const App = () => {
    sendAnalytics("Rendering");
    sendAnalytics1('Rendering 1');
    sendAnalytics2('Rendering 2');

    newClassObject("initial value").then((theObject) => {
        theObject.logString();
    });
    return (
        <div>
            <System system={{ url: 'http://localhost:8082/remoteEntry.js', scope: 'widget', module: './Widget'}} />
            <ObjectValue />
            <GetArray />
            <Header />
            <SingleValue />
            <div>Hi there, I'm React from Webpack 5.</div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
