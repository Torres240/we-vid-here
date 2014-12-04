/**
 *@namespace WeVidHere['screen-game']
 *splash screen for the game
 */


WeVidHere.screens['screen-game'] = (function () {
    
    var firstTime = true,//have we run before?
    panel = null;//the visible sub-screen
    
    function init () {
        //common initialization functions
        console.log("SCREEN-GAME.JS in init");
    };
    
    function run () {
        console.log("SCREEN-GAME.JS in screen-game");
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