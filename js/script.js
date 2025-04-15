function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  document.getElementById(tabId).classList.add("active");
}

// Toggle phần chọn cột
function toggleSettings() {
  document.getElementById("settings").classList.toggle("hidden");
  renderColumnSettings();
}

// Hiển thị danh sách checkbox theo các cột đang có
function renderColumnSettings() {
  const ths = document.querySelectorAll("#ordersTable th");
  const form = document.getElementById("columnForm");
  form.innerHTML = ""; // Clear cũ

  ths.forEach((th, idx) => {
    const col = th.getAttribute("data-col");
    const label = th.innerText;
    const checked = !th.classList.contains("hidden") ? "checked" : "";
    form.innerHTML += \`<label><input type="checkbox" data-idx="\${idx}" \${checked}> \${label}</label><br>\`;
  });
}

// Ẩn/Hiện các cột
function applyColumnSettings() {
  const checkboxes = document.querySelectorAll("#columnForm input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    const colIdx = checkbox.getAttribute("data-idx");
    const show = checkbox.checked;

    // Ẩn/Hiện tiêu đề
    const th = document.querySelectorAll("#ordersTable th")[colIdx];
    if (!show) th.classList.add("hidden");
    else th.classList.remove("hidden");

    // Ẩn/Hiện tất cả ô td theo cột
    const tds = document.querySelectorAll("#ordersTable tbody tr td:nth-child(" + (parseInt(colIdx)+1) + ")");
    tds.forEach((td) => {
      if (!show) td.classList.add("hidden");
      else td.classList.remove("hidden");
    });
  });
}
