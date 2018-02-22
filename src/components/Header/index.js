import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <nav id="navbar">
                <div className="nav-wrapper">
                    <div>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><a href="#">KRILLCOIN.WATCH</a></li>
                            <li><a href="#">Search</a></li>
                            <li><a href="#">Charts</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">What is this?</a></li>
                        </ul>
                    </div>
                    <div style={{textAlign: "right"}}>
                        Status: connected @ #112939
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;