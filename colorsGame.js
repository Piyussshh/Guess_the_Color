var numSquare=6;
var colors=[];
var squares=document.querySelectorAll(".square");

var colorDisplay=document.getElementById("colorDisplay"); 

var pickedColor;
 
 var message=document.querySelector("#message");
 var h1=document.querySelector("h1");
 var resetBtn= document.querySelector("#reset");
 var modeBtn=document.querySelectorAll(".mode");

// colorDisplay.textContent=pickedColor;

init();

function init()
{
	setUpMode();
    setUpSquares();

    reset();



}

function setUpSquares()
{
	for(var i=0;i<squares.length;i++)
{

	//add intial color to square
	squares[i].style.backgroundColor=colors[i];

	//add click listener to sqaure
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		


		if(clickedColor==pickedColor)
		{
			
			  colorChange(pickedColor);
			  message.textContent="correct";
			  h1.style.backgroundColor=pickedColor;
			  reset.textContent="Play again?"
		}
		else
		{
			

			this.style.backgroundColor="#232323";
			 message.textContent="Try again!";
		}

	}); 
}
}


function setUpMode()
{
	for(var i=0;i<modeBtn.length;i++)
{
	modeBtn[i].addEventListener("click", function(){

		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		this.classList.add("selected");

        this.textContent == "Easy" ? numSquare = 3: numSquare = 6;
   
		// if(this.textContent==="Easy")
		// {
		// 	numSquare=3;
		// }
		// else
		// {
		// 	numSquare=6;
		// }
       
       reset();

       //figure out how many squares
       //pick new colors
       //pick a new picked color
       //update the page again
       //so we will build a function



	});
}
}



function reset(){
	colors=generateRandom(numSquare);
pickedColor=picker();
colorDisplay.textContent=pickedColor;
h1.style.backgroundColor="steelblue";
resetBtn.textContent="New color";
 message.textContent="";


for(var i=0;i<squares.length;i++)
{

	
	//add intial color to square
	if(colors[i])
	{
	squares[i].style.display= "block" ;
	squares[i].style.backgroundColor=colors[i];

    }
    else
    {
    	squares[i].style.display= "none" ;
    }

	}

};

// easyBtn.addEventListener("click",function(){
// 	 message.textContent="";
//      h1.style.backgroundColor="steelblue";
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquare=3;
// 	colors=generateRandom(numSquare);
// 	pickedColor=picker();
// 	colorDisplay.textContent=pickedColor;
//     for(var i=0;i<squares.length;i++)
//     {
//     	if(colors[i])
//     	{
//           squares[i].style.backgroundColor=colors[i];
//     	}
//     	else
//     	{
//     		squares[i].style.display= "none";
//     	}
//     }

// });


// hardBtn.addEventListener("click",function(){
// 	 message.textContent="";
// 	 h1.style.backgroundColor="steelblue";
	
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquare=6;
// 	colors=generateRandom(numSquare);
// 	pickedColor=picker();
// 	colorDisplay.textContent=pickedColor;
//     for(var i=0;i<squares.length;i++)
//     {
    	
    	
//           squares[i].style.backgroundColor=colors[i];
//           squares[i].style.display= "block";
    	
    	
//     }

// });

resetBtn.addEventListener("click",function(){
   
  // generate all new color
  //pick a new random color
  //


reset();

});

function colorChange(color)
{
	for(var i=0;i<squares.length;i++)
{

	//add intial color to square
	squares[i].style.backgroundColor=color;

}
}

function picker()
{
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];

}

// [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ]

function generateRandom(num)
{
    //make an array with paramenter
    // return the array

    var arr=[];
   
   for(var i=0;i<num;i++)
   {
       arr.push(randomColor());
   }




    return arr;
}

 function randomColor(){

// picke a red to 0-255;
// pick a blue 0-255;
//pick a green 0-255;

var r =Math.floor(Math.random()*256);
var g =Math.floor(Math.random()*256);
var b =Math.floor(Math.random()*256);

return "rgb(" + r +  ", " + g + ", " + b + ")";

 }