import React from "react";
import FederatedWrapper from "./FederatedWrapper";

export const HOCFederatedWrapper = (Component) => ({ error, delayed, ...props }) => (
    <FederatedWrapper error={error} delayed={delayed}>
        <Component {...props} />
    </FederatedWrapper>
)
