build:
	NODE_OPTIONS='--openssl-legacy-provider --inspect' ng build

build_hub:
	ng build --configuration=production
	docker build --platform linux/amd64 . -t musinit/bparser-f:latest
	docker push musinit/bparser-f:latest
