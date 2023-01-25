<template>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="name"/>&nbsp;<button @click="sendAjax">Search</button>
      </div>
    </section>
</template>

<script>
export default {
    name:"SearchA",
    data(){
        return {
            name:""
        }
    },
    methods:{
        sendAjax(){
            //请求前更新数据
            this.$bus.$emit('sendData',{
                    isFrist:false,
                    isLoading:false,
                    errMsg:"",
                    users:[]})
            this.$http.get(
                `https://api.github.com/search/users?q=${this.name}`
            ).then(response =>{
                //触发事件
                this.$bus.$emit('sendData',{
                    isLoading:false,
                    errMsg:"",
                    users:response.data.items})
            }).catch(error =>{
                this.$bus.$emit('sendData',{
                    isLoading:false,
                    errMsg:error.message})
            })
        }
    },

}
</script>

<style>

</style>