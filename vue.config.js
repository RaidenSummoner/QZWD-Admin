module.exports = {
    transpileDependencies: true,
    lintOnSave: false,
    //加上如下代码
    devServer: {       //开启代理服务器 配置多个代理
        proxy: {
            '/api': {       //'/api'是自行设置的请求前缀
                target: 'https://qzwdapi.haaland.top',  //目标地址
                pathRewrite: { '^/api': '' },  //路径重写，（正则）匹配以api开头的路径为空（将请求前缀删除）
                ws: true,//用于支持websocket
                changeOrigin: true //用于控制请求头中的host值
            },
        }
    }
}