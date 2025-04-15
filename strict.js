// Change text and CSS style
function changeContent() {
    const info = document.getElementById("info");
    info.textContent = "The text has been changed!";
    info.style.backgroundColor = "lightblue";
    info.style.padding = "10px";
    info.style.borderRadius = "8px";
  }
  
  // Add a new element
  function addElement() {
    const container = document.getElementById("dynamic-container");
    if (!document.getElementById("new-paragraph")) {
      const newPara = document.createElement("p");
      newPara.textContent = "This is a new paragraph added by JavaScript.";
      newPara.id = "new-paragraph";
      container.appendChild(newPara);
    }
  }
  
  // Remove the added element
  function removeElement() {
    const existing = document.getElementById("new-paragraph");
    if (existing) {
      existing.remove();
    }
  }
  