import React from 'react'
import styled from 'styled-components'
// import './index.css';
import {useTranslation} from 'react-i18next'
const Footer = styled.footer`
    padding:10px 100px;
    text-align:center;
    font-size:1px;
    color:#fff;
    // background-color:#02101f;
`

function Compenent() {
        const {t} = useTranslation()
    return (
        <Footer className="footer">
            {t('2011-2021 IMGUP.COM 图床 版权所有.免费公共图床, 提供高速稳定的图片分享与云存储服务.')}

        </Footer>
    )
}

export default Compenent