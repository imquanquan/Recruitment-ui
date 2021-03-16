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
              <h4 class="company">{{ job.company_detail.companyname }}</h4>
              <h1 class="name">{{ job.job_name }} </h1>
            </div>
            <div class="job_request">
              <div class="job_request">
                <span class="salary">{{ job.salary }} /</span>
                <span>{{ job.company_detail.address }} /</span>
                <span>{{ job.experience }} /</span>
                <span>{{ job.education }}</span>
              </div>
              <div class="publish_time">{{ job.deliver_date }}  发布</div>
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
              <p>{{ job.welfare }}</p>
            </dd>
            <dd>
              <h3>职位描述：</h3>
              {{ job.description }}
            </dd>
            <dd>
              <h3>工作地址：</h3>
              <p>{{ job.company_detail.address }}</p>
            </dd>
          </dl>
        </el-main>
        <el-aside class="content_r">
          <dl class="job_compay">
            <dt>
              <a href="">
                <img class="b2" :src="require('../assets/scau.jpeg')" alt="" width="96" height="96">
                <span class="job_company_name">{{ job.company_detail.companyname }}</span>
              </a>
            </dt>
          </dl>
          <ul class="c_feature">
              <li>
                <h4>{{ job.company_detail.financing }}</h4>
              </li>
              <li>
                <h4>{{ job.company_detail.scale }}</h4>
              </li>
          </ul>
          <div class="jobs">
            <div class="jobs_header">
              <h4>其他职位</h4>
              <el-divider></el-divider>
            </div>
            <el-row :gutter="12" v-for="job in jobs" :key='job.id'>
              <a href="">
                <el-card :body-style="{ padding: '0px' }" class="job_card" shadow="hover">
                  <div class="similar_job_detail">
                    <div class="similar_list_item_logo"> 
                      <img class="b2" :src="require('../assets/scau.jpeg')" alt="" width="56" height="56">
                    </div>
                    <div class="similar_list_item_pos">
                      <span>Java 工程师</span>
                      <p class="similar_salary">10k-12k</p>
                      <p class="similar_company_name">兴业数金 [广州·天河区]</p>
                  </div>
                  </div>
                </el-card>
              </a>
            </el-row>
          </div>
        </el-aside>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      job: {
          "id": 9, 
          "job_name": "苦力1", 
          "description": "博士苦力1", 
          "salary": "2k-5k", 
          "education": "博士", 
          "welfare": "五险一金、餐补、下午茶、双休", 
          "experience": "在校/应届", 
          "deliver_date": "2021-03-13", 
          "company_id": 1, 
          "company_detail": {
              "id": 1, 
              "address": "广州天河", 
              "companyname": "imquanquan", 
              "scale": "少于 15 人", 
              "financing": "未融资", 
              "logo": "../assets/scau.jpeg"
          }
      },
      radio: 3,
      jobs: null
    }
  },
  created () {
    this.get_job();
    this.list_job()
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    async get_job() {
      this.$http.get('api/job/' + this.$route.params.id)
      .then(response => {
          this.job = response.data;
          console.log(this.job)
        }
      )
    },
    async list_job() {
      this.$http.get('api/job')
      .then(response => {
          this.jobs = response.data;
        }
      )
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
    width: 95%;
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
    background-color: #f2f5f4;
    height: 100%;
}

.content_l {
  padding-top: 2%;
  padding-right: 6%;
  margin-right: 5px; 
  background-color: #fff;
}

.content_r {
  padding-top: 2%;
  padding-left: 4%;
  margin-left: 5px; 
  background-color: #fff;
}


.c_feature li {
    position: relative;
    margin: 0 0 16px;
    color: #737373;
    line-height: 25px;
}

.similar_salary {
  color: #FD5F39;
  margin: 0;
}

.similar_company_name {
    width: 167px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 12px;
    color: #999;
    margin: 0;
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

.home-container {
    color: #A0CFFF;
}

dl, dt, dd {
    margin: 0;
}

a {
  text-decoration: none;
}

dl {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.similar_job_detail {
  display: flex;
}

.job_company_name {
  margin: 10px;
  margin-bottom: 20px;
  font-size: 22px;
  line-height: 22px;
}

.job_company>dt {
    position: relative;
    padding-bottom: 25px;
    margin-bottom: -10px;
}

.job_company dt div {
    position: absolute;
    left: 90px;
    bottom: 5px;
    padding: 20px 0;
}

.b2 {
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  margin-right: 15px;
}

.similar_job_detail {
  margin-block: 10px;
  margin-top: 10px;
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