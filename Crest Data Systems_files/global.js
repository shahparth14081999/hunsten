if(document.getElementById('pdf-case-study') && document.getElementById('pdf-path'))
{
	var pdfPath = jQuery('#pdf-case-study a[href^="http://"]').attr('href');
	jQuery("#pdf-path").val(pdfPath);
	console.log(jQuery("#pdf-path").val());
}