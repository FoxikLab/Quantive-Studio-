// Crew interakce přijdou později
console.log("Quantive Studio™ loaded");

document.getElementById("enterBtn").addEventListener("click", function() {
  document.getElementById("crewSection").style.display = "block";
  this.style.display = "none"; // schová tlačítko po kliknutí
});
