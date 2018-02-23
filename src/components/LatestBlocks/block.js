import React from "react";
import {Link} from 'react-router-dom';

/*
{"height":1046,
"hash":"0b7f488d27873b64c5099444d730d1766038e8d75ad4d747ba7892a7477b2b5e",
"size":429,
"value":0,
"fees":0,
"reward":500000000,
"timestamp":1519410557,
"transaction_count":0,
"difficulty":1,
"miner_address":"KL60 0CQA K5X6 Y9X3 3R9Q 0BK4 7K7S 9V69 HGJ2"}
 */

class Block extends React.Component {
    render() {
        const {block} = this.props;
        return (
            <div className="row block-row">
                <div className="col s1">#{block.height}</div>
                <div className="col s2">12:23:14 PM</div>
                <div className="col s2">0 transactions</div>
                <div className="col s6" style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden"}}>
                    found by <Link to={`/account/${(block.miner_address).replace(/ /g, '+')}`}>{block.miner_address}</Link>
                </div>
                <div className="col s1">494 Bytes</div>
            </div>
        );
    }
}

export default Block;


