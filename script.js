// Get the current day of the week (0 for Sunday, 6 for Saturday)
const today = new Date().getDay();

// Function to display only today's workout initially
function showToday() {
    document.querySelectorAll('.day').forEach(day => {
        day.style.display = 'none';
    });
    document.querySelector(`.day[data-day="${today}"]`).style.display = 'block';
}

// Show all days and toggle button visibility
function showAllDays() {
    document.querySelectorAll('.day').forEach(day => {
        day.style.display = 'block';
    });
    document.getElementById("showAllButton").style.display = "none";
    document.getElementById("standardViewButton").style.display = "block";
}

// Show only the current day's workout and toggle button visibility
function showStandardView() {
    showToday();
    document.getElementById("showAllButton").style.display = "block";
    document.getElementById("standardViewButton").style.display = "none";
}

// Initialize by showing today’s workout only
showToday();
