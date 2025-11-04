const images = document.querySelectorAll("#gallery img");
const info = document.getElementById("info");


images.forEach((img, index) => {
  img.setAttribute("tabindex", index + 1);


  const showInfo = () => {
    info.textContent = `Source: ${img.src} | Alt: ${img.alt}`;
  };


  const hideInfo = () => {
    info.textContent = "";
  };

  
  img.addEventListener("mouseover", showInfo);
  img.addEventListener("mouseout", hideInfo);

  
  img.addEventListener("focus", showInfo);
  img.addEventListener("blur", hideInfo);
});
