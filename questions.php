
<?php /*questions.php: information about questions*/?>
<!doctype html><html><head>
	<?php include'imports.php'?>
</head><body><center>
<!--sidebar--><?php include'sidebar.php'?>
<!--NAVBAR--><?php include"navbar.php"?>
<!--TITLE--><h1><?php write('#questions_about')?></h1>

<!--questions and variables hidden-->
<table>
	<tr><th><?php write('#questions_question')?><th><?php write('#questions_variables_hidden')?><th><?php write('#questions_questions_hidden')?>
	<script>
		for(var question in Questions)
		{
			if(typeof(Questions[question])=="function")continue;
			//question
			document.write("<tr><td>"+question+"?")
			//related variables
			document.write("<td>")
			for(var i in Questions[question])
			{
				var code = Questions[question][i];
				var link;
				if(Info[code]==undefined)
					link = "<span title='not found' style=color:red>"+code+"</span>, "
				else
					link = "<a title='"+translate(code+'_descr')+"' href=variable.php?id="+code+">"+code+"</a><br> "
					
				document.write(link)
			}
			var q="";

			if(question=="producing_biogas")q="valorizing_biogas";
			document.write("<td>"+q);
		}
	</script>
</table>

<!--FOOTER--><?php include'footer.php'?>
