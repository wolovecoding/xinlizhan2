<template>
    <div>
        <vue-canvas-nest :config="{count:200,opacity:10}"></vue-canvas-nest>
        <div style="padding-top: 15%;">
            <b-container class="content">
                <b-row>
                    <b-col md="3"/>
                    <b-col md="6">
                        <b-form  id="login" style="text-align: left">
                            <div style="text-align: center;font-size: xx-large">欢迎</div>
                            <b-form-group
                                    id="account"
                                    label="账号"
                                    label-align="left"
                                    label-for="account-in"
                                    :invalid-feedback="checkAct"
                                    :state="actState"
                            >

                                <b-form-input
                                        id="account-in"
                                        v-model="log.account"
                                        :state="actState"
                                        required
                                        placeholder="请输入账号"
                                        trim
                                >
                                </b-form-input>
                            </b-form-group>
                            <!--                        密码-->
                            <b-form-group
                                    id="password"
                                    label="密码"
                                    label-align="left"
                                    label-for="password-in"
                            >
                                <b-form-input :state="checkPsw"
                                              id="password-in"
                                              v-model="log.password"
                                              type="password"
                                              required
                                              placeholder="请输入密码"
                                >
                                </b-form-input>
                                <b-form-invalid-feedback :state="checkPsw" style="text-align: left">
                                    密码不能为空
                                </b-form-invalid-feedback>
                                <br/>
                                <b-button @click="login" variant="success" class="subReg" style="">登录</b-button>
                                <b-button class="subReg" variant="success" style="float: right">注册</b-button>
                            </b-form-group>
                        </b-form>
                    </b-col>
                    <b-col md="3"/>
                </b-row>

            </b-container>
        </div>
    </div>

</template>

<script>
    import vueCanvasNest from 'vue-canvas-nest'
    import {login} from "../../api/api";
    import {mapMutations,mapGetters} from 'vuex'
    export default {
        name: "Login",
        components:{vueCanvasNest},
        data(){
            return{
                log:{
                    account:'',
                    password:'',
                    jscode:'1'
                },
            }
        },
        computed:{
            //验证account
            actState(){
                return this.log.account.length>0 && this.isInt(this.log.account)
            },
            checkAct(){
                if (this.log.account.length<=0){
                    return "长度不能为空"
                }else if(!this.isInt(this.log.account)){
                    return "没有非数字的id"
                }
            },
            //验证密码
            checkPsw(){
                return this.log.password.length>0
            },
            ...mapGetters(['token'])
        },
        methods:{
            //判断是否是整数
            isInt(i){
                let re = /[1-9]+[0-9]*]*/
                if (!re.test(i)){
                    return false
                }else return true
            },
            login () {
                this.$axios.post(login, {
                    "sid": this.log.account,
                    "password": this.log.password,
                    "jscode":1
                }).then(res => {
                    console.log(res)
                    if (res.data) {
                        this.$message.success('登陆成功')
                        //localStorage.setItem({'Token': res.data.token})

                        this.setToken(res.data.token)
                        console.log(res.data.token)
                        this.$router.push({name:'poster'})
                    } else {
                        this.$message.error('登陆失败，账号有误')
                    }
                }).catch(error => {
                    this.$message.error('登陆失败' + error)
                    console.log(error)
                })
               // this.$router.push({name:'poster'})
            },
            ...mapMutations({
                setToken:'SET_TOKEN'
            }),
        },
        created() {
            let token = localStorage.getItem("Token")
            if (token){
                this.$router.push({name:'poster'})
            }
        },
    }
</script>

<style scoped>

    #login{
        border: 1px solid brown;
        padding: 20px 50px 20px 50px;
    }
    .subReg{
        width: 30%;
        color: #e2ff6f;
        font-family: 幼圆;
        font-size: large;
        padding: 10px 10px;
    }



</style>