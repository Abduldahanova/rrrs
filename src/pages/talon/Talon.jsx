import React from "react";
import T from "./Talon.module.css"
import logo from "../../images/Vector 2 (Stroke) (2).png";
import qr from "../../images/uil_qrcode-scan.svg"

const Talon = () => {
    return (
        <div className={T.section}>
            <div className={T.container}>
                <div className={T.name}>
                    <div className={T.logo}>
                        <img className={T.pic} src={logo} />
                        <div className={T.text}>
                            <h1>РСК БАНК</h1>
                            <h2>Больше возможностей</h2>
                        </div>    
                    </div>
                </div>
                <h3>КР012</h3>
                    <p>Кредиты на жилье</p>
                    <i>Занимайте очередь из дома!</i>
                    <div className={T.qr}>
                        <img src={qr} alt="" />
                        <p>Скачайте приложение Онлайн очередь</p>
                    </div>
            </div>
        </div>
    )
}
export default Talon