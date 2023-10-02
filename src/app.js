import "bootstrap";
import "./style.css";

const who = [
  "My Dad",
  "Some random guy",
  "The President",
  "An egg",
  "Homer Simpson",
  "I unfortunately"
];
const what = [
  "robbed a bank and is now on the loose",
  "fell asleep and never woke up",
  "had a serious meeting with China",
  "took the dog for an hour walk",
  "crashed my expensive car"
];
const where = [
  "in my room.",
  "at Walmart.",
  "at Burger King.",
  "in Japan.",
  "on my Birthday.",
  "on December 11th.",
  "in the parking lot."
];

const excuseSpan = document.getElementById("excuse");
const generateButton = document.getElementById("generateButton");

function generateRandomExcuse() {
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhere = where[Math.floor(Math.random() * where.length)];

  const sentence = `${randomWho} ${randomWhat} ${randomWhere}`;
  return sentence;
}

generateButton.addEventListener("click", () => {
  excuseSpan.textContent = generateRandomExcuse();
});

// Initial generation
excuseSpan.textContent = generateRandomExcuse();
