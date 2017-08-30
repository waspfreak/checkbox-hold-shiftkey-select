
let checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
	//check if they has shift key down

	//and check that they are chcking it
	let inBetween = false;
  	if (e.shiftKey && this.checked) {
		//go ahead and do what we please
		//loop over every songle checkbox
		checkboxes.forEach(checkbox => {
			console.log(checkbox);
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
				//console.log("between");
			}

			if (inBetween) {
        		checkbox.checked = true;
      		}

		});
	}

lastChecked = this;

}

function selectAll(source) {
		checkboxes = document.getElementsByName('input');
		for(var i in checkboxes)
			checkboxes[i].checked = source.checked;
		//console.log('done')
};



checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

