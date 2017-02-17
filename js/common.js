(function(d) {
	var barbox = d.getElementsByClassName("bar-box-d"),
		baradd = d.getElementsByClassName("bar-add-d"),
		barbox1 = d.getElementsByClassName("bar-box-dis"),
		baradd1 = d.getElementsByClassName("bar-add-dis");

	barbox[0].onmouseover = function() {
		barbox1[0].style.display = "block";
	}
	barbox[0].onmouseout = function() {
		barbox1[0].style.display = "none";
	}

	baradd[0].onmouseover = function() {
		baradd1[0].style.display = "block";
	}
	baradd[0].onmouseout = function() {
		baradd1[0].style.display = "none";
	}
})(document);
$(function() {
	$(".gototop").gototop({
		position: 0,
		duration: 1250,
		visibleAt: 280,
		classname: "isvisible",
	});
	$(".ui_title_wrap a").click(function() {
		var index = $(this).index();
		$(this).addClass('on').siblings("a").removeClass('on');
		$(".pin_list ul").eq(index - 1).show().siblings().hide();
	});
});