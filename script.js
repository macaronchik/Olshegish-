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

function calculateBMI() {
  const weight = parseFloat(document.getElementById("bmi-weight").value);
  const height = parseFloat(document.getElementById("bmi-height").value) / 100;
  const bmi = weight / (height * height);
  document.getElementById("bmi-result").innerText = `Your BMI: ${bmi.toFixed(1)}`;
}

function calculateWater() {
  const weight = parseFloat(document.getElementById("water-weight").value);
  const waterIntake = weight * 0.033;
  document.getElementById("water-result").innerText = `Recommended: ${waterIntake.toFixed(2)} L/day`;
}
