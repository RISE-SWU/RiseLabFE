<template>
    <div>
        <div class="block">
            <el-carousel :height="this.height">
                <el-carousel-item v-for="(item,index) in slider" :key="index">
                    <img :src="item.picUrl" />
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'carousel',
        props: ['slider'],
        data() {
            return {
                height: '400px'
            }
        },
        created() {
            const deviceWidth = document.documentElement.clientWidth;
            if(deviceWidth <= 480) {
                this.height = '200px';
            }
        }
    }
</script>
<style lang="scss"
            scoped>
    @import "../../../scss/media";
    .block {
       img {
            width: 100%;
            height: 100%;
        }
    }

</style>