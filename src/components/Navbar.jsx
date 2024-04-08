import {useAuth0} from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

function Navbar() {
    const {isAuthenticated, user} = useAuth0();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid header">
                <a className="navbar-brand" href="#">
                    Joffer
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {isAuthenticated && (
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                        )}
                    </ul>
                    <div className="m-2">{isAuthenticated && user.name}</div>
                    <div>{isAuthenticated && <LogoutButton/>}</div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
