import service from './index'

export default {
    //获取首页数据
    home_page(){
        return service.get('/recommend')
    },
    //搜索
    //参数: value: 搜索关键词
    key_word(){
        return service.get('/search')
    },
    classification(){
        return service.get('/classification?mallSubId=${id}')
    }
}