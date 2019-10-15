<template>
    <div id="front">
        <h1>Hello {{ message }}!</h1>
    </div>
</template>

<script>
export default {
    name: 'App', data: () => ({
        message: '<%= dizmoName %>'
    })
};
</script>

<style lang="scss" scoped>
h1 {
    text-align: center;
}
</style>
