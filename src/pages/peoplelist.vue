<template>
    <div class="people-container" v-loading.fullscreen.lock="loading" element-loading-text="Loading">
        <el-row>
            <el-col :span="20" :offset="2">
                <el-tabs v-model="activeName" type="card">
                    <el-tab-pane v-for="(item,index) in tab" :key="index" :name="String(index)">
                        <span slot="label" class="tab-title">{{item.class}}</span>
                        <h3>{{item.class}}</h3>
                        <div class="people-display">
                            <div class="people-item" v-for="(people,num) in item.list" :key="num">
                                <div class="image" >
                                    <a :href="`/peopleInfo/${item.type}?id=${people.id}`">
                                        <img ref="images" :data-src="people.img"/>
                                    </a>
                                </div>
                                <div class="info">
                                    <p class="name">
                                        <a :href="`/peopleInfo/${item.type}?id=${people.id}`">
                                        <span>{{people.name}}</span>
                                        </a><span v-if="people.degree">-</span>{{people.degree}}
                                    </p>
                                    <p class="position">{{people.position}}</p>
                                    <p class="title">{{people.title}}</p>
                                    <p class="address" v-show="people.office">O: {{people.office}}</p>
                                    <p class="email">E: {{people.email}}</p>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import 'intersection-observer';
    import { getPeopleList }  from '../lib/http';
    import { convert } from '../lib/convert';

    export default {
        name: 'peopleList',
        data() {
            return {
                tab: [],
                activeName: '0',
                loading: true,

            }
        },
        watch: {
            '$route' () {
                this.updateData();
            }
        },
        created() {
            const people = sessionStorage.getItem('_peopleList');
            if(!people) {
                getPeopleList().then(res => {
                    this.loading = false;
                    this.tab = res;
                    sessionStorage.setItem('_peopleList', convert.toString(res));
                }).catch(err => {
                    this.$message({
                        type: 'error',
                        message: err+'err'
                    })
                    this.loading = false;
                })
            } else{
                this.loading  = false;
                this.tab = convert.toObj(sessionStorage.getItem('_peopleList'));
            }

        },
        mounted() {
            const io = new IntersectionObserver((entries)=>{
                if(entries.length <= 2){
                    entries.forEach(i => {
                        const ele = i.target;
                        if(!ele.getAttribute('src')){
                            ele.setAttribute('src', ele.getAttribute('data-src'));
                        } else {
                            io.unobserve(ele);
                        }
                    })
                }
            },{
                threshold: [0.3]
            });

            const timer = setInterval(()=> {
                if(this.$refs.images){
                    const deviceHeight = document.documentElement.clientHeight;
                    const list = this.$refs.images;
                    list.forEach((item) => {
                        const itemHeight = item.getBoundingClientRect().top;
                        if(itemHeight < deviceHeight){
                            item.setAttribute('src', item.getAttribute('data-src'));
                        } else {
                            io.observe(item)
                        }
                    });
                    clearInterval(timer);
                }
            },1)
        }
    }
</script>

<style lang="scss"
            scoped>
    @import "../scss/color";
    @import "../scss/media";

    .people-container {
        background-color: $white-basic;
        color: black;
        padding-top: 40px;
        padding-bottom: 80px;
        .tab-title {
            font-size: 16px;
            @media #{$device-screen} {
                font-size: 12px;
            }
        }
        h3 {
            color: $theme-color;
            padding-bottom: 20px;
        }
        .el-button {
            border-top: none;
            border-left: none;
            border-right: none;
            font-size: 16px;
        }
        .people-display {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .people-item {
                width: 45%;
                height: 250px;
                display: flex;
                flex-wrap: nowrap;
                align-items: center;
                @media #{$device-screen} {
                    width: 100%;
                }
                .image {
                    img {
                        height: 220px;
                        width: 150px;
                    }
                }
                .info {
                    padding-left: 20px;
                    p {
                        font-size: 16px;
                        @media #{$device-screen} {
                            font-size: 12px;
                        }
                    }
                    .name {
                        span {
                            color: $theme-color;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }

</style>