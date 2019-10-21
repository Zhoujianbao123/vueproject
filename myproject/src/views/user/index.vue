<template>
    <section class="user">
        <Header>
            <div slot="left">
                <span class="iconfont icon-fenlei" @click="goHome"></span>
            </div>
            <div slot="center" class="box">
                <b>{{ arr[id].username}}</b>
                <p>ID: {{ id }}</p>
            </div>
            <span type="primary" @click="showPopup" class="iconfont icon-fenxiang"></span>
        </Header>
        <!--<header class="header1">
            <router-link to='/home' class="iconfont icon-fenlei"></router-link>
            <div class="box">
                <b>{{ arr[id].username}}</b>
                <p>ID: {{ id }}</p>
            </div>
            <span type="primary" @click="showPopup" class="iconfont icon-fenxiang">
            </span>
            <van-popup v-model="show" :style="{height:'100%',width:'50%'}" position="right">内容</van-popup>
        </header>-->
        <div class="comtainer">
            <div class="my">
                <img :src="arr[id].head_img" alt="" class="head">
                <div class="follow">
                    <ul>
                        <li>
                            <span>2</span>
                            <p>关注</p>
                        </li>
                        <li>
                            <span>0</span>
                            <p>粉丝</p>
                        </li>
                        <li>
                            <span>0</span>
                            <p class="praised">获赞与收藏</p>
                        </li>
                    </ul>

                </div>
            </div>
            <button class="data">编辑个人资料</button>
            <van-field placeholder='个性说明'/>
            <p class="personal">个人说明~</p>
            <div class="last">
                <span>分享</span>
                <span>收藏</span>
            </div>
            <div class="establish">
                <div class="album">创建新专辑</div>
            </div>
            <div class="share">
                <h6>分享</h6>
                <p class="note">笔记1</p>
                <ul>
                    <li><img src="../../../public/img/AJ.png"/></li>
                    <li><img src="../../../public/img/AJ.png"/></li>
                    <li><img src="../../../public/img/AJ.png"/></li>
                    <li><img src="../../../public/img/AJ.png"/></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    import Header from '@/components/Header'
    export default {
        data () {
            return{
                id: this.$route.params.id,
                show: false,
                arr : [
                    {
                        id: 0,
                        username: '苏晨',
                        title:'苏氏集团期待你的加盟！I want you！',
                        head_img: 'http://img95.699pic.com/element/40153/0227.png_300.png'
                    },
                    {
                        id: 1,
                        username: '姜浩南',
                        title:'Everybody 在你的头上暴扣！',
                        head_img: 'http://img95.699pic.com/element/40087/3598.png_300.png'
                    },
                    {
                        id: 2,
                        username: '杭洪宗',
                        title:'啥都不说了，看我头像就能了解我！',
                        head_img: 'http://img95.699pic.com/photo/50077/0235.jpg_wh300.jpg',
                        show_img: 'http://img95.699pic.com/photo/50060/1440.jpg_wh300.jpg'
                    },
                    {
                        id: 3,
                        username: '袁建军',
                        title:'拍片来找我，把头伸出来就可以了！',
                        head_img: 'http://img95.699pic.com/element/40155/3689.png_300.png'
                    }
                ]
            }

        },
        methods: {
            showPopup() {
                this.show = true;
            },
            gokind () {
                console.log('tanchu')
                this.show = true
            },
            onClose () {
                console.log('关闭遮罩')
                this.show = false
            },
            goHome () {
                this.$router.push('/home');
            }
        },
        mounted() {
            const { $route: { params: { id } } } = this;
        },
        components: {
            Header
        }
    }
</script>

