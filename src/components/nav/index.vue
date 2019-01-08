<template>
    <div class="project-nav">
        <div class="title-container">
            <div class="title">
                <img src="../../assets/img/my-logo.png">
                <span>|</span>
                <span>project</span>
            </div>
        </div>
        <div class="main-container">
            <el-menu :default-active="activeIndexNow" class="el-menu-demo" mode="horizontal" router unique-opened>
                <el-menu-item v-for="(tab,index) in menuData" :index="tab.url" @click="selectMenu(index, tab.url)" :key="index">{{tab.name}}</el-menu-item>
            </el-menu>
        </div>
        <div class="user-login">
            <span class="user-icon"></span>
            <span>{{user.name}}</span>
            <span class="sign-out" @click.stop="signOut">
                <i class="fa fa-power-off" aria-hidden="true"></i>退出
            </span>
        </div>
    </div>
    
</template>

<script>
    export default {
        props: {
            menuData: {
                'type': Array,
                'default': []
            },
            activeIndex: {// 高亮索引
                'type': String,
                'require': true,
                'default': '1'
            },
            user: {
                'type': Object,
                'default': {
                    name: ''
                }
            }
        },
        mounted() {
            this.activeIndexNow = this.activeIndex;
        },
        data() {
            return {
                activeIndexNow: ''
            };
        },
        watch: {
            activeIndex(n, o) {
                this.activeIndexNow = n;
            }
        },
        methods: {
            selectMenu(index, indexPath) {
                this.activeIndexNow = indexPath;
            },
            signOut() {
                // let a = document.createElement('a');
                // a.href = './';
                window.location.href = 'https://juejin.im/timeline';
                // a = null;
            }
        }
    };
</script>
<style lang="less" scoped>
@import "../../common/style/color";
.project-nav {
    width: 100%;
    height: 80px;
    display: flex;
    background-color: @white;
    overflow: hidden;
    .title-container {
        height: 80px;
        position: relative;
        width: 200px;
        padding-left: 20px;
        background-color: @white;
        border-bottom: 1px solid #ccc;
        .title {
            position: absolute;
            bottom: 18px;
        }
        img {
            position: relative;
            bottom: 6px;
            width: 50px;
            vertical-align: middle;
            margin-bottom: -10px;
        }
        span {
            color: @silver;
            font-size: 16px;
            vertical-align: middle;
        }
    }
    .el-menu--horizontal {
        border-bottom: 0;
        background: @white;
        .el-menu-item {
            height: 80px;
            line-height: 85px;
            font-size: @medium;
        }
    }
    .main-container {
        flex: 1;
        background: @white;
    }
    .user-login {
        height: 80px;
        padding-right: 50px;
        line-height: 80px;
        background-color: @white;
        text-align: right;
        font-size: @small;
        color: @silver;
        .user-icon {
            display: inline-block;
            width: 40px;
            height: 40px;
            margin-right: 3px;
            vertical-align: middle;
            background: url('../../assets/img/head-icon.png') no-repeat center;
            background-size: 100%;
        }
        .sign-out {
            cursor: pointer;
            i {
                margin: 0 5px 0 20px;
            }
        }
    }
    
}
</style>