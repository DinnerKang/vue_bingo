<template>
  <div id="app">
    <article class="main_container">
      <Bingo user="user_1"></Bingo>
    </article>
    <article class="main_container">
      <Bingo user="user_2"></Bingo>
    </article>
    
  </div>
</template>

<script>
import Bingo from './components/bingo/Bingo';

export default {
  name: 'app',
  components: {
    Bingo
  }
}
</script>

<style scoped>
  .main_container{
    width: 50%;
    float: left;
  }
</style>
