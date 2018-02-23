import React from "react";
import { Link } from "react-router-dom";

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
    function convertTime(timestamp) {
      var date = new Date(timestamp * 1000);
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var seconds = "0" + date.getSeconds();
      var formattedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
      return formattedTime;
    }

    const { block } = this.props;
    return (
      <div style={{ background: "#F0F0F0", display: "flex", justifyContent:"space-around", alignItems: "center", margin: "1rem 0", letterSpacing: "0.02em", border: "1px solid #D9DEE4", height:"45px"}}>
        <div style={{display: "inline", padding: "0.6em 1em", width:"10%" }}>#{block.height}</div>
        <div style={{display: "inline", padding: "0.6em 1em", width:"10%"  }}> {convertTime(block.timestamp)} </div>
        <div style={{display: "inline", padding: "0.6em 1em", width:"10%"  }}>{block.transaction_count} txns </div>
        <div style={{ display: "inline", padding: "0.6em 1em", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", width:"60%"  }}>
          found by <Link to={`/account/${block.miner_address.replace(/ /g, "+")}`}>{block.miner_address}</Link>
        </div>
        <div style={{display: "inline", padding: "0.6em 1em", width:"10%" }}>{block.size} Bytes</div>
      </div>
    );
  }
}

export default Block;
