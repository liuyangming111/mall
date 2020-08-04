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
    //分类查询
    //参数:
    //id:默认分类的id
    classification(){
        return service.get('/classification?mallSubId=${id}')
    },
    //查询获取购物车数据
    car_data({}){
        return service.post('/getCard')
    },
    //购物车加减商品
    commodity({}){
        return service.post('/getCard')
    }
}