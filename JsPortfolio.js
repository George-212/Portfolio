// making text bigger for all <p>
function biggerText() {
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(p => {
      let currentSize = window.getComputedStyle(p).fontSize;
      let newSize = parseFloat(currentSize) + 1;
      p.style.fontSize = newSize + "px";
    });
  }
// making text smaller for all <p>
  function smallerText() {
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(p => {
      let currentSize = window.getComputedStyle(p).fontSize;
      let newSize = parseFloat(currentSize) - 1;
      p.style.fontSize = newSize + "px";
    });
  }
