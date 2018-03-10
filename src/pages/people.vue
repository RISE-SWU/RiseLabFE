<template>
    <div class="people-container" v-loading.fullscreen.lock="loading" element-loading-text="Loading">
        <el-row>
            <el-col :span="20" :offset="2">
                <p class="name-title">{{peopleInfo.basic.name}}</p>
                <div class="info-container">
                    <div class="info-img">
                        <img :src="this.peopleInfo.basic.img" />
                    </div>
                    <div class="info-basic">
                        <p><i class="fas fa-id-badge"></i><span>:</span>
                            <b>{{peopleInfo.basic.professionalTitle}} {{peopleInfo.basic.name}}</b>
                            <span v-if="peopleInfo.basic.degree">-</span> {{peopleInfo.basic.degree}}
                        </p>
                        <p v-show="peopleInfo.basic.position">{{peopleInfo.basic.position}}</p>
                        <p v-show="peopleInfo.basic.title">{{peopleInfo.basic.title}}</p>
                        <p v-show="peopleInfo.basic.office"><i class="fas fa-building"></i><span>:</span>{{peopleInfo.basic.office}}</p>
                        <p v-show="peopleInfo.basic.email"><i class="fas fa-envelope-open"></i><span>:</span>{{peopleInfo.basic.email}}</p>
                        <p v-show="peopleInfo.basic.phone"><i class="fas fa-phone"></i><span>:</span>{{peopleInfo.basic.phone}}</p>
                    </div>
                    <div class="info-research">
                        <p v-if="this.$route.params.type==='student'"><strong>Supervisor：</strong></p>
                        <p v-if="this.$route.params.type==='student'">
                            <router-link :to="{path:'/peopleInfo/teacher',query:{id: peopleInfo.basic.supervisorId}}">
                                {{peopleInfo.basic.supervisor}}
                            </router-link>
                        </p>
                        <p><strong>Research Area：</strong></p>
                        <p>{{peopleInfo.basic.area}}{{peopleInfo.basic.field}}</p>
                        <p><a href="">HomePage</a></p>
                    </div>
                </div>
                <div class="button-group" v-if="Object.keys(peopleInfo.detail).length >3">
                    <el-button-group>
                        <el-button  :key="k" v-for="(v,k) in peopleInfo.detail" size="medium"><a :href="`#${k}`">{{k}}</a></el-button>
                    </el-button-group>
                </div>
                <div class="info-detail">
                    <div v-for="(v,k) in peopleInfo.detail" :key="v" class="detail-group">
                        <div :id="k" class="detail-title">{{k}}</div><hr />
                        <div class="detail-content" v-html="v"></div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import { getPeopleDetail } from '../lib/http';
    import { setTitle } from '../lib/convert';
    export default {
        name: 'peopleInfo',
        data() {
            return {
                loading: true,
                peopleInfo: {
                    basic: {},
                    detail: {}
                }
            }
        },
        watch: {
            '$route' (to, from) {
                if(to.params.type !==from.params.type) {
                    location.reload();
                }
            }
        },
        created() {

            const type = this.$route.params.type;
            const id = this.$route.query.id;
            const peopleDetail = sessionStorage.getItem(`_peopleDetail_${type}_${id}`);
            if(!peopleDetail) {
                getPeopleDetail(type, id).then((res)=> {
                    setTitle(`${res.basic.name} | RISE`)
                    this.peopleInfo = res;
                    this.loading = false;
                    sessionStorage.setItem(`_peopleDetail_${type}_${id}`,JSON.stringify(res));
                    }).catch(err => {
                    this.$message({
                        type: 'error',
                        message :'http error' + err
                    })
                })
            } else {
                this.loading = true;
                this.peopleInfo = JSON.parse(sessionStorage.getItem(`_peopleDetail_${type}_${id}`));
                this.loading = false;
            }
        }
    }
</script>
<style lang="scss"
            scoped>
    @import "../scss/color";
    @import "../scss/media";

    .people-container {
        background-color: $white-basic;
        color: $font-basic;
        padding-top: 40px;
        padding-bottom: 80px;

        .name-title {
            font-size: 28px;
            color: $theme-color;
            padding-bottom: 20px;
        }
        .info-container {
            display: flex;
            flex-wrap: wrap;
            @media #{$device-screen} {
                flex-direction: column;
            }
            div {
                width: 33%;
                height: 320px;
                @media #{$device-screen} {
                    width: 100%;
                    height: 300px;
                }
            }
            .info-img {
                text-align: center;
                background-color: $bg-color-peopleInfo-1;
                img {
                    width: 80%;
                    height: 100%;
                }
            }

            .info-basic,.info-research {
                background-color: $bg-color-peopleInfo-2;
                display: flex;
                color: $white-basic;
                flex-wrap: wrap;
                align-content: center;
                padding: 20px;
                //justify-content: center;
                align-items: center;
                p {
                    width: 100%;
                }
                span {
                    padding-right: 5px;
                }
                @media #{$device-screen} {
                    padding: 20px;
                }
            }

            .info-research {
                background-color: $bg-color-peopleInfo-3;
                a {
                    color: #63ADD0;
                }
            }
        }

        .button-group {
            padding-top: 50px;
            text-align: center;
        }

        .info-detail {
            color: $theme-color;
            font-size: 28px;
            .detail-group {
                margin-bottom: 50px;
                margin-top: 50px;
            }
            .detail-content {
                color: $font-basic;
                text-align: justify;
                word-wrap: break-word;
                @media #{$device-screen} {
                    font-size: 12px;
                }
            }
        }
    }
</style>