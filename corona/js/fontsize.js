/* --------------------------------------------------------------------------------------
 * fontsize.js
 * version 1.01
 * Required common.js ver1.20 later
 * modified version @20100928
-------------------------------------------------------------------------------------- */
var fontSettings = {
	defaultSize: 'M',
	imgPath: 'img/common/',
	parentTagName: 'ul',
	childTagName: 'li',
	childTagClassName: ['sizeM', 'sizeL'],
	prefixTag: '<img src="img/common/fontsize.jpg" alt="TEXT SIZE" width="70" height="24" />',
	sizeInfo: [
		{
			name: 'M',
			percent: 86,
			alt: 'Standard',
			imgOffSrc: 'fontsize_s.gif',
			imgOnSrc:  'fontsize_s_on.gif',
			width: 24,
			height: 24
		},
		{
			name: 'L',
			percent: 100,
			alt: 'Large',
			imgOffSrc: 'fontsize_l.gif',
			imgOnSrc:  'fontsize_l_on.gif',
			width: 24,
			height: 24
		}
	]
};

/* start */
function fncFontSize(id){
	new FontSize(
		id,
		fontSettings
	);
}

var FontSize = function(id) {this.initialize.apply(this, arguments)}
FontSize.prototype = {
	cookieName: 'fontsize',
	cookieExpireDay: 7,

	initialize: function (id, settings) {
		this.id = id;
		this.targets = [];
		this.settings = settings;
		this.preloadObject();
	},

	/* preload images */
	preloadObject: function () {
		var targetsImgs = new Array();
		var targetsOnImgs = new Array();
		for (i = 0; i < this.settings.sizeInfo.length; i++){
			var sizeInfo = this.settings.sizeInfo[i];
			var img = new Image();
			img.src = this.settings.imgPath + sizeInfo.imgOffSrc;
			targetsImgs.push(img);
			var imgOn = new Image();
			imgOn.src = this.settings.imgPath + sizeInfo.imgOnSrc;
			targetsOnImgs.push(imgOn);
		}
		this.setObject();
	},

	/* set tags */
	setObject: function () {
		/* eat a cookie */
		this.setSize = comGetCookie(this.cookieName);
		if (!this.setSize) {
			this.setSize = this.settings.defaultSize;
		}
		/* set tags */
		var tags = '<div id="' + this.id + '">';
		if (this.settings.prefixTag) {
			tags += this.settings.prefixTag;
		}
		if (this.settings.parentTagName) {
			tags += '<' + this.settings.parentTagName + '>';
		}
		for (i = 0; i < this.settings.sizeInfo.length; i++) {
			var sizeInfo = this.settings.sizeInfo[i];
			if (this.settings.childTagName) {
				tags += '<' + this.settings.childTagName + ' class="' + this.settings.childTagClassName[i] + '">';
			}
			tags +=
				'<img id="' + this.id + sizeInfo.name +
				'" src="' + this.settings.imgPath + (this.setSize == sizeInfo.name ? sizeInfo.imgOnSrc : sizeInfo.imgOffSrc) +
				'" alt="' + sizeInfo.alt +
				'" width="' + sizeInfo.width +
				'" height="' + sizeInfo.height +
				'" />';
			if (this.settings.childTagName) {
				tags += '</' + this.settings.childTagName + '>';
			}
		}
		if (this.settings.parentTagName) {
			tags += '</' + this.settings.parentTagName + '>';
		}
		tags += '</div>';
		window.document.write(tags);

		for (i = 0; i < this.settings.sizeInfo.length; i++) {
			var sizeInfo = this.settings.sizeInfo[i];
			var anchor = document.createElement('A');
			/* set event to size-button */
			var elem = document.getElementById(this.id + sizeInfo.name);
			elem.size = anchor.size = sizeInfo.name;
			elem.style.cursor = 'pointer';
			anchor.href = '#' + elem.id;
			elem.parentNode.appendChild(anchor);
			anchor.appendChild(elem);
			this.targets.push(elem);
			this.addEvent(anchor);
		};
		this.setFontSize(this.setSize);
	},

	/* add mouseEvent */
	addEvent: function (elem) {
		elem.onclick = (function(_this, _elem) {
			return function() {
				_this.onClick(_elem);
				return false;
			};
		})(this, elem);
	},

	onClick: function (elem) {
		if (!elem) return;
		this.setFontSize(elem.size);
	},

	setFontSize: function (name) {
		var percent = 0;
		for (i = 0; i < this.settings.sizeInfo.length; i++) {
			var sizeInfo = this.settings.sizeInfo[i];
			if (sizeInfo.name == name) {
				percent = sizeInfo.percent;
				this.targets[i].src = this.settings.imgPath + sizeInfo.imgOnSrc;
			} else {
				this.targets[i].src = this.settings.imgPath + sizeInfo.imgOffSrc;
			}
		}
		if (percent != 0) {
			document.body.style.fontSize = percent + '%';
			/* bake a cookie */
			comSetCookie(this.cookieName, name, this.cookieExpireDay, null, '/');
		}
	}
};