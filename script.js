"use strict";

const btn = document.getElementById("btn");
const animCont = document.querySelector(".anime-container");
const animImg = document.querySelector(".anime-img");
const animName = document.querySelector(".anime-name");

btn.addEventListener("click", async function () {
  try {
    btn.disabled = true;
    btn.innerText = "Loading...";
    animImg.src = "spiner.svg";
    animName.innerText = "Updating...";

    const reponse = await fetch("https://api.catboys.com/img");
    const data = await reponse.json();

    btn.disabled = false;
    btn.innerText = "Get Anime";

    animCont.style.display = "block";
    animImg.src = data.url;
    animName.innerText = `Artist: ${data.artist}`;
    // console.log(data);
  } catch (error) {
    btn.disabled = false;
    btn.innerText = "Get Anime";
    animName.innerText = "An error happend, try again";
  }
});
