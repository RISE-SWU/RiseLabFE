<template>
    <div class="message">
        <el-row>
            <el-col :span="20" :offset="2">
                <div class="title">
                    <h2>Message from the Director</h2>
                </div>
                <div class="content">
                    <p style="padding-top: 20px">Welcome to RISE！</p>
                    <img src="../../../image/liuzhiming.jpg">
                    <p>RISE is the Centre for Research and Innovation in Software Engineering at Southwest University founded in 2016, with research grants from the Chinese National Government, the Government of Municipality Chongqing, and Southwest University.</p>

                    <p>RISE believes in team building, that the people are the most important asset, and that individual members gain benefit from being in the team through their contribution to its development and collaborations within the team.</p>

                    <p>The RISE vision for software engineering research, innovation, and education, are closely related. We pursue both theory and practice: <strong>we believe that theory without practice is sterile, and that practice without theory is uninformed.</strong></p>

                    <p>The RISE themes of research and innovation include:</p>

                    <ul>
                        <li>Formal foundations of software and systems engineering techniques;</li>
                        <li>Models, techniques and tools for architectures, requirements, analysis, design, verification, and implementation of software in heterogeneous and evolving networks of computation, communication and control systems;</li>
                        <li>Unifying theories and integrating theories of Software Engineering, Artificial Intelligence, and Knowledge Engineering;</li>
                        <li>Application of the above theories, techniques, and tools, to technology development and innovation to solve practical industrial problems, important both for the well-being of society and the success of industrial companies.</li>
                    </ul>
                    <p>We aim to conduct high quality research that is characterised by scientific significance, rigour, and impact.</p>

                    <p>We provide effective supervision and an open research environment for our postgraduate and undergraduate students, with a hierarchical supervision team that includes internationally known professors, energetic associate professors, lecturers, and postdoctoral research fellows.</p>

                    <p>We value national and international collaboration as being essential for our development. We therefore welcome scientists from around the world to visit RISE and to develop collaborations with us. We are also open to applications for staff and PhD student exchanges.</p>

                    <p>Our goal is to build RISE into a place where every member feels and enjoys its values, and where international scholars meet to exchange ideas and work together to produce high impact research, conduct technological innovation, and contribute to national and regional economic and social development.</p>

                    <br />

                    <p>Zhiming Liu</p>

                    <p>Director of RISE</p>
                    <img :offset="2" class="footer-img " src="../../../image/title.png">
                </div>
            </el-col>
        </el-row>

    </div>
</template>
<script>
    export default {
        name: 'Message',
        data() {
            return {}
        }
    }
</script>
<style lang="scss"
            scoped>
    @import '../../../scss/color';
    @import '../../../scss/media';

    .message {
        background-color: $white-basic;
        color: black;
        .title {
            text-align: center;
            padding-top: 20px;
            @media #{$device-screen} {
                h2 {
                    font-size: 20px;
                }
            }
        }

        .content {
            font-size: 20px;
            text-align: justify;
            background: url("../../../image/background2.png") no-repeat;
            ul {
                text-align: left;
            }
            img {
                float: right;
                height: 230px;
                width: 142px;
                margin: 10px;
                @media #{$device-screen} {
                    display: none;
                }
            }
            @media #{$device-screen} {
                font-size: 14px;
                text-align: justify;
            }
            .footer-img {
                width: 100%;
                margin: 0 0 20px 0;
                display: block;
                @media #{$device-screen} {
                    height: 80px;
                }
            }
        }

        h2 {
            margin: 0;
            text-align: center;
        }
    }

</style>