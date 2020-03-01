var query = '';

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function hasClass(ele, cn) {
	const regex = new RegExp('(\\s|^)' + cn + '(\\s|$)');
	return !!ele.className.match(regex);
}

function addClass(ele, cn) {
	if (ele.className !== "") {
		ele.className += " ";
	}
	ele.className += cn;
}

function removeClass(ele, cn) {
	const regex = new RegExp('(\\s|^)' + cn + '(\\s|$)');
	ele.className = ele.className.replace(regex, ' ').trim();
}

function toggleMarked(ele) {
	if(hasClass(ele, 'marked'))
		removeClass(ele, 'marked');
	else
		addClass(ele, 'marked');
}

async function queryElements(newQuery) {
	let elems;

	// if(query === newQuery)
	// 	return;

	// select all old query marked elements
	if(query !== '' && query !== undefined && query !== null) {
		if(query === ":root")
			elems = document.querySelectorAll('.itemBox');
		else
			elems = document.querySelectorAll('.itemBox .marked');

		elems.forEach((ele, index) => {
    		toggleMarked(ele);
    	});
	}

	// sleep for 200ms
	await sleep(200);

	// select all new query elements
	if(newQuery !== '' && newQuery !== undefined && newQuery !== null) {
		if(newQuery === ":root")
			elems = document.querySelectorAll('.itemBox');
		else if(newQuery === "input:read-only") {
			elems = document.querySelectorAll('.itemBox input[readonly]');
		}
		else if(newQuery === "input:read-write") {
			elems = document.querySelectorAll('.itemBox input:not([readonly]):not([disabled])');
		}
		else
			elems = document.querySelectorAll(`.itemBox ${newQuery}`);
		elems.forEach((ele, index) => {
    		toggleMarked(ele);
    	});
	}
	query = newQuery;
	
}