module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://www.daxunxun.com/', // 后端接口地址
                changeOrigin: true, // 是否允许跨越
                pathRewrite: {
                    '^/api': '' // 重写
                }
            }
        }
    }
}