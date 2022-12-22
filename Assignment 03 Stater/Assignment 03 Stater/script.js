"use strict";
//Xác thực email
//Hiện thông tin cá nhân và ẩn form xác định
const infoUp = document.getElementById("personal-info");
const hideSubmit = document.querySelector(".button-open");
const btnOpenInfo = document.querySelector(".btn-open");
const openInfo = function () {
  hideSubmit.classList.add("hide");
  infoUp.classList.remove("hide");
};

//Điều kiện mở thông tin cá nhân
const email = document.querySelector("#email");
const error = document.querySelector(".error");
const wrongEmail = document.querySelector(".wrong-email");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function check() {
  //kiểm tra dạng email
  if (email.value.match(regex)) {
    // Đúng email
    if (email.value === "thuanpnFX20218@funix.edu.vn") {
      btnOpenInfo.addEventListener("click", openInfo);
    }
    //Sai email
    else {
      wrongEmail.style.display = "block";
      error.style.display = "none";
    }
  }
  // SAi dạng email
  else {
    wrongEmail.style.display = "none";
    error.style.display = "block";
  }
}
//Điều chỉnh info

const btnMore = document.querySelectorAll(".btn-view-more ");
const btnLess = document.querySelectorAll(".btn-view-less");
const listOpen = document.querySelectorAll(".list");
for (let i = 0; i < listOpen.length; i++) {
  //Mở list
  const openList = function () {
    listOpen[i].classList.remove("hide");
    btnMore[i].classList.add("hide");
    btnLess[i].classList.remove("hide");
  };
  //Đóng list
  const closeList = function () {
    listOpen[i].classList.add("hide");
    btnMore[i].classList.add("hide");
    btnLess[i].classList.add("hide");
  };
  //Nút nhận lệnh
  btnMore[i].addEventListener("click", openList);
  btnLess[i].addEventListener("click", closeList);
}
