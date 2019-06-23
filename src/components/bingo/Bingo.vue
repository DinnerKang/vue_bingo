<template>
    <div>
        <div class="bingo_container">
            <div class="bingo" v-for="list in 25" v-bind:key="list" v-on:click="clickBingo(list)">
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
            
        }
    },
    methods: {
        clickBingo: function(number){
            if(document.getElementsByClassName("bingo")[number-1].style.backgroundColor === "yellow"){
                document.getElementsByClassName("bingo")[number-1].style.backgroundColor = "#fff";
            }else{
                document.getElementsByClassName("bingo")[number-1].style.backgroundColor = "yellow";
            }
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

