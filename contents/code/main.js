// KWin script to switch to the last used desktop
var lastDesktop = 1;


/* Listen for switch desktop signal */
workspace.currentDesktopChanged.connect(function(desktop) {
  lastDesktop = desktop;
});

/**
 * switch to last used desktop
 */
function switchDesktop() {
  workspace.currentDesktop = lastDesktop;
  return;
}

/* Register shortcut */
registerShortcut('Switch to last used desktop', "", "", function() { switchDesktop(); });

