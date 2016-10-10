

var heightElem = document.getElementById("height");
var formElem = document.getElementById("draw-form");

// set a handler function for the form's submission event
formElem.onsubmit = function(event) {

    // QUIZ
    // what happens if we don't do this?
    event.preventDefault();

    // QUIZ
    // what happens if we don't do this?
    clearError();

    // figure out the height the user typed
    heightStr = heightElem.value;

    // TO-DO 1
    // if they didn't type anything at all, give a different error message,
    // something like "Please provide a height"
    if (!heightStr) {  // NULL STRING EVALUATES TO FALSE, SO THIS WORKS!
        displayError("You've gotta put <b>something</b> in.");
        return;
    }

    // convert the string to an int (in base 10)
    height = parseInt(heightStr, 10);

    // if the height is not-a-number, yell at them and exit early
    // TO-DO 2
    // negative numbers and zero should also be rejected here
    if (isNaN(height) || (height <= 0)) {
        displayError("That's not a valid height.");
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
}


/**
 * displayError
 *
 * Displays an error message on the text input, and colors it red
 */
function displayError(message) {
    heightElem.className = "invalid-field whatever";  // THIS WILL OVERWRITES ALL CLASSES
    //heightElem.className = "whatever";
    document.querySelector(".error-message").innerHTML = message;
}


/*
 * clearError
 *
 * Undisplays the error message and removes the red CSS style
 */
function clearError(message) {  // DON'T NEED THE 'message' PARAMETER HERE; UNUSED
    // TO-DO 3
    heightElem.classList.remove("invalid-field");
    document.querySelector(".error-message").innerHTML = "";
}



/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
