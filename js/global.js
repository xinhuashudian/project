//--------------------//
//---FUNCTION START---//
//--------------------//
$(function() {

/************************辅助功能 START***************************/
	$(".j-last-on2").each(function(index, el) {
		$(this).find("li").last().addClass("last");
		if($(this).find("li").length%2==0){
			$(this).find("li").last().prev().addClass("last");
		}
	});
	for(i=2;i<6;i++){
		$('.j-child-on'+i).each(function() {
			var chird=$(this).children();
			for(var j=0; j<chird.length; j++){
				if((j+1)%i==0){
					chird.eq(j).addClass('on');
				}
			}
		});
	}
	$('.j-height-un').each(function(index, element) {
        var li = $(this).find('.un');
		var maxH = 0;
		for(i=0;i<li.length;i++){
			if(maxH<li.eq(i).height()){
				var maxH = li.eq(i).height();
				}
				
			}
		for(i=0;i<li.length;i++){
			li.eq(i).height(maxH);
			}
    });
	/*获取li的个数，给与附加样式，并以数字循环输出*/
	$('.j-li-num').each(function(i,e){
		var liNum=$(this).children('li');
		var li_leng=liNum.length;
		for(var j=0; j<li_leng; j++){
			var li_class=liNum.eq(j).attr("class");
			if(li_class==null){li_class=""}
			j2=j+1;
			var li_str="li-"+j2+" ";
			var li_newclass=li_str + li_class;
			liNum.eq(j).attr("class",li_newclass);
			li_newclass="";
		}
	});
	$('.j-i-cnnum').each(function(i,e){
		var liNum=$(this).children('li');
		var li_leng=liNum.length;
		for(var j=0; j<li_leng; j++){
			j2=j+1;
			liNum.find('i').eq(j).html(j2);
		}
	});
	$('.j-dd-num').each(function(i,e){
		var liNum=$(this).children('dd');
		var li_leng=liNum.length;
		for(var j=0; j<li_leng; j++){
			var li_class=liNum.eq(j).attr("class");
			if(li_class==null){li_class=""}
			j2=j+1;
			for(i=0;i<li_leng/5;i++){
				if(j2>5){j2=j2-5}//永远在1~6之间
			}
			var li_str="dd-"+j2+" ";
			var li_newclass=li_str + li_class;
			liNum.eq(j).attr("class",li_newclass);
			li_newclass="";
		}
	});
	$('.j-child-num').each(function(i,e){
			var liNum=$(this).children();
			var li_leng=liNum.length;
			for(var j=0; j<li_leng; j++){
				var li_class=liNum.eq(j).attr("class");
				if(li_class==null){li_class=""}
				j2=j+1;
				var li_str="child-"+j2+" ";
				var li_newclass=li_str + li_class;
				liNum.eq(j).attr("class",li_newclass);
				li_newclass="";
			}
		});
	/*用于单行分类的对齐 START*/
	$('.j-child-neat').each(function(index, element) {
			var ulwidth = $(this).width();
			var liNum = $(this).children();
			var liLeng=liNum.length;
			for(i=0;i<liLeng;i++){
				liNum.eq(i).width(ulwidth/liLeng);
				}
		});
	/*用于单行分类的对齐 END*/
	for(k=2;k<12;k++){/*用于分类的对齐*/
		$('.j-child-row'+k).each(function(index, element) {
				var fa = $(this).width();
				$(this).children().width(fa/k);
			});
		}
	$('.j-child-hover').children().hover(function(){
		$(this).addClass('hover');
		}).mouseleave(function(){
		$(this).removeClass('hover');
	});
	$('.j-li-hover li').hover(function(){
		$(this).addClass('hover');
		}).mouseleave(function(){
		$(this).removeClass('hover');
	});
	$('.j-child-hover').each(function(index, element) {
		$(this).children().hover(function(){
			$(this).addClass('hover');
			}).mouseleave(function(){
			$(this).removeClass('hover');
		});
    });
	$('.j-li-hover2 li').hover(function(){
		$(this).siblings().removeClass('hover');
		$(this).addClass('hover');
		}).mouseleave(function(){
		$(this).siblings().removeClass('hover');
	});
	$('.j-dd-hover dd').hover(function(){
		$(this).addClass('hover');
		}).mouseleave(function(){
		$(this).removeClass('hover');
	});
	$('.j-h4-hover h4').hover(function(){
		$(this).addClass('hover');
		}).mouseleave(function(){
		$(this).removeClass('hover');
	});
	$('.j-first-addspan').each(function(index, element) {
        var str = $(this).html();
		var fir = str.substring(0,1);
		var strleng = str.length;
		var other = str.substring(1,strleng);
		
		var newstr = '<span>'+ fir +'</span>'+other;
		$(this).html(newstr);
    });
	
	
	
	$('.j-sameheight').each(function(index, element) {
		var theH = 0;
		for(i=0;i<$(this).children().length;i++){
       		var maxH = $(this).children().eq(i).height();
			if(maxH>theH){theH=maxH;}
		}
		$(this).children().css({'min-height':theH});
    });
	
	$('.j-photo img').hover(function() {
			$(this).stop().fadeTo("slow",0.6);
		},function(){
			$(this).stop().fadeTo("slow",1);
		});
	$('.j-thumbphoto .box').hover(function() {
			$(this).stop().fadeTo("slow",0.6);
		},function(){
			$(this).stop().fadeTo("slow",1);
		});
	
	$('.j-hideai a').hover(function(){
			$(this).addClass('hover').find('i').show();
		},function(){
			$(this).removeClass('hover').find('i').hide();
		});
	$('.j-hidebar').hover(function(){
			$(this).addClass('hover').find('.hidebar').show();
		},function(){
			$(this).removeClass('hover').find('.hidebar').hide();
		});
	$('.j-hidebar-slide').hover(function(){
			$(this).addClass('hover').find('.hidebar').stop(true,false).slideDown(200);
		},function(){
			$(this).removeClass('hover').find('.hidebar').stop(true,false).slideUp(200);
		});
	$('.j-hidebar-fade').hover(function(){
			$(this).addClass('hover').find('.hidebar').stop(true,true).fadeIn(300);
		},function(){
			$(this).removeClass('hover').find('.hidebar').stop(true,false).fadeOut(300);
		});
	$('.j-showbtn').hover(function(){
		$(this).find('.focus-btn').show();
		},function(){
			$(this).find('.focus-btn').hide();
		})
	$('.j-firstA').each(function(){
		$(this).children('a:first').addClass('first');
		})
	$('.j-firstLi').each(function(){
		$(this).children('li:first').addClass('first');
		})
	$('.j-lastLi').each(function(){
		$(this).children('li:last').addClass('last');
		})
	

/************************辅助功能 END***************************/

/************************自定义功能 START***************************/

$(".m-nav li,.j-leftmenu li").each(function(index,element){
	if($(element).children("ul").children("li").length<1){
		$(element).children("ul").remove()
	}else{
		$(element).addClass('onpre');
		}
})

/***************************导航 START***********************************/

$('.fir-ul .fir-li').each(function(index, element) {
		if($(this).find('li').length>0){$(this).addClass('j-li');}
        $(this).hover(function(){
			$(this).addClass('hover').find('i').show().siblings().removeClass('hover').find('i').hide(); //当前主导航添加样式：current,其他的删除样式：current
		},function(){
			$(this).removeClass('hover').find('i').hide(); //当前主导航添加样式：current,其他的删除样式：current
		});
    });
$('.m-nav li').each(function(index, element) {
        $(this).hover(function(){
			$(this).addClass('hover').siblings().removeClass('hover'); //当前主导航添加样式：current,其他的删除样式：current
		},function(){
			$(this).removeClass('hover'); //当前主导航添加样式：current,其他的删除样式：current
		});
    });
/*横向导航 START*/
	
	$('.nav-x .sec-ul').each(function(index, element) {
		var ulwidth = 0;
		var uli = $(this).find('li');
		for(i=0;i<uli.length;i++){
			if(uli.length==1){
				ulwidth = 70;
				ulleft = $(this).parent('.fir-li').width()/2-ulwidth/2;
				$(this).width(ulwidth);
				$(this).css({'left':ulleft});
				}
			uliwidth = uli.eq(i).width();
			ulwidth = ulwidth + uliwidth + 10;
			
			ulleft = $(this).parent('.fir-li').width()/2-ulwidth/2;
			$(this).width(ulwidth);
			$(this).css({'left':ulleft});
			}
			if(!$(this).parents('.fir-li').hasClass('current')){
				$(this).css({'opacity':1}).hide();
			}else{
				$(this).parents('.top-box').find('.nav-sbg').stop(true,true).show();
				}
		});
	
	$('.nav-x li.fir-li').each(function(index, element) {
        $(this).hover(function(){
			if($(this).hasClass('j-li')){
				$(this).siblings().find('.sec-ul').hide();
				$(this).find('.sec-ul').stop(true,true).slideDown(100,'swing'); //当前子导航显示
				$(this).parents('.top-box').find('.nav-sbg').stop(true,true).slideDown(100,'swing');
			}else{
				$(this).siblings().find('.sec-ul').hide();
				$(this).parents('.top-box').find('.nav-sbg').stop(true,true).slideUp(200,'swing')
				}
		},function(){
			if(!$(this).hasClass('current')){
				$(this).find('.sec-ul').stop(true,false).slideUp(200,'swing'); //当前主导航添加样式：current,其他的删除样式：current
				if($(this).parents('.m-nav').find('.current').hasClass('j-li')){
					$(this).parents('.top-box').find('.nav-sbg').stop(true,true).slideDown(100,'swing');
					$(this).parents('.m-nav').find('.current').find('.sec-ul').stop(true,false).show();
				}else{
					$(this).parents('.top-box').find('.nav-sbg').stop(true,true).slideUp(200,'swing')
					}
			}
		});
    });
	
/**横向导航 END**/

/**纵向导航 START**/
	$('.nav-y li.j-li').each(function(index, element) {
        $(this).hover(function(){
			$(this).siblings().find('.sec-ul').hide();
			$(this).find('.sec-ul').stop(true,true).slideDown(100,'swing'); //当前子导航显示
			//$(this).parents('.nav-box').find('.subnav-bg').show();
		},function(){
			$(this).find('.sec-ul').stop(true,true).slideUp(200,'swing'); //当前主导航添加样式：current,其他的删除样式：current
			//$(this).parents('.nav-box').find('.subnav-bg').hide();
		});
    });
	$('.nav-y li').each(function(index, element) {
        $(this).hover(function(){
			$(this).addClass('hover').siblings().removeClass('hover'); //当前主导航添加样式：current,其他的删除样式：current
		},function(){
			$(this).removeClass('hover'); //当前主导航添加样式：current,其他的删除样式：current
		});
    });
/**纵向导航 END**/
	var liNum=$('.all-nav .nav-1').children();
	var li_leng=liNum.length;
	liNum.eq(0).find('.nav-2').css('top',0);

	$('.all-nav').hover(function(){
			$(this).find('.nav-1').show();
			$(this).find('.open-link').addClass('link-hover');
		},function(){
			if($(this).hasClass('show-nav')){}else{
				$(this).find('.nav-1').hide();
				$(this).find('.open-link').removeClass('link-hover');
			}
		});
	$('.all-nav li').hover(function(){
			$(this).find('.nav-2').show();
		},function(){
			$(this).find('.nav-2').hide();
		});
		
/*************************导航 END*************************/
/**leftmenu START**/

	$(".j-leftmenu").each(function(index, element) {
		var menuli = $(this).find("li");
        $(this).children("li").addClass("fir-li").children("ul").addClass("fir-ul").children("li").addClass("sec-li").children("ul").addClass("sec-ul").children("li").addClass("thr-li");
		$(this).children("li").children("a").addClass("fir-a").siblings("ul").children("li").children("a").addClass("sec-a").siblings("ul").children("li").children("a").addClass("thr-a");
		menuli.each(function(index, element) {
            if($(element).children("ul").length>0){
				$(element).children("a").addClass("menu-a");
				$(element).children("ul").addClass("menu-ul").hide();
				}
			if($(element).children("a").hasClass("open")||$(element).children("a").hasClass("current")){
				$(element).children("ul").show();
				}
        });
	});
	$(".j-leftmenu-show .sec-ul").show();
	$(".j-leftmenu-hide").each(function(index, element) {
		var menuli = $(this).find("li");
		if(!menuli.hasClass("thr-li")){
			$(this).find(".menu-a").hover(function(){
				if(!$(this).hasClass("current")){
					$(this).addClass("current").next(".menu-ul").stop(true,true).slideDown(300);
					$(this).parent().siblings().find("ul").stop(true,true).slideUp(300);
					$(this).parent().siblings().children(".menu-a").removeClass("current");
				}
			});
		}else{
			menuli.each(function(index, element) {
				if($(element).children("ul").length>0){
					var a_class = $(element).children("a").attr("class");
					$(element).children("a").attr("class","");
					$(element).children("a").wrap("<p class='menu-p " +  a_class  + "'></p>");
					if(!$(element).children("p").hasClass("open")){
						$(element).children("p").addClass("close");
						}
					$(element).children("ul").addClass("menu-ul");
					}
				});
			$(this).find(".menu-p").click(function(){
				if(!$(this).hasClass("open")){
					$(this).addClass("open").removeClass("close").next(".menu-ul").stop(true,false).slideToggle(300);
					}else{
						$(this).addClass("close").removeClass("open").next(".menu-ul").stop(true,false).slideToggle(300);
						}
				});
			}
    	});
	$('.j-li-hover li').hover(function(){
		$(this).addClass('hover');
		}).mouseleave(function(){
		$(this).removeClass('hover');
	});

/**leftmenu END**/

/**TAB START**/

	
	$('.j-tab').each(function(index, element) {
		$(this).find('.tab-tt dt:first').addClass('current');
		$(this).find('.tab-cn dd').hide();
		$(this).find('.tab-cn dd:first').addClass('current').show();
		$(this).find('.tab-tt dt').hover(function(){
			var ind=$(this).index();
			$(this).addClass('current').siblings().removeClass('current');
			$(element).find('.tab-cn dd').eq(ind).show().siblings().hide();
		});
	});
	
	$('.j-tab2').each(function(index, element) {
		
		$(this).find('.tab-cn dd').hide();
		$(this).find('.tab-tt dt').hover(function(){
			var ind=$(this).index();
			$(this).addClass('current').siblings().removeClass('current');
			$(element).find('.tab-cn dd').eq(ind).show().siblings().hide();
		});
	});
		
	$('.j-tab-fade').each(function(index, element) {
		$(this).find('.tab-tt dt:first').addClass('current');
		$(this).find('.tab-cn dd').css({'opacity':0}).css({'z-index':1});
		$(this).find('.tab-cn dd:first').addClass('current').animate({'opacity':1}).css({'z-index':5});
		$(this).find('.tab-tt dt').hover(function(){
			var ind=$(this).index();
			$(this).addClass('current').siblings().removeClass('current');
			$(element).find('.tab-cn dd').eq(ind).stop(true,false).animate({'opacity':1}).addClass('current').css({'z-index':5}).siblings().stop(true,false).animate({'opacity':0}).removeClass('current').css({'z-index':1});
		});
	});
	
/**TAB END**/


/**返回顶部 START**/
	$('.j-backtop').click(function () {
			$('body,html').stop(true,false).animate({
				scrollTop: 0
			},{easing:"easeOutQuint",duration:1000});
			return false;
		});
/**返回顶部 END**/

	$(function(){
		clientDiv('.win-client','right',300);
		})
	
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 400) {
			$('.float-win').fadeIn();
		} else {
			$('.float-win').fadeOut();
		}
	});
	

	$('.j-down-bar li').each(function(index, element) {
		var barH = $(this).find('.bar').height();
        $(this).hover(function(){
			$(this).find('.bar').stop().animate({'top':0},500,'easeOutQuint')
			},function(){
				$(this).find('.bar').stop().animate({'top':0-barH-20},500,'easeOutQuint')
				})
    	});

	//锚点滚动
	$(function(){
		$('a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			&& location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body').stop(true,false).animate({scrollTop: targetOffset-30}, 1000,'easeOutQuint');
					return false;
				}
			}
		});
	}); 

