import  React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import  styled  from 'styled-components';
import { useStores } from '../stores/index';
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import "../assets/register.css"
import {useTranslation} from 'react-i18next'
const Wraper = styled.div`
    width:350px;
    box-shadow: 2px 2px 4px 0 rgba(0,0,0,.2);
    border-radius:4px;
    padding:20px;
    margin:30px auto;
    background-color:#fff;
    font-size: 12px;
        // border:1px solid red;
`
const Side = styled.div`
// border:1px solid red;
position: fixed;
left:0;
top:0;
// background:#fff;
width:25px;
height:25px;
margin:10px;
`
const Sidebar = styled.div`
position: fixed;
margin:10px;
left:0;
top:35px;
width:180px;
list-style:none;
background:#fff;
border-radius:3px;
padding:0;
.icon {
  width:15px;
  height: 15px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
`
const StyledLink = styled(NavLink)`
    font-size:15px;
    // border:1px solid red;
    display:block;
    padding:10px;
    color:#333;
    span{
            
            margin-left:5px;
    }
    &:hover{
        background:#c4c4c4;
        border-radius:3px;
            color:#fff;
    }
`
const Title = styled.h1`
    text-align:center;
    margin:5px 0 0 0 ;
    // border:1px solid red;
`
const NowLogin = styled.div`
    text-align:center;
    margin:15px;
    font-size: 14px;
// border:1px solid red;
`
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
};
const validateUsername = (rule, value) => {
        if (/\W/.test(value)) return Promise.reject('只能时字母数字下划线')
        if (value.length < 4 || value.length >10) return Promise.reject('长度为4~10个字符')
        return Promise.resolve()
    }

const confirmPassword = ({ getFieldValue }) => ({
    validator(rule, value){
        if (!value || getFieldValue('password') === value) {
            return Promise.resolve()
        }
        return Promise.reject('两次密码不匹配')
    }
})
const Compenent = () => {
    const {AuthStore} = useStores()
    const history = useHistory()
    const [showSide, setShowSide] = useState(false)
    const { t } = useTranslation()
    const onFinish = values => {
      console.log('Success:', values);
      AuthStore.setUsername(values.username)
      AuthStore.setPassword(values.password)
      AuthStore.register()
          .then(() => {
              console.log('注册成功');
              history.push('/')
          }).catch(() => {
              console.log('注册失败，什么也不做');
          })
  };

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
            span: 24,
            offset: 0,
            },
            sm: {
            span: 16,
            offset: 6,
            },
        },
    };
    const toggle = () => {
        console.log(showSide);
        setShowSide(!showSide)
    }
    return (
        <Wraper>
            <Side onClick={toggle}>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-cebianlan2"></use>
                </svg>
            </Side>
            {
                showSide
                    ?
                    <Sidebar >
                        <StyledLink to="/">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-index"></use>
                            </svg>
                            <span>{t('首页')}</span>
                        </StyledLink>
                        <StyledLink to="/history">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-upload2"></use>
                            </svg>
                            <span>{t('历史')}</span>
                        </StyledLink>
                        <StyledLink to="/about">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-guanyu4"></use>
                            </svg>
                            <span>{t('关于')}</span>
                        </StyledLink>
                        <StyledLink to="/login">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-denglu2"></use>
                            </svg>
                            <span>{t('登录')}</span>
                        </StyledLink>
                        <StyledLink to="/register">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-zhuce1"></use>
                            </svg>
                            <span>{t('注册')}</span>
                        </StyledLink>
                    </Sidebar>
                    :
                    null
            }
            
            <Title>{t('注册账户')}</Title>
               <NowLogin>
                    {t('已经有账户了？')}<NavLink to="/login">{t('登录')}</NavLink>{t('现在')}
                </NowLogin>
            <Form
            {...layout}
                name="basic"
                onFinish={onFinish}
            >
                <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                        {
                            type: 'email',
                            message: '输入的电子邮件无效！',
                        },
                        {
                            required: true,
                            message: '请输入您的电子邮件！',
                        },
                        ]}
                    >
                        <Input />
                </Form.Item>

                <Form.Item
                    label={t('用户名')}
                    name="username"
                    rules={[{ required: true, message: '输入用户名' },{validator:validateUsername}]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={t('密码')}
                    name="password"
                    rules={[
                        { required: true, message: '输入密码' },
                        {
                            min: 4,
                            message:'最少4个字符'
                        },
                        {
                            max: 10,
                            message:'最大10个字符'
                        }

                    ]}
                >
                    <Input.Password />
                </Form.Item>
                    
                <Form.Item
                    label="确认密码"
                    name="confirmPasswprd"
                    rules={[{ required: true, message: '再次确认密码' },confirmPassword]}
                >
                    <Input.Password />
                </Form.Item>
                
                     <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
         {t('我同意服务条款和隐私政策')}
        </Checkbox>
      </Form.Item>
                    
                <Form.Item {...tailLayout} className="button">
                    <Button type="primary" htmlType="submit" >
                    {t('注册账户')}
                    </Button>
                </Form.Item>
            </Form>
        </Wraper>
  );
};

export default Compenent