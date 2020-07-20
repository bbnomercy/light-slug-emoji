function removeEmoji(text){
	return text.toString().toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/\./g,'')
		.replace(/([\u1F60-\u1F64]|[\u2702-\u27B0]|[\u1F68-\u1F6C]|[\u1F30-\u1F70]{\u2600-\u26ff})/g,'')
		.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '')
		.replace(/[^\u0100-\uFFFF\w\-]/g,'-')
		.replace(/\-\-+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '');
}

module.exports = removeEmoji;