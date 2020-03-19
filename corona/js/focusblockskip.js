(function($){
	$.fn.focusBlockSkip = function(options){
		var defacss = {
			'position': 'absolute',
			'left': '0px',
			'top': '-500px',
			'width': '1px',
			'height': '1px',
			'overflow': 'hidden'
		};

		var setcss = {
			'position': 'static',
			'width': '100%',
			'background':  '#000',
			'display': 'block',
			'text-align': 'center',
			'color': '#fff',
			'height': 'auto'
		};
		var setting = $.extend(setcss,options);

		var tabFocus = function(){
			$(this).css(setcss);
		};

		var tabBlur = function(){
			$(this).css(defacss);
		};

		this.each(function(){
			$(this).find("a").css(defacss);
			$(this).find("a").focus(tabFocus);
			$(this).find("a").click(tabBlur);
			$(this).find("a").blur(tabBlur);
		});
	return this;
	};
})(jQuery);