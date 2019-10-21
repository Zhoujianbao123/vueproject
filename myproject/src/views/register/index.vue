<template>
    <section class="register">
        <div class="header">
            <button class="home">首页</button>
        </div>
        <div class="container">
            <h4>注册后可查看我的主页</h4>
            <div class="content">
                <van-field
                    v-model="username"
                    placeholder="请输入手机号"
                    clearable
                    :error-message="usernamemsg"
                />
                <van-field
                    v-model="password"
                    type="password"
                    clearable
                    placeholder="请输入密码"
                    :error-message="passwordmsg"
                >
                </van-field>
                <van-field
                    v-model="code"
                    center
                    clearable
                    placeholder="请输入短信验证码"
                    :error-message="codemsg"
                >
                    <van-button slot="button" :disabled="disabled" size="small" type="primary" @click="sendCode" style="margin-right:76px">{{ btnmsg }}</van-button>
                </van-field>
            </div>
            <div class="sure">
                <van-button type="primary" :loading="loading" loading-text="注册..." size="large" :disabled="flag" @click="register">注册</van-button>
            </div>
            <div class="now">
                <p @click='toLogin'>立即登录</p>
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
                code: '',
                btnmsg: '发送验证码',
                disabled: false,
                adminCode: '',
                loading: false,
                flag: false
            }
        },
        computed: {
            usernamemsg () {
                if (this.username === '') {
                    return ''
                } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.username)) {
                    return '手机号码格式错误'
                } else {
                    return ''
                }
            },
            passwordmsg () {
                if (this.password === '') {
                    return ''
                } else if (this.password.length < 5) {
                    return '密码格式错误，最少为6位'
                } else {
                    return ''
                }
            },
            codemsg () {
                if (this.code === '') {
                    return ''
                } else if (this.code.length !== 5) {
                    return '验证码格式错误'
                } else {
                    return ''
                }
            }
        },
        methods: {
            toLogin () {
                this.$router.replace('/login')
            },
            sendCode () {
                let time = 4
                let timer
                timer = setInterval(() => {

                    console.log(time);
                    time--
                    if (time === 0) {
                        clearInterval(timer)
                        this.disabled = false // 按钮可点
                        this.btnmsg = '发送验证码'
                        return
                    }


                    this.disabled = true // 按钮不可点
                    console.log(this.btnmsg);
                    this.btnmsg = time + 's后重新发送'
                }, 1000)
                this.getCode()
            },
            getCode () {

                if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.username)) {
                    Toast('请填写正确的手机号码')
                } else {
                    axios.get('https://www.daxunxun.com/users/sendCode?tel=' + this.username).then(res => {
                        if (res.data === 1) {
                            Toast('用户名已注册，请直接登录')
                        } else if (res.data === 0) {
                            Toast('获取验证码失败')
                        } else {
                            this.adminCode = res.data.code
                            console.log(this.adminCode)
                        }
                    })
                }
            },
            register () {
                if (this.username === '' || this.usernamemsg === '手机号码格式错误') {
                    Toast('手机号码输入有误')
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
                this.registerFn()
            },
            registerFn () {
                // 调接口，修改按钮为不可点，修改值为注册中...
                this.flag = true
                this.loading = true
                axios.post('https://www.daxunxun.com/users/register', {
                    username: this.username,
                    password: this.password
                }).then(res => {
                    this.flag = false
                    this.loading = false
                    if (res.data === 2) {
                        Toast('用户名已注册，请直接登录')
                    } else if (res.data === 0) {
                        Toast('注册失败')
                    } else {
                        Toast('注册成功')
                    }
                })
            }
        }
    }
</script>
<style lang="scss">
    @import '@/lib/reset.scss';
    .register{
        @include rect(100%,100%)
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
            h4{
                @include font-size(30px);
                @include rect(100%,59px);
                @include flexbox();
                @include justify-content();
                @include margin(15px 0 0 0);
                color:#888;
            }
            .content{
                @include rect(100%,150px);
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
                        margin-left: 81px;
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
                    .van-field__button{
                        margin:0 auto;
                        margin:0;
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
                    @include color(red);
                    border:0;
                }
            }
            .now{
                @include rect(100%,auto);
                p{
                    @include display(block);
                    @include rect(56px,20px);
                    @include margin(10px auto);
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
        }
    }
</style>
