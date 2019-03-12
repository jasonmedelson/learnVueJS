<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{names}}</p>
    </div>
</template>

<script>
    export default{
        props: {
            names: [String, Array],
            default:"Names"
        },
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
