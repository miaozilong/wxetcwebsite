requirejs.config({
	baseUrl:"../script/js/lib/",  /*如果写了baseUrl,则调用的是HTML文件的相对路径*/
	paths:{
		/*如果没有使用baseUrl则使用的是当前文件的目录的相对路径*/
		"jQuery":"jquery-1.12.4",
	}
})
