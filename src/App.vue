<template>
  <div id="app">
      <container>
          <div slot="header">
              <rise-header></rise-header>
          </div>
          <div slot="content" class="content">
              <router-view></router-view>
          </div>
          <rise-footer slot="footer"></rise-footer>
      </container>
  </div>
</template>

<script>
import Container from './components/common/Container'
import RiseHeader from './components/common/Header'
import RiseFooter from './components/common/Footer'

export default {
  name: 'app',
  components: {
      RiseFooter,
      Container,
      RiseHeader
  }
}
</script>

<style lang="scss"
            scoped>
    @import "scss/color";
    @import "scss/media";
    .content {
        background-color: $bg-color;
        padding: 0 15px 50px 15px;

        @media (max-width: 1249px) {
            padding: 0;
        }
        @media #{$large-screen} {
            width: 1250px;
            margin: 0 auto;
            padding: 0;
        }
    }
</style>
