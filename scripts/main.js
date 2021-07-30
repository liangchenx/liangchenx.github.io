/*动态更改网页标题*/
// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';

// document.querySelector('html').onclick = function(){
//     alert('别戳我，我怕疼。');
// }

/*网页添加点击弹窗*/
// let myHtml = document.querySelector('html');
// myHtml.onclick = function(){
// 	alert('别戳我，我怕疼。');
// }

/*image 点击更换图片*/
let my_image = document.querySelector('img');
my_image.onclick = function(){
	let mySrc = my_image.getAttribute('src');
	if(mySrc === 'images/firefox.jpg'){
		my_image.setAttribute('src','images/firefox2.jpg');
	}else{
		my_image.setAttribute('src','images/firefox.jpg');
	}
}

/*button 切换用户*/
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserNmae(){
	let myName = prompt('请输入你的名字：');
	if(!myName || myName === null){
		setUserNmae();
	}else{
		localStorage.setItem('name',myName);
	    myHeading.textContent = 'Mozilla 酷毙了，' + myName + '！';
	}
}
if (!localStorage.getItem('name')){
	setUserNmae();
}else{
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla 酷毙了,' + storedName + '！';
}
myButton.onclick = function(){
	setUserNmae();
}