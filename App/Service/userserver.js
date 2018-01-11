app.factory('indexserver',function(baseConfig) {
    return {
        getData:function(){
            return baseConfig.Common.ajax('http://localhost:8090/data')
        }
    }
})