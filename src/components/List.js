import React, { useEffect, useState }from 'react';
import { useStores } from './../stores/index';
import { observer} from 'mobx-react'
import InfiniteScroll from 'react-infinite-scroller';
import { List, Spin, Button, Popconfirm, message  } from 'antd';
import styled from 'styled-components';
import Header from '../components/Header';
import {  Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import "../assets/List.css"
import {useTranslation} from 'react-i18next'
//总容器
const Wrapper = styled.div`
    // border:1px solid red;
    background: #fff;
    margin:55px;
    border-radius:5px;
    padding:20px;
    width:800px;
`
//头部
const HeaderWrapper = styled.div`
        // border: 1px solid red;
        position: fixed;
        top:0;
        left:0;
        width:100vw;
`
//列表
const ListWrapper = styled.div`

`
//按钮
const StyledButton = styled(Button)`
    widht:200px;
    height:200px;
`

const Component = observer(() => {
    const { HistoryStore } = useStores()
    const {t} = useTranslation()
    const loadMore = () => {
        HistoryStore.find()
        console.log(HistoryStore.list);
    }

    useEffect(() => {
        HistoryStore.find()
        return () => {
            HistoryStore.reset()
        }
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    const deleteHistory = (img) => {
        const confirm = window.confirm('此操作将永久删除该历史, 是否继续?')
        if (confirm) {HistoryStore.delete(img.id)}
    }


    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );
    return (
        <Wrapper>
             <HeaderWrapper>
                <Header/>
            </HeaderWrapper>
            <List
                itemLayout="vertical"
                pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
                }}
                dataSource={HistoryStore.list}
                footer={
                <div className="footer">
                    <b>impup design</b> footer part
                </div>
                }
                renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[
                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                        <img
                            width={200}
                            alt="logo"
                            src={item.attributes.url.attributes.url}
                        />
                    }>
                        
                            
                        <List>
                            <div className="title">
                                                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-touxiang4"></use>
                </svg>
                                <List.Item.Meta
                                // avatar={<Avatar src={item.avatar} />}
                                title={ t('图片名称：') + item.attributes.filename}
                                // description={item.description}   
                                />
                                <ListWrapper>
                                    <StyledButton 
                                    type="primary" onClick={() => { deleteHistory(item) }}>{t('删除')}
                                    </StyledButton>
                                </ListWrapper>
                            </div>
                               

                            <span> {t('URL地址：')}{<a target="_blank" href={item.attributes.url.attributes.url} rel="noopener noreferrer">{item.attributes.url.attributes.url}</a>}</span>
      
                                
                        </List>
                       
                </List.Item>
                )}
            />
            
           
        </Wrapper>
    )
})

export default Component