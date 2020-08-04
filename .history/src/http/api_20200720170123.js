import service from './index'

export default {
    home_page(){
        return service.get('/recommend')//获取首页数据
    },
    key_word(){
        return service.get()
    }
}