

// set a handler function for the form's submission event
$("#draw-form").submit(function(event) {

    // prevent the form from submitting (otherwise page will refresh)
    event.preventDefault();

    // clear any previous error message that might be displayed from last time
    clearError();

    // TO-DO 3
    // figure out the height the user typed (replace the "5" below)
    heightStr = $("#height").val();
    //console.log(heightStr);

    // if they didn't type anything, yell at them and exit early
    if (heightStr == "") {
        displayError("Please provide a height");
        return;
    }

    // convert the string to an int
    height = parseInt(heightStr);

    // if the height is not-a-number or not positive, yell at them and exit early
    if (isNaN(height) || height < 1) {
        displayError(heightStr + ": That's not a valid height.");
        return;
    }

    // if the height is absurdly tall, yell at them and exit early
    var tooTall = 100;
    if (height > tooTall) {
        displayError("Are you cray? I can't build a pyramid that tall.");
        return;
    }

    // draw pyramid with the specified height
    drawPyramid(height);
});


/**
 * displayError
 *
 * Displays an error message on the text input, and colors it red
 */
function displayError(message) {
    // TO-DO 4
    // implement this function using jQuery
    $(".error-message").append(message);

}


/*
 * clearError
 *
 * Undisplays the error message and removes the red CSS style
 */
function clearError(message) {
    $("#height").removeClass("invalid-field");
    $(".error-message").text("");
}



/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    // TO-DO 2
    // clear the old content from the #pyramid container
    $("#pyramid").empty();

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // make a <p> element for this row
        rowElem = $("<p>").html(rowStr);
        //console.log(rowElem);

        // TO-DO 1
        // insert the paragraph into the #pyramid container
        $("#pyramid").append(rowElem);

    }
}
