<template>
    <el-container>
        <el-footer class="footer no-mp" height="auto">
            <div class="foot_link">
                <a href="#">关于我们</a>
                <span>|</span>
                <a href="#">联系我们</a>
                <span>|</span>
                <a href="#">招聘人才</a>
                <span>|</span>
                <a href="#">友情链接</a>
            </div>
            <p>CopyRight © 2019 北京天天生鲜信息技术有限公司 All Rights Reserved</p>
            <p>电话：010-****888    京ICP备*******8号</p>
        </el-footer>
    </el-container>

</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style lang="stylus" scoped>
    .footer
        width: 100%
        border-top: 2px solid #42ad46;
        margin: 0 0 30px 0;
        .foot_link
            text-align: center;
            margin-top: 30px
            a
             color: #4e4e4e;
        span
            padding: 0 10px;
        p
            text-align: center;
            margin-top: 10px;

</style>