/************************自定义功能 END***************************/

/************************调用函数部分 START***************************/
//clientDiv('.float-win','right',100);

$(".j-newscroll-5").carouFredSel({
		responsive: true,
		width: '100%',
		align: 'left',
		items: {
			visible: {
				max:4,
				min:4
			},
			height: "variable"
		},
		scroll	: {
			items			: 1,
			duration		: 1000,
			timeoutDuration	: 4000
		},
		auto:{
			play:true,
			pauseOnHover:true,
			timeoutDuration:3000
			}
	});

$(".j-scroll-4").carouFredSel({
		responsive: true,
		width: '100%',
		align: 'left',
		items: {
			visible: {
				max:4,
				min:4
			},
			height: "variable"
		},
		scroll	: {
			items			: 1,
			duration		: 1000,
			timeoutDuration	: 4000
		},
		auto:{
			play:true,
			pauseOnHover:true,
			timeoutDuration:3000
			},
		next: ".j-next",
		prev: ".j-prev"
	});


	
/************************调用函数部分 END***************************/
});
//--------------------//
//----FUNCTION END----//
//--------------------//

/************************封装函数 START***************************/

//浮动窗口
function clientDiv(obj,clientPosition,num){
	
	if(navigator.userAgent.indexOf('MSIE 6.0')>0){
		$(obj).css({'position':'absolute'});
		var hh=jQuery(window).height();
		$(window).scroll(function(){
			if(num<0){
				var scrollHeight=$(this).scrollTop()+hh+num;
				}else{
				var scrollHeight=$(this).scrollTop()+num;
			}
			$(obj).css({'position':'absolute','top':scrollHeight});
		});
	}
}





/************************封装函数 END***************************/