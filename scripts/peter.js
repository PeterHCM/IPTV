document.getElementById("btniptvlist").onclick = function () {
	var x=document.getElementById("valueiptvlist").value;
	if (x=="IPTV@123")
       	{
		document.getElementById("iptvlist").style.display = 'block';
	}
	else alert=("Sai mật khẩu");
}
