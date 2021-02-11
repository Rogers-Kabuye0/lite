	function syntaxy(){
		var ca = document.getElementsByTagName("code");
		for (var i=0; i < ca.length; i++) {
			var data = ca[i].innerHTML;

			data = data.replace(/"(.*?)"/g, '<span class="code-str">&quot;$1&quot;</span>');
			data = data.replace(/&lt;(.*?)&gt;/g, '<span class="code-elem">&lt;$1&gt;</span>');
			data = data.replace(/\/\* (.*?) \*\//g, '<span class="code-comment">/* $1 */</span>');
			
			ca[i].innerHTML = data;
		}
	}

	window.addEventListener('load', syntaxy);

