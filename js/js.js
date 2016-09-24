/*window.onload=function(){
	var smallbox=document.getElementById('smallbox'),
		mark=document.getElementById('mark'),
		big=document.getElementById('big');

	mark.onmousemove=function(e){
		var event=e || window.event;
		var left=event.clientX-smallbox.offsetLeft-(mark.offsetWidth)/2;
		var top=event.clientY-smallbox.offsetTop-(mark.offsetHeight)/2;
		var maxW=smallbox.offsetWidth-mark.offsetWidth;
		var maxH=smallbox.offsetHeight-mark.offsetHeight;
		if(left<0)left=0;
		if(top<0)top=0;
		if(left>maxW){left=maxW};
		if(top>maxH){top=maxH};
		mark.style.left=left+"px";
		mark.style.top=top+"px";

		big.style.left=-left*(big.offsetWidth/smallbox.offsetWidth)+'px';
        big.style.top=-top*(big.offsetHeight/smallbox.offsetHeight)+'px';
	}
}*/

window.onload=function(){
	function Big(){
		this.smallbox=document.getElementById('smallbox'),
		this.mark=document.getElementById('mark'),
		this.big=document.getElementById('big');
	}
	Big.prototype.Move=function(){
		var that=this;
		this.mark.onmousemove=function(e){
			var event=e || window.event;
			var left=event.clientX-that.smallbox.offsetLeft-(that.mark.offsetWidth)/2;
			var top=event.clientY-that.smallbox.offsetTop-(that.mark.offsetHeight)/2;
			var maxW=that.smallbox.offsetWidth-that.mark.offsetWidth;
			var maxH=that.smallbox.offsetHeight-that.mark.offsetHeight;
			if(left<0)left=0;
			if(top<0)top=0;
			if(left>maxW){left=maxW};
			if(top>maxH){top=maxH};
			that.mark.style.left=left+"px";
			that.mark.style.top=top+"px";

			that.big.style.left=-left*(that.big.offsetWidth/that.smallbox.offsetWidth)+'px';
	        that.big.style.top=-top*(that.big.offsetHeight/that.smallbox.offsetHeight)+'px';
		}

	}
	var play=new Big();
		play.Move();
}