<template>
    <div class="container">
        <Options/>
        <hr>
        <h1>
            {{currentNumber}}
        </h1>
        <hr>

        <br>
        <Field />
    </div>
</template>

<script>
    import Options from './components/Options.vue'
    import Field from './components/Field.vue'
    import options from './helpers/options.js'

    export default {
        name: 'App',
        components: {
            Options, Field
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
