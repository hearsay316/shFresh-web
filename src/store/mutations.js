export default {
    MULogin(state,res){
        state.session = res
    },
    ShowLoading(state){
        state.isShowLoading = true
    },
    HideLoading(state){
        state.isShowLoading = false
    }
}