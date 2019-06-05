<template>
    <div class="register">
        <div class="register_con">
            <div class="l_con fl">
                <a class="reg_logo"><img src="../assets/images/logo02.png"></a>
                <div class="reg_slogan">足不出户 · 新鲜每一天</div>
                <div class="reg_banner"></div>
            </div>
            <div class="r_con fr">
                <div class="reg_title clearfix">
                    <h1>用户注册</h1>
                    <router-link to="/">登录</router-link>
                </div>
                <div class="reg_form clearfix">
                    <form @submit.prevent="HandleReg">
                        <ul>
                            <li>
                                <label>用户名:</label>
                                <input type="text" v-model="reg.username" name="user_name" id="user_name">
                                <span class="error_tip">提示信息</span>
                            </li>
                            <li>
                                <label>密码:</label>
                                <input type="password" v-model="reg.pwd" name="pwd" id="pwd">
                                <span class="error_tip">提示信息</span>
                            </li>
                            <li>
                                <label>确认密码:</label>
                                <input type="password" v-model="reg.cpwd" name="cpwd" id="cpwd">
                                <span class="error_tip">提示信息</span>
                            </li>
                            <li>
                                <label>邮箱:</label>
                                <input type="text" v-model="reg.email" name="email" id="email">
                                <span class="error_tip">提示信息</span>
                            </li>
                            <li class="agreement">
                                <input type="checkbox" name="allow" id="allow" checked="checked">
                                <label>同意”天天生鲜用户使用协议“</label>
                                <span class="error_tip2">提示信息</span>
                            </li>
                            <li class="reg_sub">
                                <input type="submit" value="注 册" name="">
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppFooter from "../components/AppFooter";
    export default {
        name: "Register",
        data() {
            return {
                reg:{
                    username:''  ,
                    pwd:'',
                    cpwd:"",
                    email:""
                }
            }
        },
        mounted(){
          this.ErrorReg();
        },
        methods:{
           // ...mapActions({_HandleReg:"HandleReg"}),
            HandleReg(){
                this.$store.dispatch("Register/Reg_Register",this.reg)
            },
            ErrorReg(){
                let error  = this.$route.query.error;
                if (error){
                    this.$message.error(error);
                }
            }
        },
        components: {
            AppFooter
        }
    }
</script>

<style scoped>
</style>