
function calculateFat() {
  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const waist = parseFloat(document.getElementById("waist").value);
  const neck = parseFloat(document.getElementById("neck").value);
  const hip = parseFloat(document.getElementById("hip").value);

  let bodyFat = 0;
  if (gender === "male") {
    bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
  } else {
    bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.221 * Math.log10(height)) - 450;
  }

  document.getElementById("result").innerText = `Estimated Body Fat: ${bodyFat.toFixed(2)}%`;
}

document.getElementById("gender").addEventListener("change", function () {
  const hipLabel = document.getElementById("hip-label");
  hipLabel.style.display = this.value === "female" ? "block" : "none";
});

document.getElementById("language-select").addEventListener("change", function () {
  const lang = this.value;
  document.querySelectorAll("[data-en]").forEach(el => {
    el.innerText = el.getAttribute("data-" + lang);
  });
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === "#home") link.innerText = lang === "ru" ? "Главная" : lang === "kz" ? "Басты бет" : "Home";
    if (href === "#calculator") link.innerText = lang === "ru" ? "Калькулятор" : lang === "kz" ? "Калькулятор" : "Calculator";
    if (href === "#diet") link.innerText = lang === "ru" ? "Диета" : lang === "kz" ? "Диета" : "Diet";
    if (href === "#about") link.innerText = lang === "ru" ? "О проекте" : lang === "kz" ? "Жоба туралы" : "About";
  });
});
