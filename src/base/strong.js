
let oldDate = null;
export const getStrong = key => {
	let newDate = new Date().getTime();
	if(newDate >= oldDate){
		return '';
	}
	let str = localStorage.getItem(key);
	return JSON.parse(str)
	
}
export const setStrong = (key, value, Exiper) => {
	if(typeof value == 'object'){
		value = JSON.stringify(value)
	}
	localStorage.setItem(key, value)
	oldDate = new Date().getTime() + 3*24*60*60*1000;
}
export const delStrong = key => {
	localStorage.setItem(key, '')
}
