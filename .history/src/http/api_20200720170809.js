import service from './index'

export default {
    //获取首页数据
    home_page(){
        return service.get('/recommend')
    },
    //shou'suo
    //参数: value: 搜索关键词
    key_word(){
        return service.get('/search')
    },
    classification(){
        return service.get('/classification?mallSubId=${id}')
    }
}