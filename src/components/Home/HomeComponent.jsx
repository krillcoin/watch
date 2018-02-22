import React from "react";
import { connect } from "react-redux";
import { Router, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import KrillCoinBlock from "../KrillcoinBlock/KrillcoinBlock";

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Home">
        <Navbar />
        <div className="main-search-form container">
          <form>
            <h4>Search accounts and blocks:</h4>

            <div className="row">
              <div className="col s11">
                <input placeholder="ADDRESS, BLOCK HASH OR HEIGHT" />
              </div>
              <div className="col s1">
                <button class="btn waves-effect waves-light" style={{ background: "#DDDDDD", color: "black" }}>
                  GO
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="container">
          <h5>LATEST BLOCKS</h5>
          <KrillCoinBlock />
          <KrillCoinBlock />
          <KrillCoinBlock />
          <KrillCoinBlock />
        </div>
        <div id="footer">
          <p>This web application is built on top of the Krillcoin Blockchain. View Source Code on Github.</p>
        </div>
      </div>
    );
  }
}

export function mapStateToProps(store) {
  return {};
}

export default connect(mapStateToProps)(HomeComponent);
