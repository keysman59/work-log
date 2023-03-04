<template>
  <div id="app" class="app">
    <Table></Table>
    {{  items  }}
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
  },
  mounted() {
    this.newItems = JSON.parse(`'"'+${this.items}`+'"')
    console.log(this.newItems)
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

</style>
