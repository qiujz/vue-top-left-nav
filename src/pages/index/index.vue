<template>
    <div class="guide-container">
        <div class="top-container">
            <nav-top :menu-data="topData" :active-index="topActiveIndex" 
            :user="user"></nav-top>
        </div>
        <div v-show="!showHome" class="main-container" 
        :style="{minHeight: guideHeight + 'px'}">
            <div class="left-container">
                <nav-left :menu-data="leftData" :active-index="leftActiveIndex">
                </nav-left>
            </div>
            <div class="right-container">
                <router-view></router-view>
            </div>
        </div>
        <home-page v-show="showHome"></home-page>
    </div>
</template>

<script>
    import navLeft from '../../components/menu/menu.vue';
    import navTop from '@/components/nav';
    import homeData from '../../common/homeData';
    import homePage from '../home/home';

    export default {
        name: 'home',
        components: {
            navLeft,
            navTop,
            homePage
        },
        data() {
            return {
                // 总的导航信息
                menuData: [],
                // 处理后的导航信息(数组)
                handleMD: [],
                // 处理后的导航信息(对象)
                handleMDObj: [],
                // 头部导航信息
                topData: [],
                // 侧边栏导航
                leftData: [],
                // 用户信息
                user: {},
                guideHeight: window.innerHeight - 81,
                leftActiveIndex: '', // 侧边栏高亮索引
                topActiveIndex: '', // 头部导航高亮索引
                showHome: true, // 显示首页
                routeId: '' // 选中的路由id
            };
        },
        mounted() {
            this.initHome();
        },
        watch: {
            $route(to, from) {
                let me = this;
                me.isShowHome();
                if (me.menuData && me.menuData.length > 0) {
                    me.findRoute(false);
                    me.transPath({anotherIndex: 0});
                }
            }
        },
        methods: {
            initHome() {
                let me = this;
                me.user = homeData.user;
                me.menuData = homeData.menuData;
                me.isShowHome();
                if (me.menuData && me.menuData.length > 0) {
                    me.topData = me.handleTopData(me.menuData)[0];
                    me.handleMD = me.handleMenuData(me.menuData);
                    if (me.topData.length > 0) {
                        // 找到头部索引！！！！！
                        me.findRoute(false);
                        if (me.routeId === -1) {
                            return;
                        }
                        me.transPath({anotherIndex: 0});
                    }
                }
            },
            isShowHome() {
                let me = this;
                if (me.$route.path !== '/' && me.menuData.length !== 0) {
                    me.showHome = false;
                }
                else if (me.$route.path !== '/' && me.menuData.length === 0) {
                    this.$router.replace('/');
                }
                else {
                    me.showHome = true;
                }
            },
            // 确认当前路由属于哪一块
            findRoute(hasID, id) {
                let me = this;
                let firstIndex;
                if (!hasID) {
                    // 第一次利用url
                    firstIndex = me.menuData.findIndex((item, index) => {
                        return item.url === me.$route.path;
                    });
                }
                else {
                    // 之后利用id
                    firstIndex = me.menuData.findIndex((item, index) => {
                        return item.id === id;
                    });
                }
                if (firstIndex === -1) { // 找不到
                    me.routeId = -1;
                    return;
                }
                if (me.menuData[firstIndex].pid === 0) {
                    // 目的找到routeId
                    me.routeId = me.menuData[firstIndex].id;
                    me.$nextTick(() => {
                        me.topActiveIndex = me.menuData[firstIndex].url;
                    });
                }
                else {
                    me.findRoute(true, me.menuData[firstIndex].pid);
                }
            },
            transPath(param) {
                let me = this;
                // 判断左侧导航数组是否变化
                if (JSON.stringify(me.leftData) !== JSON.stringify(me.handleMDObj[me.routeId])) {
                    me.leftData = me.handleMDObj[me.routeId] || [];
                }
                if (me.leftData.length > 0) {
                    me.$nextTick(() => {
                        me.leftActiveIndex = me.$route.path;
                    });
                }
            },
            /**
             * 处理侧边导航信息
             * @param  {array} data 接口返回的menu信息
             * @description 找出全部父级节点
             */
            handleTopData(data) {
                let obj = {};
                let len = data.length;
                for (let i = 0; i < len; i++) {
                    let key = data[i].pid;
                    if (!obj[key]) {
                        obj[key] = [];
                    }
                    obj[key].push(data[i]);
                }
                return obj;
            },
            /**
             * 处理侧边导航信息
             * @param  {array} data 接口返回的menu信息
             * @description 线性结构处理成前端直接可渲染的树形结构
             */
            handleMenuData(data) {
                let menu = [];
                let obj = this.handleTopData(data);
                this.handleMDObj = obj;
                let len = obj[0].length;
                for (let i = 0; i < len; i++) { // 第一层
                    menu.push(obj[0][i]);
                    let id = obj[0][i].id;
                    if (obj[id]) {
                        let len1 = obj[id].length;
                        for (let j = 0; j < len1; j++) { // 第二层
                            if (!menu[i].sub) {
                                menu[i].sub = [];
                            }
                            menu[i].sub.push(obj[id][j]);
                            let id1 = obj[id][j].id;
                            if (obj[id1]) {
                                let len2 = obj[id1].length;
                                for (let k = 0; k < len2; k++) { // 第三层
                                    if (!menu[i].sub[j].sub) {
                                        menu[i].sub[j].sub = [];
                                    }
                                    let firstIndex = menu[i].sub[j].sub.findIndex((item, index) => {
                                        return item.id === obj[id1][k].id;
                                    });
                                    // 防止重复添加
                                    if (firstIndex === -1) {
                                        menu[i].sub[j].sub.push(obj[id1][k]);
                                    }
                                }
                            }
                        }
                    }
                }
                return menu;
            }
        }
    };
</script>

<style lang="less" scoped>
    @import "../../common/style/color";

    .guide-container {
        background-color: @darkWhite;
        min-height: 100%;
        .top-container {
            border-bottom: 1px solid #ccc;
            height: 80px;
        }
        .main-container {
            position: relative;
            .right-container {
                margin-left: 220px;
                height: 100%;
            }
            .left-container {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 220px;
                background-color: @white;
            }
        }
    }


</style>