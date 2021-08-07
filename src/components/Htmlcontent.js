import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import {useTranslation} from 'react-i18next'

const Content = styled.div`
    background: #fff;
    margin:20px 20px;
    border-radius:5px;
    padding:20px;
    width:800px;
`
//头部
const HeaderWrapper = styled.div`

        position: fixed;
        top:0;
        left:0;
        width:100vw;
`

export default function Htmlcontent() {
    const {t} = useTranslation()
    return (
        <Content>
            <HeaderWrapper>
            <Header/>
            </HeaderWrapper>
             <h1>{t('ImgUp使用协议')}</h1>
            <h3>{t('介绍')}</h3>
            <p>{t('本项目用于快速生成在线图片链接的图床工具，简单高效，是一款开源的图片管理系统，使用React + Leancloud开发，您可以自行部署，也可使用')}<a href="https://xinjn.github.io/ImgUpload/#/">https://xinjn.github.io/ImgUpload/#/</a> {t('提供的在线服务，但需遵守以下协议。')}</p>
            <h3>{t('ImgUp在线服务')}</h3>
            <ul>
                <li>{t('不得上传色情、暴力、政治等内容')}</li>
                <li>{t('不得上传侵犯版权、个人隐私权等内容')}</li>
                <li>{t('违法以上规定直接删除图片不另行通知')}</li>
                <li>{t('单张图片限制大小为1M，游客限制每天上传10张，图片长期保存，直到站长无法维持')}</li>
            </ul>
            <h3>{t('ImgUp主要功能')}</h3>
            <ul>
                <li>{t('图片上传与预览')}</li>
                <li>{t('URL上传/Ctrl + V粘贴上传')}</li>
                <li>{t('图片查看器、图片管理')}</li>
                <li>{t('图片自动裁剪')}</li>
                <li>{t('图片压缩')}</li>      
            </ul>
            <h3>{t('联系方式')}</h3>
            <ul>
                <li>{t('Github官方社区')}:<a href="https://xinjn.github.io/ImgUpload/#/">https://xinjn.github.io/ImgUpload/#/</a></li>
                <li>{t('邮箱')}:<a href="https://xinjn.github.io/ImgUpload/#/">422075616@qq.com</a></li>
            </ul>
        </Content>
    )
}