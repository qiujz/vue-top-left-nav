<template>
  <div id="app" class="wrap">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
    @import "common/style/reset";
    @import "common/style/color";

    .wrap {
        width: 100%;
        height: 100%;
    }
    .el-menu {
        border-radius: 0;
    }
    .el-dialog {
        .el-dialog__title {
            font-weight: normal;
        }
        .el-dialog__headerbtn {
            position: absolute;
            top: 25px;
            right: 25px;
        }
        .el-dialog__body {
            padding: 0 20px;
        }
        .el-dialog__footer {
            border-top: 1px solid @gray;
            padding: 17px 20px;
        }
    }

    .el-select-dropdown {
        max-width: 300px;
    }

    /*elementui中在火狐浏览器下page按钮有上下键*/
    .el-pagination__editor {
        -moz-appearance: textfield;
    }

    .cursor-pointer {
        cursor: pointer;
    }
</style>
<style>

#app {
}
</style>
