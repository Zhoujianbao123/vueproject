import axios from 'axios'
export default {
    // 分类的状态
    state: {
        images: [
            'http://www.carslan.com.cn/media/2885/%E5%AE%98%E7%BD%91%E7%84%A6%E7%82%B9%E8%BD%AE%E6%92%AD-1900x700px-1.jpg',
            'http://www.carslan.com.cn/media/3059/pc-kv-1900x700px.jpg',
            'http://www.carslan.com.cn/media/2884/%E5%AE%98%E7%BD%91%E7%84%A6%E7%82%B9%E8%BD%AE%E6%92%AD-1900x700px.jpg'
        ],
        proList : [
            {
                id: 0,
                title: '兰蔻全新精华肌底液第二代全新小黑瓶',
                type:'保湿修护淡纹',
                price: 1200,
                img: [
                    'https://gd2.alicdn.com/imgextra/i2/0/O1CN01y7NFMo2IgJuNP7H6r_!!0-item_pic.jpg_400x400.jpg',
                    'https://gd4.alicdn.com/imgextra/i4/269499315/O1CN018XTvva2IgJrg8cqkX_!!269499315.jpg_400x400.jpg',
                    'https://gd3.alicdn.com/imgextra/i3/269499315/O1CN01Jy0RAB2IgJrg8eBs0_!!269499315.jpg_400x400.jpg',
                ]
            },
            {
                id: 1,
                title: '兰蔻小黑瓶新精华肌底液30ml',
                type:'抗初老收毛孔修复',
                price: 2150,
                img: [
                    'https://gd3.alicdn.com/imgextra/i1/269499315/O1CN01CIkNmI2IgJuP349zv_!!269499315.jpg_400x400.jpg',
                    'https://gd3.alicdn.com/imgextra/i3/269499315/O1CN01IpMuo72IgJuLVMlZY_!!269499315.jpg_400x400.jpg',
                    'https://gd3.alicdn.com/imgextra/i3/269499315/O1CN01CfKxjR2IgJsrFSH8P_!!269499315.jpg_400x400.jpg'
                ]
            },
            {
                id: 2,
                title: '兰蔻精华肌底液兰蔻小黑瓶100ml',
                type:'补水保湿抗初老修复精华',
                price: 1150,
                img: [
                    'https://gd1.alicdn.com/imgextra/i4/2201219332387/O1CN01bIPHVT1TVHxeUwKXO_!!2201219332387.jpg_400x400.jpg',
                    'https://gd2.alicdn.com/imgextra/i2/2201219332387/O1CN01RBDXjV1TVHxizVUkq_!!2201219332387.jpg_400x400.jpg',
                    'https://gd4.alicdn.com/imgextra/i4/2201219332387/O1CN01E0KoMM1TVHxgtfixq_!!2201219332387.jpg_400x400.jpg'
                ]
            },
            {
                id: 3,
                title: '云健倍润嫩肤肌底液',
                type:'修复收缩毛孔精华补水保湿淡斑淡化细纹敏感肌',
                price: 3150,
                desc: '绿色',
                num: 1,
                img: [
                    'https://gd3.alicdn.com/imgextra/i4/0/O1CN01WNxuW21YMeZlI5BVM_!!0-item_pic.jpg_400x400.jpg',
                    'https://gd1.alicdn.com/imgextra/i1/2200790043045/O1CN0105u6g81YMeYjAUmXj_!!2200790043045.jpg_400x400.jpg',
                    'https://gd3.alicdn.com/imgextra/i3/2200790043045/O1CN01b8aMYK1YMeYxqa9mO_!!2200790043045.jpg_400x400.jpg'
                ]
            }
        ]
    },
    // 计算属性
    getters: {},
    // 行为 --- 异步操作 - 数据请求
    actions: { // 获取分类页面的数据
        getKindList (context) { // context是默认的参数
            axios.get('https://www.daxunxun.com/douban').then(res => {
                // 唯一改变数据的方式就是显示的提交mutation
                context.commit('changeKindList', res.data)
            })
        }
    },
    // 唯一改变数据的地方
    mutations: {
        changeKindList (state, data) {
            state.kindlist = data
        }
    }
}
