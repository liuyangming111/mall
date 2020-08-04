import service from './index'

export default {
    
    home_page(){
        return service.get('/recommend')//获取首页数据
    },
    key_word(){
        return service.get('/search')//参数: value: 搜索关键词
    },
    classification(){
        return service.get('/classification?mallSubId=${id}')
    }
}