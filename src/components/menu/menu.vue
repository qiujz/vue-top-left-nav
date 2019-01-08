<template>
    <el-menu :default-active="activeIndex" class="menu-container" 
    router unique-opened>
        <div v-for="(item,num) in menuData" :key="num">
            <el-submenu v-if="item.sub" :key="item.id" :index="item.url">
                <template slot="title">
                    <span class="menu-icon" :class="`menu-icon-${num}`"></span>
                    <span>{{item.name}}</span>
                </template>
                <el-menu-item v-for="(subItem, subNum) in item.sub" :key="subNum" :index="subItem.url" style="text-align: center">
                    {{subItem.name}}
                </el-menu-item>
            </el-submenu>
            <el-menu-item v-else :key="item.id" :index="item.url">
                <span class="menu-icon" :class="`menu-icon-${num}`"></span>
                {{item.name}}
            </el-menu-item>
        </div>
    </el-menu>
</template>

<script>
    export default {
        name: 'sideNavigation',
        data() {
            return {
                // 0未初始化，1初始化
                init: 0
            };
        },
        props: {
            menuData: {
                'type': Array,
                'default': []
            },
            // 首次激活的导航
            activeIndex: {
                'type': String,
                'require': true,
                'default': '1'
            }
        },
        mounted() {
        },
        computed: {
        },
        methods: {
        }
    }
</script>

<style lang="less" scoped>
    @import "../../common/style/color";
    .useellipsis() {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .menu-container {   
            border-right: 1px solid #ccc;
        background-color: @white;
        li {
            .useellipsis();
            .el-submenu__title {
                .useellipsis();
            }
        }
        .menu-icon {
            display: inline-block;
            width: 20px;
            height: 20px;
            margin-right: 5px;
            vertical-align: text-bottom;
        }
        .menu-icon-0 {
            background: url('../../assets/img/menu-0@2x.png') no-repeat center;
            background-size: 100%;
        }
        .menu-icon-1 {
            background: url('../../assets/img/menu-1@2x.png') no-repeat center;
            background-size: 100%;
        }
        .menu-icon-2 {
            background: url('../../assets/img/menu-2@2x.png') no-repeat center;
            background-size: 100%;
        }
        .menu-icon-3 {
            background: url('../../assets/img/menu-3@2x.png') no-repeat center;
            background-size: 100%;
        }
        .menu-icon-4 {
            background: url('../../assets/img/menu-2@2x.png') no-repeat center;
            background-size: 100%;
        }
        .menu-icon-5 {
            background: url('../../assets/img/menu-3@2x.png') no-repeat center;
            background-size: 100%;
        }
        .menu-icon-6 {
            background: url('../../assets/img/menu-2@2x.png') no-repeat center;
            background-size: 100%;
        }
    }
</style>