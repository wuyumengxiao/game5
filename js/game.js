/**
 * Created by Lucia on 2017/10/12.
 */


// 百度地图API功能
var map = new BMap.Map("allmap");
map.centerAndZoom(new BMap.Point(121.465825,30.975839), 10);
map.enableScrollWheelZoom(true);
var circle = new BMap.Circle(new BMap.Point(121.465825,30.975839),5000000,{ fillOpacity:0.5,fillColor:'#3A3A3A'});
map.addOverlay(circle);
map.setMinZoom(8);

var opts = {anchor: BMAP_ANCHOR_BOTTOM_LEFT ,offset: new BMap.Size(24, 140) }
map.addControl(new BMap.NavigationControl(opts ));        // 添加平移缩放控件


//用于描线的坐标点
var p1 = new BMap.Point(121.476648,31.415536);
var p2 = new BMap.Point(121.456657,31.411969);
var p3 = new BMap.Point(121.436135,31.408093);
var p4 = new BMap.Point(121.416135,31.402803);
var p5 = new BMap.Point(121.396135,31.395903);
var p6 = new BMap.Point(121.376135,31.389663);
var p7 = new BMap.Point(121.356135,31.385763);
var p8 = new BMap.Point(121.336135,31.382203);
var p9 = new BMap.Point(121.316135,31.377943);
var p10 = new BMap.Point(121.296135,31.374543);
var p11 = new BMap.Point(121.274862,31.370369);
var p12 = new BMap.Point(121.256135,31.362793);
var p13 = new BMap.Point(121.235985,31.355973);
var p14 = new BMap.Point(121.215985,31.348033);
var p15 = new BMap.Point(121.195985,31.342493);
var p16 = new BMap.Point(121.175985,31.335573);
var p17 = new BMap.Point(121.159185,31.325973);
var p18 = new BMap.Point(121.150202,31.310355);
var p19 = new BMap.Point(121.150162,31.292922);
var p20 = new BMap.Point(121.154868,31.275661);
var p21 = new BMap.Point(121.154548,31.258361);
var p22 = new BMap.Point(121.154608,31.241061);
var p23 = new BMap.Point(121.154258,31.223761);
var p24 = new BMap.Point(121.152058,31.206561);
var p25 = new BMap.Point(121.152278,31.189261);
var p26 = new BMap.Point(121.151738,31.171961);
var p27 = new BMap.Point(121.149738,31.154661);
var p28 = new BMap.Point(121.145308,31.137361);
var p29 = new BMap.Point(121.133808,31.120061);
var p30 = new BMap.Point(121.131348,31.102761);
var p31 = new BMap.Point(121.130668,31.085461);
var p32 = new BMap.Point(121.135468,31.068161);
var p33 = new BMap.Point(121.144388,31.050861);
var p34 = new BMap.Point(121.151698,31.033561);
var p35 = new BMap.Point(121.160868,31.016261);
var p36 = new BMap.Point(121.165468,30.998961);
var p37 = new BMap.Point(121.171968,30.981661);
var p38 = new BMap.Point(121.179868,30.964361);
var p39 = new BMap.Point(121.186108,30.947061);
var p40 = new BMap.Point(121.197608,30.929761);
var p41 = new BMap.Point(121.215708,30.912461);
var p42 = new BMap.Point(121.228574,30.890355);
var p43 = new BMap.Point(121.248997,30.891032);
var p44 = new BMap.Point(121.268997,30.890062);
var p45 = new BMap.Point(121.288997,30.885062);
var p46 = new BMap.Point(121.308997,30.879962);
var p47 = new BMap.Point(121.328997,30.880162);
var p48 = new BMap.Point(121.348997,30.883762);
var p49 = new BMap.Point(121.368997,30.887262);
var p50 = new BMap.Point(121.388997,30.890862);
var p51 = new BMap.Point(121.408997,30.894892);
var p52 = new BMap.Point(121.428997,30.899062);
var p53 = new BMap.Point(121.448997,30.902962);
var p54 = new BMap.Point(121.468997,30.906502);
var p55 = new BMap.Point(121.488997,30.910862);
var p56 = new BMap.Point(121.508997,30.914002);
var p57 = new BMap.Point(121.528997,30.915882);
var p58 = new BMap.Point(121.548997,30.917152);
var p59 = new BMap.Point(121.568997,30.917022);
var p60 = new BMap.Point(121.588997,30.917022);
var p61 = new BMap.Point(121.608997,30.915452);
var p62 = new BMap.Point(121.628997,30.908952);
var p63 = new BMap.Point(121.648997,30.907122);
var p64 = new BMap.Point(121.668997,30.913099);
var p65 = new BMap.Point(121.688997,30.919989);
var p66 = new BMap.Point(121.708997,30.924159);
var p67 = new BMap.Point(121.728997,30.923459);
var p68 = new BMap.Point(121.748997,30.921929);
var p69 = new BMap.Point(121.768997,30.923989);
var p70 = new BMap.Point(121.791073,30.953523);
var p71 = new BMap.Point(121.795771,30.97052);
var p72 = new BMap.Point(121.796287,30.98797);
var p73 = new BMap.Point(121.796687,31.00542);
var p74 = new BMap.Point(121.797057,31.02287);
var p75 = new BMap.Point(121.797457,31.04032);
var p76 = new BMap.Point(121.797387,31.05777);
var p77 = new BMap.Point(121.795687,31.07522);
var p78 = new BMap.Point(121.793617,31.09267);
var p79 = new BMap.Point(121.791077,31.11012);
var p80 = new BMap.Point(121.785622,31.12757);
var p81 = new BMap.Point(121.779122,31.14502);
var p82 = new BMap.Point(121.772462,31.16247);
var p83 = new BMap.Point(121.768902,31.17992);
var p84 = new BMap.Point(121.762402,31.19737);
var p85 = new BMap.Point(121.753102,31.21482);
var p86 = new BMap.Point(121.740402,31.23227);
var p87 = new BMap.Point(121.730062,31.24972);
var p88 = new BMap.Point(121.719262,31.26717);
var p89 = new BMap.Point(121.708762,31.28462);
var p90 = new BMap.Point(121.696832,31.30207);
var p91 = new BMap.Point(121.67954,31.311299);
var p92 = new BMap.Point(121.659202,31.310373);
var p93 = new BMap.Point(121.650619,31.316586);
var p94 = new BMap.Point(121.637755,31.330147);
var p95 = new BMap.Point(121.622165,31.342824);
var p96 = new BMap.Point(121.606575,31.354978);
var p97 = new BMap.Point(121.587544,31.363262);
var p98 = new BMap.Point(121.568019,31.371086);
var p99 = new BMap.Point(121.54774,31.37815);
var p100 = new BMap.Point(121.52738,31.381013);
var p101 = new BMap.Point(121.506935,31.382142);
var p102 = new BMap.Point(121.498293,31.381953);
var p103 = new BMap.Point(121.4848,31.405676);
//用于修正棱角的坐标点
var s1 = new BMap.Point(121.222203,30.903257);
var s2 = new BMap.Point(121.221965,30.889898);
var s3 = new BMap.Point(121.316727,30.878551);
var s4 = new BMap.Point(121.762431,30.921657);
var s5 = new BMap.Point(121.650713,31.30975);
var s6 = new BMap.Point(121.64809,31.32152);
var s7 = new BMap.Point(121.499142,31.379092);
var s8 = new BMap.Point(121.479388,31.414531);
//将坐标点放入用于数组中  用于描线
var arrayList = [];
arrayList.push(p92,s5,p93,s6,p94,p95,p96,p97,p98,p99,p100,p101,s7,p102,p103,s8,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,s1,s2,p42,p43,p44,p45,p46,s3,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56,p57,p58,p59,p60,p61,p62,p63,p64,p65,p66,p67,p68,s4,p69,p70,p71,p72,p73,p74,p75,p76,p77,p78,p79,p80,p81,p82,p83,p84,p85,p86,p87,p88,p89,p90,p91);
//用于计算里程位置的坐标点数组
var clacList=[];
clacList.push(p92,p93,p94,p95,p96,p97,p98,p99,p100,p101,p102,p103,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56,p57,p58,p59,p60,p61,p62,p63,p64,p65,p66,p67,p68,p69,p70,p71,p72,p73,p74,p75,p76,p77,p78,p79,p80,p81,p82,p83,p84,p85,p86,p87,p88,p89,p90,p91);
clacList.reverse();
//画线
var polyline = new BMap.Polyline(arrayList, {strokeColor:"#5B5858", strokeWeight:10, strokeOpacity:0.7});
map.addOverlay(polyline);
//做分段的标注
var myIcon_start = new BMap.Icon("img/logo_start.png", new BMap.Size(15,15));
var marker_start = new BMap.Marker(p91,{icon:myIcon_start});
map.addOverlay(marker_start);
var myIcon_end = new BMap.Icon("img/logo_end.png", new BMap.Size(15,15));
var marker_end = new BMap.Marker(p92,{icon:myIcon_end});
map.addOverlay(marker_end);
var myIcon2 = new BMap.Icon("img/logo_two.png", new BMap.Size(20,20));
var marker2 = new BMap.Marker(p75,{icon:myIcon2});
map.addOverlay(marker2);
var myIcon3 = new BMap.Icon("img/logo_three.png", new BMap.Size(20,20));
var marker3 = new BMap.Marker(p54,{icon:myIcon3});
map.addOverlay(marker3);
var myIcon4 = new BMap.Icon("img/logo_four.png", new BMap.Size(20,20));
var marker4 = new BMap.Marker(p40,{icon:myIcon4});
map.addOverlay(marker4);
var myIcon5 = new BMap.Icon("img/logo_five.png", new BMap.Size(20,20));
var marker5 = new BMap.Marker(p25,{icon:myIcon5});
map.addOverlay(marker5);
var myIcon6 = new BMap.Icon("img/logo_six.png", new BMap.Size(20,20));
var marker6 = new BMap.Marker(p8,{icon:myIcon6});
map.addOverlay(marker6);

