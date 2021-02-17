.PHONY: all run build fmt install package

all: install fmt build run

run:
	@yarn electron .
build:
	@yarn tsc
fmt:
	@yarn prettier . --write
install:
	@yarn install
package: build
	@npx electron-packager . "YouTube Music" \
		--platform=darwin \
		--overwrite \
		--arch=x64 \
		--icon=./youtube_social_circle_red.icns
