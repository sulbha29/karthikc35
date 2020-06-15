class Game{
    constructor(){}
    getState(){
        var stateRef = database.ref('GameState');
        stateRef.on("value", function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
       GameState:state })
    }
    start(){
        if (gameState == 0){
             player = new Player();
             player.getCount();
             form = new Form();
             form.display();
        }
    }
    
}