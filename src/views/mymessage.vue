<template>
  <div>
    <!-- 个人信息的界面 -->
<!--    <div style="width: 100%; height: 600px">-->
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" label="描述信息" />
      </van-cell-group>
<!--      <div style="width: 100%; height: 20%">-->
<!--        <img src="@/assets/icons/head.jpeg" style="width: 100px; height: 100px; margin: 20px 20px; float: left"/>-->
<!--        <div style="float: left">-->
<!--          <h2 style=" margin-top: 40px">{{username}}</h2>-->
<!--          <h3>{{userLabel}}</h3>-->
<!--        </div>-->
        <div style="text-align:center;margin-top:30px; margin-bottom: 10px" />
        <table
          style="width: 100%"
          class="table table-striped table-bordered"
          align="center"
          valign="center"
        >
          <tr style="border: 1px solid #ddd;">
            <td class="value" colspan="5">
              <div style="display: flex; flex-direction: column;">
                <div style="display: flex; justify-content: flex-start;">
                  <img src="@/assets/icons/head.jpeg" style="width: 50px; height: 50px; float: left"/>
                </div>
                  <div style="float: right; justify-content: flex-end;">
                    <p style="font-style: normal; font-size: 20px;">{{username}}</p>
                  </div>
              </div></td>
          </tr>
          <tr style="border: 1px solid #ddd;">
            <td class="value" colspan="5">
              <div style="display: flex; flex-direction: column;">
                <div style="display: flex; justify-content: flex-start;">
                  <img src="@/assets/icons/person.png" style="height: 30px; width: 30px; float: left; margin-top: 20px; margin-right: 15px; margin-left: 10px "/>
                  <div style="float: left">
                    <p style="font-style: normal; font-size: 20px;">个人信息</p>
                  </div>
                </div>
              </div></td>
          </tr>
          <tr>
            <td class="value" colspan="5">
              <div style="display: flex; flex-direction: column;">
                <div style="display: flex; justify-content: flex-start;">
                  <img src="@/assets/icons/set.png" style="height: 30px; width: 30px; float: left; margin-top: 20px; margin-right: 15px; margin-left: 10px "/>
                  <div style="float: left">
                  <p style="font-style: normal; font-size: 20px;">设置</p>
                  </div>
                </div>
              </div></td>
          </tr>
        </table>
      </div>

<!--  </div>-->
</template>

<script>
export default {
  data() {
    return {
  username:'aliyun',
      userLabel: '运动健将'
    }
  },
}
</script>
<style lang="less" scoped>
  .table {
    border-collapse: collapse;
    border-spacing: 0;
    background-color: transparent;
    display: table;
    width: 100%;
    max-width: 100%;
    width: 800px;
    margin: 0 auto;
  }
  .table td {
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    font-family: "Arial Normal", "Arial";
    color: #333333;
    padding: 8px 12px;
  }
  .table-bordered {
    border: 1px solid #ddd;
  }
  .column {
    width: 30px;
    height: 30px;
    border: 1px solid #333;
    background: #f1f1f1;
  }
  .value {
    width: 70px;
    height: 30px;
    /*border: 1px solid #333;*/
  }
</style>
