const inputs = document.querySelectorAll('.controls input');
console.log(inputs)

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// It listens ONLY if you let go of the mouse
inputs.forEach(input => input.addEventListener('change', handleUpdate)); 
// It now listen ALSO if we scroll the range
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

