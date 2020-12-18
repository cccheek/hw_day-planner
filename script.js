//this is for the 'timestamp' in the jumbotron
var timeOf = moment().hour();
var dayOf = moment().format("dddd, MMMM Do YYYY")
$("#todayDate").text(dayOf);

//create function thst turns textbars different color with time of day

//save user input and commit to local storage