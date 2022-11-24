const button = document.getElementById('button')

button.addEventListener('click', () => {
  const color += Math.random().toString(16).slice(2, 8)
  document.body.style.backgroundColor = Color
})
