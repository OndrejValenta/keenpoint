<template>
  <div id="app">
    <div id="nav">
      <menu-item navigateTo="home" icon="home"></menu-item>
      <menu-item navigateTo="structure" icon="database"></menu-item>
      <menu-item navigateTo="access" icon="address-book"></menu-item>
      <menu-item navigateTo="webparts" icon="address-card"></menu-item>
    </div>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MenuItem from '@/components/infra/menu-item.vue'

@Component({
  components: {
    MenuItem
  }
})
export default class App extends Vue {}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  
}
#nav {
  width: 50px;
  float:left;
  margin-right:5px;
  background: #2c3e50;
}

#content {
  float: left;
}

#nav a {
  color: darkgray;
  margin: 10px;
  z-index: 10;
}

#nav a.router-link-exact-active {
  color: white;
}
</style>
