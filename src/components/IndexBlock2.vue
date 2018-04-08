<template>
    <div class="wapper">
        <image  class="hroiamge1" src="https://m.360buyimg.com/mobilecms/jfs/t15526/56/2344102455/23273/d8e15d5a/5aa0dbc1Nefd2bd2a.png!q70.jpg"></image>
        <div class="hor">
            <div class="ver">
                <text class="text1">玩3C</text>
                <text  class="text2">周末放假大牌直降千元</text>
                <div class="div1">
                   <div  class="div2">
                       <image :src="img1" class="image"></image>
                   </div>
                    <div class="div2">
                        <image :src="img2"  class="image"></image>
                    </div>
                </div>
            </div>
           <text style="background-color: #cccccc;width: 1px;height: 200px;"></text>
            <div class="ver">
                <text class="text1">京东家电</text>
                <text  class="text2">每满1000减100</text>
                <div class="div1">
                    <div  class="div2">
                        <image :src="img3" class="image"></image>
                    </div>
                    <div class="div2">
                        <image :src="img4"  class="image"></image>
                    </div>
                </div>
            </div>
        </div>
        <text style="background-color: #cccccc;height: 1px;"></text>
        <div class="hor">
            <div class="ver">
                <text class="text1">京东超市</text>
                <text  class="text2">好货部分满99-50</text>
                <div class="div1">
                    <div  class="div2">
                        <image :src="img5" class="image"></image>
                    </div>
                    <div class="div2">
                        <image :src="img6"  class="image"></image>
                    </div>
                </div>
            </div>
            <text style="background-color: #cccccc;width: 1px;height: 200px;"></text>
            <div class="ver">
                <text class="text1">爱家</text>
                <text  class="text2">家纺热卖  部分低至9.9元</text>
                <div class="div1">
                    <div  class="div2">
                        <image :src="img7" class="image"></image>
                    </div>
                    <div class="div2">
                        <image :src="img8"  class="image"></image>
                    </div>
                </div>
            </div>
        </div>
        <text style="background-color: #cccccc;height: 1px;"></text>
        <div class="hor3">
            <div class="ver3">
                <div class="div1">
                    <div  class="div3">
                        <text class="text1">爱宝宝</text>
                        <text  class="text2">爆款低至5折</text>
                        <image :src="img9" class="image"></image>
                    </div>
                    <text style="background-color: #cccccc;width: 1px;height: 250px;"></text>
                    <div class="div3">
                        <text class="text1">爱美丽</text>
                        <text  class="text2">满199减100</text>
                        <image :src="img10"  class="image"></image>
                    </div>
                </div>
            </div>
            <text style="background-color: #cccccc;width: 1px;height: 250px;"></text>
            <div class="ver3">
                <div class="div1">
                    <div  class="div3">
                        <text class="text1">爱吃</text>
                        <text  class="text2">踏青寻好味</text>
                        <image :src="img11" class="image"></image>
                    </div>
                    <text style="background-color: #cccccc;width: 1px;height: 250px;"></text>
                    <div class="div3">
                        <text class="text1">爱穿搭</text>
                        <text  class="text2">穿搭风向标</text>
                        <image :src="img12"  class="image"></image>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IndexBlcok2",
        data(){
            return {
                img1:"https://m.360buyimg.com/n1/s220x220_jfs/t16933/127/1288939545/17090/1da36d9f/5ac338a2N20592ec7.jpg!q70.jpg",
                img2:"https://m.360buyimg.com/mobilecms/s220x220_jfs/t16456/344/2645349223/29673/6cc294d1/5ab363a5N4872ecc5.jpg!q70.jpg",
                img3:"https://m.360buyimg.com/mobilecms/s240x240_jfs/t16666/69/1162943642/19615/b3efe6e6/5abe2146Na83ad354.jpg!q70.jpg",
                img4:"https://m.360buyimg.com/mobilecms/s240x240_jfs/t19348/84/1154586915/27203/f0bd788f/5abe214eNf9b79da5.jpg!q70.jpg",
                img5:"https://m.360buyimg.com/mobilecms/s240x240_jfs/t18952/107/838294221/82113/df0a4e03/5aa8f20dN7404a287.jpg!q70.jpg",
                img6:"https://m.360buyimg.com/n1/jfs/t15100/204/2594596516/52960/9f510bfe/5aa8f21fN57406abd.jpg!q70.jpg",
                img7:"https://m.360buyimg.com/mobilecms/s240x240_jfs/t15244/283/356547262/47743/b6607b0f/5a2a6d51N8830e8b8.jpg!q70.jpg",
                img8:"https://m.360buyimg.com/mobilecms/s240x240_jfs/t16057/38/102057973/36179/b957e4ec/5a2a6d55N83655f7f.jpg!q70.jpg",
                img9:"https://m.360buyimg.com/n1/s142x142_jfs/t17929/299/899794385/17291/d90318f9/5ab4c680N7d291625.jpg!q70.jpg",
                img10:"https://m.360buyimg.com/mobilecms/s142x142_jfs/t14404/182/2233072937/23500/a8a4358a/5a7ae00aN39255413.jpg!q70.jpg",
                img11:"https://m.360buyimg.com/mobilecms/s142x142_jfs/t19138/246/988178224/70816/def3410/5ab5c34eNaca75b87.jpg!q70.jpg",
                img12:"https://m.360buyimg.com/mobilecms/s142x142_jfs/t17224/292/1408295814/59105/f2f956f8/5ac97e98N3aaa8af8.jpg!q70.jpg"
            }
        }
    }
</script>

<style scoped>

    .wapper{
        /*background-color: white;*/
    }
    .text1{
        margin-top:10px;
        margin-left: 10px;
    }
    .text2{
        margin-left: 10px;
        /*style="color: red;font-size: 30px;"*/
        color: red;
        font-size: 27px;
    }
    .div1{
        /*style="flex-direction: row;height: 100px;"*/
        flex-direction: row;
        height: 100px;
    }
    .div2{
        /*style="flex: 1;height: 100px;align-items: center"*/
        flex: 1;
        height: 100px;
        align-items: center;
    }
    .div3{
        /*style="flex: 1;height: 100px;align-items: center"*/
        flex: 1;
        height: 250px;
        align-items: center;
        justify-content: center;
        /*border-right: 1px;*/
        /*border-color: #cccccc;*/
        /*border-right-style: solid;*/
    }

    .hroiamge1{
         height:68.64px;
    }

    .image{
        width: 110px;
        /*width: 100px;*/
        height: 100px;
        align-items: center;
        justify-content: center;
    }
    .hor{
        flex-direction: row;
        height: 200px;
        background-color: white;
        /*margin-top: 5px;*/
        /*border-bottom: 2px;*/
        /*border-color:red;*/
        /*border-bottom-style: solid;*/
        /*background-color: #238FFF;*/
    }
    .hor3{
        flex-direction: row;
        height: 250px;
        background-color: white;
        /*margin-top: 5px;*/
        /*border-bottom: 1px;*/
        /*border-color: red;*/
        /*!*border-bottom-style: solid;*!*/
        /*border-style: solid;*/
    }
    .ver{
        /*border-right: 1px;*/
        /*border-color:#cccccc;*/
        /*border-right-style: solid;*/
        margin-left: 5px;
        /*background-color: bisque;*/
        flex: 1;
        height: 200px;
    }
    .ver3{
        /*border-right: 1px;*/
        /*border-color: #cccccc;*/
        /*border-right-style: solid;*/
        margin-left: 5px;
        /*background-color: bisque;*/
        flex: 1;
        height: 250px;
    }
</style>