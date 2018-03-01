<template>
    <div class="container-fluid">
        <div class="row">
            <div class="nav-top col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ul class="text-right  navbar-btn">
                    <li>
                        <router-link :to="{path: '/article?id=39'}">
                            Contact
                        </router-link>
                        <span>|</span>
                    </li>
                    <li>
                        <router-link :to="{path: '/article?id=28'}">
                            About Us
                        </router-link>
                        <span>|</span>
                    </li>
                    <li class="dropdown">
                        <a href="http://www.swu-rise.net.cn/adminMember/login.html"
                           role="button" aria-haspopup="true" aria-expanded="false">
                        Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'RiseTop',
        data() {
            return {}
        }
    }
</script>

<style lang="scss">
    @import '../../../scss/color';
    @import '../../../scss/media';

    .container-fluid {
        .nav-top {
            color:$white-basic;
            height:40px;
            background-image: url(../../../image/banner.png);

            ul {
                list-style-type:none;
                margin-right:93px;
                margin-left:-30px;
                @media #{$medium-screen} {
                    margin-right: 90px;
                }
                @media #{$large-screen}{
                    margin-right: auto;
                    margin-left: auto;
                    width:1040px;
                }
                @media #{$small-2-screen} {
                    margin-right:30px;
                }
                @media #{$small-3-screen} {
                    margin-left: 0px;
                    margin-right: -30px;
                }
                @media #{$small-1-screen} {
                    margin-right: 30px;
                }
                @media #{$small-0-screen} {
                    margin-right: 40px;
                }
                @media #{$device-screen} {
                    margin-right:0px;
                    margin-left:-30px;
                    font-size:12px;
                }
            }

            li {
                display:inline;
                height:35px
            }

            a {
                text-decoration:none;
                padding:4px;
                font-weight: bold;
                color:$white-basic;
                :hover {
                    color:$link-hover;
                }
            }
        }
    }
</style>