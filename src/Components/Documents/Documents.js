import React from "react";
import s from './main.module.css'
import {NavLink} from "react-router-dom";

const Documents = () => {
    let path = '/udo'
    return (

            <div className={s.bb}>
                <div className={s.white}></div>
                <NavLink to={path}>
                    <div className={s.path}></div>
                </NavLink>

            </div>
    )
}
export default Documents