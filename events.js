//select h1 header
$('h1');

var setHeaderOnClick = function() {
	alert("Yo!");
}

$(document).ready(
	function(){
		$('h1:first').click(
			setHeaderOnClick
		);
	}
);


