<template>
    <div class="container">
        <Options-component />
        <hr>
        <h1>
            {{currentNumber}}
        </h1>
        <hr>
        <br>
        <Field-component />
    </div>
</template>

<script>
    import OptionsComponent from './components/Options.vue'
    import FieldComponent from './components/Field.vue'
    import options from './helpers/options.js'

    export default {
        name: 'App',
        components: {
            OptionsComponent, FieldComponent
        },
        setup(props) {
            return {
                ...options
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
