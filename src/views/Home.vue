<!--suppress JSIgnoredPromiseFromCall -->
<template>
    <div class="home">
      <div class="header_con">
        <div class="header">
          <div class="welcome fl">欢迎来到天天生鲜!</div>
          <div class="fr">
            <div class="login_info fl" v-if="isUser">
              欢迎您：<em>{{isUser}}</em>
            </div>
            <div class="login_btn fl" v-else>
              <a href="login.html">登录</a>
              <span>|</span>
              <a href="register.html">注册</a>
            </div>
            <div class="user_link fl">
              <span>|</span>
              <a href="user_center_info.html">用户中心</a>
              <span>|</span>
              <a href="cart.html">我的购物车</a>
              <span>|</span>
              <a href="user_center_order.html">我的订单</a>
            </div>
          </div>
        </div>
      </div>

      <div class="search_bar clearfix">
        <a href="index.html" class="logo fl"><img src="../assets/images/logo.png"></a>
        <div class="search_con fl">
          <input type="text" class="input_text fl" name="" placeholder="搜索商品">
          <input type="button" class="input_btn fr" name="" value="搜索">
        </div>
        <div class="guest_cart fr">
          <a href="#" class="cart_name fl">我的购物车</a>
          <div class="goods_count fl" id="show_count">1</div>
        </div>
      </div>

      <div class="navbar_con">
        <div class="navbar">
          <h1 class="fl">全部商品分类</h1>
          <ul class="navlist fl">
            <li><a href="">首页</a></li>
            <li class="interval">|</li>
            <li><a href="">手机生鲜</a></li>
            <li class="interval">|</li>
            <li><a href="">抽奖</a></li>
          </ul>
        </div>
      </div>

      <div class="center_con clearfix">
        <ul class="subnav fl">
          <li><a href="#model01" class="fruit">新鲜水果</a></li>
          <li><a href="#model02" class="seafood">海鲜水产</a></li>
          <li><a href="#model03" class="meet">猪牛羊肉</a></li>
          <li><a href="#model04" class="egg">禽类蛋品</a></li>
          <li><a href="#model05" class="vegetables">新鲜蔬菜</a></li>
          <li><a href="#model06" class="ice">速冻食品</a></li>
        </ul>
        <div class="slide fl">
          <ul class="slide_pics">
            <li><img src="../assets/images/slide.jpg" alt="幻灯片"></li>
            <li><img src="../assets/images/slide02.jpg" alt="幻灯片"></li>
            <li><img src="../assets/images/slide03.jpg" alt="幻灯片"></li>
            <li><img src="../assets/images/slide04.jpg" alt="幻灯片"></li>
          </ul>
          <div class="prev"></div>
          <div class="next"></div>
          <ul class="points"></ul>
        </div>
        <div class="adv fl">
          <a href="#"><img src="../assets/images/adv01.jpg"></a>
          <a href="#"><img src="../assets/images/adv02.jpg"></a>
        </div>
      </div>

      <div class="list_model">
        <div class="list_title clearfix">
          <h3 class="fl" id="model01">新鲜水果</h3>
          <div class="subtitle fl">
            <span>|</span>
            <a href="#">鲜芒</a>
            <a href="#">加州提子</a>
            <a href="#">亚马逊牛油果</a>
          </div>
          <a href="#" class="goods_more fr" id="fruit_more">查看更多 ></a>
        </div>

        <div class="goods_con clearfix">
          <div class="goods_banner fl"><img src="../assets/images/banner01.jpg"></div>
          <ul class="goods_list fl">
            <li>
              <h4><a href="#">草莓</a></h4>
              <a href="#"><img src="../assets/images/goods/goods003.jpg"></a>
              <div class="prize">¥ 30.00</div>
            </li>
            <li>
              <h4><a href="#">葡萄</a></h4>
              <a href="#"><img src="../assets/images/goods/goods002.jpg"></a>
              <div class="prize">¥ 5.50</div>
            </li>
            <li>
              <h4><a href="#">柠檬</a></h4>
              <a href="#"><img src="../assets/images/goods/goods001.jpg"></a>
              <div class="prize">¥ 3.90</div>
            </li>
            <li>
              <h4><a href="#">奇异果</a></h4>
              <a href="#"><img src="../assets/images/goods/goods012.jpg"></a>
              <div class="prize">¥ 25.80</div>
            </li>
          </ul>
        </div>
      </div>

      <div class="list_model">
        <div class="list_title clearfix">
          <h3 class="fl" id="model02">海鲜水产</h3>
          <div class="subtitle fl">
            <span>|</span>
            <a href="#">河虾</a>
            <a href="#">扇贝</a>
          </div>
          <a href="#" class="goods_more fr">查看更多 ></a>
        </div>

        <div class="goods_con clearfix">
          <div class="goods_banner fl"><img src="../assets/images/banner02.jpg"></div>
          <ul class="goods_list fl">
            <li>
              <h4><a href="#">青岛野生海捕大青虾</a></h4>
              <a href="#"><img src="../assets/images/goods/goods018.jpg"></a>
              <div class="prize">¥ 48.00</div>
            </li>
            <li>
              <h4><a href="#">扇贝</a></h4>
              <a href="#"><img src="../assets/images/goods/goods019.jpg"></a>
              <div class="prize">¥ 46.00</div>
            </li>
            <li>
              <h4><a href="#">冷冻秋刀鱼</a></h4>
              <a href="#"><img src="../assets/images/goods/goods020.jpg"></a>
              <div class="prize">¥ 19.00</div>
            </li>
            <li>
              <h4><a href="#">基围虾</a></h4>
              <a href="#"><img src="../assets/images/goods/goods021.jpg"></a>
              <div class="prize">¥ 25.00</div>
            </li>
          </ul>
        </div>
      </div>

      <div class="list_model">
        <div class="list_title clearfix">
          <h3 class="fl" id="model03">猪牛羊肉</h3>
          <div class="subtitle fl">
            <span>|</span>
            <a href="#">鲜芒</a>
            <a href="#">加州提子</a>
            <a href="#">亚马逊牛油果</a>
          </div>
          <a href="#" class="goods_more fr">查看更多 ></a>
        </div>

        <div class="goods_con clearfix">
          <div class="goods_banner fl"><img src="../assets/images/banner03.jpg"></div>
          <ul class="goods_list fl">
            <li>
              <h4><a href="#">维多利亚葡萄维多利亚葡萄维多利亚葡萄维多利亚葡萄</a></h4>
              <a href="#"><img src="../assets/images/goods.jpg"></a>
              <div class="prize">¥ 38.00</div>
            </li>
            <li>
              <h4><a href="#">维多利亚葡萄</a></h4>
              <a href="#"><img src="../assets/images/goods.jpg"></a>
              <div class="prize">¥ 38.00</div>
            </li>
            <li>
              <h4><a href="#">维多利亚葡萄</a></h4>
              <a href="#"><img src="../assets/images/goods.jpg"></a>
              <div class="prize">¥ 38.00</div>
            </li>
            <li>
              <h4><a href="#">维多利亚葡萄</a></h4>
              <a href="#"><img src="../assets/images/goods.jpg"></a>
              <div class="prize">¥ 38.00</div>
            </li>
          </ul>
        </div>
      </div>

      <div class="list_model">
        <div class="list_title clearfix">
          <h3 class="fl" id="model04">禽类蛋品</h3>
          <div class="subtitle fl">
            <span>|</span>
            <a href="#">鲜芒</a>
            <a href="#">加州提子</a>
            <a href="#">亚马逊牛油果</a>
          </div>
          <a href="#" class="goods_more fr">查看更多 ></a>
        </div>

        <div class="goods_con clearfix">
          <div class="goods_banner fl"><img src="../assets/images/banner04.jpg"></div>
          <ul class="goods_list fl">
            <li>
              <h4><a href="#">维多利亚葡萄维多利亚葡萄维多利亚葡萄维多利亚葡萄</a></h4>
              <a href="#"><img src="../assets/images/goods.jpg"></a>
              <div class="prize">¥ 38.00</div>
            </li>
            <li>
              <h4><a href="#">维多利亚葡萄</a></h4>
              <a href="#"><img src="../assets/images/goods.jpg"></a>
              <div class="prize">¥ 38.00</div>
            </li>
            <li>
              <h4><a href="#">维多利亚葡萄</a></h4>
              <a href="#"><img src="../assets/images/goods.jpg"></a>
              <div class="prize">¥ 38.00</div>
            </li>
            <li>
              <h4><a href="#">维多利亚葡萄</a></h4>
              <a href="#"><img src="../assets/images/goods.jpg"></a>
              <div class="prize">¥ 38.00</div>
            </li>
          </ul>
        </div>
      </div>

      <div class="list_model">
        <div class="list_title clearfix">
          <h3 class="fl" id="model05">新鲜蔬菜</h3>
          <div class="subtitle fl">
            <span>|</span>
            <a href="#">鲜芒</a>
            <a href="#">加州提子</a>
            <a href="#">亚马逊牛油果</a>
          </div>
          <a href="#" class="goods_more fr">查看更多 ></a>
        </div>

        <div class="goods_con clearfix">
          <div class="goods_banner fl"><img src="../assets/images/banner05.jpg"></div>
          <ul class="goods_list fl">
            <li>
              <h4><a href="#">维多利亚葡萄维多利亚葡萄维多利亚葡萄维多利亚葡萄</a></h4>
              <a href="#"><img src="../assets/images/goods.jpg"></a>
              <div class="prize">¥ 38.00</div>
            </li>
            <li>
              <h4><a href="#">维多利亚葡萄</a></h4>
              <a href="#"><img src="../assets/images/goods.jpg"></a>
              <div class="prize">¥ 38.00</div>
            </li>
            <li>
              <h4><a href="#">维多利亚葡萄</a></h4>
              <a href="#"><img src="../assets/images/goods.jpg"></a>
              <div class="prize">¥ 38.00</div>
            </li>
            <li>
              <h4><a href="#">维多利亚葡萄</a></h4>
              <a href="#"><img src="../assets/images/goods.jpg"></a>
              <div class="prize">¥ 38.00</div>
            </li>
          </ul>
        </div>
      </div>

      <div class="list_model">
        <div class="list_title clearfix">
          <h3 class="fl" id="model06">速冻食品</h3>
          <div class="subtitle fl">
            <span>|</span>
            <a href="#">鲜芒</a>
            <a href="#">加州提子</a>
            <a href="#">亚马逊牛油果</a>
          </div>
          <a href="#" class="goods_more fr">查看更多 ></a>
        </div>

        <div class="goods_con clearfix">
          <div class="goods_banner fl"><img src="../assets/images/banner06.jpg"></div>
          <ul class="goods_list fl">
            <li>
              <h4><a href="#">维多利亚葡萄维多利亚葡萄维多利亚葡萄维多利亚葡萄</a></h4>
              <a href="#"><img src="../assets/images/goods.jpg"></a>
              <div class="prize">¥ 38.00</div>
            </li>
            <li>
              <h4><a href="#">维多利亚葡萄</a></h4>
              <a href="#"><img src="../assets/images/goods.jpg"></a>
              <div class="prize">¥ 38.00</div>
            </li>
            <li>
              <h4><a href="#">维多利亚葡萄</a></h4>
              <a href="#"><img src="../assets/images/goods.jpg"></a>
              <div class="prize">¥ 38.00</div>
            </li>
            <li>
              <h4><a href="#">维多利亚葡萄</a></h4>
              <a href="#"><img src="../assets/images/goods.jpg"></a>
              <div class="prize">¥ 38.00</div>
            </li>
          </ul>
        </div>
      </div>
      <app-footer></app-footer>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import AppFooter from "../components/AppFooter"
    // @ is an alias to /src
    export default {
        name: 'home',
        mounted() {
         this.GetUser();
        },
        methods: {
            GetUser() {
          this.$store.dispatch("Home/Home_User").then(res=>{
              console.log(res,1123)
          },error=>{
              console.log(error.response)
          })
            }
        },
        components: {
            AppFooter
        },
        computed:{
            ...mapState({
                isUser: state=>state.user.username
            })
        }
    }
</script>
<style>
    .addresslist {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    .main {
        height: 100%;
        width: calc(100% + 17px);
        overflow-y: scroll;
        padding: 15px 32px 15px 15px;
    }
</style>
