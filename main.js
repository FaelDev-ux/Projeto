function toggleSublista(index) {
  const sublista = document.getElementById(`sublista${index}`);

  // Fecha todas as outras
  document.querySelectorAll('.sublista').forEach(sl => {
    if (sl !== sublista) {
      sl.classList.remove('show');
    }
  });

  // Alterna a clicada
  sublista.classList.toggle('show');
}