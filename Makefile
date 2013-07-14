bin							:= $(shell npm bin)
browserify			:= $(bin)/browserify shoutout.js

bundle:
	mkdir -p dist
	$(browserify) --standalone shoutout > dist/shoutout.umd.js

clean:
	rm -rf dist

test:
	node ./test/node.js

test-browser:
	brofist-browser serve test/specs

docs:
	cd docs && make html

report:
	$(bin)/plato -t "Shoutout - source analysis" -l .jshintrc -d report shoutout.js

coverage:
	$(bin)/istanbul cover test/tap.js --print none

release:
	$(MAKE) report
	npm publish

.PHONY: test test-browser docs coverage report release
