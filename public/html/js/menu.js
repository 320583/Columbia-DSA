// Optional enhancement for the mobile Menu (<details>). The menu opens, closes
// and is fully keyboard-operable without this file; this adds the dropdown
// behaviour people expect: Escape closes it (and returns focus to the button),
// as does clicking or tabbing away.
for (const menu of document.querySelectorAll(".menu")) {
  const button = menu.querySelector("summary");

  menu.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.open) {
      event.preventDefault();
      menu.open = false;
      button.focus();
    }
  });

  menu.addEventListener("focusout", (event) => {
    if (menu.open && event.relatedTarget && !menu.contains(event.relatedTarget)) {
      menu.open = false;
    }
  });

  document.addEventListener("click", (event) => {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });
}
