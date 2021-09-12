"use strict";
const imageBox = document.querySelector("#imagebox");
const nameFirst = document.querySelector("#name");
const email = document.querySelector("#email");
const dob = document.querySelector("#dob");
const submit = document.querySelector("#submit");
const image = document.createElement("img");

const changeUser = function () {
  const user = fetch("https://randomuser.me/api/");
  user
    .then((el) => el.json())
    .then((el) => {
      console.log(el.results[0].name.first);
      console.log(el.results[0].email);
      console.log(el.results[0].dob.date);
      console.log(el.results[0].picture.large);
      image.src = el.results[0].picture.large;
      imageBox.append(image);
      nameFirst.textContent = el.results[0].name.first;
      email.textContent = el.results[0].email;
      dob.textContent = el.results[0].dob.date;
    });
};
submit.addEventListener("click", changeUser);
