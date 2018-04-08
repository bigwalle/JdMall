<template>
  <div class="wrapper">
      <wxc-tab-bar :tab-titles="tabTitles"
                   :tab-styles="tabStyles"
                   title-type="icon"
                   @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
          <home  class="item-container" :style="contentStyle"></home>
          <category class="item-container" :style="contentStyle"></category>
          <founder class="item-container" :style="contentStyle"></founder>
          <cart class="item-container" :style="contentStyle"></cart>
          <mine class="item-container" :style="contentStyle"></mine>
      </wxc-tab-bar>
   </div>

</template>

<script>
    import { WxcTabBar, Utils } from 'weex-ui';
    import Config from './config'
    // import
    import home from './home.vue'
    import category from './category.vue'
    import founder from './founder.vue'
    import cart from './cart.vue'
    import mine from './mine.vue'

export default {
  name: 'App',
  components: {
      WxcTabBar,
      home,
      category,
      founder,
      cart,
      mine
  },
  data () {
    return {
        tabTitles: Config.tabTitles,
        tabStyles: Config.tabStyles
    }
  },
    created () {
        const tabPageHeight = Utils.env.getPageHeight();
        // If the page doesn't have a navigation bar
        // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
        const { tabStyles } = this;
        this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
    },
    methods: {
        wxcTabBarCurrentTabSelected (e) {
            const index = e.page;
            // console.log(index);
        }
    }
}
</script>

<style scoped>
    .item-container {
        width: 750px;
        background-color: #f2f3f4;
        /*align-items: center;*/
        /*justify-content: center;*/
    }
</style>
