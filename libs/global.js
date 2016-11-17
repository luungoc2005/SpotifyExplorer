var spotify = spotify || {};
var animations = animations || {};
var global = global || {};
var controls = controls || {};

(function (global, $) {
	defaults = { // constants
		max_results: 6
	}

	markups = { // HTML tag IDs
		search_box: "searchBox",
		results_box: "searchResults",
		search_item: "search_item",
		search_id: "search-id-"
	}
})(global, jQuery)