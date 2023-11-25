let tabChange = function (val) {
  let element = document.querySelectorAll("input");
  if (element[val - 1].value != "") {
    element[val].focus();
  } else if (element[val - 1].value == "") {
    element[val - 2].focus();
  }
};

let digitValidate = function (ele) {
  console.log(ele.value);
  ele.value = ele.value.replace(/[^0-9]/g, "");
};

// let func = function myFunction() {
//     let ale = document.querySelectorAll("button");

// }

function myFunction() {
  alert("You're Verified Succesfully!");
}
