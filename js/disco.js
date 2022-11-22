const button = document.getElementById('button')

button.addEventListener('click', () => {
  let Color = '#'
  Color += Math.random().toString(16).slice(2, 8)
  document.body.style.backgroundColor = Color
})
