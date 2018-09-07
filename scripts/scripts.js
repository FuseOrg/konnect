(function () {
	'use strict';
	var dialog = document.querySelector('dialog');
	var showModalButton = document.querySelector('.show-modal');
	if (!dialog.showModal) {
		dialogPolyfill.registerDialog(dialog);
	}
	showModalButton.addEventListener('click', function () {
		dialog.showModal();
	});
	dialog.querySelector('.close').addEventListener('click', function () {
		dialog.close();
	});
	var snackbarContainer = document.querySelector('#demo-snackbar-example');
	var showSnackbarButton = document.querySelector('#demo-show-snackbar');
	var buttons = document.querySelectorAll('.mdl-button--accent');
	var handler = function (event) {
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.backgroundColor = '#2979FF';
		}
	};

	showSnackbarButton.addEventListener('click', function () {
		'use strict';
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.backgroundColor = '#' + '03a9f4';
		}
		var data = {
			message: 'Accent color changed!',
			timeout: 10000,
			actionHandler: handler,
			actionText: 'Undo'
		};
		snackbarContainer.MaterialSnackbar.showSnackbar(data);
	});

	window['counter'] = 0;
	var snackbarContainer = document.querySelector('#demo-toast-example');
	var showToastButton = document.querySelector('#demo-show-toast');
	showToastButton.addEventListener('click', function () {
		'use strict';
		var data = {
			message: 'Toast #' + ++counter,
			timeout: 5000
		};
		snackbarContainer.MaterialSnackbar.showSnackbar(data);
	});
}());
