import service from './index'

export default {
    //1:获取首页数据
    gethome_page(){
        return service.get('/recommend')
    },
    //2:搜索
    //参数: value: 搜索关键词
    getkey_word({value}){
        return service.get('/search')
    },
    //3:分类查询
    //参数:
    //id:默认分类的id
    getclassification(){
        return service.get('/classification?mallSubId=${id}')
    },
    //4:查询获取购物车数据
    postcar_data(){
        return service.post('/getCard',{})
    },
    //5:购物车加减商品
    postcommodity({count,id,mallPrice}){
        return service.post('/editCart',{count,id,mallPrice})
    },
    //6:购物车商品删除
    postdelete({id}){
        return service.post('/deleteShop',{id})
    },
    //7:购物车支付页面
    postpayment({address,tel,orderId,totalPrice,idDirect,count}){
        return service.post('/order',{address,tel,orderId,totalPrice,idDirect,count})
    },
    //
}