var allQuotes = [
  {
    author: "Oscar Wilde",
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
  },
  {
    author: "Elbert Hubbard",
    quote: "A friend is someone who knows all about you and still loves you.",
  },
  {
    author: "Oscar Wilde",
    quote: "Always forgive your enemies; nothing annoys them so much.",
  },
  {
    author: "Ralph Waldo Emerson",
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  },
  {
    author: "Narcotics Anonymous",
    quote:
      "Insanity is doing the same thing, over and over again, but expecting different results.",
  },
  {
    author: "Andre Gide, Autumn Leaves",
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
  },
  {
    author: "Kurt Vonnegut, Mother Night",
    quote:
      "We are what we pretend to be, so we must be careful about what we pretend to be.",
  },
  {
    author: "Albert Einstein",
    quote: "Anyone who has never made a mistake has never tried anything new.",
  },
];

var lastIndex = -1;

function generateQuotes() {
  var random;

  do {
    random = Math.floor(Math.random() * allQuotes.length);
  } while (random === lastIndex);

  lastIndex = random;
  document.querySelector("#displayQuote").textContent = `“${allQuotes[random].quote}”`;
  document.querySelector("#authorName").textContent = `― ${allQuotes[random].author}`;
}
