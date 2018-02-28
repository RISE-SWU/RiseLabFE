<template>
    <div class="container">
        <slot name="header" />
        <slot name="content" />
        <slot name="footer" />
    </div>
</template>

<script>
    export default {
        name: 'Container'
    }
</script>
<style lang="scss">
    @import "../../scss/container";
</style>