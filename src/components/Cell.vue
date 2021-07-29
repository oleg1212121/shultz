<template>
    <div class="cell"
         :class="{touched: cell.touched, shake: !cell.touched && wrong}" @click="touch"
        :style="`width: ${cell.scale}; height: ${cell.scale}`"
    >
        <div class="cell-inner">
            <div>{{cell.number}}</div>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue'
    import options from '../helpers/options.js'

    export default {
        name: "Cell",
        props: {
            cell: {
                type: Object
            }
        },
        setup({cell}) {
            const wrong = ref(false);
            let timeout;

            function touch() {
                if (cell.number === options.currentNumber.value) {
                    cell.touched = true;
                    const limit = options.checked.value * options.checked.value;
                    if (options.currentNumber.value < limit) {
                        options.currentNumber.value += 1
                    } else {
                        alert('POBEDA')
                    }
                } else {
                    window.clearTimeout(timeout);
                    wrong.value = true;
                    timeout = window.setTimeout(() => {
                        wrong.value = false
                    }, 300)

                }


            }

            return {
                cell, touch, wrong
            }
        }
    }
</script>

<style scoped>
    .cell {
        margin: 0;
        padding: 0;
        display: inline-block;
        /*width: 50px;*/
        /*height: 50px;*/
        background: #598dff;
        border: 1px solid #c1c1c1;
        color: #fff;
        font-size: 25px;
    }

    .cell-inner {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
    }

    .cell-inner div {
        width: 100%;
    }

    .touched {
        background: #322fff;
    }

    .shake {
        animation: shake 0.3s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
    }

    @keyframes shake {
        10%,
        90% {
            transform: translate3d(-1px, 0, 0);
        }

        20%,
        80% {
            transform: translate3d(2px, 0, 0);
        }

        30%,
        50%,
        70% {
            transform: translate3d(-4px, 0, 0);
        }

        40%,
        60% {
            transform: translate3d(4px, 0, 0);
        }
    }
</style>