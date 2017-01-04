function setTab(name,num,t,n,cententas)
{
	for(i=t;i<=n;i++)
	{
		if(document.getElementById(name+i) != null && typeof document.getElementById(name+i)!= 'undefined' )
		{
			var menu=document.getElementById(name+i);
			var DV=document.getElementById(name+"-"+"DV"+i);
			menu.className=i==num?cententas:"";
			DV.style.display=i==num?"block":"none"; 
		}
	}
}