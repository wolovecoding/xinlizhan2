<template>
  <div class="main">
    <el-table
      :data="arrange"
      border
      style="width: 50%">
      <el-table-column
        prop="date"
        label="日期"
        width="150px">
      </el-table-column>
      <el-table-column
        prop="name"
        label="值班人员">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="修改"
        width="100">
        <template slot-scope="scope">
          <el-button @click="editArrange(scope.row)" type="text">修改</el-button>
          <el-button @click="signIn(scope.row)" type="text">签到</el-button>
        </template>
        <el-dialog :visible.sync="editVisible" append-to-body="true" width="500px">
          <el-form :model="arrange[dateOrder]">
            <el-form-item label="日期">
              <el-input v-model="arrange[dateOrder].date" disabled></el-input>
            </el-form-item>
            <el-form-item label="人员">
              <el-input v-model="arrange[dateOrder].name"></el-input>
            </el-form-item>
            <el-form-item label="身份码">
              <el-input v-model="identifyID"></el-input>
            </el-form-item>
            <el-form-item style="text-align: center">
              <el-button @click="submitEdit" type="success">提交</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'ArrangeEdit',
  data () {
    return {
      identifyID:'',
      editVisible:false,
      assignVisible:false,
      dateNow:'', //临时储存当前要改人的日期
      dateOrder:0,//临时储存要改的当前位置
      arrange:[
        {
        name:'老外',
        date:'05-25'
        },
        {
          name:'小李',
          date:'05-26'
        },
        {
          name:'孟浩',
          date:'05-27'
        },
        {
          name:'道方',
          date:'05-28'
        },
      ]
    }
  },
  methods: {
    editArrange(row){

      console.log(row)
      this.dateNow=row.date;
      this.arrange.forEach((item,index)=>{
        if (item.date==this.dateNow){
          this.dateOrder=index;
        }
      })
      this.editVisible = true
    },
    submitEdit(){
      this.editVisible=false;
      //axios请求
    },
    signIn(row){
      this.assignVisible = true
    }
  }
}
</script>

<style scoped >

</style>
