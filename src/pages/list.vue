<template>
    <div class="list-container" v-loading.fullscreen.lock="loading" element-loading-text="Loading">
        <el-row>
            <el-col :span="20" :offset="2">
                <el-tabs type="card" v-model="activeName">
                    <el-tab-pane  v-for="(item,index) in subMenu"  :key="index" :name="String(index)">
                        <span slot="label" class="tab-title">{{ item.title }}</span>
                        <el-table
                            :data="item.tableData"
                            style="width: 100vw"
                            :showHeader=false
                            v-if="activeName == index"
                            >
                            <el-table-column
                                    min-width="100vw">
                                <template slot-scope="scope">
                                    <div class="group">
                                        <div class="title">
                                            <el-tooltip :content="scope.row.title" placement="top" effect="light">
                                            <span class="link">
                                                <span class="date-device">
                                                    <i>{{scope.row.createDate}}</i>
                                                </span>
                                                <router-link v-if="scope.row.type !== 1" :to="{path:'/article',query:{id:scope.row.id}}">{{scope.row.title}}</router-link>
                                                <a :href="scope.row.url" v-if="scope.row.type == 1">{{scope.row.title}}</a>
                                            </span>
                                            </el-tooltip>
                                        </div>
                                        <div class="date">
                                            <i>{{scope.row.createDate}}</i>
                                        </div>
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import ElCol from 'element-ui/packages/col/src/col';
    import ElRow from 'element-ui/packages/row/src/row';
    import { convert, setTitle } from '../lib/convert';
    import { getList } from '../lib/http' ;

    export default {
        components: {
            ElRow,
            ElCol},
        name: 'list',
        data() {
            return {
                activeName:'0',
                subMenu:[],
                loading: true,
            }
        },
        watch: {
            '$route' () {
                this.updateData();
            }
        },
        created() {
            this.updateData();
        },
        methods: {
            updateData() {
                const route = this.$route.params.item;
                setTitle(`${route} | RISE`)
                let cacheList = sessionStorage.getItem(`_${route}`);
                this.activeName = '0';
                this.loading = true;
                if(!cacheList) {
                    getList(route).then(res => {
                        sessionStorage.setItem(`_${route}`,convert.toString(res));
                        this.subMenu = res;
                        this.loading = false;
                    }).catch(err => {
                        this.$message({
                            type: 'error',
                            message: 'http error' + err
                        })
                    })
                } else {
                    this.loading = false;
                    this.subMenu = convert.toObj(sessionStorage.getItem(`_${route}`))
                }
            }
        },

    }
</script>

<style lang="scss"
            scoped>
    @import "../scss/color";
    @import "../scss/media";

    .list-container {
        background-color: $white-basic;
        color: black;
        padding-top: 40px;
        padding-bottom: 80px;
        .group {
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
        }

        .tab-title {
            font-size: 16px;
            @media #{$device-screen} {
                font-size: 14px;
            }
        }

        .title {
            width: 90vw;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            a {
                color: $font-basic;
                font-size: 16px;
            }
            @media #{$device-screen} {
                white-space: normal;
                overflow: auto;
                text-overflow: clip;
            }
            .date-device {
                display: none;
                padding-right: 10px;
                font-weight: bold;
                @media #{$device-screen} {
                    display: inline;
                }
            }
        }

        .date {
            width: 20vw;
            color: $font-basic;
            font-size: 14px;
            text-align: right;
            font-weight: bold;
            @media #{$device-screen} {
                display: none;
            }
        }
    }
</style>
