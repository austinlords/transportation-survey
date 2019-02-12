//back-end logic
var methodsOfTransportation = ["bike", "car", "carpool", "walk", "bus", "lightrail", "taxi", "rideshare", "other"];
var userResponses = [];

var numberOfCommuteMethods = function(array, idSelector) {
	if (array.length === 0) {
  	$("#" + idSelector).append("Why did you not select a method of transportation?!");
  } else if (array.length === 1) {
  	$("#" + idSelector).append("You tend to choose the same method of transportation every day");
  } else if (array.length >= 2 && array.length < 4) {
  	$("#" + idSelector).append("You have some variety in your routine.");
  } else if (array.length >= 4) {
  	$("#" + idSelector).append("Wow, you commute in a variety of ways. Great!");
  }
};


//front-end logic
$(function() {
	$("#transportation_survey").submit(function(event){
  	event.preventDefault();
    if ($("[name=work-transportation]:checked").val()) {
      $("[name=work-transportation]:checked").each(function(){
      	var transportationType = $(this).val();
        userResponses.push(transportationType);
        $("#work-responses > ul").append("<li>" + transportationType + "</li>");
      });
      numberOfCommuteMethods(userResponses, "numberOfMethods");

     	$("#work-responses").show();
      $("#numberOfMethods").show();
      $("#transportation_survey").hide();
    };
  });
});
