window.onload = () => {
  document.getElementById("immagine").src = localStorage.getItem("sourceImg");
};

document.getElementById("download-link").addEventListener("click", function () {
  const imageUrl = document.getElementById("immagine").src;
  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = imageUrl.substring(imageUrl.lastIndexOf("/") + 1); // Nome del file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
