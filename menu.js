const { app, Menu, shell } = require("electron");

module.exports = function() {
  var template = [
    {
      label: "Gmail",
      submenu: [
        { label: "About Gmail", role: "about" },
        { type: "separator" },
        { label: "Services", role: "services", submenu: [] },
        { type: "separator" },
        { label: "Hide Gmail", accelerator: "Command+H", role: "hide" },
        {
          label: "Hide Others",
          accelerator: "Command+Alt+H",
          role: "hideothers"
        },
        { label: "Show All", role: "unhide" },
        { type: "separator" },
        {
          label: "Quit",
          accelerator: "Command+Q",
          click: function() {
            app.quit();
          }
        }
      ]
    },
    {
      label: "Edit",
      submenu: [
        { label: "Undo", accelerator: "CmdOrCtrl+Z", role: "undo" },
        { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", role: "redo" },
        { type: "separator" },
        { label: "Cut", accelerator: "CmdOrCtrl+X", role: "cut" },
        { label: "Copy", accelerator: "CmdOrCtrl+C", role: "copy" },
        { label: "Paste", accelerator: "CmdOrCtrl+V", role: "paste" },
        {
          label: "Paste and match style",
          accelerator: "Shift+CmdOrCtrl+V",
          selector: "pasteAndMatchStyle:"
        },
        { label: "Select All", accelerator: "CmdOrCtrl+A", role: "selectall" }
      ]
    },
