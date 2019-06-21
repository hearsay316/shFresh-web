export default {
    MULogin(state,res){
        state.session = res
    },
    ShowLoading(state){
        state.isShowLoading = true
    },
    HideLoading(state){
        state.isShowLoading = false
    },
    ShowUser(state,user){
        this.state.user = user;
    }
}
/*
*
*
*
*
*  Cookie:[Goland-f4cb5eb8=84934e2e-f00a-4249-9e48-4235eae92650;
* Idea-9812f79d=ac7b2f91-805c-4174-b47c-8f9df918f500;
* beegosessionID=7e5d75f99457183464890329acc0d517;
* beegosessionID=30db8c9d0fc3c9ad7ec3d8c54dd21efb]
* Origin:[http://localhost:8081]
* Pragma:[no-cache]
* Referer:[http://localhost:8081/]
*  User:[xwd]
* User-Agent:[Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36]] wdwdwd
2019/06/21 17:31:39.676 [D] [server.go:2774]  |
*
*
*
* */