import React from "react";
import QRCode from "react-qr-code";
import Qr from "./Qrcode.module.css"

const Qrcode = () => {
    return (
        <div>
            <QRCode
            className={Qr.body}
            value="https://www.youtube.com/watch?v=jVsrEe464DQ"/>
        </div>
    )
}
export default Qrcode