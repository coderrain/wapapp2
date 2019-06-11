let oldDate = null
export const getStrong=(key)=>{
	let str = localStorage.getItem(key)
	let newDate = new Date().getTime()
	if( newDate >= oldDate ){
		return ''
	}
	return JSON.parse(str)
}
export const setStrong =(key,value,Exipe)=>{
	if(typeof value=='object'){
		value = JSON.stringify(value)
	}
	localStorage.setItem(key,value)
	oldDate = new Date().getTime()+Exipe*24*60*60*1000
}
export const delStrong= key=>{
	localStorage.setItem(key,'')
}