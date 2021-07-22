function submit0() {
    //~ GET VALUES
    //~ var uid = $("#uid").attr("value");
    var fname = $("#fname").attr("value");
    var lname = $("#lname").attr("value");
    var city = $("#city").attr("value");
    var gender = $('#gender :selected').text();
    var age = $("#age").attr("value");
    var skills = $('#skills :selected').text();
    var date0 = new Date(Date.now());
    
    //~ SET COOKIES
    document.cookie = `uid=${Math.round(Math.random() * 1e9)}; SameSite=Strict`;
    document.cookie = `fname=${fname}; SameSite=Strict`;
    document.cookie = `lname=${lname}; SameSite=Strict`;
    document.cookie = `city=${city}; SameSite=Strict`;
    document.cookie = `gender=${gender}; SameSite=Strict`;
    document.cookie = `age=${age}; SameSite=Strict`;
    document.cookie = `skills=${skills}; SameSite=Strict`;
    document.cookie = `date0=${date0}; SameSite=Strict`;
    
    console.log("***", document.cookie); //~ DEBUG
    
    //~ ACTION
    window.location.href = "index51.html";
}

/*
  $(document).ready(function(){
  $("#uid").focus(function(){
  $("#uid").val(Math.round(Math.random() * 1e9));
  });
  });
*/
