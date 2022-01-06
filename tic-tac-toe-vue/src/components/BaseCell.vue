<template>
    <td class="cell" @click="strike">{{turn}}</td>
</template>
<script>
import Bus from '../common/bus.js'
export default {
    props: [
        'name',
        'history'
        ],
    data () {
        return {
            frozen: false,
            turn: ''
        }
    },
    methods: {
        strike () {
            if(!this.frozen){
                this.turn = this.$parent.currentPlayer;
                this.frozen = true;
                Bus.$emit('strike',this.name);
            }
        }
    },
    created () {
        Bus.$on('clearCell', () => {
				this.turn = '';
				this.frozen = false;
		})
		Bus.$on('freeze', () => this.frozen = true);
        Bus.$on('coverGrid',(history)=> {
            history.forEach(element => {
                if(this.name === element.id){
                    this.turn = element.content;
                }
            });
        })
    }
}
</script>
<style>
    .cell {
        width: calc(100% / 3);
        height: calc(100% / 3); 
        font-size: 40px;
        text-align: center;
        border: 2px solid #000;
        padding: 40px;
        vertical-align: top;
        font-family: "Permanent Marker";
    }
</style>
