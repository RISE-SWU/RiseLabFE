<template>
    <div>
        <div class="block">
            <el-carousel height="30vw">
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
            return {}
        }
    }
</script>
<style lang="scss"
            scoped>
    img {
        width: 100vw;
        height: 100%;
    }
</style>