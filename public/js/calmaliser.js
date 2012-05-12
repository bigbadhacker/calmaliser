var chooseSomething = function() {
    document.selection && document.selection.empty && document.selection.empty();
    window.getSelection() && window.getSelection().removeAllRanges();
    var things = "kill zombies,eat cake,stay safe,eat donuts,hack limbs,eat braaaains".split(',');
    var randomThing = function () {
        var idx = Math.floor(Math.random() * things.length);
        return things[idx];
    }
    var chosenThings = randomThing().split(" ");
    $.each(chosenThings, function(i, thing) {
        $(".pos_" + i).html(thing.toUpperCase());
    });
    var randHex = function() {
        return Math.floor(Math.random()*10).toString(16);
    }
    $("body").css('backgroundColor', '#'+randHex()+randHex()+randHex());
    Cufon.replace("span.keepcalm, span.keepcalmsmall");
}
chooseSomething();
$("body").live('click touchend', chooseSomething);
