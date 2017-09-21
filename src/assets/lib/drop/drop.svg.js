/*!
 * drop.js
 * http://ued.sexy/
 *
 * Copyright 2014 cyclegtx
 * https://github.com/cyclegtx/drop.js
 */

function Drop(svg){
	this.svg = svg;
	this.svgWidth = this.svg.width.animVal.value;
	this.svgHeight = this.svg.height.animVal.value;
	this.rebounding = false;
	this.overbounding = false;
	//触发刷新时d的最大值，阈值
	this.overboundD = 1.1;
	this.time =0;
	this.useTime = false;
	//按钮被下拉距离，取值(0-1),大于1.1的时候触发加载
	this.d = 0;
	//按钮颜色
	this.color = "#909090";
	//按钮阴影色
	this.shadowColor = "#595959";
	//加载中图标
	this.icon_load_src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjM4OEI3RTY4RjFGMTFFNDkzNzZDQjZFNkJEQzY2MzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjM4OEI3RTc4RjFGMTFFNDkzNzZDQjZFNkJEQzY2MzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMzg4QjdFNDhGMUYxMUU0OTM3NkNCNkU2QkRDNjYzNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMzg4QjdFNThGMUYxMUU0OTM3NkNCNkU2QkRDNjYzNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pn1JQ84AAAikSURBVHja7J0JjBY1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";
	this.icon_load = document.createElement("img");
	this.icon_load.src = this.icon_load_src;
	//刷新箭头
	this.icon_arr_src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkFBOTNEMEY4RjFDMTFFNDg4Q0ZDRUIwMkUxODk2RkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkFBOTNEMTA4RjFDMTFFNDg4Q0ZDRUIwMkUxODk2RkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQUE5M0QwRDhGMUMxMUU0ODhDRkNFQjAyRTE4OTZGQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQUE5M0QwRThGMUMxMUU0ODhDRkNFQjAyRTE4OTZGQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PplcfWwAAAgqSURBVHja7F1rsI5V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";
	this.icon_arr = document.createElement("img");
	this.icon_arr.src = this.icon_arr_src;
	this.startd = this.d
	this.c1 = {
		x:this.svgWidth/2,
		y:this.svgWidth/2,
	};
	this.c2 = {
		x:this.svgWidth/2,

	};
	this.calc();
}
Drop.prototype.calc = function(){
	//根据按钮被拉开的距离计算上下两个圆的半径
	this.c1.r = this.svgWidth/4-this.d*this.svgWidth/10;
	this.c2.r = this.svgWidth/4-this.d*this.svgWidth/5;
	//根据按钮被拉开的距离计算下圆的位置
	this.c2.y = this.c1.y+this.d*this.svgWidth/2,
	this.p1 = {
		x:this.c1.x+this.c1.r,
		y:this.c1.y
	};
	this.p2 = {
		x:this.c2.x+this.c2.r,
		y:this.c2.y
	};
	this.p3 = {
		x:this.c2.x - this.c2.r,
		y:this.c2.y
	};
	this.p4 = {
		x:this.c1.x-this.c1.r,
		y:this.c1.y
	};
	this.cp1 = {
		x:this.p2.x,
		y:this.c1.y+Math.abs(this.c1.y-this.c2.y)/2
	};
	this.cp2 = {
		x:this.p3.x,
		y:this.c1.y+Math.abs(this.c1.y-this.c2.y)/2
	};
} 
Drop.prototype.draw = function(time){
	//如果传入当前时间戳，则按照时间戳计时否则用time累加计时
	if(time === undefined){
		this.time++;
		this.useTime = false;
	}else{
		this.time = time;
		this.useTime = true;
	}
	//做回弹动画，根据回弹用时计算出拉动距离d
	if(this.rebounding){
		if(this.d >0){
			//回弹时的时间函数,取自tween.js  Exponential.Out
			function timing(t, b, c, d) {
	            return (t==d) ? b + c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	        }
	        var toTime = this.useTime?1500:80;
	        this.d = timing(this.time-this.reboundTime,this.reboundD,-this.reboundD,toTime);
			this.d = this.d<0.01?0:this.d;
			this.startd = this.d;
		}else{
			this.rebounding = false;
		} 
	}
	//根据最新的d重新计算点位
	this.calc();

	//绘制上圆c1
	var c1 = this.svg.querySelector(".drop_c1");
	if(c1){
		c1.setAttribute("cx",this.c1.x);
		c1.setAttribute("cy",this.c1.y);
		c1.setAttribute("r",this.c1.r);
	}else{
		var c1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
		c1.setAttribute("class","drop_c1");
		c1.setAttribute("cx",this.c1.x);
		c1.setAttribute("cy",this.c1.y);
		c1.setAttribute("fill",this.color);
		c1.setAttribute("r",this.c1.r);
		this.svg.appendChild(c1);
	}
	//绘制下圆c2
	var c2 = this.svg.querySelector(".drop_c2");
	if(c2){
		c2.setAttribute("cx",this.c2.x);
		c2.setAttribute("cy",this.c2.y);
		c2.setAttribute("r",this.c2.r);
	}else{
		var c2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
		c2.setAttribute("class","drop_c2");
		c2.setAttribute("cx",this.c2.x);
		c2.setAttribute("cy",this.c2.y);
		c2.setAttribute("fill",this.color);
		c2.setAttribute("r",this.c2.r);
		this.svg.appendChild(c2);
	}
	//绘制曲线path
	var pathStr = "M"+this.p4.x+" "+this.p4.y+"L"+this.p1.x+" "+this.p1.y+"Q"+this.cp1.x+" "+this.cp1.y+" "+this.p2.x+" "+this.p2.y+"L"+this.p3.x+" "+this.p3.y+"Q"+this.cp2.x+" "+this.cp2.y+" "+this.p4.x+" "+this.p4.y+"Z";
	var drop_body = this.svg.querySelector(".drop_body");
	if(drop_body){
		drop_body.setAttribute("d",pathStr);
	}else{
		var drop_body = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		drop_body.setAttribute("class","drop_body");
		drop_body.setAttribute("d",pathStr);
		drop_body.setAttribute("fill",this.color);
		this.svg.appendChild(drop_body);
	}

	
	/*//绘制上圆中的图标
	this.ctx.save();
	//将坐标移至中心，并旋转
	this.ctx.translate(this.c1.x,this.c1.y);
	//确定图标样式
	var tmpIcon = this.overbounding?this.icon_load:this.icon_arr;
	//确定旋转角度
	var tmpDtime = this.useTime?(this.time-this.reboundTime)/10:(this.time-this.reboundTime);
	var tmpRotate = this.overbounding?tmpDtime*(Math.PI/180):this.d*360*Math.PI/180;
	this.ctx.rotate(tmpRotate);
	this.ctx.drawImage(tmpIcon,-this.c1.r/2,-this.c1.r/2,this.c1.r,this.c1.r);
	this.ctx.restore();*/
}
Drop.prototype.pull = function(d){
	if(this.overbounding) return false;
	this.rebounding = false;
	//记录拉动开始时d的值，用于实现拉动的累加
	if(this.startd == 0) this.startd = d;
	this.d = this.startd+d;
	//当d大于1时停止拉长
	if(this.d > 1){
		this.d = 1;
	}
	//当d大于阈值时，触发刷新
	if(this.startd+d > this.overboundD){
		this.overbound();
	}
}
Drop.prototype.rebound = function(){
	//回弹
	this.rebounding = true;
	this.reboundTime = this.time;
	this.reboundD = this.d;
}
Drop.prototype.overbound = function(){
	//刷新
	this.overbounding = true;
	this.rebound();
	var ev = document.createEvent('HTMLEvents');
	ev.initEvent('load', false, true);
	//在svg上发出load事件
	this.svg.dispatchEvent(ev);
}
Drop.prototype.finish = function(){
	//加载结束恢复正常
	this.overbounding = false;
} 