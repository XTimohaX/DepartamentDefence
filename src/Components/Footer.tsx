import React from 'react';
// @ts-ignore

import departmentdefence from "../Img/departmentdefence.png";

interface FooterProps {
    // Додайте будь-які потрібні вам властивості
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer style={footerStyle}>
            <div className="footer_Block">

                <img src={departmentdefence} alt=""/>
                <div className="footer_Text">

                    <p>2001—2023 Міністерство оборони України</p>
                    <p>Гаряча лінія</p>
                    <p>0 800 50 04 42</p>
                </div>
            </div>

        </footer>
    );
};

const footerStyle: React.CSSProperties = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    height: 'max-content',
    alignItems: 'flex-end',
    display: 'flex',
    position: 'sticky',
    top: 0,
    zIndex: 2,
};

export default Footer;