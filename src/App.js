import React, { Suspense, lazy } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import Loading from './components/Loading'
import './App.css'

const Home = lazy(() => import('./pages/Home'))
const History = lazy(() => import('./pages/History'))
const About = lazy(() => import('./pages/About'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))

//内容容器
const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <>
      <Main>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/history" component={History} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Suspense>
      </Main>
      <Footer />
    </>
  )
}

export default App
