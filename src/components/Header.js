import React, { useEffect } from 'react'
// import LogoUrl from '../icons/picup.svg'
import { NavLink, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from 'antd'
import { useStores } from '../stores'
import { observer } from 'mobx-react'
import styles from '../assets/style.less'
import { useTranslation } from 'react-i18next'
const Header = styled.header`
  padding: 10px 0px;
  color: #fff;
`

const LogoWrapper = styled.div`
  display: flex;

  justify-content: center;
`
const Logo = styled.img`
  height: 30px;
  background: red;
`

const Nav = styled.nav`
  margin-top: -34px;
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
`

const StyledLink = styled(NavLink)`
  color: #fff;
  margin-left: 10px;
  // border:1px solid red;
  .icon {
    margin-right: 3px;
    margin-bottom: -2px;
    // border:1px solid red;
    width: 20px;
    height: 20px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .triangle_down {
    width: 0;
    height: 0;
    border-width: 5px 5px 0;
    border-style: solid;
    border-color: #fff transparent transparent; /* 红 透明 透明 */
    display: inline-block;
    margin-bottom: 2px;
    margin-left: 5px;
  }
`
const Login = styled.div`
  color: #fff;
  > span {
    margin-left: 10px;
  }
`
const StyledButton = styled(Button)`
  margin-left: 10px;
  &:focus {
    background: #fe6b0a;
  }
`
const Translate = styled.div`
  display: inline-block;
  margin-left: 10px;
  transition: color 0.3s;
  .triangle_down {
    width: 0;
    height: 0;
    border-width: 5px 5px 0;
    border-style: solid;
    border-color: #fff transparent transparent; /* 红 透明 透明 */
    display: inline-block;
    margin-bottom: 2px;
    margin-left: 5px;
  }
  &:hover {
    color: #1890ff;
    cursor: pointer;
  }
`

const Compenent = observer(() => {
  const history = useHistory()
  const { UserStore, AuthStore } = useStores()
  const { t, i18n } = useTranslation()

  // 注销
  const handleLogout = () => {
    AuthStore.logout()
    history.push('/')
  }
  const handleLogin = () => {
    console.log('跳转到登录页面')
    history.push('/login')
  }
  const handleRegister = () => {
    console.log('跳转到注册页面')
    history.push('/register')
  }

  useEffect(() => {
    UserStore.pullUser()
  }, [])

  return (
    <Header>
      <LogoWrapper>
        <NavLink to="/">
          <img src="https://z3.ax1x.com/2021/06/14/2TGi38.png" alt="2TGi38.png" border="0" />
        </NavLink>
      </LogoWrapper>

      <Nav>
        <Login>
          {UserStore.currentUser ? (
            <>
              <StyledLink to="/" activeClassName="active">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-upload3"></use>
                </svg>
                {t('上传')}
              </StyledLink>
              {UserStore.current}

              <StyledLink to="/history" activeClassName="active">
                {t('历史')}
              </StyledLink>

              <StyledLink to="">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-yonghu2"></use>
                </svg>
                <span>{UserStore.currentUser.attributes.username}</span>
              </StyledLink>

              <StyledButton type="primary" onClick={handleLogout}>
                {t('注销')}
              </StyledButton>
              <StyledLink to="/about" activeClassName="active">
                {t('关于')}
                <span className="triangle_down"></span>
              </StyledLink>
              <Translate
                onClick={() => {
                  i18n.changeLanguage(i18n.language == 'zh' ? 'en' : 'zh')
                }}
              >
                ZH(CN)
                <span className="triangle_down"></span>
              </Translate>
            </>
          ) : (
            <>
              <StyledLink to="/" activeClassName="active">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-upload3"></use>
                </svg>
                {t('上传')}
              </StyledLink>

              <StyledLink to="/login">{t('登录')}</StyledLink>
              <StyledLink to="/about" activeClassName="active">
                {t('关于')}
                <span className="triangle_down"></span>
              </StyledLink>

              <Translate
                onClick={() => {
                  i18n.changeLanguage(i18n.language == 'zh' ? 'en' : 'zh')
                }}
              >
                {i18n.language == 'zh' ? 'EN(US)' : 'ZH(CN)'}
                <span className="triangle_down"></span>
              </Translate>
            </>
          )}
        </Login>
      </Nav>
    </Header>
  )
})

export default Compenent
