'use strict'
$(function(){
	//app下载鼠标弹出
	$('#load').hover(
		function(){
			$('.app').show();
		},
		function(){
			$('.app').hide();
		}
	);
	$('.app').hover(
		function(){
			$(this).show();
		},
		function(){
			$(this).hide();
		}
	);
    //购物车鼠标弹出
    $('.shopping').hover(
		function(){
			$('.shoppingCar').show();
		},
		function(){
			$('.shoppingCar').hide();
		}
	);
	$('.shoppingCar').hover(
		function(){
			$(this).show();
		},
		function(){
			$(this).hide();
		}
	);
	//登录框单击循环弹出
	function loginPop(){
	var i=0;
	$('#login').click(function(){
		if(i%2==0){
			$('.rg').eq(1).css('color','#FFFFFF');
			$('.directtext1').eq(8).css('fontSize','20px');	
			$('.loginbox').show();
		}else{
			$('.rg').eq(1).css('color','#DCDCDC');
			$('.directtext1').eq(8).css('fontSize','15px');
			$('.loginbox').hide();
		}
	i++;
	});
    }
    loginPop();
	//记住密码单击变色
	function rememberPassword(){
	var i=0;
	$('.glyphicon-ok-circle').click(function(){
		if(i%2==0){
			$(this).css('color','#0000FF');
		}else{
			$(this).css('color','#778899');
		}
	i++;
	});
    }
    rememberPassword();
	//用户登陆框、密码框获取焦点时，空格内容清空
	$('#input-userName').focus(function(){
		$(this).prop('placeholder','');
	});
	$('#input-pwd').focus(function(){
		$(this).prop('placeholder','');
	});
	//失去焦点时重新获得
	$('#input-userName').blur(function(){
    	$(this).prop('placeholder','非表单，只是样式');
	});
	$('#input-pwd').blur(function(){
		$(this).prop('placeholder','非表单，只是样式');
	});
	//搜索按钮
	$('#searchbtn').hover(
		function(){
			$(this).css('background-color','#337ab7').css('color','#FFFFFF');
		},
		function(){
			$(this).css('background-color','#ffffff').css('color','#4a4a4a');
		}
	);
	//全部-下拉菜单
	$('#showtype').hover(
		function(){
			$('.search-down').show();
		},
		function(){
			$('.search-down').hide();
		}
	);
	$('.search-down').hover(
		function(){
			$(this).show();
		},
		function(){
			$(this).hide();
		}
	);
	//当搜索框获取焦点以及失去焦点时
	$('#searchinput').focus(function(){
		$(this).prop('placeholder','');
		$('#searchbtn').css('background-color','#337ab7').css('color','#FFFFFF');
	});
	$('#searchinput').blur(function(){
		$(this).prop('placeholder','导航栏只有注册登录可点击，其它的只是样式');
		$('#searchbtn').css('background-color','#ffffff').css('color','#4a4a4a');
	});

	//搜索框下面的轮播图
	function circleShow(){
	var i=0;
	var timer;
	//页面加载完成后，出第一张图
	$('.circle-box').eq(0).show().siblings().hide(); 
	//左边方向按钮变色
	$('.left').hover(
		function(){
			$('.glyphicon-menu-left').css('color','#FFFFFF');
		},
		function(){
			$('.glyphicon-menu-left').css('color','#d8d8d7');
		}
	);
	//右边方向变色
	$('.right').hover(
		function(){
			$('.glyphicon-menu-right').css('color','#FFFFFF');
		},
		function(){
			$('.glyphicon-menu-right').css('color','#d8d8d7');
		}
	);

	//数字下标圆点轮播	
	showTime();
	$('.sib').hover(
		function(){
    		i=$(this).index();
    		picshow();
    		clearInterval(timer);
		},
		function(){
    		showTime();
		}
	);
	//左单击
	$('.left').click(function(){
		clearInterval(timer);
		if(i==0){
			i=5;
		}
		i--;
		picshow();
    	showTime();
	});
	//右单击
	$('.right').click(function(){
		clearInterval(timer);
		if(i==4){
			i=-1;
		}
		i++;
		picshow();
    	showTime();
	});

	//单张展示、下标展示
	function picshow(){
		$('.circle-box').eq(i).fadeIn(300).siblings().fadeOut(300);
    	$('.sib').eq(i).addClass('bg').siblings().removeClass('bg');
	}
	//循环轮播
	function showTime(){
		timer=setInterval(function(){
		i++;
		if(i==5){
        	i=0;
		}
    	picshow();
	},4000);
	}
}
circleShow();
  //注册弹框
  $('#register').click(function(){
  	layer.open({          //使用了layer插件
  		type:1,
  		title:"新会员注册",
  		area: ["500px","400px"],
  		content:$('.registerbox'),
  	});
  });
  //注册表单验证
  
  //用户名验证
  $('input[name=reg-userName]').blur(function(){
  	if(!$(this).val().match(/^[a-z0-9_-]{3,10}$/)){
  		$(this).data('s',0); //用于最后统计，如果false，返回0
  		$(this).next().show();
  	}else{
  		$(this).data('s',1);//用于最后统计，如果true，返回1
  		$(this).next().hide();
  	}
 });
  //有效手机号验证
  $('input[name=reg-tele]').blur(function(){
  	if(!$(this).val().match(/^[0-9]{11}$/)){
  		$(this).data('s',0);
        $(this).next().show();
  	}else{
  		$(this).data('s',1);
  		$(this).next().hide();
  	}
 });
  //密码格式验证
  $('input[name=reg-pwd]').blur(function(){
  	if(!$(this).val().match(/^[a-z0-9_-]{6,20}$/)){
  		$(this).data('s',0);
  		$(this).next().show();
  	}else{
  		$(this).data('s',1);
  		$(this).next().hide();
  	}
  });
  //两次输入密码是否一致
  $('input[name=re-reg-pwd]').blur(function(){
    var pwd=$('input[name=reg-pwd]')
	if($(this).val()!=pwd.val()){
		$(this).data('s',0);
		$(this).next().show();
	}else{
		$(this).data('s',1);
		$(this).next().hide();
	}
  });
  //验证是否全部正确
 $('#registerform').submit(function(){
    $('.register-info').blur(); //当表单提交时，给所有input执行blur()方法，验证是否全部正确
    var tot=0;
    $('.register-info').each(function(){
        tot+=$(this).data('s');
    });
    if (tot!=4){                   //四个文本框填写正确，则总数加起来为4，否则注册失败
    	layer.msg('注册失败',{title:'提示',time:3000,icon:5});
        return false;
    }else{
    	alert('注册成功');
    }
 });

 //回到顶部
 $('.back-top').hover(
 	function(){
 		$(this).css('background-color','#1E90FF');     //回到顶部样式
 		$('.glyphicon-chevron-up').css('color','#FFFFFF');
 	},
 	function(){
 		$(this).css('background-color','#D3D3D3');
 		$('.glyphicon-chevron-up').css('color','#1E90FF');
 	}
 ); 
 $(window).scroll(function(){
 	if(navigator.userAgent.match(/chrome/i)){   //区分是否谷歌浏览器
 		var st=document.body.scrollTop;
 	if(st>10){                                 //当向下滚动超过10px时
 		$('.back-top').show();                //回到顶部出现
 	}else{
 		$('.back-top').hide();
 	}
 	$('.back-top').click(function(){        //点击回到顶部
 		document.body.scrollTop=0;
    });
 }else{
 	var st=document.documentElement.scrollTop;
 	if(st>10){
 		$('.back-top').show();
 	}else{
 		$('.back-top').hide();
 	}
 	$('.back-top').click(function(){
 		document.documentElement.scrollTop=0;
    });
 }
 	
 });

})

