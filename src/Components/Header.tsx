import React, {useEffect, useState} from "react";
// @ts-ignore
import iconscience from "../Img/icondepartament.png";

export default function Header() {



    return (
        <header className="header">
            <div className="blockFunc">
                <div className="title">

                    <img className="icon" src="https://www.mil.gov.ua/img/modlogo.svg" alt=""/>
                    <p className="Du">Міністрерствоy освіти і науки України</p>
                </div>
                <div className="nav">
                    <div className="news" onClick={() => window.location.href = `/`}>

                        <p className="txt">News</p>

                    </div>
                    <div onClick={() => window.location.href = `/History/`} className="history">
                        <p className="txt">

                        History
                        </p>
                    </div>

                </div>

            </div>
        </header>
    )
}
