<template>
    <section class="login">
        <div class="header">
            <button class="home" @click='toHome'>
                <!--                <img src="../../../public/img/head.png"/>-->
                <!--                <b class="name">苏氏集团</b>-->
                返回
            </button>
        </div>
        <div class="container">
            <h5>手机密码登录</h5>
            <div class="phonenum">
                <van-field
                    v-model='username'
                    placeholder='请输入手机号'
                    clearable
                    :error-message='usernamemsg'
                />
                <van-field
                    v-model='password'
                    type='password'
                    clearable
                    placeholder='请输入密码'
                    :error-message='passwordmsg'
                />
            </div>
            <div class="sure">
                <van-button type='primary' :loading='loading' loading-text='登录...' size='large' :disabled='flag' @click='login'>登录</van-button>            </div>
            <div class="password">
                <van-divider @click='toRegister'>立即注册</van-divider>
            </div>
        </div>
        <div class="footer">
            <div class="three">
                <p>第三方登录</p>
            </div>
            <ul>
                <li>
                    <button>微信</button>
                </li>
                <li>
                    <button>QQ</button>
                </li>
                <li>
                    <button>微博</button>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
    import Vue from 'vue'
    import { Field, Button, Toast, Divider } from 'vant'
    import axios from 'axios'
    Vue.use(Field)
    Vue.use(Button)
    Vue.use(Toast)
    Vue.use(Divider)
    export default {
        data () {
            return {
                username: '',
                password: '',
                loading: false,
                flag: false
            }
        },
        computed: {
            usernamemsg () {
                if (this.username === '') {
                    return ''
                } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.username)) {
                    return '手机号格式错误'
                } else {
                    return ''
                }
            },
            passwordmsg () {
                if (this.password === '') {
                    return ''
                } else if (this.password.length < 5) {
                    return '密码格式错误 最少六位'
                } else {
                    return ''
                }
            }
        },
        methods: {
            toRegister () {
                this.$router.replace('/register')
            },
            toHome () {
                this.$router.replace('/home')
            },
            login () {
                if (this.username === '' || this.usernamemsg === '手机号码格式错误') {
                    Toast('手机号输入有误')
                    return
                }
                if (this.password === '' || this.passwordmsg === '密码格式错误，最少为6位') {
                    Toast('密码输入有误')
                    return
                }
                if (this.code === '' || this.code !== this.adminCode) {
                    Toast('验证码输入有误')
                    return
                }
                this.loginFn()
            },
            loginFn () {
                // 调接口，修改按钮为不可点，修改值为注册中...
                this.flag = true
                this.loading = true
                axios.post('https://www.daxunxun.com/users/login', {
                    username: this.username,
                    password: this.password
                }).then(res => {
                    this.flag = false
                    this.loading = false
                    if (res.data === 2) {
                        Toast('该用户未注册，请先注册')
                    } else if (res.data === -1) {
                        Toast('密码错误')
                    } else if (res.data === 0) {
                        Toast('登录失败')
                    } else {
                        Toast('登录成功')
                        localStorage.setItem('isLogin', 'ok') // 登陆标识
                        this.$router.back() // 登陆成功返回上一页
                    }
                })
            }
        }
    }
</script>
<style lang="scss">
    @import '@/lib/reset.scss';
    .login{
        @include rect(100%,100%);
        @include flexbox();
        @include flex-direction(column);
        .header{
            @include rect(100%,50px);
            @include justify-content(space-between);
            position: relative;
            .home{
                @include background-color(#fff);
                @include rect(80px,30px);
                display: block;
                margin-left:20px;
                border:0;
                color:#A6A1A1;
                position: absolute;
                top: 50%;
                margin-top:-15px;
            }
        }
        .container{
            @include flex();
            @include rect(100%,auto);
            @include flexbox();
            @include flex-direction(column);
            h5{
                @include font-size(20px);
                @include rect(100%,38px);
                @include flexbox();
                @include justify-content();
                @include margin(15px 0 0 0);
                color:#888;
            }
            .phonenum{
                @include rect(100%,122px);
                .van-cell{
                    @include padding(0);
                    position:static;
                    .van-field__control{
                        @include padding(0);
                        @include rect(235px,40px);
                        @include display(block);
                        border:none;
                        border-bottom:1px solid #888;
                        @include margin(0 auto);
                    }
                    .van-field__error-message{
                        text-align: center;
                    }
                    .van-icon{
                        padding:0;
                        margin:0;
                        position: absolute;
                        right:10px;
                    }
                }
            }
            .sure{
                @include rect(100%,40px);
                .van-button--primary{
                    @include display(block);
                    @include margin(0 auto);
                    @include rect(332px,40px);
                    @include background-color(#F4F4F4);
                    border:0;
                    @include line-height(40px);
                    .van-button__text{
                        @include color(red);
                    }
                }
            }
            .password{
                @include rect(100%,auto);
                .van-divider{
                    @include display(block);
                    @include rect(70px,20px);
                    @include margin(10px auto);
                    border:0;
                    @include text-align(center);
                }
            }
        }
        .footer{
            @include rect(100%,110px);
            @include background-color(#fff);
            .three{
                @include rect(100%,45px);
                @include flexbox();
                p{
                    @include margin(0 auto);
                    @include line-height(45px);
                }
            }
            ul{
                @include rect(100%,100%);
                li{
                    button{
                        @include rect(80px,30px);
                        @include background-color(#F4F4F4 100%);
                        border:0;
                    }
                }
            }
            .van-toast{
                position:fixed;
                left:50%;
                top:50%
            }
        }
    }
</style>
