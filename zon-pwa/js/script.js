// register the service worker if available

console.log("run script.js");

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceworker.js').then(function(reg) {
        console.log('Successfully registered the service worker', reg);
    }).catch(function(err) {
        console.warn('Error whilst registering the service worker', err);
    });
}

window.addEventListener('online', function(e) {
    console.log("You are online");
	window.location.reload();
}, false);

window.addEventListener('offline', function(e) {
    console.log("You are offline");

    var $body = document.querySelector('body')
    $body.className = 'offline';

	var xhr = new XMLHttpRequest();
	xhr.onload = function() {
	    if (xhr.status === 200) {
	        console.log("loaded offline.html");
	        $body.innerHTML = xhr.responseText;
	    }
	    else {
	        console.log('Request failed.  Returned status of ' + xhr.status);
	    }
	};
	xhr.open('GET', './offline.html');
	xhr.send();

}, false);

// check if the user is connected
if (navigator.onLine) {
    console.log("Navigator is online");
} else {
    console.log("Navigator is offline");
}