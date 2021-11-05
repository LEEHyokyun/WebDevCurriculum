class tabAction {
	constructor(){
		this.checkList = checkList;
		this.clickAreas = clickAreas;
		this.connectTabstoContent = connectTabstoContent;
		this.connectContentstoTabs = connectContentstoTabs;
	}

	setTabClicked(checkList, clickAreas, connectContentstoTabs){

		for(let element of clickAreas){
			element.addEventListener('click', (e)=>clickEvent(e));
		}		

		function clickEvent(e) {
			//let contentTarget = document.querySelector(e.dataset.tabTarget);
			//ntentTarget.classList.add('.display')
			//initial state
			if(checkList.length == 0){
				checkList.push(e.target.id);
				e.target.classList.toggle('contentLine');
			//click itself
			}else if(checkList.length > 0 && checkList.includes(e.target.id)){
				checkList.pop(e.target.id);
				e.target.classList.remove('contentLine');
				removeContentEvent(e);
			//click others
			}else if(checkList.length > 0 && !(checkList.includes(e.target.id))){
				let previousObject = document.getElementById(checkList[0]);
				previousObject.classList.toggle('contentLine');
				e.target.classList.toggle('contentLine');

				checkList.pop();
				checkList.push(e.target.id);
				}

			function removeContentEvent(e){
				let targetTab = document.getElementById(e.target.id);
				let targetContentId = targetTab.dataset.tabTarget;
				let targetContent = document.getElementById(targetContentId.split('#')[1]);		
					
				targetContent.classList.add('display');		
			}
		};

		
	}

	setContentWithTabsClicked(connectTabstoContent, connectContentstoTabs){
		//for content click event
		for(let tab of connectTabstoContent){
			tab.addEventListener('click', ()=>{
				//target = data-tab-content
				const target = document.querySelector(tab.dataset.tabTarget);
				for(let content of connectContentstoTabs){
					content.classList.add('display');
				}
				target.classList.remove('display');
			})
		}
	}
	
};

class fileUpload{
	constructor(reader, preview, fileInput){
		this.reader = reader;
		this.preview = preview;
		this.fileInput = fileInput;
	}

	setUploadFile(reader, preview, fileInput){
		fileInput.addEventListener('change', whenfileReaderSelected);

		function handleEvent(e){
			console.log('img.src');
			preview.src = reader.result;

			localStorage.setItem('0', preview.src)
		};
		

		function whenfileReaderSelected(e){
			let selectedFile = fileInput.files[0];

			if(selectedFile){
				console.log(fileInput.files)
				reader.addEventListener('load', handleEvent);
			}	
				
			console.log('image.src is ', preview.src);
			console.log('fileInput.files[0] is ', selectedFile);
				
			reader.readAsDataURL(selectedFile);
			console.log('readAsDataURL');
			};
	}
}

class fileDownloadAndSaveAs{
	constructor(){
		this.saveButton = saveButton;
		this.textArea = textArea;
		this.messageBox = messageBox;
		this.indicator = indicator;
	}

	setFileDownloadSaveAs(saveButton, textArea, messageBox, indicator){
		saveButton.addEventListener('click', ()=>{
			downloadFunction(textArea.value, 'file.txt', 'text/plain');
			messageBox.removeChild(indicator);
		})

		function downloadFunction(content, fileName, fileType){
			const a = document.createElement('a');
			const textFile = new Blob([content], {type: fileType});
		
			a.href = URL.createObjectURL(textFile);
			a.download = fileName;
			a.click();

			URL.revokeObjectURL(a.href);
		}

		textArea.addEventListener('input', indicateChangedText);

		function indicateChangedText(){		
			messageBox.appendChild(indicator);
		}
	}



}