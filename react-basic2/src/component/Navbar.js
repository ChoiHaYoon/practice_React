import React,{useState} from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* 
                    리액트 라우터 사용법(Link)
                    여기서 a태그가 아니라 react-router-dom으로 가져온 Link태그를 걸어준다 
                    href속성이 아닌 원하는 페이지값을 to속성에 넣어준다
                */}
                <Link className="navbar-brand" to="/">HOME</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/movies">Movies</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/users">Users</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;