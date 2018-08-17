function makeWords() {

	var words = [{
			text: "html5",
			weight: 12.2
		}, {
			text: "css3",
			weight: 12.2
		}, {
			text: "javascript",
			weight: 13
		}, {
			text: "jquery",
			weight: 11
		}, {
			text: "programming",
			weight: 10
		}, {
			text: "python",
			weight: 8.5
		}, {
			text: "java",
			weight: 8.5
		}, {
			text: "nodejs",
			weight: 9
		}, {
			text: "npm",
			weight: 9
		}, {
			text: "web development",
			weight: 10.7
		}, {
			text: "php",
			weight: 10
		}, {
			text: "responsive design",
			weight: 11
		}, {
			text: "bootstrap",
			weight: 10
		}, {
			text: "material design",
			weight: 10
		}, {
			text: "skeleton",
			weight: 9
		}
		/* ... */
	];
	return words;
}

function makeWordCloud(words) {
	$('.teaching-domains').jQCloud(words, {
		delay: 120
	});
}

function displayWordCloud() {
	var count = 1;
	$(window).on('scroll', function () {
		var y_scroll_pos = window.pageYOffset;
		var scroll_pos_test = 2700; // set to whatever you want it to be
		var words = makeWords();
		if (y_scroll_pos > scroll_pos_test && count <= 1) {
			makeWordCloud(words);
			count++;
		}
	});
}

function designForm() {
	$("#my-modal form").addClass("my-form");
}

$(document).ready(function () {
	Typed.new("#writing-text", {
		strings: [
			"am a Front End Web Developer.", "love coding.", "provide solutions."
		],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 1,
		dataType: 'jsonp',
		contentType: 'application/javascript',
		callback: function () {
			$("#writing-text").css({
				"color": "#fff",
				"background-color": "#C8412B"
			});
		},
		preStringTyped: function () {},
		onStringTyped: function () {}
	});

	displayWordCloud();
})