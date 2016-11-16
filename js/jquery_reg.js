$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip(); 
	if(localStorage["username"]!=null){
		
			var user_name = localStorage["username"];
				document.getElementById("s_name").value = user_name;
		}
		if(localStorage["password"]!=null){
		
			var user_name = localStorage["password"];
				document.getElementById("password").value = user_name;
		}
		if(localStorage["age"]!=null){
		
			var user_name = localStorage["age"];
				document.getElementById("s_age").value = user_name;
		}
		if(localStorage["mail"]!=null){
		
			var user_name = localStorage["mail"];
				document.getElementById("s_mailid").value = user_name;
		}
		if(localStorage["new_subject"]!=null){
			if(localStorage["role"]==="admin"){
				var sel_subject = localStorage["new_subject"];
				$(".interested").text(sel_subject);
				$(".toggle_subject").css("display","block");
			}
			else {
				$(".toggle_subject").css("display","none");
			}
			if(localStorage["role"]==="student") {
				var sel_subject = localStorage["new_subject"];
				$(".interested_student").text(sel_subject);
				$(".toggle_subject_student").css("display","block");
			}
			else{
				$(".toggle_subject_student").css("display","none");
			}
			
		}
	var subject="";
	var sessionvar = localStorage["username"];
	    $("#session").text("Welcome "+sessionvar+",");
	    checkrole();
	    function checkrole() {
	    	if(localStorage["role"]!=null){
	    		if(localStorage["role"]==="admin"){
	    			$("#update").css("display","block");
	    		}
	    		else {
	    			$("#update").css("display","none");
	    		}

	    		if(localStorage["role"]==="student"){
	    			$("#show").css("display","block");
	    		}
	    		else {
	    			$("#show").css("display","none");
	    		}
	    	}
	    };
	 $("#edit").click(function(){
	 	event.preventDefault();
	 	$("#s_name").prop("disabled",false);
	 	$("#password").prop("disabled",false);
	 });
	  $("#updateProfile").click(function(){
	 	event.preventDefault();
	 	
	 	$("#s_name").prop("disabled",true);
	 	$("#password").prop("disabled",true);
	 	alert("Profile details updated successfully");

	 	// return false;
	 });
	$("#show").click(function(){
		if(localStorage["new_subject"]!=null){
			if(localStorage["role"]==="admin"){
				var sel_subject = localStorage["new_subject"];
				$(".interested").text(sel_subject);
				$(".toggle_subject").css("display","block");
			}
			else {
				$(".toggle_subject").css("display","none");
			}
			if(localStorage["role"]==="student") {
				var sel_subject = localStorage["new_subject"];
				$(".interested_student").text(sel_subject);
				$(".toggle_subject_student").css("display","block");
			}
			else{
				$(".toggle_subject_student").css("display","none");
			}
			
		}

	});
	$("#view").click(function(){
		if(localStorage["username"]!=null){
		
			var user_name = localStorage["username"];
				document.getElementById("s_name").value = user_name;
		}
		if(localStorage["password"]!=null){
		
			var user_name = localStorage["password"];
				document.getElementById("password").value = user_name;
		}
		if(localStorage["age"]!=null){
		
			var user_name = localStorage["age"];
				document.getElementById("s_age").value = user_name;
		}
		if(localStorage["mail"]!=null){
		
			var user_name = localStorage["mail"];
				document.getElementById("s_mailid").value = user_name;
		}
		if(localStorage["new_subject"]!=null){
			if(localStorage["role"]==="admin"){
				var sel_subject = localStorage["new_subject"];
				$(".interested").text(sel_subject);
				$(".toggle_subject").css("display","block");
			}
			else {
				$(".toggle_subject").css("display","none");
			}
			if(localStorage["role"]==="student") {
				var sel_subject = localStorage["new_subject"];
				$(".interested_student").text(sel_subject);
				$(".toggle_subject_student").css("display","block");
			}
			else{
				$(".toggle_subject_student").css("display","none");
			}
			
		}

	});
	$("#admin_submit").click(function() {
					event.preventDefault();
					alert("Registered Successfully");
					window.location="practise.html";
	});
	$("form").keyup(function () {
		check1();
		function check1() {
			if($("#reg_name").hasClass("has-success") && $("#password_div").hasClass("has-success") && $("#reg_dob").hasClass("has-success") && $("#reg_mailid").hasClass("has-success") && $("#role_of_user").hasClass("has-success")) {
				$("#admin_submit").prop("disabled",false);
			}
			else {
				$("#admin_submit").prop("disabled",true);

			}
		};
		$("#s_name").keyup(function() {
			var name = $("#s_name").val();
			var check = /^[A-z]+$/;
			var len_name= $("#s_name").val().length;
			if(len_name==0) {
				$("#valid").text("* Required Field");
				$("#valid").css("display","block");
				$("#reg_name").addClass("has-error");
				$("#reg_name").removeClass("has-success");		
			}
			else {
				if(!check.test(name)) {
					$("#valid").css("display","block");
					$("#reg_name").addClass("has-error");
					$("#reg_name").removeClass("has-success");	
					$("#valid").text("Invalid Username. Only Characters Allowed");
				}
				else {
					$("#valid").css("display","none");
					$("#reg_name").removeClass("has-error");
					$("#reg_name").addClass("has-success");
					localStorage["username"]=$("#s_name").val();

				}
			}
		});
		$("#password").keyup(function() {
			var pwd = $("#password").val();
			var check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/;
			var len_pwd= $("#password").val().length;
			if(len_pwd==0) {
				$("#pass_valid").text("* Required Field");
				$("#pass_valid").css("display","block");
				$("#password_div").addClass("has-error");
				$("#password_div").removeClass("has-success");		
			}
			else {
				if(!check.test(pwd)) {
					$("#pass_valid").css("display","block");
					$("#password_div").addClass("has-error");
					$("#password_div").removeClass("has-success");	
					$("#pass_valid").text("Invalid password.");
				}
				else {
					$("#pass_valid").css("display","none");
					$("#password_div").removeClass("has-error");
					$("#password_div").addClass("has-success");
					localStorage["password"]=$("#password").val();
				}
			}
		});
		$("#s_mailid").keyup(function() {
			var mailid = $("#s_mailid").val();
			var check = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
			var len_mailid= $("#s_mailid").val().length;
			if(len_mailid==0) {
				$("#valid1").text("* Required Field");
				$("#valid1").css("display","block");
				$("#reg_mailid").addClass("has-error");
				$("#reg_mailid").removeClass("has-success");		
			}
		else {
				if(!check.test(mailid)) {
					$("#valid1").css("display","block");
					$("#reg_mailid").addClass("has-error");
					$("#reg_mailid").removeClass("has-success");	
					$("#valid1").text("Invalid Mail ID");
				}
				else {
					$("#valid1").css("display","none");
					$("#reg_mailid").removeClass("has-error");
					$("#reg_mailid").addClass("has-success");
					localStorage["mail"] = $("#s_mailid").val();
				}
			}
		});
		$("#s_dob").Zebra_DatePicker({
			direction:-1,
			default_position:"below",
			onSelect:function() {
			var now = new Date();
			var past = new Date($("#s_dob").val());
			if(past===null || past==="") {
				$("#reg_dob").removeClass("has-success");
				$("#reg_dob").addClass("has-error");
			}
			else {
				$("#reg_dob").removeClass("has-error");
				$("#reg_dob").addClass("has-success");
			}
			var age = now.getFullYear() - past.getFullYear();
			document.getElementById("s_age").value= age;
			localStorage["age"]=age;
		}
		});

		var sessionvar = localStorage["username"];
	    $("#session").text("Welcome "+sessionvar+",");

		$("#role_of_user").change(function() {
			$("#role_of_user").removeClass("has-error");
			$("#role_of_user").addClass("has-success");
			
			var role = $("input[name=role]:checked").val();	
			localStorage["role"]=role;
			if(role==="admin"){
				$("#radio_toggle").css("display","block");
				// var subject="";
				// subject = $('#admin_select').find(":selected").text();
    //             localStorage["new_subject"]=subject;            
			}
			else{
				$("#radio_toggle").css("display","none");
			}
			if(role==="student"){
				$("#radio_toggle1").css("display","block");
				
 
			}
			else{
				$("#radio_toggle1").css("display","none");
			}


		});
		$("#student_select").change(function() {
			
				      subject = "";
				        $( "select option:selected" ).each(function() {
				        	event.preventDefault();
				          subject += $( this ).text() + ",";
				          // var updated_subject = subject.slice(6);
				          // subject=updated_subject;
				        });
				      }).trigger("change");
		$("#admin_select").change(function() {
				      subject = "";
				      event.preventDefault();
				        $( "select option:selected" ).each(function() {
				          subject += $( this ).text() + " ";
				        });
				      }).trigger("change");
		                localStorage["new_subject"]=subject;
		check1();
		
	});
	$("#reg_reset").click(function() {
			$("#reg_name").addClass("has-error");
			$("#reg_dob").addClass("has-error");
			$("#password_div").addClass("has-error");
			$("#reg_mailid").addClass("has-error");
			$("#role_of_user").addClass("has-error");
			$("#pass_valid").css("display","none");
			$("#valid").css("display","none");
			$("#valid1").css("display","none");
	});
});
