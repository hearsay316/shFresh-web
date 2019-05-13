<template>
    <div class="home">
       dddddddddd
    </div>
</template>

<script>
    // @ is an alias to /src
    import Login from '@/views/Login.vue'

    export default {
        name: 'home',
        mounted() {
            axios.get("http://localhost:8080/register").then((res) => {
                console.log(res);
            }).catch((error) => {
                console.log(error);
            })
        },
        methods: {
            login() {
                axios({
                    method: 'post',
                    withCredentials: true,
                    url: 'http://localhost:8080/register',
                    data: {
                        username: "swswd",
                        password: "swdswsw"
                    }
                });
            },
            GetUser() {
                //("http://localhost:8080/Article/user")
                axios({
                    method: 'get',
                    withCredentials: true,
                    url: 'http://localhost:8080/Article/user',
                }).then((res) => {
                    console.log(res);
                }).catch((error) => {
                    console.log(error);
                })
            }

        },
        components: {
            Login
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
