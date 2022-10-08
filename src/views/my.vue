<template>
  <div>
    <!-- 我的界面 -->
<!--    <div style="width: 100%; height: 600px">-->
<!--      <div style="width: 100%; height: 20%">-->
<!--        <img src="@/assets/icons/head.png" style="width: 100px; height: 100px; margin: 20px 20px; float: left"/>-->
<!--        <div style="float: left">-->
<!--          <h2 style=" margin-top: 40px">{{username}}</h2>-->
<!--          <h3>{{userLabel}}</h3>-->
<!--        </div>-->
<!--        <div style="text-align:center;margin-top:30px; margin-bottom: 10px" />-->
<!--        <table-->
<!--          style="width: 100%"-->
<!--          class="table table-striped table-bordered"-->
<!--          align="center"-->
<!--          valign="center"-->
<!--        >-->
<!--          <tr style="border: 1px solid #ddd;">-->
<!--            <td class="value" colspan="5">-->
<!--              <div style="display: flex; flex-direction: column;">-->
<!--                <div style="display: flex; justify-content: flex-start;">-->
<!--                  <img src="@/assets/icons/person.png" style="height: 30px; width: 30px; float: left; margin-top: 20px; margin-right: 15px; margin-left: 10px "/>-->
<!--                  <div style="float: left">-->
<!--                    <p style="font-style: normal; font-size: 20px;" @click="onMyMessage">个人信息</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div></td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td class="value" colspan="5">-->
<!--              <div style="display: flex; flex-direction: column;">-->
<!--                <div style="display: flex; justify-content: flex-start;">-->
<!--                  <img src="@/assets/icons/set.png" style="height: 30px; width: 30px; float: left; margin-top: 20px; margin-right: 15px; margin-left: 10px "/>-->
<!--                  <div style="float: left">-->
<!--                  <p style="font-style: normal; font-size: 20px;" @click="onSet">设置</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div></td>-->
<!--          </tr>-->
<!--        </table>-->
<!--      </div>-->
<!--      </div>-->
    <van-cell-group>
      <van-cell title="我的" title-style="text-align: center" size="large"/>
    </van-cell-group>
<!--    <van-cell-group>-->
<!--      <van-cell title="头像" title-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px;" size="large" is-link>-->
<!--        &lt;!&ndash; 使用 right-icon 插槽来自定义右侧图标 &ndash;&gt;-->
<!--        <template #icon>-->
<!--          <van-icon name="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png" class="head-icon" size="30" />-->
<!--          &lt;!&ndash;            <van-icon name="search" class="search-icon" />&ndash;&gt;-->
<!--        </template>-->
<!--      </van-cell>-->
<!--    </van-cell-group>-->
<!--    <div style="text-align:center;margin-top:30px; margin-bottom: 10px" />-->
    <van-grid :border="false" :column-num="3">
      <van-grid-item>
        <van-image
          src="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png"
        />

      </van-grid-item>
      <van-grid-item>
        <div style="float: left">
          <h2 style=" margin-top: 20px">{{username}}</h2>
          <h3>{{userLabel}}</h3>
        </div>
      </van-grid-item>
      <van-grid-item></van-grid-item>
    </van-grid>
    <div style="margin-bottom: 10px" />
    <van-cell-group>
      <van-cell title="个人信息" title-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px; margin-left:10px" size="large" is-link @click="onMyMessage">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #icon>
          <van-icon name="manager-o" class="head-icon" size="25" />
          <!--            <van-icon name="search" class="search-icon" />-->
        </template>
      </van-cell>
      <van-cell title="设置" title-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px; margin-left:10px" size="large" is-link @click="onSet">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #icon>
          <van-icon van-icon name="setting-o" class="head-icon" size="25" />
          <!--            <van-icon name="search" class="search-icon" />-->
        </template>
      </van-cell>
    </van-cell-group>
  </div>

</template>

<script>
export default {
  data() {
    return {
  username:'aliyun',
      userLabel: '运动健将',
      weatherData: {}
    }
  },
  methods: {
    onMyMessage() {
      this.$router.push({ path: '/mymessage' })
    },
    onSet() {
      this.$router.push({ path: '/set' })
    }
  }
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
  .weather-box {
    position: absolute;
    top: 0;
    box-sizing: border-box;
    padding-left: (12 / 3.75vw);
    padding-right: (12 / 3.75vw);
    width: 100%;
    height: 100vh;
    background-color: #efefef;
  }
</style>
