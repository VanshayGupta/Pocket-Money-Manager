var total=document.querySelector("#total");
var income=document.querySelector("#income");
var expense=document.querySelector("#expense");
var cost=document.querySelector("#cost");
var debitDate=document.querySelector("#debitDate");
var debitDescription=document.querySelector("#debitDescription");
var creditDate=document.querySelector("#creditDate");
var creditDescription=document.querySelector("#creditDescription");
var category=document.querySelector("#category");
var submitDebit=document.querySelector("#submitDebit");
var submitCredit=document.querySelector("#submitCredit");
var list=document.querySelector("#list");
var received=document.querySelector("#received");
var creditDisplay=document.querySelector("#creditDisplay");
var travelDisplay=document.querySelector("#travelDisplay");
var foodDisplay=document.querySelector("#foodDisplay");
var rentDisplay=document.querySelector("#rentDisplay");
var utilitiesDisplay=document.querySelector("#utilitiesDisplay");
var borrowedDisplay=document.querySelector("#borrowedDisplay");
var lentDisplay=document.querySelector("#lentDisplay");
var miscDisplay=document.querySelector("#miscDisplay");
var hide=document.querySelector("#hide");
var debitValid=document.querySelector("#debitValid");
var creditValid=document.querySelector("#creditValid");
var debitShow=document.querySelector("#debitShow");
var debitForm=document.querySelector("#debitForm");
var creditShow=document.querySelector("#creditShow");
var creditForm=document.querySelector("#creditForm");
var tpm=0;
tpm=prompt("Please enter your pocket money");
total.innerHTML=(tpm);
var get=0;
var give=0;
var i=0;
var creditCost=0;
var rentCost=0;
var foodCost=0;
var travelCost=0;
var utilitiesCost=0;
var miscCost=0;
var lentCost=0;
var borrowedCost=0;

debitShow.addEventListener("click",function(){
	if(debitForm.style.display==("none"))
	{
		debitForm.style.display=("block");
		debitShow.innerHTML=("-");
	}
	else
	{
		debitForm.style.display=("none");
		debitShow.innerHTML=("+");
	}
});

creditShow.addEventListener("click",function(){
	if(creditForm.style.display==("none"))
	{
		creditForm.style.display=("block");
		creditShow.innerHTML=("-");
	}
	else
	{
		creditForm.style.display=("none");
		creditShow.innerHTML=("+");
	}
});

