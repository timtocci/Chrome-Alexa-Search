chrome.omnibox.onInputEntered.addListener(function (text) {
	var createProperties = {
		url : "http://www.alexa.com/search?q="
		 + encodeURIComponent(text)
	};
	chrome.tabs.create(createProperties);
});
chrome.omnibox.onInputStarted
.addListener(function () {
	var suggestion = {
		description : "Search Alexa using the query: %s "
	}
	chrome.omnibox.setDefaultSuggestion(suggestion);
});
