<template>
    <slider class="slider" interval="3000" auto-play="true" @change="onchange">
        <div class="frame" v-for="img in imageList">
            <image class="image" resize="cover" :src="img.src"></image>
        </div>
        <indicator class="indicator"></indicator>
    </slider>
</template>

<script>
    export default {
        props:["imageList"],
        data() {
            return{

            }
        },
        methods:{
            onchange(event){

            }
        }
    }
</script>

<style scoped>

    .slider{
        height: 332px;
        /*background-color: darkorange;*/

    }

    .frame{
        justify-content: center;
        height: 332px;
    }
    .indicator{
        bottom:25px;
        height: 40px;
        width: 750px;
        justify-content: center;
        align-items: center;
        item-color:#ccc;
        item-selected-color:#fff;
        item-size:10px;

    }
    .image{
        width: 750px;
        height: 332px;
    }
</style>