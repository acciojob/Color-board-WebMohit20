//your JS code here. If required.
let container = document.querySelector(".container");

for(let i=0;i<800;i++){
	let box = document.createElement("div");
	box.className = "square";
	container.append(box);
}
let squares=document.querySelectorAll(".square");

squares.forEach(sq=>{
	sq.addEventListener("mouseover",()=>{
		sq.style.backgroundColor=randomColor()
	})
})

squares.forEach(sq=>{
	sq.addEventListener("mouseout",()=>{
		setTimeout(()=>{
			sq.style.backgroundColor="transparent"
		},1000)
	})
})

function randomColor(){
	let alnum="1234567890ABCDEF";
	let color = "#";
	
	for(let i=0;i<6;i++){
		color+=alnum[Math.floor(Math.random()*alnum.length)];
	}
	return color;
}
