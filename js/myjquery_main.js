
$(document).ready(function() {
		if(localStorage["newval"]!=null) {
			$(".appendlist").each(function() {
			$(this).append("<option value="+localStorage["newval"]+">"+localStorage["newval"]+"</option>");
				});
		$(".appendmultilist").each(function() {
			$(this).append("<option value="+localStorage["newval"]+">"+localStorage["newval"]+"</option>");
				});
		}
		
	window.history.forward(1);
	$("#reg_reset").click(function() {
		$("#reg_name").addClass("has-error");
		$("#reg_dob").addClass("has-error");
		$("#reg_mailid").addClass("has-error");
	});
	$("#admin_quiz_submit").click(function() {
		var newsub = $("#new_subject").val();
		localStorage["newval"] = newsub;
		$(".appendlist").each(function() {
			$(this).append("<option value="+localStorage["newval"]+">"+localStorage["newval"]+"</option>");
				});
		$(".appendmultilist").each(function() {
			$(this).append("<option value="+localStorage["newval"]+">"+localStorage["newval"]+"</option>");
				});
		document.getElementById("new_subject").value="";
		return false;
	});

});