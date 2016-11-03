.PHONY: deploy
deploy:
	rsync -vrc * .htaccess mli-field@fielddaylab.wisc.edu:/httpdocs/kaleidoscope --exclude-from rsync-exclude
