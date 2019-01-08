<template>
    <div class="home" :style="{minHeight: guideHeight + 'px'}">
        <div class="tips">
            <div class="tips-title">主页</div>
            <el-form :model="logobj" ref="addForm">
                <el-form-item label="时间" prop="time">
                    <el-input placeholder="多长时间后输出" type="number" v-model.number="logobj.time"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="输出的内容" v-model.number="logobj.str"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="enheng()">定时打印</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import myplugin from 'sri-npm-test';
    export default {
        name: '',
        components: {},
        data() {
            return {
                guideHeight: window.innerHeight - 80,
                logobj: {
                    time: '',
                    str: ''
                }
            };
        },
        props: {},
        mounted() {},
        events: {},
        methods: {
            enheng() {
                myplugin.sleep(this.logobj.time, this.logobj.str);
            }
        }
    }
</script>

<style lang="less">

    .home {
        position: relative;
        height: 100%;
        border-top: 1px solid #d5d5d5;
        background-image: url("../../assets/img/home-background.png");
        background-size: cover;
        .tips {
            position: absolute;
            top: 23%;
            right: 22%;
            font-size: 14px;
        }
        .tips-title {
            margin-bottom: 14px;
            font-size: 24px;
        }
        li {
            margin-bottom: 4px;
            color: #1f2d3d;
        }
    }
</style>