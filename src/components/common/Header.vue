<template>
    <header>
        <rise-top />
        <rise-title />
        <rise-menu />
    </header>
</template>
<script>
    import RiseTop from './header/Top';
    import RiseTitle from './header/Title';
    import RiseMenu from './header/Menu';

    export default {
        name: 'RiseHeader',
        components: {
            RiseMenu,
            RiseTop,
            RiseTitle
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss"
            scoped>
</style>