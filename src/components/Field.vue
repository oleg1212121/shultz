<template>
    <div class="row">
        <div class="col-12">
            <div class="row row-cells" v-for="items in matrix">
                <Cell-component v-for="item in items" :cell="item" :key="item.number + item.scale" />
            </div>

        </div>
    </div>
</template>

<script>
    import options from '../helpers/options'
    import {watch} from 'vue'
    import CellComponent from './Cell.vue'

    export default {
        name: "Field",
        components: {CellComponent},
        setup(props) {
            watch([options.checked, options.checkedCell], options.refreshMatrix);
            return {
                ...options
            }
        }
    }
</script>

<style scoped>
.row-cells{
    justify-content: center;
}
</style>