function getPanelPosition(panel) {
  return panel.getBoundingClientRect();
}

function getPanelWidth(panel) {
  return panel.offsetWidth;
}

function togglePanel(panel) {
  if (getPanelPosition(panel).left >= 0) {
    // hide
    panel.style.left = "-" + getPanelWidth(contentsPanel) + "px";
  } else {
    // show
    panel.style.left = '0';
  }
}
