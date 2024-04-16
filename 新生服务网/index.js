var wrap=document.querySelector(".wrap");
var next=document.querySelector(".arrow_right");
var prev=document.querySelector(".arrow_left");
next.onclick=function(){
	next_pic();
}
prev.onclick=function(){
	prev_pic();
}
function next_pic(){
	index++;
	if(index>4){
		index=0;
	}
	showCurrentDot();
	var newLeft;
	if(wrap.style.left==="-8112px"){
		newLeft=-2704;
	}else{
		newLeft=parseInt(wrap.style.left)-1352;
	}
	wrap.style.left=newLeft+"px";
}
function prev_pic(){
	index--;
	if(index<0){
		index=4;
	}
	showCurrentDot();
	var newLeft;
	if(wrap.style.left==="0px"){
		newLeft=-5408;
	}else{
		newLeft=parseInt(wrap.style.left)+1352;
	}
	wrap.style.left=newLeft+"px";
}
//定时调用
var timer=null;
function autoPlay(){
	timer=setInterval(function(){
		next_pic();
	},2000);
}
autoPlay();
//鼠标停留轮播图停止播放，鼠标移开轮播图继续播放
var play=document.querySelector(".play");
play.onmouseenter=function(){
	clearInterval(timer);
}
play.onmouseleave=function(){
	autoPlay();
}
//小圆点的行为
var index=0;
var dots=document.getElementsByTagName("span");
function showCurrentDot(){
	for(var i=0,len=dots.length;i<len;i++){
		dots[i].className="";
	}
	dots[index].className="on";
}
//点击小圆点控制图片轮播
for(var i=0,len=dots.length;i<len;i++)	{
	(function(i){
		
		dots[i].onclick=function(){
			var dis=index-i;
			if(index==4&&parseInt(wrap.style.left)!==-6760){
				dis=dis-5;
			}
			//和使用prev和next相同，在最开始的照片5和最终的照片1在使用时会出现问题。导致符号和位数的出错，做相应的处理即可
			if(index==0&&parseInt(wrap.style.left)!==-1352){
				dis=5+dis;
			}
			wrap.style.left=(parseInt(wrap.style.left)+dis*1352)+"px";
			index=i;
			showCurrentDot();
		}
	})(i);
}
/*

//定时器
let timer=null;
function autoPlay(wrap){
	timer=setInterval(function(){
		next_pic(wrap);
	},2000);
}
//圆点导航
let index=0;
let dots=document.getElementsByTagName("span");
//显示当前是第几张图片
function showCurrentDot(wrap){
	for(var i=0,len=dots.length;i<len;i++){
		
	}
	
//最开始和最后的照片修正

function init(){
	var wrap=document.querySelector(".wrap");
	var next=document.querySelector(".arrow_right");
	var prev=document.querySelector(".wrap_left");
	//当鼠标点击上下箭头
	next.onclick=function(){
		next_pic(wrap);
	}
	prev.onclick=function(){
		prev_pic(wrap);
	}
	//启动定时器
	autoPlay(wrap)
	//鼠标滑过 取消定时播放
	var container=document.querySelector(".play");
	container.onmouseleave=function(){
		autoPlay(wrap);
	}
}
window.addEventListener('load',init,false);
		
}*/