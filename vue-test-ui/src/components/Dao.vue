<template>
    <div>
       <!-- <div class="big1" style="width:100%;background-color:#313439 ; height:40px ; overflow: hidden">
            <span class="navbar-nav ml-auto">
                    <li  class="nav-item">
                        <router-link style="color:white" to="/Shou" class="nav-link">
                            
                            首页
                        </router-link>
                    </li>
                </span>
                <span class="navbar-nav ml-auto">
                    <li  class="nav-item">
                        <router-link style="color:white" to="/Index" class="nav-link">
                            
                            南昌县
                        </router-link>
                    </li>
                </span>
                <span class="navbar-nav ml-auto">
                    <li  class="nav-item">
                        <router-link style="color:white" to="/Xihu" class="nav-link">
                            
                            西湖区
                        </router-link>
                    </li>
                </span>
                <span class="navbar-nav ml-auto">
                    <li  class="nav-item">
                        <router-link style="color:white" to="/Anyi" class="nav-link">
                            
                            安义县
                        </router-link>
                    </li>
                </span>
            </div> -->
            <div style="">
                <router-view></router-view>
            </div>
    </div>
    
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        // activeIndex: '1',
        // activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
          console.log(key, keyPath);
        switch(key){
            case '1':
                        this.$router.push('/Shou');
                        this.breadcrumbItems  = ['首页']
                        break;
            case '2-1':
                        this.$router.push('/Shou');
                        this.breadcrumbItems  = ['南昌县']
                        break;
            case '3':
                        this.$router.push('/Xihu');
                        this.breadcrumbItems  = ['西湖区']
                        break;
            case '4':
                        this.$router.push('/Anyi');
                        this.breadcrumbItems  = ['安义县']
                        break;                         
        }
      }
    }
  }
</script>
<style scoped>
@media screen and (min-width:800px){
span>li{
    list-style: none;
    float:left;
    padding-top:8px;
    padding-left:340px;
    color: azure;
}
  a {
    text-decoration: none;
  }

}
@media screen and (max-width:450px){
    span>li{
    list-style: none;
    float:left;
    padding-top:8px;
    padding-left:40px;
    
}
 a {
    text-decoration: none;
  }
    }    
</style>