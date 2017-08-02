<template>
    <div class="listForm">
        <p class="list_title"> Address List</p>
        <ul>
            <li class="idNum">No</li>
            <li class="userName">Name</li>
            <li class="userEmail">Email</li>
            <li class="userMobile">Mobile</li>
        </ul>
        <app-list-item v-for="user in users"
                       :list="user" :key="user.id"></app-list-item>
    </div>
</template>

<script>
    import ListItem from './ListItem.vue';

    export default {
//        data (){
//            return {
//                users : {}
//            }
//        },
        components:{
            appListItem : ListItem
        },
        computed: {
            users(){
                return this.$store.getters.getUsers;
            }
        },
        created(){
            this.$http.get('users').then(response => {
//                this.users = response.body;
                this.$store.dispatch('setUsers', response.body);
            }, response => {
                // error callback
                console.log('error : ' + response);
            });
        }
    }
</script>

<style scoped>
    * { box-sizing: border-box; }
    .listForm {
        width: 80%;
        margin: 40px auto;
    }
    .list_title {
        font-size: 1.5em;
        text-align: center;
        margin: 40px auto;
    }

    ul {
        border-bottom: 1px solid gainsboro;
    }
    li {
        list-style-type: none;
        display: inline-block;
        padding: 10px 20px;
    }

    .idNum { width: 50px; }
    .userName { width: 180px; }
    .userEmail { width: 300px; }
    .userMobile { width: 230px; }
</style>