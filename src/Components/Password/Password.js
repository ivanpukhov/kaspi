import React from "react";
import s from './main.module.css'
import {NavLink} from "react-router-dom";

const Password = () => {
    let path = '/documents'
    return (
        <NavLink to={path}>

            <div className={s.bb}>
                <div className={s.white}></div>
            </div>
        </NavLink>


    )
}
export default Password