//    //请求接口
//    var token=GetRequest().access_token;
//    $.get('/yulian/api/integration',{access_token:token},function(data){
//        if(data.status_code==200){
//            $.each(data.data,function(i){
//                if(data.data[i].me=='1'){
//                    //根据里程开始路书并标注个人位置
//                    if(data.data[i].oti_mileage==''){
//                        data.data[i].oti_mileage=0;
//                    }
//                    var sum=Math.round(data.data[i].oti_mileage/2);
//                    if(sum>102){
//                        lustart(clacList,data.data[i].url);
//                    }else{
//                        lustart(clacList.slice(0,sum+1),data.data[i].url);
//                    }
//                }
//                else{
//                    //标注好友位置
//                    if(data.data[i].oti_mileage==''){
//                        data.data[i].oti_mileage=0;
//                    }
//                    firends_mk(data.data[i].oti_mileage,data.data[i].url);
//                }
//            })
//        }else{
//            alert(data.status);
//        }
//    })

//路书函数  边走边画线
BMapLib.LuShu.prototype._move=function(initPos,targetPos,effect) {
    var pointsArr=[initPos,targetPos];  //点数组
    var me = this,
        //当前的帧数
        currentCount = 0,
        //步长，米/秒
        timer = 20,
        step = this._opts.speed / (1000 / timer),
        //初始坐标
        init_pos = this._projection.lngLatToPoint(initPos),
        //获取结束点的(x,y)坐标
        target_pos = this._projection.lngLatToPoint(targetPos),
        //总的步长
        count = Math.round(me._getDistance(init_pos, target_pos) / step);
    //显示折线 syj201607191107
    this._map.addOverlay(new BMap.Polyline(pointsArr, {
        strokeColor : "#FADB05",
        strokeWeight : 10,
        strokeOpacity : 1
    })); // 画线
    //如果小于1直接移动到下一点
    if (count < 1) {
        me._moveNext(++me.i);
        return;
    }
    me._intervalFlag = setInterval(function() {
        //两点之间当前帧数大于总帧数的时候，则说明已经完成移动
        if (currentCount >= count) {
            clearInterval(me._intervalFlag);
            //移动的点已经超过总的长度
            if(me.i > me._path.length){
                return;
            }
            //运行下一个点
            me._moveNext(++me.i);
        }else {
            currentCount++;
            var x = effect(init_pos.x, target_pos.x, currentCount, count),
                y = effect(init_pos.y, target_pos.y, currentCount, count),
                pos = me._projection.pointToLngLat(new BMap.Pixel(x, y));
            //正在移动
            me._marker.setPosition(pos);
        }
    },timer);
};
function lustart(a,b){
    lushu= new BMapLib.LuShu(map, a, {
        defaultContent:"",
        autoView: false,
        icon: new BMap.Icon(b, new BMap.Size(40, 46),{anchor : new BMap.Size(19, 45)}),
        speed: 8000,
        enableRotation: false,
        landmarkPois: []
    });
    map.addOverlay(lushu);
    lushu.start();
}

