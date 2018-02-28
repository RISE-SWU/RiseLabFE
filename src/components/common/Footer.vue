<template>
    <footer  class="container-fluid nav-bottom">
        <p>Copyright© 2016-2017 | RISE Address： Room 1001, Building 25, Southwest University</p>
    </footer>
</template>
<script>
    export default {
        name: 'RiseFooter',
        data() {
            return {}
        }
    }
</script>

<style lang="scss"
        scoped>
    @import '../../scss/color';
    .nav-bottom {
        height:100px;
        width: 100vw;
        display: table-cell;
        vertical-align: middle;
        background-color:$theme-color;
        p {
            color:$white-basic;
            text-align:center;
            font-weight: bold;
        }
    }
</style>