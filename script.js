const circleProgress = document.querySelector(".circle-progress");
const numberOfBreath = document.querySelector(".breath-input");
const start = document.querySelector(".start");
const instruction = document.querySelector(".instructions");
const breathText = document.querySelector(".breaths-text");
let breathsLeft = 3;

// Watching for Selected Breath From User
numberOfBreath.addEventListener("change", () => {
  breathsLeft = numberOfBreath.value;
  breathText.innerText = breathsLeft;
});

// Grow/Shrink Circle
const growCircle = () => {
  circleProgress.classList.add("circle-grow");
  setTimeout(() => {
    circleProgress.classList.remove("circle-grow");
  }, 8000);
};

//Breathing instruction
const breathTextUpdate = () => {
  breathsLeft--;
  breathText.innerText = breathsLeft;
  instruction.innerText = "Breath in";
  setTimeout(() => {
    instruction.innerText = "Hold Breath";
    setTimeout(() => {
      instruction.innerText = "Exhale breath slowly";
    }, 4000);
  }, 4000);
};

// Breathing App Function
const breathingApp = () => {
  const breathingAnimation = setInterval(() => {
    if (breathsLeft === 0) {
      clearInterval(breathingAnimation);
      instruction.innerText =
        "Breathing session completed. Click 'Begin' to start a new session";
      start.classList.remove("button-inactive");
      breathsLeft = numberOfBreath.value;
      breathText.innerText = breathsLeft;
      return;
    }
    growCircle();
    breathTextUpdate();
  }, 12000);
};

// Start Breathing
start.addEventListener("click", () => {
  start.classList.add("button-inactive");
  instruction.innerText = "Get relaxed, and ready to beging breathing";
  setTimeout(() => {
    instruction.innerText = "Breathing is about to begin...";
    setTimeout(() => {
      breathingApp();
      growCircle();
      breathTextUpdate();
    }, 2000);
  }, 2000);
});
