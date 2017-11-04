//gather info from the form function

function buttonSubmit() {
    document.getElementById("form").submit();
}

//form request function



//send request function


//callback function


//take the response from the server to show he results page



//function that resets a form after the results page, should reset the form after button "Go" in results page is cliked.

function formReset() {
    document.getElementById("form").submit();
}

// function to show the result - must pull result from the backend and display it in the results page.

function showResult() {
    var avg = totalSentiment / commentCount;
    if (avg > 0.5) { // happy
        return "client/images/happy.png";
    }
    if (avg < -0.5) { // angry
        return "client/images/angry.png";
    }
    // neutral
    return "client/images/meh.png";
}
