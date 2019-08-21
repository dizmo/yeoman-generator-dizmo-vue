<template>
    <div id="front">
        <h1>Hello {{ message }}!</h1>
    </div>
</template>

<script>
module.exports = {
    name: 'App',
    data: function () {
        return {
            message: '<%= dizmoName %>'
        };
    }
};
</script>

<style scoped>
h1 {
    text-align: center;
}
</style>
