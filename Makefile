bin							:= $(shell npm bin)
browserify			:= $(bin)/browserify shoutout.js

bundle:
	mkdir -p dist
	$(browserify) --standalone shoutout > dist/shoutout.umd.js

clean:
	rm -rf dist

test:
	node ./test/node.js

.PHONY: test
