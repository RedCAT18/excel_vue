<template>
    <ul>
        <li class="idNum">{{list.id}}</li>
        <li class="userName">{{list.name}}</li>
        <li class="userEmail">{{list.email}}</li>
        <li class="userMobile">{{list.mobile}}</li>
    </ul>
</template>

<script>
    export default {
        props : ['list']
    }

</script>
<style>
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