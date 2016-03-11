$(document).ready(function(){
    $("#serialize").click(function(){
        var myobj = {Name:$("#Name").val(), Comment:$("#Comment").val()};
        jobj = JSON.stringify(myobj);
        //$("#json").text(jobj);

       var url = "comment";
	$.ajax({
  	url:url,
  	type: "POST",
  	data: jobj,
  	contentType: "application/json; charset=utf-8",
  	success: function(data,textStatus) {
     		 $("#done").html("You have successfully added yourself as attending!");
  }
})
    });

$("#getThem").click(function() {
      $.getJSON('comments', function(data) {
        console.log(data);
        var everything = "<ol>";
        for(var comment in data) {
          com = data[comment];
          everything += "<li class='list-group-item'>Name: \f" + com.Name + "\f Email Address: " +com.Comment +"</li>";
        }
        everything += "</ol>";
        $("#comments").html(everything);
      })
    })
});


