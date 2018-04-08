<template>

    <div class="wapper">
        <div class="hor" >
            <div class="ver"  v-for="img in horImages1">
                <image :src="img.src" class="image"></image>
                <text class="text">{{img.text}}</text>
            </div>
        </div>
        <div class="hor" >
            <div class="ver" v-for="img in horImages2" >
                <image :src="img.src" class="image"></image>
                <text  class="text">{{img.text}}</text>
            </div>
        </div>
        <!--广告-->
        <div class="ads1">
            <image :src="ads1" class="ads1Image"></image>
        </div>

    </div>

</template>

<script>
    export default {
        props:["horImages1","horImages2","ads1"],
        data(){
           return{

           }
        }
    }
</script>

<style scoped>

    .ads1{
        width: 750px;
        height: 300px;

    }
    .ads1Image{
        width: 750px;
        height: 300px;
    }
    .image{
        width:100px;
        height: 100px;
    }
    .text{
        font-size: 20px;
    }
    .wapper{
        top: -10px;
        height: 600px;
        width: 750px;
        justify-content: center;
        border-radius: 20px;
        background-color:#fff;
    }
    .hor{
        padding: 20px;
        /*background-color: #0088fb;*/
        flex-direction: row;
        width: 750px;
        height: 140px;
        flex: 1;
        justify-content: center;
        align-items: center;
    }
    .ver{
        /*background-color: darkorange;*/
        /*width: 100px;*/
        /*height: 100px;*/
        flex: 1;

        justify-content: center;
        align-items: center;

        margin-left: 10px;
        /*flex-direction:column;*/
    }
</style>