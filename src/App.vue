<template>
  <div id="app">

      <Header
        :seller="seller"
      />
      <div class="tab  border-1px">
          <div class="tab-item">
              <router-link to="/goods">商品</router-link>
          </div>
          <div class="tab-item">
              <router-link to="/ratings">评论</router-link>

          </div>
          <div class="tab-item">
              <router-link to="seller">商家</router-link>
          </div>
      </div>
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
     <router-view />
  </div>
</template>

<script>
    import Header from '@/components/header/header'
    //无错误标志
    const ERR_OK = 0

    export default {
        data(){
          return{
              seller:{},//商家
          }
        },
        created() {
          this.$http.get('/api/seller').then((response)=>{
              response = response.body
              if (response.errno === ERR_OK){
                    this.seller = response.data
              }
          })
        },
        components:{
            Header
        }
    }



</script>

<style lang="scss">
@import "common/scss/mixin";

#app{
    .tab{
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
        //border-bottom: 1px solid rgba(7,17,27,0.1);
        @include border-1px(rgba(7,17,27,0.1));
        .tab-item{
            flex: 1;
            text-align: center;
            //导航标签
            & > a{
                display: block;
                font-size: 14px;
                color: rgb(77,85,93);
                //当前活动路由标签
                &.active{
                    color: rgb(240,20,20);
                }
            }
        }
    }
}


</style>
