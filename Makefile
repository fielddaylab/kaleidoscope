.PHONY: list deploy

list:
	@echo "Run 'make deploy' to upload."

deploy:
	rsync -vrc * .htaccess mli-field@fielddaylab.wisc.edu:/httpdocs/kaleidoscope --exclude-from rsync-exclude
