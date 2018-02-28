<template>
    <div  class="article-container" v-loading.fullscreen.lock="loading" element-loading-text="Loading">
        <div class="article-title">
            <el-row>
                <el-col :span="20" :offset="2">
                    <p>{{article.title}}</p>
                </el-col>
            </el-row>
        </div>
        <div class="article-info">
            <span class="date">Time: {{article.createDate}}</span>
            <span class="view">Views: {{article.browseCounts}}</span>
        </div>
        <div class="article-content">
            <el-row>
                <el-col :span="20" :offset="2">
                    <hr />
                    <div v-html="article.content"></div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import { getArticle } from '../lib/http';
    import { convert, setTitle } from '../lib/convert'
    import ElCol from "element-ui/packages/col/src/col";


    export default {
        components: {ElCol},
        name: 'RiseArticle',
        data() {
            return {
                article: [],
                loading: true
            }
        },
        created() {
            this.updateData();
        },
        watch: {
            '$route'() {
                this.updateData();
            }
        },
        methods: {
            updateData() {
                const id = this.$route.query.id;
                let article = sessionStorage.getItem(`_article${id}`);
                if(!article) {
                    this.loading = true;
                    getArticle(id).then(res=> {
                        this.loading = false;
                        this.article = res.data[0];
                        setTitle(this.article.title);
                        sessionStorage.setItem(`_article${id}`, convert.toString(res.data));
                    }).catch(err=> {
                        this.$message({
                            type: 'error',
                            message: 'http' + err
                        })
                        this.loading = false;
                    })
                } else {
                    this.loading = false;
                    this.article = convert.toObj(sessionStorage.getItem(`_article${id}`))[0];
                    setTitle(this.article.title);
                }
            }
        }
    }
</script>

<style lang="scss">
    @import '../scss/color';
    @import '../scss/media';

    .article-container {
        background-color: $white-basic;
        color: black;
        padding-top: 20px;
        padding-bottom: 20px;

        .article-title {
            text-align: center;
            font-size: 30px;
            font-weight: 500;
            padding-top: 20px;
            @media #{$device-screen} {
                font-size: 20px;
            }
        }

        .article-info {
            text-align: center;
            font-size: 15px;
            color: gray;
            .date{
                margin-right: 10px;
            }
            .view {
                margin-left: 10px;
            }
        }

        .article-content {
            img{
                display: block;
                max-width: 100%;
                height: auto;
                margin-right: auto;
                margin-left: auto;
            }
        }
    }
</style>