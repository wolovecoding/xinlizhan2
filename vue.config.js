const path = require('path')

module.exports={
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
    outputDir: "dist", //打包目录
    indexPath: "index.html",
    devServer:{
        proxy: {
            '/api': {    // search为转发路径
                target: 'https://e20-health.xyz/',  // 目标地址
                ws: true, // 是否代理websockets
                changeOrigin: true ,  // 设置同源  默认false，是否需要改变原始主机头为目标URL,
                secure:true,
                pathRewrite:{
                    '^/api':'/api/v1'
                }
            }
        },
    },

    configureWebpack:(config)=>{
        Object.assign(config,{
            //开发生产共同配置
            resolve:{
                alias:{
                    '@' : path.resolve(__dirname,'./src')
                }
            }
        })
    },


}