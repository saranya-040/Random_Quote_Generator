const quotes = [
    "Education is not the learning of facts, but the training of the mind to think. – Albert Einstein",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "Doubt kills more dreams than failure ever will. – Suzy Kassem",
    "Success is not in what you have, but who you are. – Bo Bennett",
    "The roots of education are bitter, but the fruit is sweet. – Aristotle",
    "A smooth sea never made a skilled sailor. – Franklin D. Roosevelt",
    "Do not let what you cannot do interfere with what you can do. – John Wooden",
    "Strive for progress, not perfection. – David Perlmutter",
    "Sometimes you win, sometimes you learn. – John Maxwell",
    "Courage doesn’t always roar. Sometimes it’s the quiet voice at the end of the day saying, ‘I will try again tomorrow.’ – Mary Anne Radmacher",
    "A journey of a thousand miles begins with a single step. – Lao Tzu",
    "If you want something you’ve never had, you must be willing to do something you’ve never done. – Thomas Jefferson",
    "An investment in knowledge pays the best interest. – Benjamin Franklin",
    "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
    "If you are not willing to learn, no one can help you. If you are determined to learn, no one can stop you. – Zig Ziglar",
    "Your education is a dress rehearsal for a life that is yours to lead. – Nora Ephron",
    "Every expert was once a beginner. – Helen Hayes",
    "Success is stumbling from failure to failure with no loss of enthusiasm. – Winston Churchill",
    "Never let your fear decide your future. – Unknown",
    "Dreams don’t work unless you do. – John C. Maxwell"
];

function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}
