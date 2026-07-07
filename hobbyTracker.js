const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// Returns total minutes spent on hobbies
// Takes in an array of objects and returns a single number
function totalTime(log) {
  // reduce goes through each object in log and sums up the minutes value
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

// Returns a list of each unique hobby logged
// Takes in an array of objects and returns an array with each unique hobby listed
function uniqueHobbies(log) {
  // map makes an array of the same length of log, but only keeps the information on hobbies
  const names = log.map(entry => entry.hobby);
  // new Set(names) creates a set from the names array, where only unique values are allowed
  // The square brackets and spread operator ... puts the elements of set into an array to return
  return [...new Set(names)];
}

// Returns log entries whose minutes spent on that day was longer than minMinutes
// Takes in an array of objects and a number, and returns a new array of objects whose
// minutes is greater than the given input number
function longSessions(log, minMinutes) {
  // Since the function can filter out sessions of a certain length, rather than an arbitrary "long",
  // I think a better name could be minsG (minutes greater than), using just 'G' since
  // that's what assembly uses for the abbreviations with conditional set and jump,
  // and minsG is a shorter length than typing out the 12 characters in longSessions

  // filter returns a new array based on a function that compares an object's minutes value
  // to a variable minMinutes, where an object is only in the new array if it's greater than
  // minMinutes. The variable allows this function to be used with different times
  return log.filter(entry => entry.minutes > minMinutes);
}

// Returns the number of days a certain mood was felt
// Takes in an array of objects and a string, and returns a number representing how many
// times the string was strictly equal an object's mood value
function countMood(log, moodType) {
  // filter has a function that checks if an object's mood value is equal to the given
  // mood string. The resulting array, whose objects all have the same mood value, has its
  // array length returned
  return log.filter(entry => entry.mood === moodType).length;
}

console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));
const logSession30 = longSessions(hobbyLog, 30);
console.log("Number of calm sessions longer than 30 min:", countMood(logSession30, "calm"));
