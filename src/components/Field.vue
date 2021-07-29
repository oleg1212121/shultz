<template>
    <div class="row">
        <div class="col-12">
            <div class="row row-cells" v-for="items in matrix">
                <Cell v-for="item in items" :cell="item" :key="item.number + item.scale" />
            </div>

        </div>
    </div>
</template>

<script>
    import options from '../helpers/options'
    import {ref, watch} from 'vue'
    import Cell from './Cell.vue'

    export default {
        name: "Field",
        components: {Cell},
        setup(props) {
            const getMatrix = function (count) {
                let cur = [];
                let numbers = [...(new Array(count * count).keys())].sort(() => Math.random() - 0.5);
                for(let a = 0; a < count; a++){
                    cur.push([]);
                    for(let b = 0; b < count; b++){
                        let val = numbers.pop();
                        cur[a].push({
                            number: val + 1,
                            touched: false,
                            scale: `${options.checkedCell.value}px`
                        });
                    }
                }
                return cur;
            };

            let matrix = ref(getMatrix(options.checked.value));
            watch([options.checked, options.checkedCell], () => {
                matrix.value = getMatrix(options.checked.value);
                options.currentNumber.value = 1
            });
            return {
                matrix
            }
        }
    }
</script>

<style scoped>
.row-cells{
    justify-content: center;
}
</style>