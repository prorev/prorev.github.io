---
id: 821
title: Adding a new Quick tag in WordPress
date: 2012-10-31 14:38:23
author: taimane
layout: post
permalink: /quick-tags/
published: true
categories:
   -
tags:
   -
---
There is a way to modify <code>quicktags-toolbar</code> very simple in WordPress.

<a href="https://programming-review.com/wp-content/uploads/2012/10/Selection_2731.png"><img class="alignnone size-large wp-image-823" title="Selection_273" src="https://programming-review.com/wp-content/uploads/2012/10/Selection_2731-1024x62.png" alt="" width="640" height="38" /></a>

The "Quick Tags" are JQuery driven and here is the code responsible for them (from /wp-includes/quicktags.dev.js) :
<pre>
ensure backward compatibility
edButtons[10] = new qt.TagButton('strong','b','&lt;strong&gt;','&lt;/strong&gt;','b');
edButtons[20] = new qt.TagButton('em','i','&lt;em&gt;','&lt;/em&gt;','i'),
edButtons[30] = new qt.LinkButton(), // special case
edButtons[40] = new qt.TagButton('block','b-quote','&lt;blockquote&gt;','&lt;/blockquote&gt;','q'),
edButtons[50] = new qt.TagButton('del','del','&lt;del datetime=&quot;' + _datetime + '&quot;&gt;','&lt;/del&gt;','d'),
edButtons[60] = new qt.TagButton('ins','ins','&lt;ins datetime=&quot;' + _datetime + '&quot;&gt;','&lt;/ins&gt;','s'),
edButtons[70] = new qt.ImgButton(), // special case
edButtons[80] = new qt.TagButton('ul','ul','&lt;ul&gt;','&lt;/ul&gt;','u'),
edButtons[90] = new qt.TagButton('ol','ol','&lt;ol&gt;','&lt;/ol&gt;','o'),
edButtons[100] = new qt.TagButton('li','li','&lt;li&gt;','&lt;/li&gt;','l'),
edButtons[110] = new qt.TagButton('code','code','&lt;code&gt;','&lt;/code&gt;','c'),
edButtons[120] = new qt.TagButton('more','more','&lt;!--more--&gt;','','t'),
edButtons[130] = new qt.SpellButton(),
edButtons[140] = new qt.CloseButton()
</pre>
        


We can add the "pre" button similar as the "code" button, but we do not like to edit this file directly, because it is bad practice to edit the WordPress core files.

Our solution is to reassign quicktags to load from our custom <a href="http://brettterpstra.com/edit-your-wordpress-quicktags-the-right-way/">file</a>:

<pre class="prettyprint">
if (is_admin()) {
  add_action('init', pr_load_admin_scripts);
}

function pr_load_admin_scripts()
{
if ( is_admin() ) {
wp_deregister_script('quicktags');
wp_register_script('quicktags', get_bloginfo('template_url').'/js/quicktags.js', false, '', true);
}
}

add_filter( 'tiny_mce_version', 'my_refresh_mce');

function my_refresh_mce($ver) {
  $ver += 3;
  return $ver;
}
</pre>

My quicktags.js looks like this and is stored in theme /js folder.

<pre class="prettyprint">
var QTags, edButtons = [], edCanvas,

/**
 * Back-compat
 *
 * Define all former global functions so plugins that hack quicktags.js directly don't cause fatal errors.
 */
edAddTag = function(){},
edCheckOpenTags = function(){},
edCloseAllTags = function(){},
edInsertImage = function(){},
edInsertLink = function(){},
edInsertTag = function(){},
edLink = function(){},
edQuickLink = function(){},
edRemoveTag = function(){},
edShowButton = function(){},
edShowLinks = function(){},
edSpell = function(){},
edToolbar = function(){};

/**
 * Initialize new instance of the Quicktags editor
 */
function quicktags(settings) {
	return new QTags(settings);
}

/**
 * Inserts content at the caret in the active editor (textarea)
 *
 * Added for back compatibility
 * @see QTags.insertContent()
 */
function edInsertContent(bah, txt) {
	return QTags.insertContent(txt);
}

/**
 * Adds a button to all instances of the editor
 *
 * Added for back compatibility, use QTags.addButton() as it gives more flexibility like type of button, button placement, etc.
 * @see QTags.addButton()
 */
