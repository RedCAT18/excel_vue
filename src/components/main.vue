<template>
    <div class="uploadForm">
        <div class="btn-group btn-group-justified" role="group">
            <router-link to="/upload" tag="button">Upload</router-link>
            <router-link to="/list" tag="button">List</router-link>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return { }
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