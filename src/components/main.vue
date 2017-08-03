<template>
    <div class="uploadForm">
        <div class="btn-group btn-group-justified" role="group">
            <router-link v-for="m in menu" :to="{path : m.slug}" tag="button">{{m.name}}</router-link>
            <!--<router-link to="/upload" tag="button">Upload</router-link>-->
            <!--<router-link to="/list" tag="button">List</router-link>-->
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return { }
        },
        computed: {
            menu(){
                return this.$store.getters.getMenu;
            }
        },
        created(){
            this.$http.get('menu').then(response => {
//                this.users = response.body;
                this.$store.dispatch('setMenu', response.body);
            }, response => {
                // error callback
                console.log('error : ' + response);
            });
        }
    }
</script>
<style scoped>
    * { box-sizing: border-box; }
    .uploadForm {
        width: 960px;
        margin: auto;
    }
    button {
        width: 50%;
        height: 40px;
        margin: 0;
        float: left;
        font-size: 12pt;
    }
</style>