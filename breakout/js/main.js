var game;
window.onload = function()
{
    
    game.state.add("StateMain", StateMain);
    game.state.start("StateMain");
}
