function changeTab(newTabId) {
    // Change the button styling to indicate which tab is active.
    document.querySelectorAll('.tab').forEach((tab) => tab.classList.remove('active-tab'));
    document.querySelector('#tab-bar').querySelector(`#${newTabId}`).classList.add('active-tab');

    // Change the tab content to match the currently active tab.
    document.querySelectorAll('.tab-content').forEach((tab) => tab.classList.remove('active-tab-content'));
    document.querySelector('#tab-content-area').querySelector(`#${newTabId}`).classList.add('active-tab-content');
}