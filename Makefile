error:
	echo "use 'make install' or 'make uninstall'"

install:
	kpackagetool5 --type=KWin/Script -i .

uninstall:
	kpackagetool5 --type=KWin/Script -r .

upgrade:
	kpackagetool5 --type=KWin/Script -u .
