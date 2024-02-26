import React from 'react'

const Footer = () => {
    //Check internet connection
    let isOnline = true;
    setInterval(function () {
        if (!isOnline && navigator.onLine) {
            isOnline = true;
            console.log("Back online!");
        }
        else if (isOnline && !navigator.onLine) {
            isOnline = false;
            console.log("Lost connection!");
        }
    }, 100);
    return (

        <></>
    )
}

export default Footer