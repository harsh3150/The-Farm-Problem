function findLegs() {

    //getting all the inputs from the user
    var cows = parseInt(document.getElementById("total_cows").value);
    var pigs = parseInt(document.getElementById("total_pigs").value);
    var chicken = parseInt(document.getElementById("total_chicken").value);

    var total_legs = 0;

    //handeling invalid inputs
    if (Number.isNaN(cows) || Number.isNaN(pigs) || Number.isNaN(chicken) || cows < 0 || pigs < 0 || chicken < 0) {
        document.getElementById("outp").innerHTML = "Please enter a positive number of animals";
        document.getElementById("tallys").innerHTML = ""; // clear the last results 
    }
    // valid inputs here
    else {
        total_legs = cows * 4 + pigs * 4 + chicken * 2;
        document.getElementById("outp").innerHTML = "Total legs present is " + total_legs;

        showTalls(total_legs); //prints tallys 

    }
}

//shows total count in tally
function showTalls(total_legs) {
    var image_html = "";

    //five lines
    if (total_legs > 4) {
        while (total_legs > 4) {
            image_html += "<img class='image-format-five' src='images//five.jpg' alt='five-tally-lines'>";
            total_legs -= 5;
        }

    }
    //rest single lines
    if (total_legs > 0) {

        while (total_legs >= 1) {
            image_html += "<img class='image-format-one' src='images//one.jpg' alt='one-tally-line'>";
            total_legs -= 1;
        }

    }

    //putting everything in html format in div
    document.getElementById("tallys").innerHTML = image_html;

}

function reset() {
    //clearing everything alredy written in text boxes or previous results
    document.getElementById("outp").innerHTML = "";
    document.getElementById("total_cows").value = "";
    document.getElementById("total_chicken").value = "";
    document.getElementById("total_pigs").value = "";
    document.getElementById("tallys").innerHTML = "";

}