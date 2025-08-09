function toggleSublista(num) {
  const todasSublistas = document.querySelectorAll('.sublista');
  todasSublistas.forEach((sublista, index) => {
    if (index === num - 1) {
      sublista.classList.toggle('active');
    } else {
      sublista.classList.remove('active');
    }
  });
}