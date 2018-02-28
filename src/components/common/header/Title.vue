<template>
    <div class="title-container">
        <div class="rise-title" >
            <img src="../../../../public/logo.png"  />
            Centre for Research and Innovation in Software Engineering
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RiseTitle',
        data() {
            return {}
        }
    }
</script>

<style lang="scss"
        scoped>
    @import "../../../scss/color";
    @import "../../../scss/media";
    .title-container {
        background-color: $bg-color;
        padding: 0 15px;
        @media (max-width: 1249px) {
            padding: 0;
        }
    }
    .rise-title {
        text-align:center;
        padding: 50px 0;
        color:$theme-color;
        font-size:30px;
        font-weight: 500;
        background-color: $white-basic;
        img {
            width:110px;
            height:80px;
            vertical-align: middle;
            margin-left:-30px;
            margin-right:25px;
            @media #{$device-screen} {
                width:80px;
                height:60px;
                margin-left:1px;
                margin-right:10px;
            }
        }
        @media  #{$device-screen} {
            font-weight: normal;
            padding: 20px 10px 30px 0;
            font-size:22px;
        }
    }

</style>