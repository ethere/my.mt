<template>
  <div class="register-wrapper">
    <header>
      <div class="register-header clearFix">
        <div class="register-logo">
          <a href="#">美团</a>
        </div>
        <div class="login-block">
          <span class="tip">已有美团账号？</span>
          <router-link tag="button" class="btn-login" :to="{name:'login'}">登录</router-link>
        </div>
      </div>
    </header>
    <div class="register-main">
      <el-row class="form-field">
        <el-col :span="2" class="l-info">手机号</el-col>
        <el-col :span="7">
          <input type="text" class="f-text" v-model="phoneText" />
          <input type="button" value="免费获取短信动态码" class="get-msg" />
        </el-col>
        <el-col :span="4" class="r-info" v-if="!phoneText">
          <i class="iconfont icon-yi-huangse"></i>
          请输入您的手机号
        </el-col>
        <el-col :span="1" v-else>
          <i class="iconfont icon-zhengque"></i>
        </el-col>
      </el-row>
      <el-row class="form-field">
        <el-col :span="2" class="l-info">短信动态码</el-col>
        <el-col :span="7">
          <input type="text" class="f-text" v-model="phoneMsg" />
        </el-col>
        <el-col :span="4" class="r-info" v-show="!phoneMsg">
          <i class="iconfont icon-yi-huangse"></i>
          请输入短信动态码
        </el-col>
        <el-col :span="1" v-show="phoneMsg">
          <i class="iconfont icon-zhengque"></i>
        </el-col>
      </el-row>
      <el-row class="form-field">
        <el-col :span="2" class="l-info">创建密码</el-col>
        <el-col :span="7">
          <input type="password" class="f-text" v-model="password" @input="onPassword"/>
          <div class="pw-strength-wrapper">
            <div class="pw-strength_bar" :class="strengthClass"></div>
            <div class="pw-strength_letter">
              <span class="pw-strength">弱</span>
              <span class="pw-strength">中</span>
              <span class="pw-strength">强</span>
            </div>
          </div>
        </el-col>
        <el-col :span="4" class="r-info" v-show="!password">
          <i class="iconfont icon-yi-huangse"></i>
          请填写密码
        </el-col>
        <el-col :span="1" v-show="password">
          <i class="iconfont icon-zhengque"></i>
        </el-col>
      </el-row>
      <el-row class="form-field">
        <el-col :span="2" class="l-info">确认密码</el-col>
        <el-col :span="7">
          <input type="password" class="f-text mistaken" v-model="rePassword"/>
        </el-col>
        <el-col :span="4" class="r-info" v-show="!rePassword">
          <i class="iconfont icon-yi-huangse"></i>
          请再次输入密码
        </el-col>
        <el-col :span="1" v-show="rePassword">
          <i class="iconfont icon-zhengque"></i>
        </el-col>
      </el-row>
      <el-row class="form-field">
        <input type="button" value="同意以下协议并注册" class="argee-login-btn" @click="onRegister"/>
      </el-row>
      <el-row class="form-field term">
        <a href="#">《美团点评用户服务协议》</a>
        <a href="#">《美团点评隐私政策》</a>
      </el-row>
    </div>
    <div class="register-footer">
        ©
      <a href="#" class="f1">meituan.com</a>
      <a href="#" class="f1">京ICP证070791号</a>
      <span class="f1">京公网安备11010502025545号</span>
    </div>
  </div>
