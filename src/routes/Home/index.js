import React from "react";

import Search from 'components/Search';
import LatestBlocks from 'components/LatestBlocks';

class Home extends React.Component {

    render() {
        return (
            <div className="Home">
                <Search/>
                <LatestBlocks/>
            </div>
        );
    }
}


export default Home;
