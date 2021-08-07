import { observable, action ,makeObservable} from 'mobx'
import {Auth} from '../models'
import UserStore from './user'
import { message } from 'antd';
import HistoryStore from './history'
import ImageStore from './image'


class AuthStore {
    constructor() {
        makeObservable(this)
    }
    
    @observable values = {
        username: '',
        password: ''
    }

    @action setIsLogin(isLogin) {
        this.isLogin = isLogin
    }
    
    @action setUsername(username) {
        this.values.username = username
    }

    @action setPassword(password) {
        this.values.password = password
    }

    @action login() {
        return new Promise((resolve, reject) => {
            Auth.login(this.values.username, this.values.password)
                .then(user => {
                    UserStore.pullUser()
                    resolve(user)
                    console.log('user:');
                    console.log(user);
                }).catch(err => {
                    UserStore.resetUser()
                    message.error('登录失败')
                    reject(err)
            })
        })
    }
    
    @action register() {
        return new Promise((resolve, reject) => {
            Auth.register(this.values.username,this.values.password)
                .then(user => {
                    UserStore.pullUser()
                    resolve(user)
                }).catch(err => {
                    UserStore.resetUser()
                    message.error('用户名已被占用')
                    reject(err)
            })
        })
    }

    @action logout() {
        Auth.logout()
        UserStore.resetUser();
        HistoryStore.reset()
        ImageStore.reset()
        
    }
    
}

export default new AuthStore()