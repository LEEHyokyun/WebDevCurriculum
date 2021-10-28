//바탕화면 생성자(아이콘, 폴더 개수)
class Desktop {
	constructor(iconNumber, folderNumber) {
		this.iconNumber = iconNumber;
		this.folderNumber = folderNumber;
	}

	makeIcon() {
		console.log(this.iconNumber);
	}

	makeFolder() {
		console.log(this.folderNumber);
	}
};

//Icon 속성과 행동 정의
class Icon {
	constructor(isClicked, offsetX, offsetY, currentObject){
		this.isClicked = isClicked;
		this.offsetX = offsetX;
		this.offsetY = offsetY;
		this.currentObject = currentObject;
	}

	mousedown(e){
		if(e.target.classList.contains('box')){
			this.isClicked = true
			this.offsetX = e.offsetX;
			this.offsetY = e.offsetY;
			this.currentObject = e.target;
		}
	}

	mousemove(e){
		if(this.isClicked == true){
			this.currentObject.style.position = 'absolute';
			this.currentObject.style.left = e.pageX - this.offsetX + 'px';	
			this.currentObject.style.top = e.pageY - this.offsetY + 'px';
		}else{
			return ;
		}
	}

	mouseup(){
		this.isClicked = false;
	}
};

//Folder 속성과 행동 정의
class Folder {
	constructor(isClicked, offsetX, offsetY, currentObject){
		this.isClicked = isClicked;
		this.offsetX = offsetX;
		this.offsetY = offsetY;
		this.currentObject = currentObject;
	}

	mousedown(e){
		if(e.target.classList.contains('button')){
			
			this.isClicked = true
			this.offsetX = e.offsetX;
			this.offsetY = e.offsetY;
			this.currentObject = e.target;
		}else if(e.target.classList.contains('folderContent')){
			
			this.isClicked = true
			this.offsetX = e.offsetX;
			this.offsetY = e.offsetY;
			this.currentObject = e.target;
		}
	}

	mousemove(e){
		if(this.isClicked == true){
			this.currentObject.style.position = 'absolute';
			this.currentObject.style.left = e.pageX - this.offsetX + 'px';	
			this.currentObject.style.top = e.pageY - this.offsetY + 'px';
		}else{
			return ;
		}
	}

	mouseup(){
		this.isClicked = false;
	}

	//activatie folder window
	getFolderWindow(e, folderWindow){
		if(e.target.classList.contains('button')){
			folderWindow.classList.remove('hidden');
		}
	}

	removeFolderWindow(folderWindow){
		folderWindow.classList.add('hidden');
	}

};

//보여지는 화면 관련한 속성과 행동 정의
class Window {
	
};
