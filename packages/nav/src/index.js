import React from "react";

import analyticsBus from "home/analytics";
import { useSubject } from "home/useSubject";

const Header = ({ count, onClear }) => {
    const itemCount = useSubject(count, 0);
    return (
        <header style={{ fontSize: "xx-large" }}>
            <span>Header - Cart count is {itemCount}</span>
            <button onClick={() => {  analyticsBus.next({ type: "onClear" }); onClear();}}>Clear</button>
        </header>
    );
};
export default Header;
