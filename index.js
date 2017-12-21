
var $div = document.getElementById("cont");
var $form = document.createElement("form");
$form.setAttribute("name", "login");
// $form.setAttribute("action", "google.com");
$div.appendChild($form);

var $age = document.createElement("input");
$age.setAttribute("type", "text");
$age.setAttribute("name", "age");
$age.setAttribute("pattern", "^0*?[0-9]*$");
$age.setAttribute("placeholder", "Enter your age");
$age.setAttribute("style", "display: block; margin: 10px");
$form.appendChild($age);

var $username = document.createElement("input");
$username.setAttribute("type", "text");
$username.setAttribute("name", "username");
$username.setAttribute("pattern", "^(user_)\\S+$");
$username.setAttribute("placeholder", "Enter your name");
$username.setAttribute("style", "display: block; margin: 10px");
$form.appendChild($username);

var $date = document.createElement("input");
$date.setAttribute("type", "text");
$date.setAttribute("name", "date");
$date.setAttribute("placeholder", "Your birthdate dd/mm/yyyy");
$date.setAttribute("pattern", "^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[0-2])[/]([1-9][0-9]{3})$");
$date.setAttribute("style", "display: block; margin: 10px");
$form.appendChild($date)

var $submit = document.createElement("input");
$submit.setAttribute("type", "submit");
$submit.setAttribute("value", "Validate Me");
$submit.setAttribute("style", "margin: 10px");
$form.appendChild($submit);