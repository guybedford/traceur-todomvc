production:
	traceur --dir js js-built --modules=amd
	r.js -o name=js/app out=app-built.js paths.js=js-built
	rm -r js-built
