$( document ).ready(function() {
 
    $( "div.radio-inline" ).hover(
        function() {
            $( this ).addClass( "hover" );
        }, function() {
            $( this ).removeClass( "hover" );
         }
    );
 
    $( "div.radio-inline" ).click(function( ) {
        // Select the relevant radio button - if user doesn't click directly on it
        var inputElement = $( this ).find("input")[0];
        inputElement .click();
 
        // Change color of selected item and remove color from previously selected item
        $( this ).siblings().removeClass( "selected" );
        $( this ).addClass( "selected" );
 
        // Display score in right hand column
        var score = inputElement.value;
        var row = $( this ).parent().parent().parent();
        row.children().last().children("div").html(score);
 
        // Calculate total score
        var table = row.parent().parent();
        var scores = table.find("div.score");
        scores.each(function(i) {
            console.log( scores[i].html() );
        });
    });
 
});
