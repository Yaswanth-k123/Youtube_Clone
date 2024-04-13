import React, { useState } from "react";
import "./Sidebar.css";
import Data from "../../Items";
import { Link } from "react-router-dom";


function Sidebar() {
   
    return (
        <div className="sidebar">
            <div className="parent">
                {Data.map((item) => {
                    return (
                        <div className="item" key={item.text}>
                            <div>
                                <item.icon />
                            </div>
                            <div >
                                <Link className="link" to={item.path}>{item.text}</Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        
        </div>
    );
}

export default Sidebar;
