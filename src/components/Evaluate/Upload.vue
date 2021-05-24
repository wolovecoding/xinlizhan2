<template>
    <div class="main">
        <el-form class="form" label-position="left" label-width="100px" :model="data" >
            <el-form-item label="唯一标识">
                <el-input v-model="data.id" style="width: 180px;float: left"/>
                <el-button type="success" style="width: 110px" @click="getRandomId">生成随机id</el-button>
            </el-form-item>
            <el-form-item label="测试地址">
                <el-input v-model="data.url" clearable/>
            </el-form-item>
            <el-form-item label="标    题">
                <el-input v-model="data.header" clearable/>
            </el-form-item>
            <el-form-item label="描述" id="myTextarea" style="height: 100px">
                <el-scrollbar>
                    <el-input type="textarea" v-model="data.content" clearable style="height: 100px"/>
                </el-scrollbar>
            </el-form-item>
            <el-form-item label="首图" >
                <el-input v-model="data.image" clearable/>
            </el-form-item>
            <div class="">
                <el-image :src="data.image" style="width: 400px">
                    <div slot="error" class="image-slot">
                        <span>请输入图片地址</span>
                    </div>
                </el-image>
            </div>
            <el-form-item>
                <el-button type="success" @click="postEvaluate">上传</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {evaluate} from "../../api/api";

    export default {
        name: "Upload",
        data(){
            return{
                data:{
                    id: 0,
                    url:"",
                    header:"",
                    content:"",
                    image:""
                }
            }
        },
        methods:{
            postEvaluate(){
                this.$axios.post(evaluate,this.data).then(res=>{
                    if (res.data){
                        this.$message.success('上传成功');
                        this.data={id: 0,url: '',header: '',content: '',image: ''}
                    }else {
                        this.$message.warning('上传失败'+error)
                    }
                })
            },
            getRandomId(){
                let str = Math.round(Math.random()*10).toString();
                let str1 = Math.round(Math.random()*10).toString();
                let number = Date.now().toString().substr(9,4);
                str=str.concat(number);
                str=str.concat(str1);
                this.data.id=str
            }
        }
    }
</script>

<style scoped>
    @import url('../../assets/css/main.css');

    .form{
        width: 50vw;
        padding:  2vw 10vw 0 10vw;
    }

    #myTextarea .el-form-item__label .el-form-item__content{
        height: 100px;
    }

</style>