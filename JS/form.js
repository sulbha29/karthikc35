class Form{
    constructor(){}
    display(){
        var title = createElement('h2')
        title.html("carRacingGame")
        title.position(250,30);
        var input = createInput("name");
        input.position(310,220);
        var button = createButton("press here");
        button.position(310, 260);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+= 1;
            player.updateName(name);
            player.updateCount(playerCount);
            var greeting = createElement('h3')
            greeting.html("Hello Player"+ name);
            greeting.position(250,250);
        })
    }
}