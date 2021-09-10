import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faAngellist } from "@fortawesome/free-brands-svg-icons";

class HomeBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        const navlogo = 
        <Link className="logo-left" to="/">
            <svg height="25" width="70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2499.9979999999996 1386.6950000000002"><linearGradient id="a" x1="50.107%" x2="50.107%" y1="2.721%" y2="98.004%"><stop offset="0" stopColor="#f80" /><stop offset="1" stopColor="#f30" /></linearGradient><path d="M0 1137.737c0 31.024 11.247 54.481 33.737 70.382 22.491 15.898 46.533 21.52 72.126 16.868 24.041-4.653 40.91-13.185 50.607-25.593 9.693-12.408 14.542-32.962 14.542-61.657V800.372c0-24.044-8.336-44.403-25.012-61.075-16.672-16.676-37.03-25.012-61.074-25.012-23.267 0-43.237 8.336-59.912 25.012C8.339 755.969 0 776.327 0 800.372zm267.566 144.253c0 22.495 7.95 39.36 23.848 50.608 15.9 11.247 36.26 16.868 61.075 16.868 25.593 0 46.338-5.624 62.238-16.868 15.898-11.245 23.849-28.113 23.849-50.608V495.58c0-23.267-8.34-43.239-25.012-59.912-16.675-16.672-37.033-25.011-61.075-25.011-23.266 0-43.239 8.339-59.911 25.011-16.676 16.676-25.012 36.645-25.012 59.912zm266.403 37.227c0 22.492 8.143 39.36 24.43 50.607 16.286 11.245 37.226 16.869 62.822 16.869 24.816 0 45.174-5.624 61.072-16.869 15.9-11.247 23.851-28.115 23.851-50.607V601.442c0-24.041-8.339-44.595-25.012-61.657-16.675-17.061-36.644-25.59-59.911-25.59-24.044 0-44.595 8.529-61.657 25.59-17.061 17.062-25.593 37.616-25.593 61.657v717.775zm267.566 3.49c0 42.657 28.695 63.986 86.086 63.986 57.39 0 86.084-21.329 86.084-63.986V159.377c0-65.147-19.776-101.985-59.33-110.517-25.593-6.205-50.8 1.163-75.616 22.103-24.818 20.94-37.227 50.41-37.227 88.413v1163.331zm272.222 33.737V90.74c0-40.328 12.02-64.37 36.063-72.127C1161.78 6.205 1213.356 0 1264.543 0c118.657 0 229.176 27.92 331.547 83.76 102.373 55.84 185.165 132.038 248.37 228.594 63.21 96.56 99.854 203.001 109.936 319.337 47.308-20.165 97.717-30.247 151.23-30.247 108.578 0 201.452 38.39 278.618 115.17 77.168 76.782 115.754 169.072 115.754 276.875 0 108.578-38.586 201.256-115.754 278.036-77.166 76.78-169.651 115.17-277.455 115.17l-1012.097-1.163c-6.983-2.327-12.218-6.594-15.708-12.797s-5.227-11.638-5.227-16.291z" fill="url(#a)" /></svg>
            <h1 > SAMCLOUD </h1>
        </Link>

        const navbar = this.props.currentUser ? (
            <nav className="homebar-right">
                <Link className="homebar-item" to="/songs/new">Upload</Link>
                <Link className={`homebar-item homebar-profile`} to={`/`}>
                    <img className="homebar-profile-pic" src={this.props.currentUser.avatar_url} />
                    {this.props.currentUser.username}
                </Link>
                <button className="homebar-logout" onClick={this.props.logout}>Log Out</button>
                {/* <a className="homebar-item item-icon" href="https://github.com/SamuelSacco" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a> */}
            </nav>
        ) : (
            <nav className="homebar-right">
                <button className="sign-in button" onClick={() => this.props.openModal('Sign in')}>Sign in</button>
                <button className="sign-up button" onClick={() => this.props.openModal('Sign up')}>Create account</button>
            </nav>
        );
        
        
        return (
            
            <header className="homebar">
                <div className="homebar-container">
                    <nav className="homebar-left">
                        {navlogo}
                        <a className="homebar-item" href="https://www.linkedin.com/in/sam-sacco-642a59218/">
                            <FontAwesomeIcon className="fas fa-pause fa-2x" icon={faLinkedin} />
                        </a>
                        <a className="homebar-item" href="https://angel.co/u/samuel-sacco">
                            <FontAwesomeIcon className="fas fa-pause fa-2x" icon={faAngellist} />
                        </a>
                        <a className="homebar-item" href="https://www.github.com/SamuelSacco">
                            <FontAwesomeIcon className="fas fa-pause fa-2x" icon={faGithub} />
                        </a>
                    </nav>
                    {navbar}
                </div>
            </header>
        )
    }
}

export default HomeBar;