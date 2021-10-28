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
	constructor(event){
		this.event = event;
	}

	mousedown(event){
		console.log(event);
	}
};

//Folder 속성과 행동 정의
class Folder {
	
};

//보여지는 화면 관련한 속성과 행동 정의
class Window {
	
};
