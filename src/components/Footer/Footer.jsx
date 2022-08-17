import React from 'react';
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';
import "./Footer.scss"

function Footer() {
    return (
        <CDBFooter className="shadow">
            <CDBBox
                display="flex"
                justifyContent="between"
                alignItems="center"
                className="mx-auto py-4 flex-wrap footer"
                style={{ width: '80%' }}
            >
                <CDBBox display="flex" alignItems="center">
                    <a className="d-flex align-items-center p-0 text-dark">
                        <img
                            alt="logo"
                            src={require("../../assets/Logo/league-logo.png")}
                            width="120px"
                        />
                    </a>
                </CDBBox>
                <CDBBox>
                    <small className="ml-2 title-footer" >&copy; All rights reserved - Thomas LORTHIOIR</small>
                </CDBBox>
                <CDBBox display="flex">
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="facebook-f" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-2">
                        <CDBIcon fab icon="twitter" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="instagram" />
                    </CDBBtn>
                </CDBBox>
            </CDBBox>
        </CDBFooter>
    );
};

export default Footer;