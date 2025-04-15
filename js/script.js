function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab");
  const links = document.querySelectorAll(".sidebar a");

  tabs.forEach((tab) => tab.classList.remove("active"));
  links.forEach((a) => a.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  event.target.classList.add("active");
}

function toggleSettings() {
  document.getElementById("settings").classList.toggle("hidden");
  renderColumnSettings();
}

function renderColumnSettings() {
  const ths = document.querySelectorAll("#ordersTable th");
  const form = document.getElementById("columnForm");
  form.innerHTML = "";

  ths.forEach((th, idx) => {
    const col = th.getAttribute("data-col");
    const label = th.innerText;
    const checked = !th.classList.contains("hidden") ? "checked" : "";
    form.innerHTML += `<label><input type="checkbox" data-idx="${idx}" ${checked}> ${label}</label>`;
  });
}

function applyColumnSettings() {
  const checkboxes = document.querySelectorAll("#columnForm input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    const colIdx = checkbox.getAttribute("data-idx");
    const show = checkbox.checked;
    const th = document.querySelectorAll("#ordersTable th")[colIdx];
    const tds = document.querySelectorAll("#ordersTable tbody tr td:nth-child(" + (parseInt(colIdx)+1) + ")");

    if (!show) th.classList.add("hidden");
    else th.classList.remove("hidden");

    tds.forEach((td) => {
      if (!show) td.classList.add("hidden");
      else td.classList.remove("hidden");
    });
  });
}