function edButton(id, display, tagStart, tagEnd, access, open) {
	return QTags.addButton( id, display, tagStart, tagEnd, access, '', -1 );
}

(function(){
	// private stuff is prefixed with an underscore
	var _domReady = function(func) {
		var t, i,  DOMContentLoaded;

		if ( typeof jQuery != 'undefined' ) {
			jQuery(document).ready(func);
		} else {
			t = _domReady;
			t.funcs = [];

			t.ready = function() {
				if ( ! t.isReady ) {
					t.isReady = true;
					for ( i = 0; i &lt; t.funcs.length; i++ ) {
						t.funcs[i]();
					}
				}
			};

			if ( t.isReady ) {
				func();
			} else {
				t.funcs.push(func);
			}

			if ( ! t.eventAttached ) {
				if ( document.addEventListener ) {
					DOMContentLoaded = function(){document.removeEventListener('DOMContentLoaded', DOMContentLoaded, false);t.ready();};
					document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
					window.addEventListener('load', t.ready, false);
				} else if ( document.attachEvent ) {
					DOMContentLoaded = function(){if (document.readyState === 'complete'){ document.detachEvent('onreadystatechange', DOMContentLoaded);t.ready();}};
					document.attachEvent('onreadystatechange', DOMContentLoaded);
					window.attachEvent('onload', t.ready);

					(function(){
						try {
							document.documentElement.doScroll(&quot;left&quot;);
						} catch(e) {
							setTimeout(arguments.callee, 50);
							return;
						}

						t.ready();
					})();
				}

				t.eventAttached = true;
			}
		}
	},

	_datetime = (function() {
		var now = new Date(), zeroise;

		zeroise = function(number) {
			var str = number.toString();

			if ( str.length &lt; 2 )
				str = &quot;0&quot; + str;

			return str;
		}

		return now.getUTCFullYear() + '-' +
			zeroise( now.getUTCMonth() + 1 ) + '-' +
			zeroise( now.getUTCDate() ) + 'T' +
			zeroise( now.getUTCHours() ) + ':' +
			zeroise( now.getUTCMinutes() ) + ':' +
			zeroise( now.getUTCSeconds() ) +
			'+00:00';
	})(),
	qt;

	qt = QTags = function(settings) {
		if ( typeof(settings) == 'string' )
			settings = {id: settings};
		else if ( typeof(settings) != 'object' )
			return false;

		var t = this,
			id = settings.id,
			canvas = document.getElementById(id),
			name = 'qt_' + id,
			tb, onclick, toolbar_id;

		if ( !id || !canvas )
			return false;

		t.name = name;
		t.id = id;
		t.canvas = canvas;
		t.settings = settings;

		if ( id == 'content' &amp;&amp; typeof(adminpage) == 'string' &amp;&amp; ( adminpage == 'post-new-php' || adminpage == 'post-php' ) ) {
			// back compat hack :-(
			edCanvas = canvas;
			toolbar_id = 'ed_toolbar';
		} else {
			toolbar_id = name + '_toolbar';
		}

		tb = document.createElement('div');
		tb.id = toolbar_id;
		tb.className = 'quicktags-toolbar';

		canvas.parentNode.insertBefore(tb, canvas);
		t.toolbar = tb;

		// listen for click events
		onclick = function(e) {
			e = e || window.event;
			var target = e.target || e.srcElement, i;

			// as long as it has the class ed_button, execute the callback
			if ( / ed_button /.test(' ' + target.className + ' ') ) {
				// we have to reassign canvas here
				t.canvas = canvas = document.getElementById(id);
				i = target.id.replace(name + '_', '');

				if ( t.theButtons[i] )
					t.theButtons[i].callback.call(t.theButtons[i], target, canvas, t);
			}
		};

		if ( tb.addEventListener ) {
			tb.addEventListener('click', onclick, false);
		} else if ( tb.attachEvent ) {
			tb.attachEvent('onclick', onclick);
		}

		t.getButton = function(id) {
			return t.theButtons[id];
		};

		t.getButtonElement = function(id) {
			return document.getElementById(name + '_' + id);
		};

		qt.instances[id] = t;

		if ( !qt.instances[0] ) {
			qt.instances[0] = qt.instances[id];
			_domReady( function(){ qt._buttonsInit(); } );
		}
	};

	qt.instances = {};

	qt.getInstance = function(id) {
		return qt.instances[id];
	};

	qt._buttonsInit = function() {
		var t = this, canvas, name, settings, theButtons, html, inst, ed, id, i, use,
			defaults = ',strong,em,link,block,del,ins,img,ul,ol,li,code,more,spell,close,';

		for ( inst in t.instances ) {
			if ( inst == 0 )
				continue;

			ed = t.instances[inst];
			canvas = ed.canvas;
			name = ed.name;
			settings = ed.settings;
			html = '';
			theButtons = {};
			use = '';

			// set buttons
			if ( settings.buttons )
				use = ','+settings.buttons+',';

			for ( i in edButtons ) {
				if ( !edButtons[i] )
					continue;

				id = edButtons[i].id;
				if ( use &amp;&amp; defaults.indexOf(','+id+',') != -1 &amp;&amp; use.indexOf(','+id+',') == -1 )
					continue;

				if ( !edButtons[i].instance || edButtons[i].instance == inst ) {
					theButtons[id] = edButtons[i];

					if ( edButtons[i].html )
						html += edButtons[i].html(name + '_');
				}
			}

			if ( use &amp;&amp; use.indexOf(',fullscreen,') != -1 ) {
				theButtons['fullscreen'] = new qt.FullscreenButton();
				html += theButtons['fullscreen'].html(name + '_');
			}


			if ( 'rtl' == document.getElementsByTagName('html')[0].dir ) {
				theButtons['textdirection'] = new qt.TextDirectionButton();
				html += theButtons['textdirection'].html(name + '_');
			}

			ed.toolbar.innerHTML = html;
			ed.theButtons = theButtons;
		}
		t.buttonsInitDone = true;
	};

	/**
	 * Main API function for adding a button to Quicktags
	 *
	 * Adds qt.Button or qt.TagButton depending on the args. The first three args are always required.
	 * To be able to add button(s) to Quicktags, your script should be enqueued as dependent
	 * on &quot;quicktags&quot; and outputted in the footer. If you are echoing JS directly from PHP,
	 * use add_action( 'admin_print_footer_scripts', 'output_my_js', 100 ) or add_action( 'wp_footer', 'output_my_js', 100 )
	 *
	 * Minimum required to add a button that calls an external function:
	 *     QTags.addButton( 'my_id', 'my button', my_callback );
	 *     function my_callback() { alert('yeah!'); }
	 *
	 * Minimum required to add a button that inserts a tag:
	 *     QTags.addButton( 'my_id', 'my button', '&lt;span&gt;', '&lt;/span&gt;' );
	 *     QTags.addButton( 'my_id2', 'my button', '&lt;br /&gt;' );
	 *
	 * @param id string required Button HTML ID
	 * @param display string required Button's value=&quot;...&quot;
	 * @param arg1 string || function required Either a starting tag to be inserted like &quot;&lt;span&gt;&quot; or a callback that is executed when the button is clicked.
	 * @param arg2 string optional Ending tag like &quot;&lt;/span&gt;&quot;
	 * @param access_key string optional Access key for the button.
	 * @param title string optional Button's title=&quot;...&quot;
	 * @param priority int optional Number representing the desired position of the button in the toolbar. 1 - 9 = first, 11 - 19 = second, 21 - 29 = third, etc.
	 * @param instance string optional Limit the button to a specifric instance of Quicktags, add to all instances if not present.
	 * @return mixed null or the button object that is needed for back-compat.
	 */
	qt.addButton = function( id, display, arg1, arg2, access_key, title, priority, instance ) {
		var btn;

		if ( !id || !display )
			return;

		priority = priority || 0;
		arg2 = arg2 || '';

		if ( typeof(arg1) === 'function' ) {
			btn = new qt.Button(id, display, access_key, title, instance);
			btn.callback = arg1;
		} else if ( typeof(arg1) === 'string' ) {
			btn = new qt.TagButton(id, display, arg1, arg2, access_key, title, instance);
		} else {
			return;
		}

		if ( priority == -1 ) // back-compat
			return btn;

		if ( priority &gt; 0 ) {
			while ( typeof(edButtons[priority]) != 'undefined' ) {
				priority++
			}

			edButtons[priority] = btn;
		} else {
			edButtons[edButtons.length] = btn;
		}

		if ( this.buttonsInitDone )
			this._buttonsInit(); // add the button HTML to all instances toolbars if addButton() was called too late
	};

	qt.insertContent = function(content) {
		var sel, startPos, endPos, scrollTop, text, canvas = document.getElementById(wpActiveEditor);

		if ( !canvas )
			return false;

		if ( document.selection ) { //IE
			canvas.focus();
			sel = document.selection.createRange();
			sel.text = content;
			canvas.focus();
		} else if ( canvas.selectionStart || canvas.selectionStart == '0' ) { // FF, WebKit, Opera
			text = canvas.value;
			startPos = canvas.selectionStart;
			endPos = canvas.selectionEnd;
			scrollTop = canvas.scrollTop;

			canvas.value = text.substring(0, startPos) + content + text.substring(endPos, text.length);

			canvas.focus();
			canvas.selectionStart = startPos + content.length;
			canvas.selectionEnd = startPos + content.length;
			canvas.scrollTop = scrollTop;
		} else {
			canvas.value += content;
			canvas.focus();
		}
		return true;
	};

	// a plain, dumb button
	qt.Button = function(id, display, access, title, instance) {
		var t = this;
		t.id = id;
		t.display = display;
		t.access = access;
		t.title = title || '';
		t.instance = instance || '';
	};
	qt.Button.prototype.html = function(idPrefix) {
		var access = this.access ? ' accesskey=&quot;' + this.access + '&quot;' : '';
		return '&lt;input type=&quot;button&quot; id=&quot;' + idPrefix + this.id + '&quot;' + access + ' class=&quot;ed_button&quot; title=&quot;' + this.title + '&quot; value=&quot;' + this.display + '&quot; /&gt;';
	};
	qt.Button.prototype.callback = function(){};

	// a button that inserts HTML tag
	qt.TagButton = function(id, display, tagStart, tagEnd, access, title, instance) {
		var t = this;
		qt.Button.call(t, id, display, access, title, instance);
		t.tagStart = tagStart;
		t.tagEnd = tagEnd;
	};
	qt.TagButton.prototype = new qt.Button();
	qt.TagButton.prototype.openTag = function(e, ed) {
		var t = this;

		if ( ! ed.openTags ) {
			ed.openTags = [];
		}
		if ( t.tagEnd ) {
			ed.openTags.push(t.id);
			e.value = '/' + e.value;
		}
	};
	qt.TagButton.prototype.closeTag = function(e, ed) {
		var t = this, i = t.isOpen(ed);

		if ( i !== false ) {
			ed.openTags.splice(i, 1);
		}

		e.value = t.display;
	};
	// whether a tag is open or not. Returns false if not open, or current open depth of the tag
	qt.TagButton.prototype.isOpen = function (ed) {
		var t = this, i = 0, ret = false;
		if ( ed.openTags ) {
			while ( ret === false &amp;&amp; i &lt; ed.openTags.length ) {
				ret = ed.openTags[i] == t.id ? i : false;
				i ++;
			}
		} else {
			ret = false;
		}
		return ret;
	};
	qt.TagButton.prototype.callback = function(element, canvas, ed) {
		var t = this, startPos, endPos, cursorPos, scrollTop, v = canvas.value, l, r, i, sel, endTag = v ? t.tagEnd : '';

		if ( document.selection ) { // IE
			canvas.focus();
			sel = document.selection.createRange();
			if ( sel.text.length &gt; 0 ) {
				if ( !t.tagEnd )
					sel.text = sel.text + t.tagStart;
				else
					sel.text = t.tagStart + sel.text + endTag;
			} else {
				if ( !t.tagEnd ) {
					sel.text = t.tagStart;
				} else if ( t.isOpen(ed) === false ) {
					sel.text = t.tagStart;
					t.openTag(element, ed);
				} else {
					sel.text = endTag;
					t.closeTag(element, ed);
				}
			}
			canvas.focus();
		} else if ( canvas.selectionStart || canvas.selectionStart == '0' ) { // FF, WebKit, Opera
			startPos = canvas.selectionStart;
			endPos = canvas.selectionEnd;
			cursorPos = endPos;
			scrollTop = canvas.scrollTop;
			l = v.substring(0, startPos); // left of the selection
			r = v.substring(endPos, v.length); // right of the selection
			i = v.substring(startPos, endPos); // inside the selection
			if ( startPos != endPos ) {
				if ( !t.tagEnd ) {
					canvas.value = l + i + t.tagStart + r; // insert self closing tags after the selection
					cursorPos += t.tagStart.length;
				} else {
					canvas.value = l + t.tagStart + i + endTag + r;
					cursorPos += t.tagStart.length + endTag.length;
				}
			} else {
				if ( !t.tagEnd ) {
					canvas.value = l + t.tagStart + r;
					cursorPos = startPos + t.tagStart.length;
				} else if ( t.isOpen(ed) === false ) {
					canvas.value = l + t.tagStart + r;
					t.openTag(element, ed);
					cursorPos = startPos + t.tagStart.length;
				} else {
					canvas.value = l + endTag + r;
					cursorPos = startPos + endTag.length;
					t.closeTag(element, ed);
				}
			}

			canvas.focus();
			canvas.selectionStart = cursorPos;
			canvas.selectionEnd = cursorPos;
			canvas.scrollTop = scrollTop;
		} else { // other browsers?
			if ( !endTag ) {
				canvas.value += t.tagStart;
			} else if ( t.isOpen(ed) !== false ) {
				canvas.value += t.tagStart;
				t.openTag(element, ed);
			} else {
				canvas.value += endTag;
				t.closeTag(element, ed);
			}
			canvas.focus();
		}
	};

	// the spell button
	qt.SpellButton = function() {
		qt.Button.call(this, 'spell', &quot;Spell&quot;, '', &quot;dictionaryLookup&quot;);
	};
	qt.SpellButton.prototype = new qt.Button();
	qt.SpellButton.prototype.callback = function(element, canvas, ed) {
		var word = '', sel, startPos, endPos;

		if ( document.selection ) {
			canvas.focus();
			sel = document.selection.createRange();
			if ( sel.text.length &gt; 0 ) {
				word = sel.text;
			}
		} else if ( canvas.selectionStart || canvas.selectionStart == '0' ) {
			startPos = canvas.selectionStart;
			endPos = canvas.selectionEnd;
			if ( startPos != endPos ) {
				word = canvas.value.substring(startPos, endPos);
			}
		}

		if ( word === '' ) {
			word = prompt(&quot;Word Lookup&quot;, '');
		}

		if ( word !== null &amp;&amp; /^\w[\w ]*$/.test(word)) {
			window.open('http://www.answers.com/' + encodeURIComponent(word));
		}
	};

	// the close tags button
	qt.CloseButton = function() {
		qt.Button.call(this, 'close', &quot;closeTags&quot;, '', &quot;closeAllOpenTags&quot;);
	};

	qt.CloseButton.prototype = new qt.Button();

	qt._close = function(e, c, ed) {
		var button, element, tbo = ed.openTags;

		if ( tbo ) {
			while ( tbo.length &gt; 0 ) {
				button = ed.getButton(tbo[tbo.length - 1]);
				element = document.getElementById(ed.name + '_' + button.id);

				if ( e )
					button.callback.call(button, element, c, ed);
				else
					button.closeTag(element, ed);
			}
		}
	};

	qt.CloseButton.prototype.callback = qt._close;

	qt.closeAllTags = function(editor_id) {
		var ed = this.getInstance(editor_id);
		qt._close('', ed.canvas, ed);
	};

	// the link button
	qt.LinkButton = function() {
		qt.TagButton.call(this, 'link', 'link', '', '&lt;/a&gt;', 'a');
	};
	qt.LinkButton.prototype = new qt.TagButton();
	qt.LinkButton.prototype.callback = function(e, c, ed, defaultValue) {
		var URL, t = this;

		if ( typeof(wpLink) != 'undefined' ) {
			wpLink.open();
			return;
		}

		if ( ! defaultValue )
			defaultValue = 'http://';

		if ( t.isOpen(ed) === false ) {
			URL = prompt(&quot;enterURL&quot;, defaultValue);
			if ( URL ) {
				t.tagStart = '&lt;a href=&quot;' + URL + '&quot;&gt;';
				qt.TagButton.prototype.callback.call(t, e, c, ed);
			}
		} else {
			qt.TagButton.prototype.callback.call(t, e, c, ed);
		}
	};

	// the img button
	qt.ImgButton = function() {
		qt.TagButton.call(this, 'img', 'img', '', '', 'm');
	};
	qt.ImgButton.prototype = new qt.TagButton();
	qt.ImgButton.prototype.callback = function(e, c, ed, defaultValue) {
		if ( ! defaultValue ) {
			defaultValue = 'http://';
		}
		var src = prompt(&quot;enterImageURL&quot;, defaultValue), alt;
		if ( src ) {
			alt = prompt(&quot;enterImageDescription&quot;, '');
			this.tagStart = '&lt;img src=&quot;' + src + '&quot; alt=&quot;' + alt + '&quot; /&gt;';
			qt.TagButton.prototype.callback.call(this, e, c, ed);
		}
	};

	qt.FullscreenButton = function() {
		qt.Button.call(this, 'fullscreen', &quot;fullscreen&quot;, 'f', &quot;toggleFullscreen&quot;);
	};
	qt.FullscreenButton.prototype = new qt.Button();
	qt.FullscreenButton.prototype.callback = function(e, c) {
		if ( !c.id || typeof(fullscreen) == 'undefined' )
			return;

		fullscreen.on();
	};

	qt.TextDirectionButton = function() {
		qt.Button.call(this, 'textdirection', &quot;textdirection&quot;, '', &quot;toggleTextdirection&quot;)
	};
	qt.TextDirectionButton.prototype = new qt.Button();
	qt.TextDirectionButton.prototype.callback = function(e, c) {
		var isRTL = ( 'rtl' == document.getElementsByTagName('html')[0].dir ),
			currentDirection = c.style.direction;

		if ( ! currentDirection )
			currentDirection = ( isRTL ) ? 'rtl' : 'ltr';

		c.style.direction = ( 'rtl' == currentDirection ) ? 'ltr' : 'rtl';
		c.focus();
	}

	// ensure backward compatibility
	edButtons[10] = new qt.TagButton('strong','b','&lt;strong&gt;','&lt;/strong&gt;','b');
	edButtons[20] = new qt.TagButton('em','i','&lt;em&gt;','&lt;/em&gt;','i'),
	edButtons[30] = new qt.LinkButton(), // special case
	edButtons[40] = new qt.TagButton('block','b-quote','\n\n&lt;blockquote&gt;','&lt;/blockquote&gt;\n\n','q'),
	edButtons[50] = new qt.TagButton('del','del','&lt;del datetime=&quot;' + _datetime + '&quot;&gt;','&lt;/del&gt;','d'),
	edButtons[60] = new qt.TagButton('ins','ins','&lt;ins datetime=&quot;' + _datetime + '&quot;&gt;','&lt;/ins&gt;','s'),
	edButtons[70] = new qt.ImgButton(), // special case
	edButtons[80] = new qt.TagButton('ul','ul','&lt;ul&gt;\n','&lt;/ul&gt;\n\n','u'),
	edButtons[90] = new qt.TagButton('ol','ol','&lt;ol&gt;\n','&lt;/ol&gt;\n\n','o'),
	edButtons[100] = new qt.TagButton('li','li','\t&lt;li&gt;','&lt;/li&gt;\n','l'),
	edButtons[110] = new qt.TagButton('code','code','&lt;code&gt;','&lt;/code&gt;','c'),
	edButtons[120] = new qt.TagButton('more','more','&lt;!--more--&gt;','','t'),
	edButtons[125] = new qt.TagButton('pre','pre','&lt;pre&gt;','&lt;/pre&gt;','p'),
	edButtons[130] = new qt.SpellButton(),
	edButtons[140] = new qt.CloseButton()

})();</pre>

Finally, after we add the "pre" tag the final result is like this:

<img src="https://programming-review.com/wp-content/uploads/2012/10/Selection_274.png" alt="" title="Selection_274" width="795" height="79" class="alignnone size-full wp-image-831" />

Thanks  

