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
    <el-container>
      <el-main>
        <el-row :gutter="12" v-for="job in jobs" :key='job.id'>
          <el-card :body-style="{ padding: '0px' }" class="job_card" shadow="hover">
            <div class="job_card_div">
              <div class="job">
                <div class="j_top">
                  <el-link class="j_name" type="primary">{{ job.job_name }}[{{ job.company_detail.address }}]</el-link>
                  <span class="format-time">{{ job.deliver_date }}</span>
                </div>
                <div class="j_bot">
                  <span class="salary">{{ job.salary }}</span>
                  <span class="req">{{ job.experience }}/{{ job.education }}</span>
                </div>
              </div>
              <div class="company">
                <div class="c_top">
                  <el-link class="c_name" type="primary">{{ job.company_detail.companyname }}</el-link>
                </div>
                <div class="c_bot">
                  <span class="c_detail">{{ job.company_detail.financing }}/{{ job.company_detail.scale }}</span>
                </div>
              </div>  
              <div class="c_logo">
                <img :src="require('../assets/scau.jpeg')" alt="">
              </div>            
            </div>
            <div class="list_item_bot">
              {{ job.welfare }}
            </div>
          </el-card>
        </el-row>       
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      jobs: null
    }
  },
  created () {
    this.list_job()
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    async list_job() {
      this.$http.get('api/job')
      .then(response => {
          this.jobs = response.data;
        }
      )
    }
  }
};
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

.el-row {
  margin: 35px;
}

.job_card {
  width: 70%;
}

.job_card_div {
  display: flex;
  padding: 20px;
  justify-content: space-between;
}

.j_top {
  line-height: 34px;
  display: inline-block;
}

.j_name {
  font-size: 18px;
}

.format-time {
  font-size: 16px;
  color: #A0CFFF;
  margin-left: 10px;
  vertical-align:bottom;
}

.j_bot {
  line-height: 24px;
  font-size: 16px;
}

.salary {
  color: #FD5F39;
  margin-right: 10px;
  font-size: 18px;
}

.req {
  font-size: 16px;
}

.c_top {
  line-height: 34px;
  display: inline-block;
}

.c_name {
  font-size: 18px;
  >span {
    font-size: 16px;
  }
}

.c_logo img {
  width: 50px;
  height: 50px;
}

.list_item_bot{
  height: 10px;
  line-height: 10px;
  font-size: 14px;
  background: #ECF5FF;
  padding: 20px;
}
</style>