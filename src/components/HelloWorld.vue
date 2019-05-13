<template>
  <div class="hello">
    <el-container>
      <el-header class="login_top" height=" 130px">
          <router-link class="login_logo" to="/about">
            <img src="../assets/images/logo02.png" alt="">
          </router-link>
      </el-header>
      <el-main class="login_from-bg">
        <div class="login_from-wrap">
          <div class="login_banner"></div>
          <div class="slogan">日夜兼程 · 急速送达</div>
          <div class="login_form clearfix">
            <div class="login_title clearfix">
              <h1>用户登录</h1>
              <router-link to="/reg">立即注册</router-link>
            </div>
            <div class="form_input">
              <form  autocomplete="off">
                <input   type="text" name="username" class="name_input" placeholder="请输入用户名"/>
                <div  class="user_error"></div>
                <input  onfocus="this.type='password'" name="pwd" class="pass_input" placeholder="请输入密码">
                <div class="pwd_error"></div>
                <div class="more_input">
                  <label><input  autocomplete = "off" type="checkbox"><span class="padding-8">记住用户名</span></label>
                  <a href="#">忘记密码</a>
                </div>
                <input type="submit" name="" value="登录" class="input_submit">
              </form>
            </div>
          </div>
        </div>
      </el-main>
      <el-footer class="footer no-mp" height="auto">
          <div class="foot_link">
            <a href="#">关于我们</a>
            <span>|</span>
            <a href="#">联系我们</a>
            <span>|</span>
            <a href="#">招聘人才</a>
            <span>|</span>
            <a href="#">友情链接</a>
          </div>
          <p>CopyRight © 2019 北京天天生鲜信息技术有限公司 All Rights Reserved</p>
          <p>电话：010-****888    京ICP备*******8号</p>

      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return { visible: false }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.el-main{
  padding 0
}
.el-header {
  padding: 0
}

.login_from-bg
  background: #518e17;
.hello
  .login_top
    display: flex
    align-items center
    width: 960px
    height: 130px
    margin:0 auto
    .login_logo
      display: inline-block
  .login_from-wrap
      display flex
      width: 970px;
      height: 480px
      margin 0 auto
      background-color #518e17
      justify-content space-between
      .login_banner
        width: 381px;
        height: 322px;
        background: url(../assets/images/login_banner.png) no-repeat;
        margin-top: 90px;
      .slogan
        width: 40px;
        height: 300px;
        font-size: 30px;
        color: #f0f9e8;
        text-align: center;
        line-height: 36px;
        margin: 80px 0 0 50px;


  .login_form
    width: 368px;
    height: 378px;
    border: 1px solid #c6c6c5;
    background-color: #fff;
    margin-top: 50px;
    float right
    .login_title
      height: 60px;
      width: 308px;
      margin: 10px auto;
      border-bottom: 1px solid #e0e0e0;
      h1
        font-size 24px
        height: 60px;
        line-height 60px;
        color #a8a8a8
        float left
        font-weight:bold
        margin-left 44px;
      a
        width: 100px;
        height: 20px;
        display: block;
        font-size: 16px;
        color: #5fb42a;
        text-indent: 26px;
        background: url(../assets/images/icons02.png) left 5px no-repeat;
        float: left;
        margin: 20px 0 0 36px;
    .form_input
      width: 308px;
      height: 250px;
      margin: 20px auto;
      .name_input
        width: 306px;
        height: 36px;
        border: 1px solid #e0e0e0;
        background: url(../assets/images/icons02.png) 280px -41px no-repeat #f8f8f8;
        outline: none;
        font-size: 14px;
        text-indent: 10px;
      .pass_input
        width: 306px;
        height: 36px;
        border: 1px solid #e0e0e0;
        outline: none;
        font-size: 14px;
        text-indent: 10px;
        background: url(../assets/images/icons02.png) 280px -92px no-repeat #f8f8f8;
      .user_error, .pwd_error
        color: #f00;
        height:34px;
      .more_input
        display flex
        justify-content  space-between
        margin-bottom 30px
      .input_submit
        width: 100%;
        height: 40px;
        background-color: #47aa34;
        color: #fff;
        font-size: 22px;
        border: 0px;
        font-family: 'Microsoft Yahei';
        cursor: pointer;


  .footer
    border-top: 2px solid #42ad46;
    margin: 0 0 30px 0;
    .foot_link
      text-align: center;
      margin-top: 30px
      a
        color: #4e4e4e;
      span
        padding: 0 10px;
    p
        text-align: center;
        margin-top: 10px;



</style>
