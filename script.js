
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
function calculateFat() {
  const gender = document.getElementById('gender').value;
  const age = parseInt(document.getElementById('age').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const neck = parseFloat(document.getElementById('neck').value);
  const waist = parseFloat(document.getElementById('waist').value);
  const hipInput = document.getElementById('hip');
  const hip = hipInput ? parseFloat(hipInput.value) : 0;

  let fatPercent;

  if (gender === 'male') {
    fatPercent = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) +
      0.15456 * Math.log10(height)) - 450;
  } else {
    fatPercent = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) +
      0.22100 * Math.log10(height)) - 450;
  }

  fatPercent = Math.round(fatPercent * 10) / 10;
  const result = document.getElementById('result');
  const lang = document.getElementById('language-select').value;

  const tips = {
    en: fatPercent > 25 ? "Try a high-protein, lower-calorie diet and more cardio." :
        fatPercent < 10 ? "Eat more calories with healthy fats and carbs." :
        "Your body fat is normal. Maintain a balanced diet.",
    ru: fatPercent > 25 ? "Попробуйте диету с высоким содержанием белка и кардио." :
        fatPercent < 10 ? "Добавьте калорий с полезными жирами и углеводами." :
        "Ваш процент жира в норме. Поддерживайте сбалансированное питание.",
    kz: fatPercent > 25 ? "Ақуызға бай диета мен кардио жаттығуларын қолданыңыз." :
        fatPercent < 10 ? "Қосымша калорияларды пайдалы май мен көмірсулардан алыңыз." :
        "Май пайызы қалыпты. Теңгерімді тамақтануды жалғастырыңыз."
  };

  result.innerHTML = `Body Fat: <strong>${fatPercent}%</strong><br>${tips[lang]}`;
}

document.getElementById('gender').addEventListener('change', function () {
  const gender = this.value;
  document.getElementById('hip-label').style.display = gender === 'female' ? 'block' : 'none';
});

document.getElementById('language-select').addEventListener('change', function () {
  const lang = this.value;
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
});
