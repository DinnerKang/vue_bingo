<template>
  <div id="app">
    <article class="btn_container center">
      <input type="button" class="btn" name="resetBtn" id="resetBtn" value="게임 초기화">
    </article>
    <article class="main_container">
      <Bingo user="user_1"></Bingo>
    </article>
    <article class="main_container">
      <Bingo user="user_2"></Bingo>
    </article>
    <article v-if="winner" class="center">
      승자 : {{winner}}
    </article>
  </div>
</template>

<script>
import Bingo from './components/bingo/Bingo';

export default {
  name: 'app',
  components: {
    Bingo
  },
  computed:{
    winner : function(){
      return this.$store.state.winner;
    }
  }
}
</script>

<style scoped>
  .main_container{
    width: 50%;
    float: left;
  }
  .btn_container{
    margin: 50px 0;
  }
  .center{
    text-align: center;
  }
</style>
