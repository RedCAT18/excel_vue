<template>
    <div class="header_style">
        <img src="../assets/logo.png" height="200" width="200"/>
        <p>Address Book</p>
        <!--<ul>-->
            <!--<role="presentation"><router-link to="/">Home</router-link></li>-->
            <!--<li role="presentation"><router-link to="/user/1">User1</router-link></li>-->
            <!--<li role="presentation"><router-link to="/user/2">User2</router-link></li>-->
        <!--</ul>-->
    </div>
</template>

<script>
    export default {
        data (){
            return {

            }
        }
    }
</script>

<style scoped>
    .header_style {
        margin: 0;

        text-align: center;
        padding: 40px;
    }

    p {
        font-size: 1.5em;
    }

    ul {
        margin: 0;
        float: right;
    }
    ul li {
        text-align: right;
        list-style-type: none;
    }
</style>