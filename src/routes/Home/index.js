import React from "react";

import LatestBlocks from 'components/LatestBlocks';

class Home extends React.Component {

    render() {
        const center ={
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
        return (
            <div className="Home" style={center}>
                <LatestBlocks/>
            </div>
        );
    }
}


export default Home;
