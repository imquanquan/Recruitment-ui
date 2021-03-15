<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <span>招聘网站</span>
      <div class="search-menu">
        <!-- 搜索框 -->
        <el-autocomplete
          size="large"
          placeholder="搜索岗位"
        ></el-autocomplete>
        <el-divider direction="vertical"></el-divider>
        <!-- 顶部菜单栏 -->
        <el-menu class="main-menu" mode="horizontal" text-color="#A0CFFF" active-text-color="#1989FA">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">求职</el-menu-item>
          <el-menu-item index="3">公司</el-menu-item>
          <el-menu-item index="4">课程</el-menu-item>
          <el-menu-item index="5">APP</el-menu-item>
        </el-menu>   
        <el-divider direction="vertical"></el-divider>
        <!-- 个人中心下拉框 -->
        <el-dropdown class="per-dropdown" trigger="hover">
          <span class="el-dropdown-link">
            imquanquan<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="dropdown-item">个人资料</el-dropdown-item>
            <el-dropdown-item class="dropdown-item">我的简历</el-dropdown-item>
            <el-dropdown-item class="dropdown-item">我的收藏</el-dropdown-item>
            <el-dropdown-item class="dropdown-item">我的投递</el-dropdown-item>
            <el-dropdown-item class="dropdown-item">面试邀请</el-dropdown-item>
            <el-dropdown-item class="dropdown-item">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

    </el-header>
    <!-- 主体区域 -->
    <el-main>
      <div class="position-head">
        <div class="position-content clearfix">
          <div class="position-content-l">
            <div direction="vertical" class="job-name">
              <h4 class="company">华南农业大学</h4>
              <h1 class="name">JAVA 工程师</h1>
            </div>
            <div class="job_request">
              <div class="job_request">
                <span class="salary">0-2k /</span>
                <span>广州天河 /</span>
                <span>经验3-5年 /</span>
                <span>本科</span>
              </div>
              <div class="publish_time">17:46  发布</div>
            </div>
          </div>
          <div class="position-content-r">
            <div class="position-deal">
              <el-button type="primary" icon="icon iconfont icon-toudijianli">投递简历</el-button>              
              <el-button icon="icon iconfont icon-zhiwei">收藏岗位</el-button>
            </div>
            <el-radio-group class="resume-list" v-model="radio" type="vertical">
              <div class="resume-item">
                <el-radio :label="3">备选项</el-radio>
              </div>  
              <div class="resume-item">
                <el-radio :label="6">备选项</el-radio>
              </div>
              <div class="resume-item">
                <el-radio :label="9">备选项</el-radio>             
              </div> 
            </el-radio-group>
          </div>
        </div>
      </div>
      <el-container class="main">
        <el-main class="content_l">
          <dl class="job-detail">
            <dd>
              <h3>职位诱惑：</h3>
              <p>多次调薪、年底双薪、加班补助、社保</p>
            </dd>
            <dd>
              <h3>职位描述：</h3>
岗位职责：
<br>
1、参与业务需求评审分析，撰写开发文档，在规定时间内把产品设计转化为代码实现；
<br>
2、中级：担任开发团队的开发骨干，指导初级开发人员进行代码开发，主导高可用/高性能/可扩展的模块设计和编码工作。
<br>
3、高级：担任开发团队的技术骨干，指导初级开发人员进行代码开发，主导高可用/高性能/可扩展的模块设计和编码工作，代码review。
            </dd>
          </dl>
        </el-main>
        <el-aside>
          侧边
        </el-aside>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      radio: 3
    }
  },
  created () {
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>

.el-header {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  border-bottom: 1px solid #ebebeb;
  >span {
    color: #409EFF;
    margin-left: 15px;
  }
}

.search-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
}

.el-autocomplete {
  width: 40%;
}

.main-menu .el-menu-item {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
}

.el-dropdown-link {
  color: #409EFF;
  font-size: 18px;
}

.el-icon-arrow-down {
  color: #409EFF;
  font-size: 16px;
}

.dropdown-item {
  width: 100px;
  text-align: center;
  letter-spacing: 1px;
  color: #A0CFFF;
}

.home-container {
  height: 100%;
}

.el-main {
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    color: #333;
    word-wrap: break-word;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.position-head {
    background-color: #f2f5f4;
    padding: 30px 0 11px;
    width: 100%;
    min-width: 1024px;
}

.position-head .position-content {
    display: flex;
    justify-content: space-between;
    width: 1024px;
    margin: 0 auto;
}

.position-head .position-content .position-content-l {
    width: 90%;
}

.position-head .position-content .position-content-l .job-name {
    margin: 0 0 13px;
}

.position-head .position-content .position-content-l .job_request {
    margin-top: 2px;
    font-size: 18px;
    color: #555;
    font-weight: bold;
}

.position-head .position-content .position-content-l .job_request .publish_time {
    padding-top: 10px;
    font-size: 14px;
    color: #999;
}

.position-head .position-content .position-content-l .job-name .company {
    margin: -2px 0 8px 0;
    font-size: 14px;
    color: #555;
    position: relative;
    left: 2px;
}

.position-head .position-content .position-content-l .job-name .name {
    position: relative;
    display: inline-block;
    height: 36px;
    font-size: 36px;
    color: #333;
    line-height: 36px;
    margin: 0;
}

.position-head .position-content .position-content-r {
    width: 40%;
    margin-top: 12px;
}

.position-deal {
    margin-bottom: 20px;
}

.resume-item {
    margin-bottom: 10px;
}

.main {
    display: flex;
    justify-content: space-between;
    width: 1024px;
    margin: 0 auto;
}

.content_l {
  padding-top: 4%;
  padding-right: 6%;
}

h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

h4 {
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

.salary {
  color: #FD5F39;
}

dl, dt, dd {
    margin: 0;
}

.clearfix:before, .clearfix:after {
    content: "";
    display: table;
}

.clearfix:after {
    clear: both;
}

.clearfix:before, .clearfix:after {
    content: "";
    display: table;
}

</style>