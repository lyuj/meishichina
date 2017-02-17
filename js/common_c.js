(function(d) {
	var la = d.querySelectorAll(".laa"),
		laa = d.querySelectorAll(".la"),
		sub = d.querySelectorAll(".sub"),
		len = la.length;

	for(var i = 0; i < len; i++) {
		la[i].index = i;
		la[i].onmouseover = function() {
			for(var j = 0; j < len; j++) {
				laa[j].classList.remove("laaa");
				sub[j].style.display = "none";
			}
			laa[this.index].classList.add("laaa");
			sub[this.index].style.display = "block";
		}
		la[i].onmouseout = function() {
			for(var j = 0; j < len; j++) {
				laa[j].classList.remove("laaa");
				sub[j].style.display = "none";
			}
		}
	}
})(document);