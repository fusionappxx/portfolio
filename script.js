function mostrar(categoria) {
  let div = document.getElementsByClassName("thumbs");
  for (i = 0; i < div.length; i++) {
    div[i].style.display = "none";
  }
  document.getElementById(categoria).style.display = "flex";
}