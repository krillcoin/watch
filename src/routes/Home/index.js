import React from "react";

import LatestBlocks from 'components/LatestBlocks';

class Home extends React.Component {

    render() {
        return (
            <div className="Home">
                <LatestBlocks/>
            </div>
        );
    }
}


export default Home;
