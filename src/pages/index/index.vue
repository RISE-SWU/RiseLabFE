<template>
    <div v-loading.fullscreen.lock="loading" element-loading-text="Loading">
        <carousel :slider="slider" />
        <message />
    </div>

</template>

<script>
    import Carousel from './components/Carousel';
    import Message from './components/Message';

    import { getIndexInfor } from '../../lib/http';
    import { convert, setTitle } from '../../lib/convert'

    export default {
        name: 'index',
        components: {
            Carousel,
            Message
        },
        beforeCreate() {
            setTitle('Welcome to Rise Lab');
        },
        created() {
            const cacheSlider = sessionStorage.getItem('_slider');
            if (cacheSlider) {
                this.slider = convert.toObj(cacheSlider);
                this.loading = false;

            } else {
                getIndexInfor().then(res => {
                    this.loading = false;
                    sessionStorage.setItem('_slider',convert.toString(res.data));
                    this.slider = res.data;

                }).catch(err => {
                    this.loading = false;
                    this.$message({
                        message: 'http error',
                        type: 'error'+err
                    });
                })
            }
        },
        data() {
            return {
                slider: {},
                loading: true
            }
        }
    }
</script>
<style lang="scss"
            scoped>

</style>