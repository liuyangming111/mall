import service from './index'

export default {
    //1:获取首页数据
    gethome_page() {
        return service.get('/recommend')
    },
    //2:搜索
    //参数: value: 搜索关键词
    postkey_word({ value }) {
        return service.get('/search', { value })
    },
    //3:分类查询
    //id:默认分类的id
    getclassification() {
        return service.get('/classification?mallSubId=${id}')
    },
    //4:查询获取购物车数据
    postcar_data() {
        return service.post('/getCard', {})
    },
    //5:购物车加减商品
    //     count: 购物车数量
    // id: 商品id
    // mallPrice: 价格
    postcommodity({ count, id, mallPrice }) {
        return service.post('/editCart', { count, id, mallPrice })
    },
    //6:购物车商品删除
    //商品id(数组)
    postdelete({ id }) {
        return service.post('/deleteShop', { id })
    },
    //7:购物车支付页面
    // address:收货地址
    // tel:电话
    // orderId:所有商品的id(数组)
    // totalPrice:总价格
    // idDirect:用来判断是购物车结算还是直接购买(直接购买为true,购物车结算为false)
    // count:商品数量
    postpayment({ address, tel, orderId, totalPrice, idDirect, count }) {
        return service.post('/order', { address, tel, orderId, totalPrice, idDirect, count })
    },
    //8.单个商品详情
    //id:商品的id
    getdetails() {
        return service.get('/goods/one?id=${id}')
    },
    //9. 收藏单个商品
    //商品的详情信息(传商品对象)
    postcollection() {
        return service.post('/collection', {})
    },
    //10.取消收藏
    //id:商品的id
    postCollection({id}) {
        return service.post('/cancelCollection', { id })
    },
    //11:查询商品是否已收藏
    //id:商品的id
    postCollections({id}) {
        return service.post('/isCollection', { id })
    },
    //12. 加入购物车
    //id:商品的id
    postaddShop({id}){
        return service.post('/addShop',{id})
    },
    //13. 退出登录
    postloginOut(){
        return service.post('/loginOut',{})
    },
    //14. 获取用户信息
    postqueryUser
}