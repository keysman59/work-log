<template>
  <div id="app" class="app">
    <Table></Table>
    <!-- {{  items  }} -->
    <!-- <div v-for="item in items.Chapters" :key="item.name">
      {{ item.Name }}
    </div> -->



  </div>
</template>

<script>
import Table from './components/Table'
import { localItems } from './data/localData.js'

export default {
  name: 'app',
  components: { Table },
  data() {
    return {
      items: localItems,
      newItems: null
    }
  }
}

</script>


<style>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.app {

}

body {
  background: #eee;
}

/* @font-face {
  font-family: 'Geometria';
  src: url('~@/assets/fonts/geometria/Geometria-Thin.eot');
  src: local('Geometria Thin'), local('Geometria-Thin'),
    url('Geometria-Thin.eot?#iefix') format('embedded-opentype'),
    url('Geometria-Thin.woff') format('woff'),
    url('Geometria-Thin.ttf') format('truetype');
  font-weight: 100;
  font-style: normal;
} */

</style>
