<template>
    <div>
        <div class="bingo_container">
            <div class="bingo" v-for="list in this.bingoBoard" v-bind:key="list" v-on:click="clickBingo(list)">
                {{list}}
            </div>
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
            diagonalBingo: 0
        }
    },
    created(){
        this.shackBingo();
    },
    methods: {
        shackBingo: function(){
            
            var arr = new Array(25);
            var temp = [];

            for(var i=1;i<=25;i++){
                arr[i] = i;
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
            console.log(this.bingo);
        },

        clickBingo: function(number){
            document.getElementsByClassName("bingo")[number-1].style.backgroundColor = "yellow";
        },
        checkVertical: function(){
            this.verticalBingo++;
        }
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

