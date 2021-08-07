import React,{useRef, useState} from 'react';
import { useStores } from './../stores/index';
import { observer, useLocalStore} from 'mobx-react'
import { message, Upload,Spin,Button} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { UploadOutlined } from '@ant-design/icons';
import Header from '../components/Header';
import "../assets/upload.css"
import {useTranslation} from 'react-i18next'

const { Dragger } = Upload;

//总容器
const Wrapper = styled.div`
`
//头部
const HeaderWrapper = styled.div`
        // border:1px solid red;
        position: fixed;
        top:0;
        left:0;
        width:100vw;
`

//展示容器
const UploadWrapper = styled.div`
    text-align:center;
    margin:30px auto;
`
//大标题
const H1 = styled.h1`
    margin:0;
    color:#fff;
    text-align:center;
    font-size:3em;
    ling-height:120%;
    font-weight:600;
    text-shadow:1px 1px 2px rgba(0,0,0,.25);
`
//小标题
const H3 = styled.h3`
    color:#fff;
    font-family:Helvetica,Arial,sans-serif;
    font-size:22px;
    font-weight:100;
    text-shadow:1px 1px 2px rgba(0,0,0,0.25);
    text-align:center;
`
//按钮
const ButtonWrapper = styled(Button)`
    margin-left:20px;
`
//上传总容器
const UploadWrapper2 = styled.div`
    top:0px;
    position: fixed;
    left:0;
    right:0;
   
`
//上传容器
const Upload2 = styled.div`
    .button{
        display:flex;
        justify-content:flex-end;
    }
    .ant-upload.ant-upload-drag{
        border:none;
    }
   

` 
//上传结果
const ResultWrapper = styled.div`
    background: #fff;
    padding:0;
    text-align:center;
`
//上传结果标题
const H2 = styled.h2`
    text-align:center;
`
//上传结果图片
const Image = styled.img`
    max-width:300px;
`
const UploadTop = styled.div`
    display:flex;
    // border:1px solid red;
    justify-content:space-between;
    padding:0 10px;
`
//关闭按钮
const Close = styled.div`

display:flex;
justify-content:center;

.icon{
    margin:4px 2px 0 0;

  width:15px;
  height: 15px;

  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
span{

}
`
const Compenent = observer(() => { 
    const { ImageStore, UserStore } = useStores()
    const history = useHistory()
    const ref1 = useRef()
    const ref2 = useRef()
    const [state,setState] = useState(false)
    const {t} = useTranslation()
    
    const store = useLocalStore(() => ({
        width: null,
        setWidth(width) {
            store.width = width
        },
        get widthStr() {
            return store.width?`/w/${store.width}`:""
        },
        height: null,
        setHeight(height) {
            store.height = height
        },
        get heightStr() {
            return store.height?`/h/${store.height}`:""
        },
        get fullStr() {
            //?imageView2/0/w/800/h/400
            return ImageStore.serverFile.attributes.url.attributes.url+'?imageView2/0'+store.widthStr+store.heightStr
        }
    }))
    const toggle = (event) => {
        console.log(event);
        event.stopPropagation();//阻止冒泡
        setState(!state)
    }

    const bindWidthChange = () => {
        console.log('bindWidthChange');
        console.log(ref1.current.value);
        store.setWidth(ref1.current.value)
    }

    const bindHeightChange = () => {
        console.log('bindHeightChange');
        console.log(ref2.current.value);
        store.setHeight(ref2.current.value)
    }

    const props = {
        showUploadList:false,
        beforeUpload: file => {

            ImageStore.setFile(file)
            ImageStore.setFilename(file.name)
            if (UserStore.currentUser === null) {
                message.warning('请先登录再上传')
                history.push('/login')
                return false
            }
            window.file = file
            if (!/(svg$)|(png$)|(jpg$)|(jpeg$)|(git$)/ig.test(file.type)) {
                message.error('只能上传png/svg/jpg/gif格式的图片')
                return false
            }
            if (file.size > 1024 * 1024) {
                message.error('图片最大1M')
                return false
            }
            ImageStore.upload()
                .then((serverFile) => {
                    console.log('上传成功');
                    console.log(serverFile);
                }).catch(() => {
                    console.log('上传失败');
            })
            return false
        }
    };

    return (
        <Wrapper>
            <HeaderWrapper>
                <Header/>
            </HeaderWrapper>
            <UploadWrapper>
               
                <H1>{t('上传与分享您的照片')}</H1>
                <H3>{t('imgup图床-高速稳定的图片上传和外链服务')}<br/>
                    {t('任意拖放图片到这里，即可上传您的图片，最大20MB图片大小。')}<br/>
                    {t('直接的源图片链接，HTML缩略图显示，禁止上传任何违法图片')}</H3>
                <Spin tip="上传中" spinning={ImageStore.isUpLoading}>

                    <Upload {...props}>
                            <Button icon={<UploadOutlined />} onClick={toggle}> {t('开始上传')}</Button> 
                    </Upload>

                    {/* <ButtonWrapper icon={<UploadOutlined />} onClick={toggle}>拖拽上传</ButtonWrapper> */}
                </Spin>
                {/* <H3>本站已托管 16,429,429 张图片</H3> */}
            </UploadWrapper>

            <UploadWrapper2>
                <Upload2 style={{display: state ? "block" : "none"}}>
                    <Dragger {...props}>
                            <UploadTop >
                                <span>JPG PNG 10MB</span>
                            <Close type="primary" onClick={toggle} className="button">
                                <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-guanbi1"></use>
                                </svg>
                                <span>{t('关闭')}</span>
                            </Close>
                            </UploadTop>
                            
                            <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">{t('单击或拖动文件到此区域以上载')}</p>
                            <p className="ant-upload-hint">
                              {t('支持单次或批量上传。严禁上传公司资料或其他波段文件')}
                            </p>
                        </Dragger>
                    </Upload2>
               
                {
                    ImageStore.serverFile ?
                        <ResultWrapper style={{display: state ? "block" : "none"}}>
                             
                            <H2>{t('上传结果')}</H2>
                            <dl>
                                <dt>{t('线上地址')}</dt>
                                <dd>
                                    <a target="_blank" href={ImageStore.serverFile.attributes.url.attributes.url} rel="noopener noreferrer"> 
                                        {ImageStore.serverFile.attributes.url.attributes.url}
                                    </a>
                                </dd>
                                <dt>{t('文件名')}</dt>
                                <dd>{ImageStore.filename}</dd>
                                <dt>{t('图片预览')}</dt>
                                <dd>
                                    <Image src={ImageStore.serverFile.attributes.url.attributes.url} />
                                </dd>
                                <dt>{t('更多尺寸')}</dt>
                                <dd>
                                    <input ref={ref1} onChange={bindWidthChange} placeholder= {t('最大宽度（可选）')}
                                />
                                    <input ref={ref2}  onChange={bindHeightChange} placeholder={t('最大高度（可选）')} />
                                </dd>
                                <dd>
                                    <a target="_blank" href={store.fullStr} rel="noopener noreferrer">{store.fullStr}</a>
                                </dd>
                            </dl>
                        </ResultWrapper>
                        : null
               }
            </UploadWrapper2>
        </Wrapper>
    )
})

export default Compenent