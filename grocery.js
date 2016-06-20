var groceryItems =[
	{ name: 'pineapple',	price: '3.00'},
	{ name: 'coconut',		price: '4.00'},
	{ name: 'tequila',		price: '8.00'},
	{ name: 'lime',				price: '1.43'}
];

function updateList(){
	//Clear out the text on page
	var p = document.getElementById('grocerp');
	p.innerHTML = "";
	
	//Update the total
	var total = 0;
	for (var i = 0; i < groceryItems.length; i++) {

	 	p.innerHTML += "Name: " + groceryItems[i].name + ", Price: $" + groceryItems[i].price + '<br>'; 
	 	console.log("Name:", groceryItems[i].name, "Price: ", groceryItems[i].price);
	 	total += parseFloat(groceryItems[i].price);
	 }

	//Update the page
	p.innerHTML += "<b>Total: $" + total + "</b>";
	console.log("Total: ", total);
}

function addItem(){
	var nameIn = document.getElementById("itemName");
	var priceIn = document.getElementById("itemPrice");
	var newName = nameIn.value;
	var newPrice = priceIn.value;

	if(isNaN(newPrice)){
		alert("HEY! ENTER A NUMBER FOR ITEM PRICE >:(");
		return;
	}

	groceryItems.push({name: newName, price: newPrice});
	updateList();

	nameIn.value = "";
	priceIn.value = "";
	nameIn.placeholder = "Item Name";
	nameIn.placeholder = "Item Price";
}

updateList();

var hmar = document.getElementById("horiz");
var vmar = document.getElementById("vert");


var timeoutTime = 1000;
setInterval(function() {
	var speed = Math.random()*100;
	var xspeed = Math.random()*100;
	console.log("speed up!", speed);
	if(Math.floor(speed) === 50 ){
		speed = 500;
		console.log("WOOHOO!", speed);
		timeoutTime = 10000;
	} else if (speed < 10){
		console.log("too slow...", speed);
		speed = 10;
	}
	 else {
		timeoutTime = 1000;
	}
	hmar.scrollAmount  = xspeed;
	vmar.scrollAmount  = speed;
}, timeoutTime); // Wait 1000ms before running again

function win(){
	console.log("WINNER!");
	var win = document.getElementById("winner");
	win.innerHTML += "YOU WIN! ";
}