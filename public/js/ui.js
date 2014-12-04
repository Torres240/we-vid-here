/**
 * WeVidHere.ui
 * @namespace ui
 * @memberof WeVidHere
 * NOTE: this file must load after WeVidHere
 */
window.WeVidHere.ui = (window.WeVidHere.ui || (function () {
    var dom = (function () {

    	/**
    	*	@method getElement
    	*	get a DOM element, either by its id or by just
    	*	returning an existing DOM element
    	*	@return {DOMObject[null]} the DOM object, with the id if elem = a string
    	*/
    	function getElement(elem) {
    		console.log("starting getElement");
    		if(typeof elem == "string") {
    			var el = document.getElementById(elem);
    			console.log("el is:" + el + " for string:" + elem);
    			if(!elem) {
    				console.log("invalid id string passed to getElement:" + elem);
    				return null;
    			}
    		}
    		else {
    			console.log("element not type string, it is a:" + elem);
    			el = elem;
    		}

    		return elem;

    	} //end of getElement()


        /** 
		 * @method addClass
		 * add a class to an element
		 * @param {HTMLElement} elem the DOM element with the class
		 * @param {String} cName CSS class name
		 */
		function addClass(elem, cName) {
			console.log("elem:" + elem + " className:" + cName);/////////////////////
			if (!hasClass(elem, cName)) elem.className += " " + cName;
			elem.className.replace(/^\s|\s$/,'')  //remove leading and trailing spaces
		};
		/** 
		 * @method removeClass
		 * remove a class from an element
		 * @param {HTMLElement} elem the DOM element with the class
		 * @param {String} cName CSS class name
		 */
		function removeClass(elem, cName) {
			if (hasClass(elem, cName)) {
				var reg = new RegExp('(\\s|^)'+cName+'(\\s|$)');
				elem.className = elem.className
				.replace(reg,' ')       //replace classname with a space
				.replace(/^\s|\s$/,'')  //remove leading and trailing spaces
				.replace(/\s+/g,' ');   //remove extra multi spaces
				}
		};
		/** 
		 * @method hasClass
		 * check if an element has a class
		 * @param {HTMLElement} elem the DOM element with the class
		 * @param {String} cName CSS class name
		 * @returns {Boolean} if element has class true, else false
		 */
		function hasClass(elem, cName) {
			if(!elem.className) return false;
			return elem.className.match(new RegExp('(\\s|^)'+cName+'(\\s|$)'));
		};
		/** 
		 * @method toggle
		 * toggle a class on and off
		 * @param {HTMLElement} elem the DOM element with the class
		 * @param {String} cName CSS class name
		 */
		function toggle(elem, cName) {
			elem = getElement(elem);
			if(hasClass(elem, cName)) {
				removeClass(elem, cName);
			}
			else {
				addClass(elem, cName);
			}
		}
		/** 
		 * @method $
		 * querySelector wrapper
		 * @param {string} query the CSS-style query
		 * @param {HTMLElement} parent the parent HTML element we start our query with
		 * @returns {NodeList} list (array-like) of DOM elements matching css query
		 */
		function $(query, parent) {
			parent = parent || document;
			return parent.querySelectorAll(query);
		};


		/**
		*	@method bind
		*	add an event to a DOM element
		*	@param {DOMObject|string id} a DOM object, or its id="..." string
		*	@param {string event name} name of the event ("click, keydown"...)
		*	@param {Function} callback function to "Fire" when event occurs
		*/
		function bind(elem, evt, callback) {
			elem.addEventListener(evt, function (e) {
					callback(e);
					e.preventDefault(); //prevent default browser response
				});

		}//end of bind()




        return {
        	getElement:getElement,
            addClass:addClass,
            removeClass:removeClass,
            hasClass:hasClass,
            toggle:toggle,
            $:$,
            bind:bind
        };
    })();//end of WeVidHere.ui.dom

    /**
    *	@method showScreen
    * 	show a game screen, hiding all the others
    *	change ARIA visibility
    *	swap visibility class
    *	@param {STring} screenId the id='xxx' of the HTML tag
    */
    function showScreen(screenId) {

    	console.log("Im in showScreen inside .ui, my id is:" + screenId);

    	//hide everything else
    	var main = document.getElementsByTagName('main')[0];
    	var myScreens = main.getElementsByTagName('article');

    	for(var i = 0; i < myScreens.length; i++) {
    		console.log("current id:" + myScreens[i].id);
    		var ce = myScreens[i];
    		if(ce.id === screenId) {
    				//make visible
    				ce.ariaHidden = "false";
    				dom.removeClass(ce, 'visisble-none');
    				dom.addClass(ce, 'visible-all');
    				console.log("ce.id:" + ce.id);
    				WeVidHere.screens[ce.id].run(); //force default run of newly revealed screen
    		}
    		else{
    				//make invisible
    				ce.ariaHidden = "true";
    				dom.addClass(ce, 'visible-none');
    				dom.removeClass(ce, 'visible-all');
    		}

    	} //end of for...in loop

    }; //end of showScreen()


    /**
    *@method showSite
    * show the website header (with nav) and footer
    **/
    function showSite () {
    	var h = document.getElementById('site-banner');
        var f = document.getElementById('site-footer');
        dom.removeClass(h, 'visible-none');
        dom.removeClass(h, 'visible-screenreader');
        dom.addClass(h, 'visible-all');
        dom.removeClass(f, 'visible-none');
        dom.removeClass(f, 'visible-screenreader');
        dom.addClass(f, 'visible-all');
      

    };

    /**
    *@method hideSite
    * hide the website header and footer, leaving only wevidhere visible
    **/
    function hideSite () {
    	var h = document.getElementById('site-banner');
        var f = document.getElementById('site-footer');
        dom.removeClass(h, 'visible-screenreader');
        dom.removeClass(h, 'visible-all');
        dom.addClass(h, 'visible-none');
        dom.removeClass(f, 'visible-screenreader');
        dom.removeClass(f, 'visible-all');
        dom.addClass(f, 'visible-none');

    };
    
    function init () {
        
    };
    
    function run () {
        
    };
    
    return {
    	showScreen:showScreen,
    	showSite:showSite,
    	hideSite:hideSite,
        init:init,
        run:run,
        dom:dom
    };
    
}))();

