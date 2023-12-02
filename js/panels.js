function getPanelPosition(panel) {
  return panel.getBoundingClientRect();
}

function getPanelWidth(panel) {
  return panel.offsetWidth;
}

function togglePanel(panel) {
  if (getPanelPosition(panel).left >= 0) {
    panel.style.left = "-" + getPanelWidth(contentsPanel) + "px";
  } else {
    panel.style.left = '0';
  }
}
