var colors = ["red", "orange", "purple", "yellow", "black", "green", "brown", "gray"];

var textColors = ["Красный.", "Синий.", "Зеленый."]

var number = 0

var dataInputColors = []
var dataInputRgbPlus = []
var dataRgbPlusNumbers = []
var dataColors = []

var test = []


dataA = [1]


var container = document.querySelector(".container");
var controlMenu = document.querySelector(".control-menu");
var colorsRgb = document.querySelector(".colors-rgb");
var plusRgbValue = document.querySelector(".plus-rgb-value");

var nameColors = document.createElement("div");
nameColors.classList.add("name-colors");
nameColors.innerHTML = "RGB color диапазон от 1 до 255"
colorsRgb.appendChild(nameColors);

var plusRgbValueName = document.createElement("div");
plusRgbValueName.classList.add("plus-rgb-value-name");
plusRgbValueName.innerHTML = "+RGB Value диапазон от 1 до 255"
plusRgbValue.appendChild(plusRgbValueName);


for(var i = 0; i < textColors.length; i++){
	var inputColors = document.createElement("input")
	inputColors.classList.add("input-color")
	inputColors.setAttribute("placeholder", textColors[i])
	colorsRgb.appendChild(inputColors)
	dataInputColors.push(inputColors)
}

for(var i = 0; i < dataInputColors.length; i++){
	var inputRgbValuePlus = document.createElement("input");
	inputRgbValuePlus.classList.add("input-color")
	inputRgbValuePlus.setAttribute("placeholder", textColors[i])
	plusRgbValue.appendChild(inputRgbValuePlus)
	dataInputRgbPlus.push(inputRgbValuePlus)
}


var buttonRGB = document.createElement("button");
buttonRGB.classList.add("button-rgb")
buttonRGB.innerHTML = "Применить"
colorsRgb.appendChild(buttonRGB)

var buttonRgbPlusValue = document.createElement("button");
buttonRgbPlusValue.classList.add("button-rgb")
buttonRgbPlusValue.innerHTML = "Применить"
plusRgbValue.appendChild(buttonRgbPlusValue)

var buttonRgbPlusValueAuto = document.createElement("button");
buttonRgbPlusValueAuto.classList.add("button-rgb")
buttonRgbPlusValueAuto.innerHTML = "Режим авто."
plusRgbValue.appendChild(buttonRgbPlusValueAuto)

var setColorChangeTime = document.createElement("input");
setColorChangeTime.classList.add("input-time")
setColorChangeTime.setAttribute("placeholder", "Интервал обновления цвета")
plusRgbValue.appendChild(setColorChangeTime)

var buttonSetColorChangeTime = document.createElement("button")
buttonSetColorChangeTime.classList.add("button-rgb")
buttonSetColorChangeTime.innerHTML = "Задать время"
plusRgbValue.appendChild(buttonSetColorChangeTime)

var descriptionTimeInterval = document.createElement("div");
descriptionTimeInterval.classList.add("description-time-interval");
descriptionTimeInterval.innerHTML = "1000 = 1сек: 500 = 0.5сек"
plusRgbValue.appendChild(descriptionTimeInterval)


var cub = document.createElement("div");
cub.classList.add("cub");
container.appendChild(cub);


buttonRGB.addEventListener("click", function(){
	dataColors = []
	for(var i = 0; i < dataInputColors.length; i++){
		var paramInputColors = +dataInputColors[i].value
		dataColors.push(paramInputColors)
		cub.style.background = "rgb(" + dataColors[0] + ", " + dataColors[1] + ", " + dataColors[2] + ")"
		
	}
})

buttonRgbPlusValue.addEventListener("click", function(){
	dataRgbPlusNumbers = []
	for(var i = 0; i < dataInputRgbPlus.length; i++){
		var RgbPlusNumber = +dataInputRgbPlus[i].value;
		dataRgbPlusNumbers.push(RgbPlusNumber)
			var rgbPlusOne = dataColors[0] + dataRgbPlusNumbers[0]
			var rgbPlusTwo = dataColors[1] + dataRgbPlusNumbers[1]
			var rgbPlusTree = dataColors[2] + dataRgbPlusNumbers[2]
		cub.style.background = "rgb(" + rgbPlusOne + ", " + rgbPlusTwo + ", " + rgbPlusTree + ")"
	}	

})

buttonSetColorChangeTime.addEventListener("click", function(){
	window.timerInterval = setColorChangeTime.value
})


buttonRgbPlusValueAuto.addEventListener("click", function(){

	elementStyle = document.createElement("div")
	elementStyle.classList.add("style-element")
	plusRgbValue.appendChild(elementStyle)

	dataRgbPlusNumbers = []

		for(var i = 0; i < dataInputRgbPlus.length; i++){
			var RgbPlusNumber = +dataInputRgbPlus[i].value;
			dataRgbPlusNumbers.push(RgbPlusNumber)
			var rgbPlusOne = dataColors[0] + dataRgbPlusNumbers[0]
			var rgbPlusTwo = dataColors[1] + dataRgbPlusNumbers[1]
			var rgbPlusTree = dataColors[2] + dataRgbPlusNumbers[2]
			cub.style.background = "rgb(" + rgbPlusOne + ", " + rgbPlusTwo + ", " + rgbPlusTree + ")"
		}	
	function auto(){
		for(var i = 0; i < 1; i++){
			rgbPlusOne = rgbPlusOne + dataRgbPlusNumbers[0]
			rgbPlusTwo = rgbPlusTwo + dataRgbPlusNumbers[1]
			rgbPlusTree = rgbPlusTree + dataRgbPlusNumbers[2]
			cub.style.background = "rgb(" + rgbPlusOne + ", " + rgbPlusTwo + ", " + rgbPlusTree + ")"
			var get = cub.getAttribute("style")
			elementStyle.innerHTML = get
		}
	
	}
	var autoRgb = setInterval(auto, +timerInterval)

	var buttonClearRgbAuto = document.createElement("button");
		buttonClearRgbAuto.classList.add("button-crear-rgb-auto");
		buttonClearRgbAuto.innerHTML = "Стоп";
		plusRgbValue.appendChild(buttonClearRgbAuto);

	buttonClearRgbAuto.addEventListener("click", function(){
		clearInterval(autoRgb);
	})

})



var button = document.createElement("button")
button.classList.add("button");
controlMenu.appendChild(button);
button.innerHTML = "Авто смена цвета.";

button.addEventListener("click", function(){

	function timer(){
		number++
		for(var i = 0; i < number; i++){
			cub.style.background = colors[i]
			if(number === 9){
				number = 0
			}
		}
	}
	setInterval(timer, 1000)
})
