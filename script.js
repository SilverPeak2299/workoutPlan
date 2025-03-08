// Get the current day of the week (0 for Sunday, 6 for Saturday)
const today = new Date().getDay();

// Exercise descriptions mapping
const exerciseDescriptions = {
  "Depth Jumps": "A depth jump involves stepping off a small box or platform, landing with both feet, and immediately jumping vertically as explosively as possible. Focus on soft landings and controlled movements to minimize impact.",
  "Bounding": "Bounding is a form of exaggerated running where you focus on long strides and explosive push-off for distance, improving power and coordination.",
  "Lateral Skater Jumps": "Lateral skater jumps mimic the side-to-side movement in skating, focusing on balance, lateral power, and landing softly on one foot.",
  "Ankle Hops": "Quick, low-intensity hops that focus on ankle stiffness and strength. Keep movements controlled.",
  "Ladder Drills": "Agility ladder drills enhance foot speed and coordination. Move your feet in various patterns through the ladder.",
  "Cone Sprints": "Short sprints between cones that focus on quick acceleration and deceleration.",
  "Reactive Drop Jumps": "Drop from a low platform and immediately jump upon landing, focusing on minimizing ground contact time.",
  "Single-Leg Hop & Hold": "Perform a single-leg hop focusing on a soft landing and hold the position briefly to enhance stability.",
  "Hamstring Isometric Bridge Holds": "Hold a bridge position with emphasis on contracting your hamstrings and glutes.",
  "Banded Ankle Eversions/Inversions": "Using a resistance band, perform controlled ankle eversion and inversion movements to strengthen the stabilizing muscles of the ankle.",
  "Push-Ups": "A classic bodyweight exercise that strengthens the chest, shoulders, and triceps. Maintain a straight line from head to toe.",
  "Pull-Ups": "An exercise targeting the back and biceps. Pull your chin above the bar with control.",
  "Russian Twists": "Sit on the floor with knees bent and twist your torso from side to side, optionally holding a weight, to work your obliques.",
  "YTW Raises": "Perform Y, T, and W motions with light dumbbells or bands to strengthen the upper back and improve shoulder stability.",
  "Wrist Curls": "Use a barbell or dumbbell to perform wrist curls, focusing on the flexor muscles of the forearm.",
  "Reverse Wrist Curls": "Target the extensor muscles of the forearm with reverse wrist curls.",
  "Plate Pinch Holds": "Hold weight plates between your fingers to build pinch grip strength.",
  "Finger Extensions": "Use a rubber band around your fingers to work the extensor muscles.",
  "Hanging Bar Holds": "Hang from a bar with a firm grip for time to enhance grip endurance.",
  "Back Squats": "A fundamental lower-body exercise focusing on the quads, hamstrings, and glutes. Keep your core engaged and back straight.",
  "Hip Thrusts": "Focus on glute activation by thrusting your hips upward from a bench or floor while keeping your feet flat.",
  "Romanian Deadlifts": "A hamstring-focused movement performed with controlled motion. Maintain a slight bend in the knees and hinge at the hips.",
  "Calf Raises": "Perform standing or seated calf raises to strengthen the calf muscles. Full range of motion is key.",
  "Banded Lateral Walks": "With a resistance band around your legs, take controlled lateral steps to engage your hip abductors and improve ankle stability.",
  "Single-Leg Balance & Reach": "Improve balance by standing on one leg and reaching forward, challenging your stability and control.",
  "Nordic Curls": "Focus on hamstring strength with a controlled eccentric movement. Nordic curls are advanced; hamstring curls are a great alternative.",
  "Hamstring Curls": "Focus on hamstring strength with a controlled eccentric movement. Nordic curls are advanced; hamstring curls are a great alternative."
};

// Function to display only today's workout initially
function showToday() {
  document.querySelectorAll('.day').forEach(day => {
    day.style.display = 'none';
  });
  // For days labeled by weekday name, adjust logic if needed.
  // Here we assume 'today' (0-6) maps to weekday names:
  const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayName = weekdayNames[today];
  const todayDay = document.querySelector(`.day[data-day="${todayName}"]`);
  if (todayDay) {
    todayDay.style.display = 'block';
  } else {
    // Fallback: show all if current day not found
    showAllDays();
  }
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

// Add click event listeners to all exercise buttons
document.querySelectorAll('.day button').forEach(button => {
  button.addEventListener('click', function() {
    console.log("Exercise clicked:", button.textContent);
    const text = button.textContent;
    let found = false;
    for (let key in exerciseDescriptions) {
      if (text.indexOf(key) !== -1) {
        alert(key + ": " + exerciseDescriptions[key]);
        found = true;
        break;
      }
    }
    if (!found) {
      alert("No description available for this exercise.");
    }
  });
});
