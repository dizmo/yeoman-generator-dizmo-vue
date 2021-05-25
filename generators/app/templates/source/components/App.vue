<template>
    <div id="front">
        <h1>Hello {{ message }}!</h1>
    </div>
</template>

<script>
/**
 * @vue-prop {String} name=App
 *  application name
 * @vue-data {String} message=<%= dizmoName %>
 *  front side message
 */
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
