// 滑動下滑
$(function () {
	$('#gotab01').click(function() {
		$("#tab2").hide();
		$("#tab1").show();
		  $('html, body').animate({ scrollTop: $("#tab1 .part").offset().top}, 600);
	  });
	  $('#gotab02').click(function() {
		$("#tab1").hide();
		$("#tab2").show();
		  $('html, body').animate({ scrollTop: $("#tab2 .part").offset().top}, 600);
	
	  });


});


 //tab
 $(document).ready(function() {
    $(".myTabs").each(function() {

        var $myTabs = $(this);

        $myTabs.find(".tab_content").hide().first().show();
        $myTabs.find(".tab-L").addClass("active").show();

        $myTabs.find("ul.tabs li:first").click(function() {
            var $this = $(this);

            $this.find(".tab-L").addClass("active");
            $(".tab-R").removeClass("active2");
            $myTabs.find(".tab_content").hide();

            var activeTab = $this.find("a").attr("href");
            $(activeTab).fadeIn();

            return false;
        });
        $myTabs.find("ul.tabs li:last").click(function() {
            var $this = $(this);

            $this.find(".tab-R").addClass("active2");
            $(".tab-L").removeClass("active");
            $myTabs.find(".tab_content").hide();

            var activeTab = $this.find("a").attr("href");
            $(activeTab).fadeIn();

            return false;
        });
    });
});


// pop-window

//numbers plus
$('.add').click(function() {
    if ($(this).prev().val() < 1000) {
        $(this).prev().val(+$(this).prev().val() + 1);
    }
});
$('.sub').click(function() {
    if ($(this).next().val() > 0) {
        if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
    }
});

 
 //pop-tab
 $(document).ready(function() {
    $(".myTabs").each(function() {

        var $myTabs = $(this);

        $myTabs.find(".tab_content").hide().first().show();
        $myTabs.find("ul.tabs-2 li:first").addClass("active-2").show();

        $myTabs.find("ul.tabs-2 li").click(function() {
            var $this = $(this);

            $this.addClass("active-2").siblings().removeClass("active-2");
            $myTabs.find(".tab_content").hide(0);

            var activeTab = $this.find("a").attr("href");
            $(activeTab).fadeIn(0);

            return false;
        });
    });
});




//補簽跳窗
$(function () {


	//跳窗

	$(".day-btn-2").click(function(){
		$(".popbgc").fadeIn(200);
    });


	$(".ybtn").click(function() {
		$('.popbgc').fadeOut(200);
	});


});



//window-pop


$(function () {


	//跳窗

	$("#open1").click(function(){
		$(".popbgc-3").fadeIn(200);

    });

	$("#open2").click(function(){
		$(".popbgc-1").fadeIn(200);
    });

	$("#open3").click(function(){
		$(".popbgc-2").fadeIn(200);
    });

	$(".btn-s-re").click(function(){
		$(".popbgc-6").fadeIn(200);
    });

//抽抽樂按鈕
	$(".rotate-btn-1").click(function(){
		$(".popbgc-4").fadeIn(200);
    });

	$(".rotate-btn-2").click(function(){
		$(".popbgc-5").fadeIn(200);
    });




	$(".x, .x-1 ,.x-2, .x-3 , .x-4 , .x-5").click(function() {
		$('.popbgc,.popbgc-1,.popbgc-2,.popbgc-3,.popbgc-4,.popbgc-5,.popbgc-6').fadeOut(200);
	});







});

