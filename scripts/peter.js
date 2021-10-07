document.getElementById("btniptvlist").onclick = function () {
	var x=document.getElementById("valueiptvlist").value;
	alert(x);
	if (x=="Bear@123")
       	{
		document.getElementById("iptvlist").style.display = 'block';
	}
}