submitDebit.addEventListener("click",function(){
	if(debitDate.checkValidity()==true&&debitDescription.checkValidity()==true&&category.value!="Category"&&cost.checkValidity()==true)
	{
		var node=document.createElement("LI");
		var node1=document.createElement("LI");
		var del=document.createElement("INPUT");
		del.setAttribute("type","button");
		del.setAttribute("value","X");
		del.style.border=("none");
		del.style.color=("red");
		var textnode=document.createTextNode(cost.value+("		")+category.value+("		"));
		var textnode1=document.createTextNode(((debitDate.value.slice(8,10))+("-")+(debitDate.value.slice(5,7))+("-")+(debitDate.value.slice(0,4)))+("		")+debitDescription.value);
		node.classList.add("l1");
		node1.classList.add("l2");
		node.appendChild(textnode);
		node.appendChild(del);
		node1.appendChild(textnode1);
		node.appendChild(node1);
		node.style.margin=("5px auto");
		node.style.width=("100%");
		node.classList.add("list-group-item");
		node.classList.add("rounded");
		node.style.fontWeight=("400");
		hide.style.display=("none");
		node.style.wordWrap=("break-word");
		if(category.value=="Travel")
		{
			node.style.backgroundColor=("rgb(255, 255, 179)");
			del.style.backgroundColor=("rgb(255, 255, 179)");
			travelCost+=Number(cost.value);
			travelDisplay.innerHTML=("Travel- "+travelCost);
		}
		else if(category.value=="Rent")
		{
			node.style.backgroundColor=("rgb(255, 153, 230)");
			del.style.backgroundColor=("rgb(255, 153, 230)");
			rentCost+=Number(cost.value);
			rentDisplay.innerHTML=("Rent- "+rentCost);
		}
		else if(category.value=="Food")
		{
			node.style.backgroundColor=("rgb(153, 204, 255)");
			del.style.backgroundColor=("rgb(153, 204, 255)");
			foodCost+=Number(cost.value);
			foodDisplay.innerHTML=("Food- "+foodCost);
		}
		else if(category.value=="Utilities")
		{
			node.style.backgroundColor=("rgb(217, 217, 217)");
			del.style.backgroundColor=("rgb(217, 217, 217)");
			utilitiesCost+=Number(cost.value);
			utilitiesDisplay.innerHTML=("Utilities- "+utilitiesCost);
		}
		else if(category.value=="Misc")
		{
			node.style.backgroundColor=("rgb(255, 153, 187)");
			del.style.backgroundColor=("rgb(255, 153, 187)");
			miscCost+=Number(cost.value);
			miscDisplay.innerHTML=("Misc- "+miscCost);
		}
		else if(category.value=="Lent")
		{
			node.style.backgroundColor=("rgb(255, 77, 77)");
			del.style.backgroundColor=("rgb(255, 77, 77)");
			lentCost+=Number(cost.value);
			lentDisplay.innerHTML=("Lent- "+lentCost);
		}
		else if(category.value=="Borrowed")
		{
			node.style.backgroundColor=("rgb(255, 77, 77)");
			del.style.backgroundColor=("rgb(255, 77, 77)");
			borrowedCost+=Number(cost.value);
			borrowedDisplay.innerHTML=("Borrowed- "+borrowedCost);
		}
		list.insertBefore(node,list.childNodes[0]);
		give+=Number(cost.value);
		expenseTotal.innerHTML=give;
		tpm-=Number(cost.value);
		total.innerHTML=(tpm);
		debitValid.style.display=("none");
		cost.value=("");
		category.value=("Category");
		debitDate.value=("");
		debitDescription.value=("");
		del.addEventListener("click",function(){
			var e=node.innerText;
			while(e.charAt(i)!=" ")
			{
				i++;
			}
			var deleteDebit=e.substring(0,i);
			give-=Number(deleteDebit);
			tpm+=Number(deleteDebit);
			expenseTotal.innerHTML=(give);
			total.innerHTML=(tpm);
			if(e.indexOf("Travel")!=-1)
			{
				travelCost-=deleteDebit;
				travelDisplay.innerHTML=("Travel- "+travelCost);
			}
			if(e.indexOf("Rent")!=-1)
			{
				rentCost-=deleteDebit;
				rentDisplay.innerHTML=("Rent- "+rentCost);
			}
			if(e.indexOf("Food")!=-1)
			{
				foodCost-=deleteDebit;
				foodDisplay.innerHTML=("Food- "+foodCost);
			}
			if(e.indexOf("Utilities")!=-1)
			{
				utilitiesCost-=deleteDebit;
				utilitiesDisplay.innerHTML=("Utilities- "+utilitiesCost);
			}
			if(e.indexOf("Borrowed")!=-1)
			{
				borrowedCost-=deleteDebit;
				borrowedDisplay.innerHTML=("Borrowed- "+borrowedCost);
			}
			if(e.indexOf("Lent")!=-1)
			{
				lentCost-=deleteDebit;
				lentDisplay.innerHTML=("Lent- "+lentCost);
			}
			if(e.indexOf("Misc")!=-1)
			{
				miscCost-=deleteDebit;
				miscDisplay.innerHTML=("Misc- "+miscCost);
			}
			list.removeChild(node);
			i=0;
		});
	}
	else
	{
		debitValid.style.display=("block");
	}
});

submitCredit.addEventListener("click",function(){
	if(creditDate.checkValidity()==true&&creditDescription.checkValidity()==true&&received.checkValidity()==true)
	{
		var node=document.createElement("LI");
		var node1=document.createElement("LI");
		var del=document.createElement("INPUT");
		del.setAttribute("type","button");
		del.setAttribute("value","X");
		del.style.border=("none");
		del.style.color=("red");
		var textnode=document.createTextNode(received.value+" ");
		var textnode1=document.createTextNode((("  ")+(creditDate.value.slice(8,10))+("-")+(creditDate.value.slice(5,7))+("-")+(creditDate.value.slice(0,4)))+"    "+creditDescription.value);
		node.classList.add("l1");
		node1.classList.add("l2");
		node.appendChild(textnode);
		node.appendChild(del);
		node1.appendChild(textnode1);
		node.appendChild(node1);
		node.style.margin=("5px auto");
		node.style.width=("100%");
		node.classList.add("listItem");
		node.classList.add("list-group-item");
		node.classList.add("rounded");
		node.style.fontWeight=("400");
		hide.style.display=("none");
		node.style.wordWrap=("break-word");
		node.style.backgroundColor=("rgb(152, 230, 152)");
		del.style.backgroundColor=("rgb(152, 230, 152)");
		creditCost+=Number(received.value);
		creditDisplay.innerHTML=("Credit- "+creditCost);
		list.insertBefore(node,list.childNodes[0]);
		get+=Number(received.value);
		incomeTotal.innerHTML=(get);
		tpm=Number(received.value)+Number(tpm);
		total.innerHTML=(tpm);
		creditValid.style.display=("none");
		received.value=("");
		creditDate.value=("");
		creditDescription.value=("");
		del.addEventListener("click",function(){
			var e=node.innerText;
			while(e.charAt(i)!=" ")
			{
				i++;
			}
			var deleteCredit=e.substring(0,i);
			get-=Number(deleteCredit);
			tpm-=Number(deleteCredit);
			incomeTotal.innerHTML=(get);
			total.innerHTML=(tpm);
			creditCost-=deleteCredit;
			creditDisplay.innerHTML=("Credit- "+creditCost);
			list.removeChild(node);
			i=0;
		});
	}
	else
	{
		creditValid.style.display=("block");
	}
});