//好友里程标注函数
function firends_mk(a,b){
    var sum=Math.round(a/2);
    var myIcon = new BMap.Icon(b,new BMap.Size(40, 46),{anchor : new BMap.Size(19, 45)});
    if(sum>102){
        var marker7 = new BMap.Marker(clacList[102],{icon:myIcon});
        map.addOverlay(marker7);
    }else{
        var marker7 = new BMap.Marker(clacList[sum],{icon:myIcon});
        map.addOverlay(marker7);
    }
}


//获取url后的字符数据
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
//		不考虑设备dpr的rem布局
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=640){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


//    查看个人信息
$('.close').click(function(){
    $(this).parent().css('display','none');
    $('#stage-right').css('display','block');
    $('#stage-top').css('display','block');
    $('#stage-bottom').css('display','block');
    $('#stage-go').css('display','block');
})
$('.closeAll').click(function(){
    $(this).parent().parent().css('display','none');
    $('#stage-right').css('display','block');
    $('#stage-top').css('display','block');
    $('#stage-bottom').css('display','block');
    $('#stage-go').css('display','block');
})
//    游戏设置
$('.btn_close').click(function(){
    $(this).css('display','none')
    $(this).parent().find('.btn_open').css('display','inline-block')
})
$('.btn_open').click(function(){
    $(this).css('display','none')
    $(this).parent().find('.btn_close').css('display','inline-block')
})
//赛段排名  --检测屏幕尺寸，如果过大，则减小列表数目
$(window).resize(function(){
    if(document.body.clientWidth>414){
        console.log(1)
    }
//        console.log(document.body.clientWidth);
});

//    赛段一    go   --stage-top
$('#stage-top .return').click(function(){
    window.location.href='introduction.html';
//        history.back();
})
//    赛段一    go   --stage-bottom
var t=setTimeout(function(){aa()} ,500);
function aa(){
    $('.circle').each(function(index, el) {
        var num =60 * 3.6;
        if (num<=180) {
            $(this).find('.right').css('transform', "rotate(" + num + "deg)");
        } else {
            $(this).find('.right').css('transform', "rotate(180deg)");
            $(this).find('.left').css('transform', "rotate(" + (num - 180) + "deg)");
        };
    });
    $('#stage-bottom .data1').text('1111');
    $('#stage-bottom .data2').text('2222');
    $('#stage-bottom .data3').text('3333');
    $('#stage-bottom .data4').text('4444');
}

//    $('.circle').each(function(index, el) {
//        var num = $(this).find('span').text() * 3.6;
//        if (num<=180) {
//            $(this).find('.right').css('transform', "rotate(" + num + "deg)");
//        } else {
//            $(this).find('.right').css('transform', "rotate(180deg)");
//            $(this).find('.left').css('transform', "rotate(" + (num - 180) + "deg)");
//        };
//    });

//    赛段一    go     stage-right
var wave = (function () {
    var ctx;
    var waveImage;
    var canvasWidth;
    var canvasHeight;
    var needAnimate = false;

    function init (callback) {
        var wave = document.getElementById('wave');
        var canvas = document.createElement('canvas');
        if (!canvas.getContext) return;
        ctx = canvas.getContext('2d');
        canvasWidth = wave.offsetWidth;
        canvasHeight = wave.offsetHeight;
        canvas.setAttribute('width', canvasWidth);
        canvas.setAttribute('height', canvasHeight);
        wave.appendChild(canvas);
        waveImage = new Image();
        waveImage.onload = function () {
            waveImage.onload = null;
            callback();
        }
        waveImage.src = 'img/wave2.png';
    }

    function animate () {
        var waveX = 0;
        var waveY = 0;
        var waveX_min = -203;
        var waveY_max = canvasHeight * 0.7;
        var requestAnimationFrame =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) { window.setTimeout(callback, 1000 / 60); };
        function loop () {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            if (!needAnimate) return;
            if (waveY < waveY_max) waveY += 1.5;
            if (waveX < waveX_min) waveX = 0; else waveX -= 3;

            ctx.globalCompositeOperation = 'source-over';
            ctx.beginPath();
            ctx.arc(canvasWidth/2, canvasHeight/2, canvasHeight/2, 0, Math.PI*2, true);
            ctx.closePath();
            ctx.fill();

            ctx.globalCompositeOperation = 'source-in';
            ctx.drawImage(waveImage, waveX, canvasHeight - waveY);

            requestAnimationFrame(loop);
        }
        loop();
    }

    function start () {
        if (!ctx) return init(start);
        needAnimate = true;
        setTimeout(function () {
            if (needAnimate) animate();
        }, 500);
    }
    function stop () {
        needAnimate = false;
    }
    return {start: start, stop: stop};
}());
wave.start();
var page=['#backpack ','#medal','#ranking','','#gameSetUp'];
$('#stage-right img').each(function(index,value){
    var index=$(this).index();
    function timedMsg()
    {
        var t2=setTimeout(function(){bb()},1000)
    }
    function bb(){
        $('#stage-right').css('display','none');
        $('#stage-top').css('display','none');
        $('#stage-bottom').css('display','none');
        $('#stage-go').css('display','none');
        $(page[index]).css('display','block');
    }
    $(this).click(function(){timedMsg();})
//        $(this).click(function(){
//            var index=$(this).index();
//            $('#stage-right').css('display','none');
//            $('#stage-top').css('display','none');
//            $('#stage-bottom').css('display','none');
//            $('#stage-go').css('display','none');
//            $(page[index]).css('display','block');
//        })
})
//backpack 背包
$('#backpack .box').each(function(index,value){
    function timedMsg2()
    {
        var t3=setTimeout(function(){cc()},1000)
    }
    function cc(){
        $('#backpack').css('display','none');
        $('#propsDetails').css('display','block');
    }
    $(this).click(function(){
        timedMsg2();
    })
})
//propsDetails 道具-详情
function timedMsg3()
{
    var t4=setTimeout(function(){dd()},1000)
}
function dd(){
    $('#propsDetails').css('display','none');
    $('#chooseObj').css('display','block');
}
$('#propsDetails .props_btn').click(function(){
    timedMsg3();
})
$('#propsDetails .data_btn').click(function(){//跳到APP看个人资料
    $('#propsDetails').css('display','none');

})
//chooseObj 道具-选择使用对象 line
function timedMsg4()
{
    var t5=setTimeout(function(){ee()},1000)
}
function ee(){
    $('#chooseObj').css('display','none');
    $('#successfully').css('display','block');
}
$('#chooseObj  .line').each(function(index,value){
    $(this).click(function(){
        timedMsg4();
    })
})
//道具使用-成功、失败  successfully  failure

//    我的勋章  medal
$('#medal .box').each(function(index,value){
    $(this).click(function(){
        $('#medal').css('display','none');
        $('#medalDetails').css('display','block');
    })
})
//    勋章详情  medalDetails

//   游戏设置  gameSetUp
$('#gameSetUp .line1 img').click(function(){
    $('this').toggleClass('active');
})
$('#gameSetUp .btn').click(function(){  //退出比赛
    $('#gameSetUp').css('display','none');
    $('#stage-right').css('display','block');
    $('#stage-top').css('display','block');
    $('#stage-bottom').css('display','block');
    $('#stage-go').css('display','block');
})





