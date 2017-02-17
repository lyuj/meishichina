(function(subtitle) {
	var btns = subtitle.querySelectorAll('.zhenxuan-itemTitle a'),
		len = btns.length,
		activeItemGoods = subtitle.querySelectorAll('.activeItemGoods');

	for(var i = 0; i < len; i++) {
		btns[i].index = i;
		btns[i].onclick = function() {
			var _index = this.index;
			for(var j = 0; j < len; j++) {
				btns[j].classList.remove('activeSubTitle');
				activeItemGoods[j].style.display = "none";
			}
			activeItemGoods[_index].style.display = "block";
			this.classList.add('activeSubTitle');
		}
	}
})(document)