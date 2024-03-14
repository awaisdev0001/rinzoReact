# Install packages.
install:
	docker run -it --rm \
		--name=rinzo-web-app-install \
		-v $(shell pwd):/rinzo/src \
		-w /rinzo/src \
		node:19 \
		yarn install

# Start development server.
start:
	docker run -it --rm \
		--name=rinzo-web-app \
		-p 3000:3000 \
		-v $(shell pwd):/rinzo/src \
		-w /rinzo/src \
		node:19 \
		yarn start

# Build production bundle.
build:
	docker run -it --rm \
		--name=rinzo-web-app-build \
		-v $(shell pwd):/rinzo/src \
		-w /rinzo/src \
		node:19 \
		yarn build

# Run tests.
test:
	docker run -it --rm \
		--name=rinzo-web-app-test \
		-v $(shell pwd):/rinzo/src \
		-w /rinzo/src \
		node:19 \
		yarn test

# Update yarn to latest stable version.
update-yarn:
	docker run -it --rm \
		--name=rinzo-web-app-update-yarn \
		-v $(shell pwd):/rinzo/src \
		-w /rinzo/src \
		node:19 \
		yarn set version stable
