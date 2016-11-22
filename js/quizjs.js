 $(document).ready(function() 
 {
	function readSingleFile(evt) {
			//Retrieve the first (and only!) File from the FileList object
			var f = evt.target.files[0]; 
			if (f) {
				var r = new FileReader();
				r.onload = function(e) { 
					var contents = e.target.result;
					document.getElementById("File-info").innerHTML="Got the file! <br> name: " + f.name + "<br> type: " + f.type + "<br> size: " + f.size + " bytes";
					var Question=contents.search("Question");
					var Radio=contents.search("Radio");
					if(Radio >= 0){
						var op1=contents.search("Op1"),
							op2=contents.search("Op2"),
							op3=contents.search("Op3"),
							op4=contents.search("Op4");
							
							document.getElementById("q1").innerHTML= contents.substr((Question + 9),(contents.search("-")-9));
							document.getElementById("answer1").innerHTML="<input type='radio' name='q1'>" + contents.slice((op1+4), 55)+"<br>";
							document.getElementById("answer2").innerHTML="<input type='radio' name='q1'>" + contents.slice((op2+4), 68)+"<br>";
							document.getElementById("answer3").innerHTML="<input type='radio' name='q1'>" + contents.slice((op3+4), 81)+"<br>";
							document.getElementById("answer4").innerHTML="<input type='radio' name='q1'>" + contents.slice((op4+4))+"<br>";
							document.getElementById("submit").innerHTML="<button type='submit' name='submit'>SUBMIT </button>" ;							
					}
				}
				r.readAsText(f);
			} 
			else { 
				document.getElementById("demo").innerHTML= "Failed to load file";
			}
		}
		document.getElementById('fileinput').addEventListener('change', readSingleFile, false);
		var d = new Date();
		
		document.getElementById("demo").innerHTML = d.toDateString();
	setInterval(function() {

	  var currentTime = new Date();
	  var hours = currentTime.getHours();
	  var minutes = currentTime.getMinutes();
	  var seconds = currentTime.getSeconds();
	  
	  hours = (hours < 10 ? "0" : "") + hours;
	  minutes = (minutes < 10 ? "0" : "") + minutes;
	  seconds = (seconds < 10 ? "0" : "") + seconds;

	  var currentTimeString = hours + ":" + minutes + ":" + seconds;
	  $(".clock").html(currentTimeString);

	}, 1000);
	var myIndex = 0;
	carousel1();

	function carousel1() {
	    var i;
	    var x = document.getElementsByClassName("mySlides");
	    for (i = 0; i < x.length; i++) {
	       x[i].style.display = "none";
	    }
	    myIndex++;
	    if (myIndex > x.length) {myIndex = 1}
	    x[myIndex-1].style.display = "block";
	    setTimeout(carousel1, 3000); 
	};


	
		$('.maths li').hide();
		$('.science li').hide();
		$('.social li').hide();
		$('.general li').hide();
		$('.pbar').hide();
		$("#math-timer").on("click", function() 
			{
				mathsfunction();
				$('.pbar').show();
			});
 });
	function mathsfunction()
	{
		var mathsans=[];
		var check1ans=[];
		var count,counter;
			function m1ans(){
					$(".save-maf").attr('disabled', true);
					$("#firstquestion").on('keyup',function() {
							if($("#firstquestion").val() !='')
							{
								$(".save-maf").attr('disabled', false);
								$(".quizmessage-f").hide();
							}
							else
							{
								$(".save-maf").attr('disabled', true);
							}
					});
					
					$(".save-maf").click(function(){
						var maf= $("#firstquestion").val();
						mathsans.push(maf);
						$(".quizmessage-f").hide();
						$("#firstquestion").attr('disabled',true);
					});
					
					$('.btnNext-maths').click(function() {
						if($("#firstquestion").val()  == '')
						{
							$(".quizmessage-f").text("Please enter an answer");
							$(".quizmessage-f").show();
						}
						else if(mathsans[0] == undefined)
						{
							$(".quizmessage-f").text("Please save the answer");
							$(".quizmessage-f").show();
						}
						else
						{
						$(".quizmessage-f").hide();
						if(mathsans[0] == 7)
						{
							clearInterval(counter);
							earn();
						}
						$('.maths> .active').next('li').find('a').trigger('click');
						}
					});
			}
			var ecount=0,ecounter;
			function earn()
			{
					ecount+=10;
					ecounter=setInterval(etim,1000);
			}
			
				function etim()
				{
					ecount-=1;
					if(ecount ==0)
					{
						clearInterval(ecounter);
						counter=setInterval(timer,1000);						
					}
						
					
				document.getElementById("e-timer").innerHTML=ecount+"s";
				document.getElementById("mscore").innerHTML=mathsresult();
				document.getElementById("scscore").innerHTML=scienceresult();
				}
		
			function m2ans(){
					$(".save-mas").attr('disabled', true);
					$('input[type=radio][name=M2]').change(function() { 
							if($('.secondquestion:checked').val() != undefined)
							{
								$(".save-mas").attr('disabled', false);
								$(".quizmessage-s").hide();
							}
							else
							{
								$(".save-mas").attr('disabled', true);
							}
					});
					
					$(".save-mas").click(function(){
						var mas= $('.secondquestion:checked').val();
						mathsans.push(mas);
						$(".quizmessage-s").hide();
						$(".secondquestion").attr('disabled',true);
					});
					
					$('.btnNext-maths-mas').click(function() {
						if($('.secondquestion:checked').val() == undefined)
						{
							$(".quizmessage-s").text("Please select an answer");
							$(".quizmessage-s").show();
						}
						else if(mathsans[1] == undefined)
						{
							$(".quizmessage-s").text("Please save the answer");
							$(".quizmessage-s").show();
						}
						else
						{
							$(".quizmessage-s").hide();
							if(mathsans[1] == 1)
							{
								clearInterval(counter);
								clearInterval(ecounter);
								earn();
							}
							$('.maths> .active').next('li').find('a').trigger('click');
						}
					});
			}
			function m3ans()
			{
				$(".save-mat1").attr('disabled', true);
				
				$('input[type=checkbox][name=M3]').change(function() {
									if($(this).is(":checked")) 
									{
										$(".save-mat1").attr('disabled', false);
										$(".quizmessage-t").hide();
									}
									else
									{
										$(".save-mat1").attr('disabled', true);
									}
							});
							
							$(".save-mat1").click(function(){
								$(".thirdquestion:checked").each(function(){
									check1ans.push($(this).val());
								});
								$(".quizmessage-t").hide();
								$(".thirdquestion").attr('disabled',true);
								
							});
					
					$('.btnNext-maths-mat').click(function() {
						if($('input[type=checkbox][name=M3]').is(":checked")== false)
						{
							$(".quizmessage-t").text("Please select the answer");
							$(".quizmessage-t").show();
							
						}
						else if(check1ans[0] == undefined)
						{
							$(".quizmessage-t").text("Please save an answer");
							$(".quizmessage-t").show();
						
						}
						else
						{
							$(".quizmessage-t").hide();
							if(check1ans[0]=1 && check1ans[1]==3)
							{
							clearInterval(counter);
							clearInterval(ecounter);
							earn();
							}
							$('.maths> .active').next('li').find('a').trigger('click');
						}
					});		
							
			}
			function m4ans(){
					$(".save-mafr").attr('disabled', true);
					$('input[type=radio][name=M4]').change(function() { 
							if($('.fourthquestion:checked').val() != undefined)
							{
								$(".save-mafr").attr('disabled', false);
								$(".quizmessage-fr").hide();
							}
							else
							{
								$(".save-mafr").attr('disabled', true);
							}
					});
					
					$(".save-mafr").click(function(){
						var mafra= $('.secondquestion:checked').val();
						mathsans.push(mafra);
						$(".quizmessage-fr").hide();
						$(".fourthquestion").attr('disabled',true);
					});
					
					$('.btnNext-maths-mafr').click(function() {
						if($('.fourthquestion:checked').val() == undefined)
						{
							$(".quizmessage-fr").text("Please  select the answer");
							$(".quizmessage-fr").show();
						}
						else if(mathsans[2] == undefined)
						{
							$(".quizmessage-fr").text("Please  save the answer");
							$(".quizmessage-fr").show();
						
						}
					else
						{
							$(".quizmessage-fr").hide();
							if(mathsans[2] == 1)
							{
							clearInterval(counter);
							clearInterval(ecounter);
							earn();
							}
							$('.maths> .active').next('li').find('a').trigger('click');
						
						}
					});
			}
			$("#mresult-maff").attr('disabled',true);
			$("#scresult-maff").attr('disabled',true);
			function m5ans()
			{
				
				$(".save-maff").click(function()
					{
						mathsans.push($("#fifthquestion option:selected").val());
						$("#fifthquestion").attr('disabled',true);
						$(".quizmessage-ff").hide();
						
						if(mathsans[3] == 1)
							{	
								document.getElementById('mtotal').innerHTML="Maths Marks :"+mathsresult();
								clearInterval(counter);
								clearInterval(ecounter);
								earn();
							}
					});
					$('.submit-maff').click(function() 
					{
						if(mathsans[3] == undefined)
						{
							$(".quizmessage-ff").text("Please select and save an answer");
							$(".quizmessage-ff").show();
						}
						
						else
						{
							$(".quizmessage-ff").hide();
							$("#mresult-maff").attr('disabled',false);
						}	
							
					});
				
			}
			function mathsresult()
			{
				var mathskey=[7,1,1,1];
				var check1key=[1,3];
				
				var count1=0;
				var count2=0;
				for(var i=0;i<mathskey.length;i++){
					
					if(mathsans[i]==mathskey[i])
					{
						count1++;
					}
				}
				for(var j=0;j<check1key.length;j++){
					
					if(check1ans[j]==check1key[j])
					{
						count2++;
					}
					if(count2==2)
					{
						count1++;
					}
					}
					return (count1 * 20);
				}
			m1ans();
			m2ans();
			m3ans();
			m4ans();
			m5ans();
			var width1=0;
			var width2=0;var width3=0;
			function timer()
			{
					count-=1;
					if(count == 0)
					{
						clearInterval(counter);
					}
					else if(count > 70)
					{
						width1+=1;
						$('#mybar1').css('width',width1+'%');
					}
					else if(count <70 && count >30)
					{
						width2+=1;
						$('#mybar2').css('width',width2+'%');
					}
					else if(count >0 && count <30)
					{
						width3+=1;
						$('#mybar3').css('width',width3+'%');
					}
					else
					{
						return false;
					}
					document.getElementById("m-timer").innerHTML=count+"s";

				}
			function mathstimer()
			{
				count =100;
				counter=setInterval(timer,1000);
			}
			mathstimer();
			
	
		var scienceans=[];
		var check2ans=[];
		var scount,scounter;
			function sc1ans()
			{
					$(".save-masf").attr('disabled', true);
					$("#firstquestion-sc").on('keyup',function() {
							if($("#firstquestion-sc").val() !='')
							{
								$(".save-masf").attr('disabled', false);
								$(".quizmessage-sf").hide();
							}
							else
							{
								$(".save-masf").attr('disabled', true);
							}
					});
					
					$(".save-masf").click(function(){
						scienceans.push($("#firstquestion-sc").val());
						$("#firstquestion-sc").attr('disabled',true);
					});
					
					$('.btnNext-science').click(function() {
						if($("#firstquestion-sc").val()  =='')
						{
						$(".quizmessage-sf").text("Please enter an answer");
						$(".quizmessage-sf").show();
						}
						else if(scienceans[0] == undefined)
						{
							$(".quizmessage-sf").text("Please save the answer");
							$(".quizmessage-sf").show();
						}
					else
						{
						$(".quizmessage-sf").hide();
						if(scienceans[0] == 5)
							{
							clearInterval(counter);
							clearInterval(ecounter);
							earn();
							}
						$('.science> .active').next('li').find('a').trigger('click');
						}
					});
			}
			function sc2ans()
			{
					$(".save-mas2").attr('disabled', true);
					$('input[type=radio][name=SC2]').change(function() { 
							if($('.secondquestion-sc:checked').val() != undefined)
							{
								$(".save-mas2").attr('disabled', false);
								$(".quizmessage-sc2").hide();
							}
							else
							{
								$(".save-mas2").attr('disabled', true);
							}
					});
					
					$(".save-mas2").click(function(){
						scienceans.push($('.secondquestion-sc:checked').val());
						$(".secondquestion-sc").attr('disabled',true);
					});
					
					$('.btnNext-science-mas').click(function() {
						if($('.secondquestion-sc:checked').val() == undefined)
						{
							$(".quizmessage-sc2").text("Please select an answer");
							$(".quizmessage-sc2").show();
						}
						else if(scienceans[1] ==undefined)
						{
						$(".quizmessage-sc2").text("Please save the answer");
						$(".quizmessage-sc2").show();
						}
					else
						{
							$(".quizmessage-sc2").hide();
							if(scienceans[1] == 1)
							{
							clearInterval(counter);
							clearInterval(ecounter);
							earn();
							}
							$('.science> .active').next('li').find('a').trigger('click');
						
						}
					});
			}
			function sc3ans()
			{
				$(".save-mas3").attr('disabled', true);
				
				$('input[type=checkbox][name=SC3]').change(function() {
									if($(this).is(":checked")) 
									{
										$(".save-mas3").attr('disabled', false);
										$(".quizmessage-sc3").hide();
									}
									else
									{
										$(".save-mas3").attr('disabled', true);
									}
							});
							
							$(".save-mas3").click(function(){
								$(".thirdquestion-sc:checked").each(function(){
									check2ans.push($(this).val());
								});
								$(".thirdquestion-sc").attr('disabled',true);
								
							});
					
					$('.btnNext-science-mat').click(function() {
						if($('input[type=checkbox][name=SC3]').is(":checked")== false)
						{
							$(".quizmessage-sc3").text("Please  select an answer");
						$(".quizmessage-sc3").show();
						}
						else if(check2ans[0] == undefined)
						{
						$(".quizmessage-sc3").text("Please  save the answer");
						$(".quizmessage-sc3").show();
						}
					else
						{
							$(".quizmessage-sc3").hide();
							if(check2ans[0]==1 && check2ans[1]==3)
							{
							clearInterval(counter);
							clearInterval(ecounter);
							earn();
							}
						$('.science> .active').next('li').find('a').trigger('click');
						
						}
					});		
							
			}
			function sc4ans()
			{
					$(".save-mas4").attr('disabled', true);
					$(".fourthquestion-sc").on('keyup',function() {
							if($(".fourthquestion-sc").val() !='')
							{
								$(".save-mas4").attr('disabled', false);
								$(".quizmessage-sc4").hide();
							}
							else
							{
								$(".save-mas4").attr('disabled', true);
							}
					});
					
					$(".save-mas4").click(function(){
						scienceans.push($(".fourthquestion-sc").val());
						$(".fourthquestion-sc").attr('disabled',true);
					});
					
					$('.btnNext-science-sc4').click(function() {
						if($(".fourthquestion-sc").val()  =='') 
						{
						$(".quizmessage-sc4").text("Please enter an answer");
						$(".quizmessage-sc4").show();
						}
						else if(scienceans[2] == undefined)
						{
							$(".quizmessage-sc4").text("Please save the answer");
							$(".quizmessage-sc4").show();
						}
					else
						{
							$(".quizmessage-sc4").hide();
							if(scienceans[2] == 1)
							{
							clearInterval(counter);
							clearInterval(ecounter);
							earn();
							}
						$('.science> .active').next('li').find('a').trigger('click');
						
						}
					});
			}
			function sc5ans()
			{
				$(".save-mas5").click(function()
					{
						scienceans.push($("#fifthquestion-sc option:selected").val());
						$("#fifthquestion-sc").attr('disabled',true);
						$(".quizmessage-sc5").hide();
						
						if(scienceans[3] == 1)
							{	
								document.getElementById('sctotal').innerHTML="science marks :"+scienceresult();
								clearInterval(counter);
								clearInterval(ecounter);
								earn();
							}
					});
					$('.submit-mas5').click(function() 
					{
						if(scienceans[3] == undefined)
						{
							$(".quizmessage-sc5").text("Please select and save an answer");
							$(".quizmessage-sc5").show();
						}
						
						else
						{
							$(".quizmessage-s5").hide();
							$("#scresult-maff").attr('disabled',false);
						}	
							
					});
			}
			function scienceresult()
			{
				var sciencekey=[5,1,1,1];
				var check2key=[1,3];
				
				var count1=0;
				var count2=0;
				for(var i=0;i<sciencekey.length;i++){
					
					if(scienceans[i]==sciencekey[i])
					{
						count1++;
					}
				}
				for(var j=0;j<check2key.length;j++)
				{
					
					if(check2ans[j]==check2key[j])
					{
						count2++;
					}
					if(count2==2)
					{
						count1++;
					}
					
				}
				return (count1*20);
				
			}
			
			sc1ans();
			sc2ans();
			sc3ans();
			sc4ans();
			sc5ans();

			
			
		var socialans=[];
		var check3ans=[];
		var socount,socounter;
			function s1ans()
			{
					$(".save-s1").attr('disabled', true);
					$("#firstquestion-s1").on('keyup',function() {
							if($("#firstquestion-s1").val() !='')
							{
								$(".save-s1").attr('disabled', false);
								$(".quizmessage-s1").hide();
							}
							else
							{
								$(".save-s1").attr('disabled', true);
							}
							$(".save-s1").click(function(){
							socialans.push($("#firstquestion-s1").val());
							$("#firstquestion-s1").attr('disabled',true);
					});
					});
					
					$('.btnNext-s1').click(function() {
						if($("#firstquestion-s1").val()  =='')
						{
						$(".quizmessage-s1").text("Please enter an answer");
						$(".quizmessage-s1").show();
						}
						else if(socialans[0] == undefined)
						{
							$(".quizmessage-s1").text("Please save the answer");
							$(".quizmessage-s1").show();
						}
					else
						{
						$(".quizmessage-s1").hide();
						$('.social> .active').next('li').find('a').trigger('click');
						}
					});
			}
			function s2ans()
			{
					$(".save-s2").attr('disabled', true);
					$('input[type=radio][name=S2]').change(function() { 
							if($('.secondquestion-s2:checked').val() != undefined)
							{
								$(".save-s2").attr('disabled', false);
								$(".quizmessage-s2").hide();
							}
							else
							{
								$(".save-s2").attr('disabled', true);
							}
					});
					
					$(".save-s2").click(function(){
						socialans.push($('.secondquestion-s2:checked').val());
						$(".secondquestion-s2").attr('disabled',true);
					});
					
					$('.btnNext-s2').click(function() {
						if($('.secondquestion-s2:checked').val() == undefined)
						{
							$(".quizmessage-s2").text("Please select an answer");
							$(".quizmessage-s2").show();
						}
						else if(socialans[1] ==undefined)
						{
						$(".quizmessage-s2").text("Please save the answer");
						$(".quizmessage-s2").show();
						}
					else
						{
							$(".quizmessage-s2").hide();
							$('.social> .active').next('li').find('a').trigger('click');
						
						}
					});
			}
			function s3ans()
			{
				$(".save-s3").attr('disabled', true);
				
				$('input[type=checkbox][name=S3]').change(function() {
									if($(this).is(":checked")) 
									{
										$(".save-s3").attr('disabled', false);
										$(".quizmessage-s3").hide();
									}
									else
									{
										$(".save-s3").attr('disabled', true);
									}
							});
							
							$(".save-s3").click(function(){
								$(".thirdquestion-s3:checked").each(function(){
									check3ans.push($(this).val());
								});
								$(".thirdquestion-s3").attr('disabled',true);
								
							});
					
					$('.btnNext-s3').click(function() {
						if($('input[type=checkbox][name=S3]').is(":checked")== false)
						{
							$(".quizmessage-s3").text("Please  select an answer");
						$(".quizmessage-s3").show();
						}
						else if(check3ans[0] == undefined)
						{
						$(".quizmessage-s3").text("Please  save the answer");
						$(".quizmessage-s3").show();
						}
					else
						{
							$(".quizmessage-s3").hide();
						$('.social> .active').next('li').find('a').trigger('click');
						
						}
					});		
							
			}
			function s4ans()
			{
					$(".save-s4").attr('disabled', true);
					$('input[type=radio][name=S4]').change(function() { 
							if($('.fourthquestion-s4:checked').val() != undefined)
							{
								$(".save-s4").attr('disabled', false);
								$(".quizmessage-s4").hide();
							}
							else
							{
								$(".save-s4").attr('disabled', true);
							}
					});
					
					$(".save-s4").click(function()
					{		
						socialans.push($('.fourthquestion-s4:checked').val());
						$(".fourthquestion-s4").attr('disabled',true);
					});
					$('.btnNext-s4').click(function() 
					{
						if($('.fourthquestion-s4:checked').val() == undefined)
						{
							$(".quizmessage-s4").text("Please select an answer");
							$(".quizmessage-s4").show();
						}
						else if(socialans[2] ==undefined)
						{
						$(".quizmessage-s4").text("Please save the answer");
						$(".quizmessage-s4").show();
						}
					else
						{
							$(".quizmessage-s4").hide();
							$('.social> .active').next('li').find('a').trigger('click');
						
						}
						});
					
			}
			function s5ans()
			{
				$(".save-s5").click(function(){
						socialans.push($("#S5 option:selected").val());
						$("#S5").attr('disabled',true);
						$(".save-s5").attr('disabled', true);
					});
					$('.submit-s5').click(function() {
						if(socialans[3] == undefined)
						{
						$(".quizmessage-s5").text("Please select and save an answer");
						$(".quizmessage-s5").show();
	
						}
						else
						{
							$(".quizmessage-s5").hide();
							$('.submit-s5').attr('disabled',true);
							$('#sscore_box').append('<div class="panel-group"><div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" href="#collapse1">View Result</a></h4></div><div id="collapse1" class="panel-collapse collapse"><div class="panel-body">Marks obtained = ' + (socialresult()*20) + ' </div></div></div></div>');
							$('.mainquiz').removeClass('disabled');
							$('.mainquiz').find('a').attr("data-toggle","tab");
						}
					});
			}
			function socialresult()
			{
				var socialkey=[5,1,1,1];
				var check3key=[1,3];
				
				var count1=0;
				var count2=0;
				for(var i=0;i<socialkey.length;i++)
				{
					
					if(socialans[i]==socialkey[i])
					{
						count1++;
					}
				}
				for(var j=0;j<check3key.length;j++)
				{
					
					if(check3ans[j]==check3key[j])
					{
						count2++;
					}
					if(count2==2)
					{
						count1++;
					}
					}
					return (count1);
			}
				
			s1ans();
			s2ans();
			s3ans();
			s4ans();
			s5ans();

}