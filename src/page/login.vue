<template>
  <div class="login">
    <div class="login-header clearFix">
      <a href="#">美团网</a>
    </div>
    <div class="login-main clearFix">
      <div :span="10" class="promotion-banner">
        <img
          src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          alt="美团网"
          width="480px"
          height="370"
        />
      </div>
      <div :span="10" class="login-section">
        <form action="get">
          <div class="tips" v-if="error">
            <i class="el-icon-remove"></i>
            {{error}}
          </div>
          <div class="login-type">
            <span>账号登录</span>
            <a class="iconfont">手机动态码登录</a>
          </div>
          <div class="form-field">
            <span class="iconfont phone">+86</span>
            <input type="text" placeholder="手机号" v-model="userPhone" />
          </div>
          <div class="form-field">
            <span class="pw-icon iconfont"></span>
            <input type="password" placeholder="密码" v-model="userPassword" />
          </div>
          <div class="form-field forget-pw">
            <a href="#">忘记密码</a>
          </div>
          <button class="form-login-btn" @click="onLogin">登录</button>
          <p class="signup-guide">
            还没有账号?
            <a href="#">免费注册</a>
          </p>
          <div class="oauth-wrapper">
            <span class="title">用合作网站账号登录</span>
            <span class="icon-qq iconfont"></span>
            <span class="icon-wb iconfont"></span>
          </div>
        </form>
      </div>
    </div>
    <div class="login-footer">
      <div class="site-info-nav">
        <ul>
          <li class="first">关于美团</li>
          <li>加入我们</li>
          <li>商家入驻</li>
          <li>帮助中心</li>
          <li>美团手机版</li>
        </ul>
      </div>
      <div class="copyright">
        <p>
          ©
          <span>2020</span>
          <a href="https://www.meituan.com">美团网团购</a>
          meituan.com
          <a href="http://www.miibeian.gov.cn/" target="_blank">京ICP证070791号</a>
          京公网安备11010502025545号
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/api/index";
export default {
  data() {
    return {
      userPhone: "",
      userPassword: "",
      error: ""
    };
  },
  methods: {
    onLogin(e) {
      e.preventDefault();
      api
        .login({ userName: this.userPhone, password: this.userPassword })
        .then(res => {
          if (res.status === "fail") {
            this.error = res.msg;
          } else {
            this.$router.push("/");
            this.$store.commit("setUserName", this.userPhone);
          }
        })
        .catch(err => {
          this.error = err.msg;
        });
    }
  }
};
</script>
<style lang="scss">
@font-face {
  font-family: "iconfont"; /* project id 1930833 */
  src: url("//at.alicdn.com/t/font_1930833_tdhti4ch3b.eot");
  src: url("//at.alicdn.com/t/font_1930833_tdhti4ch3b.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1930833_tdhti4ch3b.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1930833_tdhti4ch3b.woff") format("woff"),
    url("//at.alicdn.com/t/font_1930833_tdhti4ch3b.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1930833_tdhti4ch3b.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont";
}
.clearFix::after {
  clear: both;
  display: block;
  content: "";
}
a {
  color: #fe8c00;
  text-decoration: none;
}
.login {
  .login-header {
    width: 980px;
    height: auto;
    margin: 40px auto 30px;
    a {
      margin: 0;
      width: 82px;
      height: 54px;
      background-position: -188px -808px;
      background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
      background-repeat: no-repeat;
      background-size: initial;
      float: left;
      display: block;
      text-indent: -9999px;
      overflow: hidden;
    }
  }
  .login-main {
    width: 980px;
    margin: 0 auto 70px;
    .promotion-banner {
      float: left;
    }
    .login-section {
      float: right;
      margin: 0 auto;
      width: 270px;
      background: #fff;
      color: #999;
      position: relative;
      .tips {
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #f5d8a7;
        border-radius: 2px;
        background: #fff6db;
        font-size: 12px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
      }
      .login-type {
        font-weight: 400;
        padding-top: 40px;
        color: #666;
        a {
          position: relative;
          padding-right: 16px;
          color: #666;
          float: right;
          font-size: 12px;
          cursor: pointer;
          &::after {
            content: "\e613";
            font-size: 16px;
          }
        }
      }
      .form-field {
        border: 1px solid #aaa;
        background-color: #fff;
        margin: 8px 0;
        input {
          box-sizing: border-box;
          border: none;
          outline: none;
          height: 30px;
        }
        .phone::after {
          content: "\e73b";
        }
        .pw-icon::after {
          content: "\e61c";
          margin-left: 5px;
        }
      }
      .forget-pw {
        text-align: right;
        border: none;
        font-size: 12px;
      }
      .form-login-btn {
        width: 100%;
        height: 30px;
        border: none;
        color: #222;
        background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
        border-width: 0;
        box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
        background-size: 100%;
        padding: 7px 20px 6px;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        outline: none;
      }
      .oauth-wrapper {
        position: relative;
        text-align: center;
        border-top: 1px solid #ccc;
        margin-top: 20px;
        padding-top: 15px;
        font-size: 20px;
        .title {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          padding: 0 5px;
          background-color: #fff;
          font-size: 13px;
        }
        .icon-qq {
          &::after {
            content: "\e62f";
            font-size: 22px;
            color: #93c8ed;
          }
        }
        .icon-wb {
          &::after {
            content: "\e7cd";
            color: #ff978c;
          }
        }
      }
      .signup-guide {
        font-size: 14px;
        margin: 10px 0;
      }
    }
  }
  .login-footer {
    margin: 0 auto 30px;
    clear: both;
    width: 980px;
    font-size: 12px;
    color: #999;
    .site-info-nav {
      margin-bottom: 20px;
      padding: 12px 0;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      ul {
        display: flex;
        width: 594px;
        li {
          margin: 5px 0;
          padding: 0 16px;
          line-height: 14px;
          border-right: 1px solid #eee;
          color: #999;
          list-style-type: none;
        }
        li.first {
          padding-left: 0;
        }
      }
    }
    .copyright {
      color: #999;
      a {
        color: inherit;
      }
    }
  }
}
</style>