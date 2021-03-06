.PHONY: list deploy

list:
	@echo "Run 'make deploy' to upload."

deploy:
	rsync -vrc * .htaccess website.education.wisc.edu:/var/www/site/kaleidoscope --exclude-from rsync-exclude --exclude user/pages

download:
	rsync -vrc website.education.wisc.edu:/var/www/site/kaleidoscope/ . --exclude-from rsync-exclude
