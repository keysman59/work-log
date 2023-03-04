<template>
  <div id="app" class="app">
    <Table></Table>
  </div>
</template>

<script>
import Table from './components/Table'


export default {
  components: { Table },
  data() {
    return {

    }
  },
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
