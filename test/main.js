require.config({
	paths: {
		cldr: "../external/cldr/dist/cldr.runtime",
		fixtures: "./fixtures",
		globalize: "../src",
		json: "../external/requirejs-plugins/src/json",
		text: "../external/requirejs-text/text"
	}
});

require([

	/* datetime */
	"./spec/datetime/format"

], function() {
	// TODO why can't use this instead of autostart? QUnit.start();
});

