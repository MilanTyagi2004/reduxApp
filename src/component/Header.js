import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    const amount = useSelector(state => state.amount); // Using 'amount' consistently
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light"> {/* className corrected */}
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Dholakpur Bank</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                        </ul>
                        <div>
                            <button disabled={true} className="btn btn-primary">Balance: {amount}</button> {/* Using 'amount' from state */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
