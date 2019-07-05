import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        turn : 0,
        bingo : 0,
        winner : null
    },
    getters : {
        getBingo : function(state){
            return state.bingo;
        }
    },
    mutations : {
        changeTurn : function(state){
            return state.turn++;
        },
        resetTurn : function(state){
            return state.turn = 0;
        },
        checkBingo : function(state, payload){
            return state.bingo = payload;
        },
        gameWinner : function(state, payload){
            return state.winner = payload;
        }
    }
});