    function round1(x){ return Math.round(x * 10) / 10; }

    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const calcBtn = document.getElementById('calcBtn');
    const resetBtn = document.getElementById('resetBtn');
    const output = document.getElementById('output');
    const bmiValueEl = document.getElementById('bmiValue');
    const bmiCategoryEl = document.getElementById('bmiCategory');
    const adviceEl = document.getElementById('advice');

    function classifyBMI(bmi){
      if(bmi < 18.5) return {cat: 'Underweight', advice: 'Consider gaining weight through a balanced diet and resistance training.'};
      if(bmi < 25) return {cat: 'Normal weight', advice: 'Maintain your healthy lifestyle!' };
      if(bmi < 30) return {cat: 'Overweight', advice: 'Consider a combination of diet and increased activity to lose weight.'};
      return {cat: 'Obesity', advice: 'Speak with a healthcare professional for personalised guidance.'};
    }

    function calculateBMI(){
      const w = parseFloat(weightInput.value);
      const h = parseFloat(heightInput.value);

      output.classList.add('d-none');

      if(!w || !h || w <= 0 || h <= 0){
        alert('Please enter valid positive numbers for weight and height.');
        return;
      }

      const h_m = h / 100.0;
      const bmi = w / (h_m * h_m);

      const bmiRounded = round1(bmi);
      const classification = classifyBMI(bmiRounded);

      bmiValueEl.textContent = bmiRounded;
      bmiCategoryEl.textContent = classification.cat;
      adviceEl.textContent = classification.advice;
      output.classList.remove('d-none');

      bmiCategoryEl.className = 'fw-semibold';
      if(bmi < 18.5) bmiCategoryEl.classList.add('text-info');
      else if(bmi < 25) bmiCategoryEl.classList.add('text-success');
      else if(bmi < 30) bmiCategoryEl.classList.add('text-warning');
      else bmiCategoryEl.classList.add('text-danger');
    }

    calcBtn.addEventListener('click', calculateBMI);

    resetBtn.addEventListener('click', ()=>{
      weightInput.value = '';
      heightInput.value = '';
      output.classList.add('d-none');
    });
