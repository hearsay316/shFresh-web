<!--suppress JSIgnoredPromiseFromCall -->
<template>
    <div class="home">
       dddddddddd
    </div>
</template>

<script>
    // @ is an alias to /src
    export default {
        name: 'home',
        mounted() {
         this.GetUser();
        },
        methods: {
            GetUser() {
                this.$store.dispatch("Home/ShowUser");
            }
        },
        components: {

        }
    }
</script>
<style>
    .addresslist {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    .main {
        height: 100%;
        width: calc(100% + 17px);
        overflow-y: scroll;
        padding: 15px 32px 15px 15px;
    }
</style>
