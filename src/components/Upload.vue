<template>
    <div class="uploadForm">
        <DropZone id="myVueDropzone" url="http://localhost:8000/api/excel" v-on:vdropzone-success="showSuccess" acceptedFileTypes=".xlsx, .xls">
            <!-- Optional parameters if any! -->
            <input type="hidden" name="token" value="xxx">
        </DropZone>
    </div>
</template>

<script>
    export default {
        methods: {
            'showSuccess': function(file, response){
                console.log('File has been successfully uploaded');
//                console.log(response.body);
            }
        }
    }
</script>

<style>
    .uploadForm {
        width: 80%;
        margin: 40px auto;
    }
</style>