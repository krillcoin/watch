import React from "react";
import Block from "./block";

class LatestBlocks extends React.Component {

    render() {
        return (
            <div className="container">
                <h5>LATEST BLOCKS</h5>
                <Block/>
                <Block/>
                <Block/>
                <Block/>
            </div>
        );
    }
}

export default LatestBlocks;
