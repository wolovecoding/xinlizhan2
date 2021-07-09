<template>
    <div id="all">
    <h1 id="title">华中师范大学信息管理学院二级心理健康教育工作站</h1>
      <!--  <vue-canvas-nest :config="{count:200,opacity:10}"></vue-canvas-nest>-->
      <!--  <div style="padding-top: 15%;">
            <b-container >
                <b-row>
                    <b-col md="3"/>
                    <b-col md="6">
                        <b-form class="content log_text" id="login" style="text-align: left">
                            <div id="log_text"><p>登录</p></div>
                            <b-form-group
                                    id="account"
                                    label=""
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
                                        placeholder="账号"
                                        trim
                                >
                                </b-form-input>
                            </b-form-group>
                            &lt;!&ndash;                        密码&ndash;&gt;
                            <b-form-group
                                    id="password"
                                    label=""
                                    label-align="left"
                                    label-for="password-in"
                            >
                                <b-form-input :state="checkPsw"
                                              id="password-in"
                                              v-model="log.password"
                                              type="password"
                                              required
                                              placeholder="密码"
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
        </div>-->
        <div class="contain">
            <b-form  style="text-align: left">
                <div id="log_text"><p>登录</p></div>
                <b-form-group
                        id="account"
                        label=""
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
                            placeholder="账号"
                            trim
                    >
                    </b-form-input>
                </b-form-group>
                <!--                        密码-->
                <b-form-group
                        id="password"
                        label=""
                        label-align="left"
                        label-for="password-in"
                        style="margin-bottom: 0"
                >
                    <b-form-input :state="checkPsw"
                                  id="password-in"
                                  v-model="log.password"
                                  type="password"
                                  required
                                  placeholder="密码"
                    >
                    </b-form-input>
                    <b-form-invalid-feedback :state="checkPsw" style="text-align: left">
                        密码不能为空
                    </b-form-invalid-feedback>
                    <br/>
                </b-form-group>
                <button @click="login" variant="success" class="form_btn">登录</button>
                <div class="fgt_rgst">
                    <p>忘记密码？
                        <el-tooltip  content="请找管理员" placement="right" >
                            <a href="javascript:void(0)">点击这里</a>
                        </el-tooltip>
                    </p>
                    <p>没有账户？
                        <el-tooltip  content="请找管理员" placement="right" >
                            <a href="javascript:void(0)">注册</a>
                        </el-tooltip>
                    </p>
                </div>

            </b-form>
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
                    if (res.data) {
                        this.$message.success('登陆成功')
                        //localStorage.setItem({'Token': res.data.token})

                        this.setToken(res.data.token)
                        this.$router.push({name:'poster'})
                    } else {
                        this.$message.error('登陆失败，账号有误')
                    }
                }).catch(error => {
                    this.$message.error('登陆失败' + error)
                })
               // this.$router.push({name:'poster'})
            },
            ...mapMutations({
                setToken:'SET_TOKEN'
            }),
        },
        created() {
            let token = localStorage.getItem("Token")
            /*这里应该也有问题，不进行token验证了吗？*/
            if (token){
                this.$router.push({name:'poster'})
            }
        },
    }
</script>

<style scoped>

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #all{
        position: fixed;
        height: 100%;
        width: 100%;
        bottom: 0;
        background-size: auto;
        background: url("../../assets/log_backg.jpg");

    }
    #title{
        padding-top: 40px;
        font-size: 40px;
        font-weight: 600;
        max-height: 30px;
        color: rgba(252, 130, 130, 0.4);
        text-shadow: 15px -10px 10px rgba(0, 0, 0, 0.2);
    }
    .contain{
        padding: 20px 50px 20px 50px;
        position: relative;
        width: 400px;
        height: 400px;
        left: 50%;
        top: 50%;
        margin-left: -450px;
        margin-top: -250px;


        background: rgba(255, 255, 255, 0.1);
        box-shadow: 20px -20px 20px rgba(0, 0, 0, 0.3);
        /*border: 1px solid rgba(255, 255, 255, 0.2);*/
       /* border-right: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);*/
        display: flex;
        justify-content: center;
        align-items: center;
    }

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
    .content{
        background-color: #e2ff6f ;
        z-index: -1;
    }
    /*登录标签*/
    #log_text{
        position: relative;
    }
    #log_text p{
        color: #fff;
        font-size: 25px;
        font-weight: 500;
        letter-spacing: 5px;
        padding: 0.5em 0.5em 0.7em 0em;
        cursor: pointer;
    }
    #log_text p:before{
        content:'';
        position: absolute;
        top: 50px;
        width: 0px;
        height: 3px;
        background: #fff;
        transition: 0.5s;
    }
    #log_text p:hover:before{
        width: 53px;
    }
    /*输入框*/


    .form-group input{
        width: 100%;
        padding: 10px 20px;
        background: rgba(255, 255, 255, 0.2);
        outline: none;
        border: none;
        border-radius: 30px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        color: #fff;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }
    .form-group input{
        color: #fff;
    }
    /*登录按钮*/
    .form_btn{
        min-width: 80px;
        min-height: 40px;
        border-radius: 30px;
        border: none;
        text-align: center;
        text-decoration: black;
        font-size: 16px;
        font-weight: 600;
        box-shadow: 0 7px 8px 0 rgba(0,0,0,0.24);
        background: rgba(255, 255, 255, 0.25);
        color: #666;
    }
    .form_btn:hover{
        box-shadow: 0 6px 17px 0 rgba(0,0,0,0.4);
    }

    /*忘记密码   没有账户*/
    .fgt_rgst{
        margin: 20px 0;
    }
    .fgt_rgst p{
        margin-top: 6px;
        color: #fff;
        letter-spacing: 1px;
        font-weight: 300;
        font-size: 15px;
    }

    .fgt_rgst a{
        color: #fff;
        font-weight: 400;
        text-decoration: none;
    }
    .fgt_rgst a:hover{
        color: #fff;
        transition: 0.5s;
    }
    /*要在根目录设置*/
    .el-tooltip__popper{
        background: rgba(128, 44, 44, 0.65) !important;
    }



</style>