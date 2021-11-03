class tabAction {
	constructor(){
		this.checkList = checkList;
		this.clickAreas = clickAreas;
		this.connectTabstoContent = connectTabstoContent;
		this.connectContentstoTabs = connectContentstoTabsx;
	}

	getTabClicked(checkList, clickAreas){

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
				e.target.classList.toggle('clickArea');
			//click others
			}else if(checkList.length > 0 && !(checkList.includes(e.target.id))){
				let previousObject = document.getElementById(checkList[0]);
				previousObject.classList.toggle('contentLine');
				e.target.classList.toggle('contentLine');

				checkList.pop();
				checkList.push(e.target.id);
				}
		};
	}

	getContentWithTabsClicked(connectTabstoContent, connectContentstoTabs){
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
