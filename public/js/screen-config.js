/**
 *@namespace WeVidHere['screen-config']
 *splash screen for the game
 */


WeVidHere.screens['screen-config'] = (function () {
    
    var firstTime = true,//have we run before?
    ui = WeVidHere.ui,
    dom = ui.dom,
    panel = document.getElementById('screen-config');//the visible sub-screen
    
    function init () {
        //common initialization functions
        console.log("in init");

        //grab our entire screen

        //grab the global submit button for all our fomr fields
        //which takes us to the game-screen
        var subb = document.getElementById('config-submit');
        dom.bind(subb, "click", function () {
            console.log("clicked on subb, go to game screen");
            ui.showScreen('screen-game');
            });
    };
    
    function run () {
        console.log("in run");
        if(firstTime) {
            init();
        }
        //do our stuff 
    };
    
    return {
        init:init,
        run:run
    };
    
})();