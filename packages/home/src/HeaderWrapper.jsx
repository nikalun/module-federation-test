import React from "react";

const FallbackHeader = React.lazy(() => import("nav/build/Header"));
const Header = React.lazy(() => import("mf-nav/Header"));
export class HeaderWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch() {}

    render() {
        if (this.state.hasError) {
            return (
                <React.Suspense fallback={<div>Loading fallback header</div>}>
                    <FallbackHeader />
                </React.Suspense>
            );
        }

        return (
            <React.Suspense fallback={<div>Header loading</div>}>
                <Header />
            </React.Suspense>
        );
    }
}
