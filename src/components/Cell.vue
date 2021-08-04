<template>
    <div class="cell"
        :class="{touched: cell.touched, shake: !cell.touched && cell.wrong}" @click="touch(cell.number)"
        :style="`width: ${cell.scale}; height: ${cell.scale}`"
    >
        <div class="cell-inner">
            <div>{{cell.number}}</div>
        </div>
    </div>
</template>

<script>
    import options from '../helpers/options.js'

    export default {
        name: "Cell",
        props: {
            cell: {
                type: Object
            }
        },
        setup({cell}) {
            return {
                cell, ...options
            }
        }
    }
</script>

<style scoped>
    .cell {
        margin: 0;
        padding: 0;
        display: inline-block;
        background: #598dff;
        border: 1px solid #c1c1c1;
        color: #fff;
        font-size: 25px;
        user-select: none;
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
        0% {
            background: #ff4543;
        }
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
        100% {
            background: #598dff;
        }
    }
</style>