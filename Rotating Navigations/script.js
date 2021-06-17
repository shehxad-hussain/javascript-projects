const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEvevtListener('click', () => container.classList.add('show-nav'))
close.addEvevtListener('click', () => container.classList.remove('show-nav'))