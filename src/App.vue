<template>
  <div id="app">
    <article class="btn_container center">
      <input type="button" class="btn" name="resetBtn" id="resetBtn" value="게임 초기화"
        v-on:click="resetGame">
    </article>
    <article class="main_container">
      <Bingo user="user_1" ref="user_1" ></Bingo>
    </article>
    <article class="main_container">
      <Bingo user="user_2" ref="user_2"></Bingo>
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
  },
  methods :{
    resetGame : function(){
      this.$refs.user_1.resetGame();
      this.$refs.user_2.resetGame();
    },
  }
}
</script>

<style scoped>
  .main_container{
    width: 50%;
    float: left;
  }
  .btn_container{
    margin: 20px 0;
  }
  .btn {
    color: #fff;
    width: 160px;
    height: 48px;
    border-radius: 23px;
    box-shadow: 0 4px 8px 0 #b4d7ff;
    background-color: #218aff;
    font-size: 13px;
    border: none;
    cursor: pointer;
  }
  .center{
    text-align: center;
  }
</style>
