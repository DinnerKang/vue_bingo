<template>
    <div class="bingo_container">
        <div class="bingo" v-for="(number, idx) in bingoBoard" :ref="'bingo_'+number" v-bind:key="idx" v-on:click="clickBingo(number)">
            {{number}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Bingo',
    data(){
        return{
            bingoBoard: [],
            bingo: [],
            verticalBingo : 0,
            horizontalBingo : 0,
            diagonalBingo: 0,
            totalBingo: 0,
        }
    },
    created(){
        this.shackBingo();
    },
    props : {
        user : String
    },
    computed : {
        getBingo : function(){
            return this.$store.getters.getBingo;
        }
    },
    watch:{
        verticalBingo(){
            this.totalBingo = this.totalBingo + 1;
        },
        horizontalBingo(){
            this.totalBingo = this.totalBingo + 1;
        },
        diagonalBingo(){
            this.totalBingo = this.totalBingo + 1;
        },
        getBingo(val){
            this.passedBingo(val);
        },
        totalBingo(){
            if(this.totalBingo >=1){
                alert('승');
            }
        }
    },
    methods: {
        // 빙고판 섞기
        shackBingo: function(){
            
            const arr = new Array(25);
            let temp = [];

            for(let i=0;i<25;i++){
                arr[i] = i+1;
            }

            arr.sort(function(){return 0.5-Math.random()});
            this.bingoBoard = arr;

            for(let j=0, i=0; i<25;i++){
                temp[i%5] = arr[i];

                if((i+1) % 5 === 0){
                    this.bingo[j] = temp;
                    j++;
                    temp = [];
                }
            }
        },
        checkBingo: function (number){
            let i = 0;
            this.$refs['bingo_'+number][0].style.backgroundColor = "yellow";

            while(true){
                if(this.bingo[i].indexOf(number) > -1){
                    this.bingo[i][this.bingo[i].indexOf(number)] = true;
                    break;
                }else{
                    i++
                }
                if(i === 5){ break; }
            }
        },

        clickBingo: function(number){

            const check = this.checkTurn(number);
            if(check === false){
                return alert('차례가 아닙니다.');
            }

            this.checkBingo(number);

            this.$store.commit("checkBingo", number);
            this.checkHorizontal();
            this.checkVertical();
            this.checkDiagonal();
        },

        passedBingo : function(val){
            this.checkBingo(val);

            this.checkHorizontal();
            this.checkVertical();
            this.checkDiagonal();
        },

        checkVertical: function(){
            this.verticalBingo = 0;

           for(let i=0; i<5; i++){
               for(let j=0; j<5; j++){
                  if(this.bingo[j][i] === true){
                    if(j === 4){
                      this.verticalBingo++;
                  }
                  }else{
                      break;
                  }
               }
           }
        },
        checkHorizontal: function(){
            this.horizontalBingo = 0;
            
            for(let i=0; i<5; i++){
                if(this.bingo[i].every(function(x){ return x === true})){
                        this.horizontalBingo++;
                    }
            }
        },
        checkDiagonal : function(){
            let check = true;
            this.diagonalBingo = 0;

            for(let i=0; i<5; i++){
               if(this.bingo[i][i] !== true){
                   check = false;
               }
            }
            if(check === true){this.diagonalBingo++;}

            check = true;
            for(let i=0; i<5; i++){
                 if(this.bingo[i][4-i] !== true){
                   check = false;
               }
            }
            if(check === true){this.diagonalBingo++;}
        },
        checkTurn : function(number){
            if(this.$refs['bingo_'+number][0].style.backgroundColor === "yellow"){
                return false;
            }

            const user = Number(this.user.split("_")[1]);
            if(this.$store.state.turn % 2 !== user -1 ){
                return false;
            }else{
                this.$store.commit("changeTurn");
                return true;
            }
        },
    },
}
</script>

<style lang="scss" scoped>

.bingo_container{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    .bingo{
        flex: 0 0 19%;
        border: 1px solid #ced3d6;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        cursor: pointer;
    }
    .active_bingo{
        background-color: yellow;
    }
}


</style>

