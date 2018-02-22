import React from "react";

class Block extends React.Component {
  render() {
    return (
      <div className="row block-row" >
        <div className="col s1">#112753 </div>
        <div className="col s2">12:23:14 PM </div>
        <div className="col s2">0 transactions</div>
        <div className="col s6" style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden"}}>found by NQ65 JUJ7 U92S HGCJ XDFV D720 2RVM CK0U C12G </div>
        <div className="col s1">494 Bytes</div>
      </div>
    );
  }
}

export default Block;


