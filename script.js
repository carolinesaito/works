document.querySelectorAll(".small-items img").forEach(element => {
  element.addEventListener("click", async () => {
    let response = await fetch(element.src);
    let blob = await response.blob();
    let objectURL = URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.href = objectURL;
    link.download = element.src.split("/").at(-1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  })
})