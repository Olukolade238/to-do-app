export function formatDate(ms = Date.now()) {
  return new Date(ms).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;

const SEED = [
  { text: 'Set up project repository and README', category: 'Work', priority: 'high', done: true, ago: 3 * DAY },
  { text: 'Design wireframes for the analytics dashboard', category: 'Work', priority: 'high', done: true, ago: 2 * DAY + 4 * HOUR },
  { text: 'Review pull request from a teammate', category: 'Work', priority: 'medium', done: false, ago: 20 * HOUR },
  { text: "Prepare slides for Friday's sprint demo", category: 'Work', priority: 'high', done: false, ago: 9 * HOUR },
  { text: 'Study for the C# OOP midterm', category: 'Study', priority: 'high', done: false, ago: 2 * DAY },
  { text: 'Finish SQL practice exercises', category: 'Study', priority: 'medium', done: true, ago: DAY + 6 * HOUR },
  { text: 'Read the chapter on unit testing with xUnit', category: 'Study', priority: 'low', done: false, ago: 5 * HOUR },
  { text: '30-minute morning run', category: 'Health', priority: 'medium', done: true, ago: 4 * HOUR },
  { text: 'Book a dentist appointment', category: 'Health', priority: 'low', done: false, ago: 3 * HOUR },
  { text: 'Grocery shopping for the week', category: 'Personal', priority: 'low', done: false, ago: 2 * HOUR },
];

export function createSeedTasks() {
  const now = Date.now();
  return SEED.map(({ ago, ...task }, i) => ({
    id: now - i, // unique, stable-enough ids
    ...task,
    date: formatDate(now - ago),
  }));
}