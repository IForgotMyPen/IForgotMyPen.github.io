function changeTab(newTabId) {
    document.querySelectorAll('.tab').forEach((tab) => tab.classList.remove('active-tab'));

    document.querySelector(`#${newTabId}`).classList.add('active-tab');
}