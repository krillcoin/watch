import React from "react";

class Search extends React.Component {
    render() {
        return (
            <div className="main-search-form container">
                <form>
                    <h4>Search accounts and blocks:</h4>

                    <div className="row">
                        <div className="col s11">
                            <input placeholder="ADDRESS, BLOCK HASH OR HEIGHT"/>
                        </div>
                        <div className="col s1">
                            <button class="btn waves-effect waves-light"
                                    style={{background: "#DDDDDD", color: "black"}}>
                                GO
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;
