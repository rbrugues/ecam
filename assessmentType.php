<!--inside level3.php-->

<table class=inline><tr>
	<th>Type of assessment <td>

	<label>
		<input name=assessment type=radio 
			value=simple   
			onchange="updateAssessment(this.value)">
		Simple
	</label>
	&emsp;
	<label title="Advanced assessment consists of more inputs and indicators" style=cursor:help>
		<input name=assessment type=radio 
			value=advanced   
			onchange="updateAssessment(this.value)">
		Advanced
	</label>
</table>

<script>
	function updateAssessment(newValue)
	{
		<?php echo "var level='$level';\n" ?>
		<?php echo "var sublevel='$sublevel';\n" ?>
		Global.Configuration.Assessment[level][sublevel]=newValue;
		init();
	}
	function updateAssessmentMenu()
	{
		<?php echo "var level='$level';\n" ?>
		<?php echo "var sublevel='$sublevel';\n" ?>
		if(Global.Configuration.Assessment[level][sublevel]=='simple')
			document.querySelector('input[name=assessment][value=simple]').setAttribute('checked',true);
		else
			document.querySelector('input[name=assessment][value=advanced]').setAttribute('checked',true);

	}
</script>
