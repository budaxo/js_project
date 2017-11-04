//gather info from the form function



//form request function



//send request function



//callback function


//take the response to show he results page



//function that resets a form after the results page

<form id="frm1" action="/action_page.php">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br><br>
  <input type="button" onclick="myFunction()" value="Submit">
</form>

<script>
function myFunction() {
    document.getElementById("frm1").submit();
}
</script>