<style lang='scss'>
    @import '@/lib/reset.scss';
    .user {
        @include flex();
        @include rect(100%,100%);
        @include flexbox();
        @include flex-direction(column);
        background:#fff;
        Header{
            @include rect(100%, .45rem);
            @include background-color(#F4F4F4);
            @include text-align(center);
            border-bottom:1px solid #cfcfcf;
            background:#fff;
            .icon-fenlei {
                position:absolute;
                left:0.1rem;
                top: 0.1rem;
                @include font-size(0.2rem);
                color:#333;
            }
            .box {
                @include flexbox();
                @include flex-direction(column);
                @include rect(1.15rem, .45rem);
                margin:0 auto;
                b{
                    @include font-size(.16rem);
                    @include line-height(.21rem);
                    margin-top:5px;
                }
                p{
                    @include font-size(.07rem);
                    @include line-height(.12rem);
                }
            }

            .icon-fenxiang{
                position:absolute;
                right:0.1rem;
                top: 0.1rem;
                @include font-size(0.2rem);
                color:#333;
            }
            .van-overlay {
                position: absolute;
                @include rect(100%, 100%);
                @include background-color(rgba(85,85,85,0.5))
            }
            .van-popup {
                width: 80%;
                height: 100%;
                background: #fff;
                form {
                    .van-search {
                        height: 0.6rem;
                    }

                    .van-field {
                        height: 0.4rem;
                    }

                    .van-icon-search {
                        display: flex;
                    }

                    i::before {
                        height: 0.4rem;
                        line-height: 0.3rem;
                    }

                    .van-field__control {
                        height: 0.3rem;
                        line-height: 0.3rem;
                    }
                }

                span {
                    text-align: left;
                    padding-left: 15px;
                    width: 100%;
                    display: inline-block;
                    height: 0.4rem;
                    line-height: 0.4rem;
                    border-bottom: 1px solid #666666;
                }
                .van-icon {
                    width: 90%;
                    height: 0.4rem;
                    text-align: right;
                    line-height: 0.4rem;
                    font-size: 16px;
                }
            }
        }
        .comtainer{
            @include flex();
            @include rect(100%, auto);
            .my{
                @include rect(100%,113px);
                @include flexbox();
                justify-content:center;
                .follow{
                    margin-left:-22px;
                    width:200px;
                }
                .head{
                    @include rect(80px,80px);
                    border: 1px solid #bbb;
                    border-radius: 50%;
                    @include margin(30px 39px 0 0);
                }
                ul{
                    @include flexbox();
                    @include rect(100%,45px);
                    @include text-align();
                    @include margin(35px 0 0 0);
                    justify-content: space-between;
                    li{
                        @include rect(50px,45px);
                        .praised{
                            width:100px;
                            margin-left: -24px;
                        }
                        span{
                            font-size: 12px;
                            line-height: 26px;
                        }
                        p{
                            font-size: 12px;
                            line-height: 25px;
                        }
                    }
                }
            }
            .data{
                @include rect(132px,24px);
                border-radius:20px;
                @include background-color(#ff6958);
                color:#fff;
                border:0;
                display:flex;
                margin:0 auto;
                justify-content: center;
            }
            .van-cell{
                @include padding(0);
                position: static;
                .van-field__control{
                    border:1px solid #bbb;
                    @include flexbox();
                    justify-content: center;
                    @include font-size(12px);
                    text-indent:5px;
                    @include rect(372px,30px);
                    @include padding(0);
                }
                .van-field__body{
                    justify-content:center
                }
            }
            .personal{
                display: block;
                @include rect(100%,60px);
                line-height: 60px;
                margin-left: 17px;
            }
            .last{
                @include rect(373px,28px);
                box-shadow: 0 0 5px #e6e6e6,0 0 15px #e6e6e6;
                border-radius: 6px;
                margin:0 auto;
                @include flexbox();
                justify-content:space-evenly;
                span{
                    @include rect(57px,28px);
                    font-size:15px;
                    text-align: center;
                    line-height: 28px;
                }
                span:hover{
                    @include rect(57px,28px);
                    border:0;
                    @include background-color(#fe074b);
                    border-radius: 6px;
                    color:#fff;
                }
            }
            .establish{
                @include rect(100%,88px);
                display: flex;
                justify-content: center;
                align-items: center;
                .album{
                    display: block;
                    @include rect(137px,31px);
                    border:1px solid #ff014a;
                    border-radius: 7px;
                    font-size:15px;
                    line-height: 31px;
                    text-align: center;
                }
            }
            .share{
                @include rect(354px,137px);
                box-shadow: 0 0 5px #e6e6e6,0 0 15px #e6e6e6;
                margin:0 auto;
                overflow: hidden;
                h6{
                    font-size:15px;
                    line-height: 24px;
                    margin-top:10px;
                    margin-left: 12px;
                }
                .note{
                    font-size: 11px;
                    line-height: 20px;
                    color:#737373;
                    margin-left: 14px;
                }
                ul{
                    display: flex;
                    justify-content: space-around;
                    margin-top:7px;
                    li{
                        img{
                            @include rect(74px,65px);
                        }
                    }
                }
            }
        }
    }
</style>