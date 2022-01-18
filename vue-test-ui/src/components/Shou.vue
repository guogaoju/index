<template>
    <div>
    <el-breadcrumb style="padding-top: 8px;padding-bottom: 8px;font-size:20px;" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/Shou' }">首页</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>南昌县</el-breadcrumb-item>
        <el-breadcrumb-item>西湖区</el-breadcrumb-item>
        <el-breadcrumb-item>安义县</el-breadcrumb-item> -->
    </el-breadcrumb>
        <div align="center"><img class="img1" src="\static\64.jpg"></div>
        <h3 style="text-align:center">汇道科技工程三维数字模型</h3>
       <div class="neg">
           <ul class="touxia">
               <li>
                   <router-link to="/Index" class="nav-link">
                         <a href="#"><img class="tu" src="\static\taoxin.jpg" width="280px" height="200px"></a>
                   </router-link>
                   <router-link to="/Index" class="nav-link">
                        <p><a href="#">南昌县</a></p>
                   </router-link>
                   
                </li>
               <li>
                   <router-link to="/Xihu" class="nav-link">
                        <a href="#"><img class="tu" src="\static\tatian.jpg" width="280px" height="200px"></a>
                   </router-link>
                    <p  >
                        <router-link to="/Xihu" class="nav-link">
                           <a href="#">西湖区</a>
                        </router-link>
                    </p>
                </li>
               <!-- <li>
                   <router-link to="/Che" class="nav-link">
                        <a href="#"><img class="tu" src="\static\che.jpg" width="280px" height="200px"></a>
                   </router-link>
                   <router-link to="/Che" class="nav-link">
                    <p >
                      <a href="#" >停车场测试</a>
                    </p>
                   </router-link>
                   
                </li>  -->
               <li>
                   <router-link to="/Xihu" class="nav-link">
                        <a href="#"><img class="tu" src="\static\tangcun.jpg" width="280px" height="200px"></a>
                   </router-link>
                   <router-link to="/Xihu" class="nav-link">
                    <p  >
                       <a href="#">安义县</a>
                    </p>
                   </router-link>
                </li>
           </ul>  
       </div>
    </div>
</template>
<style scoped>
@media screen and (min-width:800px){
    p{
        text-align:center;
        /* position: absolute;
        top: 0px;
        left:10px; */
        }
    .img1{
        width:1500px;
        height:550px;
    }
    .neg{
            margin: 0 auto;
            width:1200px;
            height: 80px;
            /* background-color:red; */
            position: relative;
        }
        .touxia{
            display: flex;
            /* position: absolute;
            top: 10px;
            left: 209px; */
            
        }
        .touxia li{
            list-style: none;
            flex-direction: row;
            padding: 45px; 
        }
        .touxia li a{
            color:black;
            text-decoration: none;
        }
        .touxia li a:hover{
            color: red;
        }
}
@media screen and (max-width:450px){
    .tu{
        padding-left: 10px;
    }
        p{
        text-align:center;
        padding-right: 40px;
        /* position: absolute;
        top: 0px;
        left:10px; */
        }
        .img1{
        width:360px;
        height:260px;
        }
     .touxia li{
            list-style: none;
        }
}
</style>