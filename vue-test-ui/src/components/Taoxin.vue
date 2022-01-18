<template>

    <div class="big_box">
        <el-breadcrumb style="padding-top: 8px;padding-bottom: 8px" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/Shou' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/Index' }">南昌县</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/Taoxin' }">桃新大道</el-breadcrumb-item>
        </el-breadcrumb>
        <div>
         <iframe class="wen15" src="https://huidaomodels.cn/productions/taoxin_20210720/App/?scene=taoxin_20210720&cX=110.6326&cY=-75.3907&cZ=92.3535&upX=0.0000&upY=0.0000&upZ=1.0000&tX=8.2000&tY=-3.5000&tZ=-23.6001&playBtn=on"
          frameborder="0" style="border:0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel="">
         </iframe>
         </div>
         <div class="big_box1">
         <span class="wen9">基本信息</span>
         <span class="wen"><span class="wen12">项目名称</span> 桃新大道 {{"\xa0"}}</span>
         <span class="wen1"><span class="wen12">项目地址</span> 江西省南昌县桃新大道南起南外环, 北至桃花路</span>
         <span class="wen2"><span class="wen12">项目简介</span> 北京城建南昌县分公司承接该项目第三标段</span>
         <span class="wen3"><span class="wen11">α比例</span> 65.8%</span>
         <span class="wen4"><span class="wen12">项目进度</span>{{"\xa0"}} 95%(地下3层，地上15层)</span>
         <span class="wen5"><span class="wen12">授信总额</span> ￥417,680,000{{"\xa0"}}</span>
         <span class="wen6"><span class="wen12">贷款余额</span> ￥295,480,000{{"\xa0"}}</span>
         <span class="wen7"><span class="wen12">已用额度</span> ￥226,060,000{{"\xa0"}}</span>
         <span class="wen8">项目位置</span>
         <iframe class="wen10"    frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src="https://surl.amap.com/6Kdrg6J199Xw">
         </iframe>
        </div>
    </div>
</template>
<style scoped>
@media screen and (min-width:800px){
    .wen15{
        width: 1200px;
        height: 900px;
    }
    .big_box{
            width: 1920px;
            height: 1600px;
        }
        .big_box1{
            position: relative;
        }
        span{
        color:darkblue;
        font-family:"黑体";
        font-size:20px;
        }
        .wen{
            position: absolute;
            top: -835px;
            right:490px;
        }
        .wen1{
            position: absolute;
            top: -790px;
            right:170px;
        }
        .wen2{
            position: absolute;
            top: -745px;
            right:210px; 
        }
        .wen11{
            letter-spacing:10px;
           /* color:darkblue; */
            color: #7A76B0;
        }
        .wen12{
            /* color:darkblue; */
            color: #7A76B0;
        }
        .wen3{
            position: absolute;
            top: -700px;
            right:533px; 
        }
        .wen4{
            position: absolute;
            top: -655px;
            right:360px;
        }
        .wen5{
            position: absolute;
            top: -610px;
            right:450px; 
        }
        .wen6{
            position: absolute;
            top: -565px;
            right:450px;   
        }
        .wen7{
            position: absolute;
            top: -520px;
            right:450px;  
        }
        .wen8{
            font-weight:bold;
            font-size:28px;
            position: absolute;
            top: -475px;
            right:565px;    
        }
        .wen9{
            font-weight:bold;
            font-size:28px;
            position: absolute;
            bottom: 850px;
            right:570px; 
        }
        .wen10{
            width:560px;
            height:400px;
            position: absolute;
            bottom: 10px;
            right:117px; 
        }
}
@media screen and (max-width:450px){
    .wen15{
        width: 360px;
        height: 260px;
    }
        .big_box{
            width: 370px;
            height: 1000px;
            overflow:auto;
        }
        .big_box1{
            position: relative;
        }
        span{
        color:darkblue;
        font-family:"黑体";
        font-size:12px;
        touch-action: none;
        }
        .wen{
            position: absolute;
            top:40px;
            left:0px;
            touch-action: none;
        }
        .wen1{
           position: absolute;
            top:65px;
            left:0px;
            touch-action: none;
        }
        .wen2{
            position: absolute;
            top:90px;
            left:0px;
        }
        .wen11{
            letter-spacing:7px;
           /* color:darkblue; */
            color: #7A76B0;
        }
        .wen12{
            /* color:darkblue; */
            color: #7A76B0;
        }
        .wen3{
            position: absolute;
            top:115px;
            left:0px;
        }
        .wen4{
            position: absolute;
            top:140px;
            left:0px;
        }
        .wen5{
            position: absolute;
            top:165px;
            left:0px;
        }
        .wen6{
            position: absolute;
            top:190px;
            left:0px;
        }
        .wen7{
             position: absolute;
            top:215px;
            left:0px;
        }
        .wen8{
            font-weight:bold;
            font-size:16px;
             position: absolute;
            top:250px;
            left:0px;
        }
        .wen9{
            font-weight:bold;
            font-size:16px;
            position: absolute;
            top:10px;
            left:0px;
        }
        .wen10{
            width:360px;
            height: 260px;
            position: absolute;
            top: 285px;
            left:0px; 
        }
    }    
</style>