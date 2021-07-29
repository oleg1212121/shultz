<template>
    <div class="row">
        <div class="col-12">
            <div class="form-check form-check-inline" v-for="item in fieldScales">
                <input class="form-check-input" type="radio" name="flexRadioDefault"
                       v-model="checked"
                       :value="item.id"
                       :id="`id_${item.id}`"
                       :checked="item.isChecked"
                >
                <label class="form-check-label" :for="`id_${item.id}`">
                    {{item.val}}
                </label>
            </div>
        </div>
        <div class="col-12">
            <div class="form-check form-check-inline" v-for="item in cellScales">
                <input class="form-check-input" type="radio" name="flexRadioDefault1"
                       v-model="checkedCell"
                       :value="item.id"
                       :id="`cell_id_${item.id}`"
                       :checked="item.isChecked"
                >
                <label class="form-check-label" :for="`cell_id_${item.id}`">
                    {{item.val}}
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    import options from '../helpers/options.js'
    export default {
        name: "Options",
        setup(props){
            return {
                ...options
            }
        }
    }
</script>