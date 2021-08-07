import { observable, action ,makeObservable} from 'mobx'
import { message } from 'antd';
import {Uploader} from '../models'


class HistoryStore {
    constructor() {
        makeObservable(this)
    }

    @observable list = []
    @observable isLoading = false
    @observable hasMore = true
    @observable page = 0
    limit = 10

    @action append(newList) {
        this.list = this.list.concat(newList)
        
    }

    @action find() {
        this.isLoading = true
        Uploader.find({page: this.page, limit: this.limit})
            .then(newList => {
                this.append(newList)
                if (newList.length < this.limit) {
                    this.hasMore = false
                }
                this.page ++
            }).catch(error => {
                message.error('加载数据失败')
            }).finally(() => {
                this.isLoading = false
            })
    }


    @action delete(imgId) {
        Uploader.delete(imgId)
            .then(deleteImg => {
                this.list = this.list.filter(img => img.id !== deleteImg.id)
                message.success('删除历史成功')
            }).catch(error => {
                message.error('删除历史失败')
            })
    }

    @action reset() {
            this.list = []
            this.isLoading = false
            this.hasMore = true
            this.page = 0

    }
}

export default new HistoryStore()