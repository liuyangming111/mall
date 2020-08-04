import service from './index'

export default {
    home_page(){
        return service.getUri('/recommend')//获取首页数据
    },
    
}