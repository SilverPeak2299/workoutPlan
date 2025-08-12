// Get the current day of the week (0 for Sunday, 6 for Saturday)
const today = new Date().getDay();

// Exercise descriptions mapping
const exerciseDescriptions = {
  "Jog": "Light jogging to warm up the body and increase heart rate gradually.",
  "High Knee Skip": "Skip while driving knees up high, focusing on rhythm and coordination.",
  "Triple A": "Quick, alternating leg movements focusing on agility and footwork.",
  "Broad Jump": "Jump as far forward as possible from a standing position, landing softly.",
  "45 Degree Hop and Stick": "Hop at a 45-degree angle and stick the landing for 1 second. Start on alternate legs with silent landings.",  "Hill Run": "Short sprints up a 6m hill. Walk down slowly between reps to recover breathing. Focus on fast feet with step length similar to fencing steps.",
  "Ankle Circles": "Circular movements of the ankles to improve mobility and flexibility.",
  "Calf Stretches": "Static stretches for calf muscles to improve flexibility and reduce tension.",
  "Superman": "Lie prone and lift chest and legs off ground, holding for 10 seconds to stretch hamstrings.",
  "Twinkle Toes": "Quick, light steps on the balls of your feet to activate calf muscles and improve foot speed.",
  "Body Squat": "Bodyweight squats focusing on proper form and mobility.",
  "Athletic Lunge with Torso Turn": "Lunge forward while rotating torso, improving mobility and coordination.",  "Step Forward, Then Backward": "Technical practice of fencing step movements, slow and perfect form.",
  "Push Back from Split Lunge": "From split lunge position, explosively push back. 3 sets on each leg, alternating.",  "Lateral Hop": "Hop sideways as high and far as possible, no stick landing required.",
  "Single Leg Squat": "Squat on one leg, no deeper than thigh horizontal. Progress by holding dumbbells.",
  "Barbell Squat": "Traditional barbell back squat focusing on proper form and depth control.",
  "Cossack Squat": "Side lunge squat movement, holding weight if possible.","RDL with Dumbbell": "Romanian deadlift using dumbbells, focusing on hamstring engagement.",
  "Glute Bridge": "Bridge exercise focusing on glute activation.",
  "Cable Hamstring Kickback": "Cable machine exercise targeting hamstrings and glutes with controlled kicking motion.",
  "Push Up": "Standard push-ups. Progress if easy.",
  "Pull Up": "Pull-ups using assistance band as needed.",
  "Side Plank": "Hold side plank position. Use opposite hand for increased difficulty.",
  "Horse": "Isometric hold position for tendon strength.",  "Bent Leg Isometric": "Hold bent leg position isometrically.",
  "Ankle Dorsiflexion Stretches": "Stretches targeting the front of the ankle to improve dorsiflexion range of motion.",
  "Calf Stretches with Ankle Mobility": "Combined calf stretching and ankle mobility exercises for improved flexibility.",
  "Finger Isometrics": "Isometric holds using fingers for grip strength.",
  "Wrist Dumbbell Raise": "Wrist curls using dumbbells in all 4 directions.",
  "Inverted Wrist Dumbbell Raise": "Reverse wrist curls targeting extensors.",
  "Wind Weight Up & Down": "Wind weight up and down in both directions.",
  "Wrist Radial Deviation": "Wrist movement toward thumb side.",
  "Wrist Ulnar Deviation": "Wrist movement toward pinky side.",
  "Hold End of Dumbbell": "Grip end of dumbbell horizontally, 3-finger hold if possible."
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

// Toggle auxiliary exercises section
function toggleAuxiliary() {
  const content = document.getElementById('auxiliary-content');
  const icon = document.querySelector('.toggle-icon');
  
  if (content.style.display === 'none') {
    content.style.display = 'block';
    icon.textContent = '▼';
  } else {
    content.style.display = 'none';
    icon.textContent = '▶';
  }
}

// Initialize by showing today’s workout only
showToday();

// Add click event listeners to all exercise buttons
document.querySelectorAll('button.exercise').forEach(button => {
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

// Initialize auxiliary section as collapsed
document.addEventListener('DOMContentLoaded', function() {
  const auxiliaryContent = document.getElementById('auxiliary-content');
  const toggleIcon = document.querySelector('.toggle-icon');
  if (auxiliaryContent && toggleIcon) {
    auxiliaryContent.style.display = 'none';
    toggleIcon.textContent = '▶';
  }
});
