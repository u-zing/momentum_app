const quotes = [
  {
    quote:
      "Success is not given for free. You have to be able to do anything for your goals.",
    author: "Walt Disney",
  },
  {
    quote: "If you judge people, you have no time to love them.",
    author: "Mother Teresa",
  },
  {
    quote: "Nothing is permanent in this wicked world - not even our troubles.",
    author: "Charlie Chaplin",
  },
  {
    quote: "We secure our friends not by accepting favors but by doing them.",
    author: "Thucydides",
  },
  {
    quote: "The more you chase money, the harder it is to catch it.",
    author: "Mike Tatum",
  },
  {
    quote: "Work and acquire, and thou hast chained the wheel of Chance.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Weakness of attitude becomes weakness of character.",
    author: "Albert Einstein",
  },
  {
    quote: "Everything comes to him who hustles while he waits.",
    author: "Thomas A. Edison",
  },
  {
    quote: "Wish not so much to live long as to live well.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Great minds have purposes, others have wishes.",
    author: "Washington Irving",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
