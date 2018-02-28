<template>
    <div class="nav-container">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div id="nav" class="collapse navbar-collapse" >
                    <ul class="nav navbar-nav">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/people">People</router-link></li>
                        <li class="list-down"><a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Research</a>
                            <ul class="dropdown-menu">
                                <li><router-link to="/article?id=45" >Introduction</router-link></li>
                                <li><router-link to="/article?id=56">Projects</router-link></li>
                                <li><router-link to="/article?id=59">Publications</router-link></li>
                                <li><router-link to="/article?id=67">Reports</router-link></li>
                            </ul>
                        </li>
                        <li><router-link to="/list/seminar">Seminars</router-link></li>
                        <li><router-link to="/list/conference">Conferences</router-link></li>
                        <li><router-link to="/list/exchange">Exchanges</router-link></li>
                        <li><router-link to="/list/news">News</router-link></li>
                        <li><router-link to="/list/join">Join us</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

</template>
<script>
    export default {
        name: 'RiseMenu',
        data() {
            return {}
        }

    }
</script>
<style lang="scss"
            scoped>
    @import "../../../scss/color";
    @import "../../../scss/media";

    .nav-container {
        background-color: $bg-color;
        padding: 0 15px;
        @media (max-width: 1249px) {
            padding: 0;
        }
        .navbar {
            border-radius: 0;
            border: none;
            @media #{$device-screen} {
                li:nth-child(odd) {
                    background-color: $dark-theme;
                }
            }

        }
        .navbar-default {
            display: flex;
            justify-content: center;
            flex-wrap: nowrap;
            color: $white-basic;
            background-color: $theme-color;
            text-align: right;
            margin-bottom: 0;
            a {
                color: $white-basic;
                font-size: 20px;
                font-weight: 500;
                padding-left: 25px;
                padding-right: 25px;
            }
            li {
                :visited {
                    color: $white-basic;
                }
                :hover {
                    color: lightblue;
                }
                :active {
                    color: $white-basic;
                }

            }
            @media #{$device-screen} {
                display: block;
                a {
                    font-size: 14px;
                }
                .dropdown-menu > li > a {
                    color: $white-basic;
                }
            }
            .dropdown-menu {
                a {
                    color: $font-basic;
                    font-size: 14px;
                }
            }
        }
        .navbar-default .navbar-nav>.open>a {
            background-color: $white-basic;
            color: $font-basic;
        }
    }
</style>