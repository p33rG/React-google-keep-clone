import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (

        <>
            <div className="footer">
                CopyRight   @ {year}
            </div>

        </>

    )
};
// const 
export default Footer;