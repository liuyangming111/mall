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
    postCollection({ id }) {
        return service.post('/cancelCollection', { id })
    },
    //11:查询商品是否已收藏
    //id:商品的id
    postCollections({ id }) {
        return service.post('/isCollection', { id })
    },
    //12. 加入购物车
    //id:商品的id
    postaddShop({ id }) {
        return service.post('/addShop', { id })
    },
    //13. 退出登录
    postloginOut() {
        return service.post('/loginOut', {})
    },
    //14. 获取用户信息
    postqueryUser() {
        return service.post('queryUser', {})
    },
    //15. 修改保存用户信息
    // gender: 性别
    // year: 年
    // month: 月
    // day: 日
    // id: 用户id
    // nickname: 昵称
    postsaveUser({ gender, year, month, day, id, nickname }) {
        return service.post('/saveUser', { gender, year, month, day, id, nickname })
    },
    //16. 商品评论
    // id: 商品cid
    // rate: 分数
    // content: 内容
    // anonymous: 是否匿名 
    // _id: 商品的_id
    // order_id: 商品的order_id
    // image: []
    postcomment({ id, rate, content, anonymous, _id, order_id, image }) {
        return service.post('/goodsOne/comment', { id, rate, content, anonymous, _id, order_id, image })
    },
    //17. 获取登录注册默认验证码
    getverify() {
        return service.get('/v1/verify')
    },
    //18. 查询用户收货地址
    getAddress() {
        return service.get('/getAddress')
    },
    //19. 查询默认收货地址
    getDefaultAddress() {
        return service.get('/getDefaultAddress')
    },
    //20. 设置默认收货地址
    //id: 地址id
    postsetDefaultAddress({ id }) {
        return service.post('setDefaultAddress', { id })
    },
    //21. 增加收货地址
    // name:用户名
    // tel:电话
    // address:(省+市+区+详情地址)
    // isDefault:是否默认
    // province:省
    // city:市
    // county:区
    // addressDetail:详情地址，
    // areaCode:地区代码
    // id:修改地址时候要传id
    postaddress({ name, tel, address, isDefault, province, city, county, addressDetail, areaCode, id }) {
        return service.post('/address', { name, tel, address, isDefault, province, city, county, addressDetail, areaCode, id })
    },
    //22. 删除地址
    //id:地址_id
    postdeleteAddress({ id }) {
        return service.post('/deleteAddress', { id })
    },
    //23. 注册
    // nickname: 用户名
    // password:密码
    // verify:验证码
    postregister({ nickname, password, verify }) {
        return service.post('/register', { nickname, password, verify })
    },
    //24. 登录
    // nickname: 用户名
    // password:密码
    // verify:验证码
    postlogin({ nickname, password, verify }){
        return service.post('/login',{ nickname, password, verify })
    },
    //25. 订单查询
    getMyOrder(){
        return service.get('/getMyOrder')
    },
    //26. 查询已评价
    getevaluate(){
        return service.get('/alreadyEvaluated')
    },
    //27. 查询未评价
    etevaluates(){
        return service.get('/tobeEvaluated')
    },
    //28. 查询单条评论
    //id:商品id
    //_id:数据库的那条id

}