</template>
<script>
import api from '@/api/index'
export default {
    data(){
        return {
            phoneText:'',
            password:'',
            rePassword:'',
            phoneMsg:'',
            strengthClass:''
        }
    },
    methods:{
      onRegister(){
        api.register({
          userName:this.phoneText,
          password:this.password,
          rePassword:this.rePassword
        }).then(res=>{
          if(res.status === 'fail'){
            alert(res.msg)
          }else{
            this.$router.push({name:'login'})
          }
        })
      },
      onPassword(){
        if(this.password.length>20){
          this.strengthClass = 'pw-strong'
        }else if(this.password.length<6){
          this.strengthClass = 'pw-week'
        }else if(this.password.length === 0){
          this.strengthClass = ''
        }else {
          this.strengthClass = 'pw-normal'
        }
      }
    }
}
</script>
<style lang="scss" scoped>
@font-face {
  font-family: "iconfont"; /* project id 1930833 */
  src: url("//at.alicdn.com/t/font_1930833_9ahm6y2mb4f.eot");
  src: url("//at.alicdn.com/t/font_1930833_9ahm6y2mb4f.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1930833_9ahm6y2mb4f.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1930833_9ahm6y2mb4f.woff") format("woff"),
    url("//at.alicdn.com/t/font_1930833_9ahm6y2mb4f.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1930833_9ahm6y2mb4f.svg#iconfont") format("svg");
}
i.iconfont {
  font-family: "iconfont";
  font-style: normal;
  vertical-align: -3px;
}
.icon-zhengque::after {
  content: "\e601";
  color: #9ed924;
}
.icon-yi-huangse::after {
  content: "\e659";
  color: #ff8800;
  font-size: 18px;
}
a{
    text-decoration: none;
}
.register-wrapper {
  header {
    min-width: 980px;
    color: #666;
    border-bottom: 2px solid #d8d8d8;
    .register-header {
      width: 980px;
      margin: 0 auto;
      padding: 10px 0;
      .register-logo {
        width: 128px;
        background: url(/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png)
          no-repeat;
        background-size: contain;
        float: left;
        a {
          text-indent: -1000px;
          overflow: hidden;
        }
      }
      .login-block {
        float: right;
        .tip {
          margin-right: 10px;
          vertical-align: sub;
        }
        .btn-login {
          padding: 3px 10px;
          font-size: 12px;
          border-color: rgba(191, 105, 0, 0.15);
          color: #222;
          background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
          border-width: 0;
          box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
          background-size: 100%;
          cursor: pointer;
        }
      }
    }
  }

  .clearFix::after {
    content: "";
    clear: both;
    display: block;
  }
  .register-main {
    margin: 0 auto 30px;
    padding-top: 30px;
    width: 980px;
    min-height: 300px;
    .form-field {
      padding: 8px 0;
      .l-info {
        text-align: right;
        font-size: 14px;
        line-height: 35px;
      }
      .f-text {
        outline: none;
        text-indent: 1em;
        width: 248px;
        height: 24px;
        padding: 5px;
        border: 1px solid #aaa;
        line-height: 24px;
        margin: 0 8px;
        &:focus {
          border-color: #fe8c00;
        }
        &.mistaken {
          border-color: #f76120;
        }
      }
      .get-msg {
        padding: 2px 5px;
        margin-top: 5px;
        margin-left: 8px;
        font-size: 10px;
      }
      .r-info {
        font-size: 12px;
        color: #666;
        line-height: 32px;
      }

      .pw-strength-wrapper {
        background-color: #eee;
        height: 20px;
        width: 260px;
        margin-left: 8px;
        margin-top: 4px;
        .pw-strength_bar {
          transition: all 0.4s linear;
          position: absolute;
          width: 0;
          height: 20px;
          &.pw-week {
            width: 85px;
            background: #ff8900;
          }
          &.pw-normal {
            width: 172px;
            background: #ff8900;
          }
          &.pw-strong {
            width: 260px;
            background: #5bab3c;
          }
        }
        .pw-strength_letter {
          position: absolute;
          .pw-strength {
            float: left;
            text-align: center;
            font-size: 12px;
            line-height: 20px;
            width: 85px;
            border-right: 2px solid #fff;
            color: #fff;
          }
        }
      }

      .argee-login-btn {
        color: #222;
        background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
        border-width: 0;
        box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
        background-size: 100%;
        padding: 6px 20px;
        font-size: 14px;
        font-weight: 700;
        margin-left: 90px;
        outline: none;
        border: none;
        cursor: pointer;
      }
    }
    .term {
      padding-left: 90px;
      padding-top: 0;
      a {
        text-decoration: none;
        font-size: 13px;
        color: #fe8c00;
      }
    }
  }
  .register-footer {
    border-top: 1px solid #eee;
    padding-top: 20px;
    text-align: center;
    color: #ff8800;
    .f1{
        font-size: 13px;
        color: #999;
    }
  }
}
</style>
