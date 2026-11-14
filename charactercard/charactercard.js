const character = {
  name: "Snortleblat",
  class: "Diplomat",
  level: 1,
  health: 100,

  // Method to reduce character health

  attacked() {
    this.health -= 20;

    if (this.health <= 0) {
      this.health = 0;
      alert("Snortleblat has died!");
    }
  },

  // Method to increase character level

  levelUp() {
    this.level += 1;
  },
};

// Display character information

function displayCharacter() {
  document.querySelector("#character-name").textContent = character.name;

  document.querySelector("#class").textContent = character.class;

  document.querySelector("#level").textContent = character.level;

  document.querySelector("#health").textContent = character.health;

  if (character.health === 0) {
    document.querySelector("#status").textContent = "Character has died!";
    document.querySelector("#attack-button").disabled = true;
  }
}

// Attack button event listener

document.querySelector("#attack-button").addEventListener("click", function () {
  character.attacked();

  displayCharacter();
});

// Level Up button event listener

document
  .querySelector("#level-up-button")
  .addEventListener("click", function () {
    character.levelUp();

    displayCharacter();
  });

// Load character information when page loads

displayCharacter();
