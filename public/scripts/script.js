var dp = function ()
{
	var object = {cell: [],menu: [],text: []},scr, imagesPath, params, fullImage, loader,P, Pn, Pt, lastMenuOver, pc, backgroundImage,preload, mibar, nx, ny, nw, nh, sw, sh;
	var appendHTML = function (p)
	{
		var i, object = document.createElement(p.tagName);
		for (i in p.attributes) object[i] = p.attributes[i];
		for (i in p.style) object.style[i] = p.style[i];
		if (p.parentNode) p.parentNode.appendChild(object);
		return object;
	};
	var clone = function (obj)
	{
		if (typeof(obj) != "object" || obj == null) return obj;
		var newObj = obj.constructor();
		for (var i in obj) newObj[i] = clone(obj[i]);
		return newObj;
	}
	var Text = function ()
	{
	this.div = appendHTML({parentNode: scr,tagName: "div",attributes:{className: "txt",onmouseover: function () { hideLastMenu(); }}});
	this.css = this.div.style;
	};
	Text.prototype =
	{
		startTypewriter: function (t)
		{
			this.k = 0;
			this.html = t.id ? (document.getElementById(t.id) ? document.getElementById(t.id).innerHTML : t.id + " undefined") : t.html + " ";
			this.html = this.html.replace(/\n/g, "");
			this.l    = this.html.length;
			this.css.visibility = "visible";
			this.css.left       = Math.round(t.x * sw) + "px";
			this.css.top        = Math.round(t.y * sh) + "px";
			this.css.width      = Math.round(t.w * sw) + "px";
			this.css.height     = Math.round(t.h * sh) + "px";
			this.div.innerHTML  = "";
			var self = this;
			this.interval = setInterval(function () { self.typeLoop();
                }, 32);},
		skipTag: function()
		{if (this.html.charAt(this.k) === "<")this.k += this.html.slice(this.k).indexOf(">") + 1;},
		typeLoop: function ()
		{
			if (this.k <= this.l)
			{
				this.skipTag();
				var n = this.html.slice(this.k).indexOf(" ");
				this.k += (n >= 0) ? n : 1;
				this.skipTag();
				this.div.innerHTML = this.html.slice(0, this.k++);
			}
			else 
			{
				clearInterval(this.interval);
				this.interval = false;
			}
		}
	};
	
	var Menu = function (n, p)
	{this.div = appendHTML({
			parentNode: scr,
			tagName: "div",
			attributes:
			{
				parent: this,
				className: "menu",
				onclick: function () { this.parent.click(); },
				onmouseover: function () { this.parent.over(); }
			},
			style: { visibility: "hidden" }
		});var bgc = appendHTML({
			parentNode: this.div,
			tagName: "div",
			attributes: { className: "menubackgroundcolor" },
			style: { position: "absolute" }
		});
		this.bgc = bgc.style;
		this.menuDiv = appendHTML({
			parentNode: this.div,
			tagName: "div",
			attributes:
			{
				parent: this,
				className: "menucontent",
				innerHTML: p.html,
				onclick: function () { this.parent.click(); },
				onmouseover: function () { this.parent.over(); }
			}
		});
		
		this.css = this.div.style;
		this.pageTarget = p.target;
		if (p.submenu)
		{
			this.submenuDiv = appendHTML({
				tagName: "div",
				parentNode: this.div,
				attributes: { className: "submenucontent" },
				style: { visibility: "hidden" }
			});
	
			if (p.submenu.title)
			{
				appendHTML({
					parentNode: this.submenuDiv,
					tagName: "div",
					attributes:
					{
						className: "submenutitle",
						innerHTML: p.submenu.title,
						onclick: function () {
							resetLoops();
							Pt = P.text;
							displayPage();
							return false;
						}
					}
				});
			}
			this.submenuContent = appendHTML({
				parentNode: this.submenuDiv,
				tagName: "div",
				attributes: { className: "submenu" }
			});
			this.menuitem = [];
			var i = 0, o;
			while (o = p.submenu.lines[i++])
			{
				this.menuitem.push(
					new Submenuitem(this, o)
				);
			}
		}
	};
	
	Menu.prototype =
	{
		over: function ()
		{
			if (this.pageTarget != Pn && lastMenuOver != this)
			{
				hideLastMenu();
				lastMenuOver = this;
				this.menuDiv.style.visibility = "visible";
				this.c = clone(params.flash);
				var self = this, k = 0;
				var overflash = function ()
				{
					if (k++ < 12)
					{
						self.fadeColor(0.2);
						setTimeout(overflash, 32);
					}
					else self.fadeColor(0);
				};
				overflash();
			}
		},
		click: function ()
		{
			var t = this.pageTarget;
			if (t !== Pn && params.page[t])
			{
				resetLoops();
				Pn = t;
				P = params.page[t];
				Pt = P.text;
				displayPage();
			}
		},
		move: function (i)
		{
			this.xt = P.menuTarget[i].x;
			this.yt = P.menuTarget[i].y;
			this.ct = clone(P.menuBackgroundColor);
			this.css.visibility = "visible";
			this.css.width      = this.bgc.width = Math.round(sw - 1) + "px";
			this.css.height     = this.bgc.height = Math.round(sh - 1) + "px";
			this.menuDiv.style.visibility = (this.pageTarget === Pn) ? "visible" : "hidden";
			if (this.submenuDiv) this.displayMenuitem(false);
			var self = this;
			this.interval = setInterval(
				function () { self.moving(); }
			, 32);
		},
		
		fadeColor: function (speed)
		{
			if (speed)
			{
				this.c.r += (this.ct.r - this.c.r) * speed;
				this.c.g += (this.ct.g - this.c.g) * speed;
				this.c.b += (this.ct.b - this.c.b) * speed;
			}
			else this.c = clone(this.ct);
			this.bgc.backgroundColor = "RGB("
				+ Math.round(this.c.r) + ","
				+ Math.round(this.c.g) + ","
				+ Math.round(this.c.b) + ")";
		},
		moving: function ()
		{
			var speed = 0;
			var dx = this.xt - this.x;
			var dy = this.yt - this.y;
			if (Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01)
			{
				this.x += dx * .2;
				this.y += dy * .2;
				speed = 0.1;
			}
			else
			{
				this.x = this.xt;
				this.y = this.yt;
				clearInterval(this.interval);
				if (this.submenuDiv && this.pageTarget === Pn)
				{
					this.menuDiv.style.visibility = "hidden";
					this.displayMenuitem(true);
				}
			}
			this.css.left = Math.round(this.x * sw) + "px";
			this.css.top  = Math.round(this.y * sh) + "px";
			this.fadeColor(speed);
		},
		displayMenuitem: function (visible)
		{
			var i = 0, o, menuitem = this.menuitem;
			while (o = menuitem[i++]) o.div.style.visibility = "hidden";
			this.submenuDiv.style.visibility = "hidden";
			if (visible)
			{
				i = 0;
				this.submenuEnabled = true;
				var self = this;
				var displayMenuitem = function ()
				{
					var o = menuitem[i++];
					if (o && self.submenuEnabled)
					{
						o.div.style.visibility = "visible";
						o.bar.style.background = "RGB(" +
							Math.round((256 - P.menuBackgroundColor.r) * 0.25) + "," + 
							Math.round((256 - P.menuBackgroundColor.g) * 0.25) + "," + 
							Math.round((256 - P.menuBackgroundColor.b) * 0.25) + ")";
						setTimeout(displayMenuitem, 64);
					}
				};
				setTimeout(displayMenuitem, 256);
				this.submenuDiv.style.visibility = "visible";
			} else this.submenuEnabled = false;
		}
	};
	var Submenuitem = function (parent, p)
	{
		this.parent = parent;
		this.text = p.text;
		this.k = 100;
		this.fullImage = p.fullImage;
		this.div = appendHTML({
			tagName: "div",
			parentNode: parent.submenuContent,
			attributes:
			{
				className: "submenuline",
				parent: this,
				onclick:     function () { this.parent.click(); },
				onmouseover: function () { this.parent.over(); }
			}
		});
		this.bar = appendHTML({
			tagName: "div",
			parentNode: this.div,
			style:
			{
				position: "absolute",
				width: "100%",
				height: "100%",
				left: "100%"
			}
		});
		this.txt = appendHTML({
			tagName: "div",
			parentNode: this.div,
			attributes:
			{
				innerHTML: p.html
			},
			style:
			{
				position: "absolute",
				marginLeft: "10px"
			}
		});
	};
	Submenuitem.prototype =
	{
		click: function ()
		{
			resetLoops();
			resetText();
			Pt = this.text;	
			if (this.fullImage)
			{
				fullImage = this.fullImage;
				displayPage();
			}
			else nextText();
		},
		over: function ()
		{
			mibar = this;
			var i = 0, o;
			while (o = this.parent.menuitem[i++]) if (o != this && !o.r) o.out();
			var self = this;
			this.r = false;
			var barLeft = function ()
			{
				if (self === mibar)
				{
					self.bar.style.left = Math.round(self.k *= .25) + "%";
					if (Math.round(self.k) > 0) setTimeout(barLeft, 32);
				}
			};
			barLeft();
		},
		out: function ()
		{
			if (this.k < 100)
			{
				if (this.k < 1) this.k = 1;
				var self = this;
				this.r = true;
				var barRight = function ()
				{
					self.bar.style.left = Math.round(self.k *= 2) + "%";
					if (Math.round(self.k) < 100) setTimeout(barRight, 32);
				};
				barRight();
			}
		}
	};
	var Cell = function (n, x, y)
	{
		this.n  = n;
		this.x0 = x;
		this.y0 = y;
		this.dir = [
			(x - 1 >= 0 ? n - ny : n), 
			(x + 1 < nx - 1 ? n + ny : n), 
			(y - 1 >= 0 ? n - 1 : n), 
			(y + 1 < ny - 1 ? n + 1 : n)
		];
		this.opc = appendHTML({
			parentNode: scr,
			tagName: "div",
			attributes:
			{
				onmouseover: function () { hideLastMenu(); }
			},
			style:
			{
				position: "absolute",
				filter: "alpha(opacity=100)",
				opacity: 1,
				background: "#000",
				left:   Math.round(x * sw) + "px",
				top:    Math.round(y * sh) + "px",
				width:  Math.round(sw - 1) + "px",
				height: Math.round(sh - 1) + "px"
			}
		});
		this.fla = appendHTML({
			parentNode: scr,
			tagName: "div",
			style:
			{
				position: "absolute",
				background: "#fff",
				visibility: "hidden",
				left:   Math.round(x * sw) + "px",
				top:    Math.round(y * sh) + "px",
				width:  Math.round(sw - 1) + "px",
				height: Math.round(sh - 1) + "px"
			}
		});
		if (x == 0 && y > 0)
		{
			this.hor = appendHTML({
				parentNode: scr,
				tagName: "div",
				attributes: { className: "grid" },
				style:
				{
					top: Math.round(y * sh - 1) + "px",
					width: nw + "px",
					height: "1px"
				}
			});
		}
		if (y == 0 && x > 0)
		{
			this.ver = appendHTML({
				parentNode: scr,
				tagName: "div",
				attributes: { className: "grid" },
				style:
				{
					left: Math.round(x * sw - 1) + "px",
					width: "1px",
					height: nh + "px"
				}
			});
		}
	};

	Cell.prototype =
	{ 
		opacity: function (alpha)
		{
			if (this.opc.filters && this.opc.filters.alpha)
			{
				Cell.prototype.opacity = function (alpha)
				{
					this.opc.filters.alpha.opacity = Math.round(alpha);
				};
				this.opacity(alpha);
			}
			else
			{
				Cell.prototype.opacity = function (alpha)
				{
					this.opc.style.opacity = alpha * 0.01;
				};
				this.opacity(alpha);
			}
		},
	displayCell: function ()
		{
			this.displayed = true;
			this.fla.style.visibility = "visible";
			var self = this;
			this.interval = setInterval(
				function () { self.displayCellLoop(); }
			, 32);
		},
	displayCellLoop: function ()
		{
			var o;
			if (this.alpha !== this.alphaTarget)
			{
				this.alpha += this.step;
				this.opacity(this.alpha);
				if (this.alpha === this.nextCell)
				{
					var i = 0,
						s = false;
					while (i++ < 8)
					{
						o = object.cell[
							this.dir[Math.floor(Math.random() * 4)]
						];
						if (!o.displayed)
						{
							o.displayCell();
							s = true;
							break;
						}
					}
					if (!s)
					{
						o = startingCell();
						if (o !== false) o.displayCell();
						else this.startNext = true;
					}
				}
				if (this.alpha === this.endFlash) this.fla.style.visibility = "hidden";
				if (this.startNext && this.alpha === this.nextStep)
				{
					if (this.txt && (this.id || this.html)) object.text[pc].startTypewriter(this);
					if (P.text[pc] && !fullImage) nextText();
				}
			}
			else
			{
				clearInterval(this.interval);
				this.interval = false;
				this.fla.style.visibility = "hidden";
			}
		}
	};
	var startingCell = function ()
	{
		var o, i = 0, avail = [];
		while (o = object.cell[i++]) if (!o.displayed) avail.push(o);
		if (!avail.length) return false; 
		else
		{
			return avail[
				Math.floor(Math.random() * avail.length)
			];
		}
	};
	var initCell = function (p, fx, txt)
	{
		var i = 0, o;
		while (o = object.cell[i++])
		{
			if (o.x0 >= p.x && o.x0 <= (p.x + p.w - 1) && 
				o.y0 >= p.y && o.y0 <= (p.y + p.h - 1))
			{
				o.displayed = false;
				o.startNext = false;
				o.id = false;
				o.txt = txt;
				for (var j in p)  o[j] = p[j];
				for (var k in fx) o[k] = fx[k];
			}
		}
	};
	var resetText = function ()
	{
		pc = 0;
		var i = 0, o;
		while (o = object.text[i++])
		{
			o.div.innerHTML = "";
			o.css.visibility = "hidden";
		}
		i = 0;
		while (o = object.cell[i++])
		{
			o.t = true;
			o.opacity(0);
		}
	};
	var nextText = function ()
	{
		var o = Pt[pc++];
		if (o)
		{
			initCell(o, params.fadeout, true);
			o = startingCell();
			o.displayed = true;
			o.displayCell();
		}
	};
	var hideLastMenu = function ()
	{
		if (lastMenuOver)
		{
			lastMenuOver.menuDiv.style.visibility = "hidden";
			lastMenuOver = false;
		}
	};
	var resetLoops = function ()
	{
		if (preload) {
			clearInterval(preload);
			preload = false;
		}
		var i, j, k, o;
		for (j in object)
		{
			k = object[j];
			i = 0;
			while (o = k[i++])
			{
				if (o.interval)
				{
					clearInterval(o.interval);
					o.interval = false;
					if (o.fla) o.fla.style.visibility = "hidden";
				}
			}
		}
	};
var displayPage = function ()
	{
		var i, j, m, o;
		lastMenuOver = false;
		resetText();
		if (!fullImage)
		{
			i = 0;
			while (o = object.menu[i]) o.move(i++);
			var img = P.backgroundImage;
		}
		else
		{
			var img = fullImage;
			i = 0;
			while (o = object.menu[i++]) o.css.left = "-1000px";
		}
		var timeout    = params.timeout;
		var preloadImg = new Image();
		preloadImg.src = imagesPath + img;
		var preloading = function ()
		{
			if ((preloadImg.complete && preloadImg.width) || timeout === 0)
			{
				loader.innerHTML = "";
				loader.style.visibility = "hidden";
				var i = 0, o;
				while (o = object.cell[i++])
				{
					o.opacity(100);
					if (fullImage)
					{
						o.opc.style.cursor = "pointer";
						o.opc.onclick = function ()
						{
							resetLoops();
							fullImage = false;
							Pt = P.text;
							displayPage();
						}
					}
					else
					{
						o.opc.style.cursor = "default";
						o.opc.onclick = null;
					}
				
				}
				var css = backgroundImage.style;
				if (timeout > 0)
				{
					backgroundImage.src = imagesPath + img;
					css.left = Math.round((nw - preloadImg.width) * 0.5) + "px";
					css.top  = Math.round((nh - preloadImg.height) * 0.5) + "px";
					css.visibility = "visible";
				}
				else css.visibility = "hidden";
				setTimeout(function() {
					initCell(
						{
							x: 0,
							y: 0,
							w: nx,
							h: ny
						},
						params.fadein, false
					);
					o = startingCell();
					o.displayed = true;
					o.displayCell();
				}, 64);
			}
			else
			{
				timeout--;
				if (timeout < params.timeout - 3)
				{
					loader.style.visibility = "visible";
					loader.innerHTML = (params.timeout - timeout - 3);
				}
				preload = setTimeout(preloading, 64);
			}
		};
		preloading();
	};
	var resize = function ()
	{
		nw = scr.offsetWidth;
		nh = scr.offsetHeight;
		sw = Math.round(nw / nx);
		sh = Math.round(nh / ny);
	};
	var init = function (p)
	{
		var k, i, j, o;
		params = p;
		scr = document.getElementById(p.containerID);
		nx = p.gridX;
		ny = p.gridY;
		imagesPath = p.imagesPath;
		Pn = 0;
		P  = p.page[Pn];
		Pt = P.text;
		resize();
		backgroundImage = appendHTML({
			parentNode: scr,
			tagName: "img",
			style:
			{
				position: "absolute",
				visibility: "hidden"
			}
		});
		loader = appendHTML({
			parentNode: scr,
			tagName: "div",
			attributes: { id: "loader" },
			style: { visibility: "hidden" }
		});
		k = 0;
		for (i = 0; i < nx; i++)
		{
			for (j = 0; j < ny; j++)
			{
				object.cell.push(
					new Cell(k++, i, j)
				);
			}
		}
		for (i = 0; i < 6; i++)
		{
			object.text.push(
				new Text()
			);
		}
		i = 0;
		while (o = p.menu[i])
		{
			object.menu.push(
				new Menu(i++, o)
			);
		}
		setTimeout(
			function () { displayPage(); }
		, 250);
	};
	return {
		init : init 
	}
}();