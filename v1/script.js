// Selecting DOM

const btn = document.querySelector(".post");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

// Create DOM Elements: Render facts in List
factsList.innerHTML = "";

//Load Data from API
loadfacts();

async function loadfacts() {
  const res = await fetch(
    "https://axikygwnifbcnustjusd.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4aWt5Z3duaWZiY251c3RqdXNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM3NTQ3ODEsImV4cCI6MjA0OTMzMDc4MX0.3XliI2Fasnd68dL9xw574VQcWFfjKBNQJeo4N68KEqI",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4aWt5Z3duaWZiY251c3RqdXNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM3NTQ3ODEsImV4cCI6MjA0OTMzMDc4MX0.3XliI2Fasnd68dL9xw574VQcWFfjKBNQJeo4N68KEqI",
      },
    }
  );
  const data = await res.json();
  const filteredData = data.filter((fact) => fact.category === "technology");
  createFactList(data);
}

//Foramtting the fact Front End
function createFactList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
                  <p>
                  ${fact.text}
                  <a href="${
                    fact.source
                  }" target="_blank" class="source">(Source)</a>
                </p>
                <span class="tag" style="background-color: ${
                  CATEGORIES.find((cat) => cat.name === fact.category).color
                }" ;>${fact.category}
                </span>
              </li>`
  );

  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

//Toggle for "Post" button visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
});

console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
console.log([7, 64, 6, -23, 11].find((el) => el > 10));
console.log(CATEGORIES.find((cat) => cat.name === "society").color);

/* const fact = ["Lisbon is the capital of Portugal", 2015, true];
console.log(fact); //Creating Arrays
console.log(fact[2]); //Getting data from the array
console.log(fact.length); //Geting length of Array
console.log(fact[fact.length - 1]);

const [text, createdIn] = fact; // Creating data from Arrays
console.log(createdIn);

const newFact = [...fact, "society"]; //Creating new items to the Array 

//Objects
const factObj = {
  text: "Lisbon is the capital of Portugal",
  category: "society",
  createdIn: 2015,
  isCorrect: true,
  createSummary: function () {
    return `The fact ${
      this.text
    } is from the category ${this.category.toUpperCase()}`;
  },
};
console.log(factObj.text);

const { category, isCorrect } = factObj;
console.log(category);
console.log(factObj.createSummary());

[2, 4, 6, 8].forEach(function (el) {
  console.log(el);
});

const times10 = [2, 4, 6, 8].map((el) => el * 10);
console.log(times10);

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories); */

// Before it can be used it must be created!

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else
    return `Impossible Year. Year needs to be less or equal to ${currentYear}`;
}
const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
