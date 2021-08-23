import React from 'react';
import "./Styles/header.css"
import {Link} from "react-router-dom";

const Header = ():JSX.Element => {

    return (
        <>
<div className="header">

<ul>
   <li><Link to={"/cross"} >Крестики-нолики</Link></li>
    <li><Link to={"/quiz"} >Онлайн тест</Link></li>
  </ul>

</div>
        </>
    )

}

export default Header;

