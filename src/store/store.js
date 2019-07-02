import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        turn : 0,
        bingo : 0,
        winner : ''
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
        checkBingo : function(state, payload){
            return state.bingo = payload;
        },
        gameWinner : function(state, payload){
            return state.winner = payload;
        }
    }
});