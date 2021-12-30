const lockPad = document.querySelectorAll(".lock");
const lockKey = document.querySelectorAll(".lock__key");
const lockReset = document.querySelectorAll(".lock__reset");
const lockAdmin = document.querySelectorAll(".lock__reset lock__reset--admin");
const lockStatus = document.querySelectorAll(".lock__status");
const KC = new KeyCodeDoorLock("1234");

for (i = 0; i < lockKey.length; i++) {
  lockKey[i].addEventListener("click", function (e) {
    let number = e.currentTarget.innerText;
    KC.enterKey(number);
    lockStatus[i].innerText = KC.status;
  });
}

for (i = 0; i < lockReset.length; i++) {
  lockReset[i].addEventListener("click", function (s) {
    KC.reset("reset");
    console.log(KC.enteredKeys);
  });
}
for (i = 0; i < lockAdmin.length; i++) {
  lockAdmin[i].addEventListener("click", function (a) {
    if (a.currentTarget.innerText == "ADMIN RESET") {
      KC.reset({ admin: true });
      console.log(KC.enteredKeys);
    }
  });
}

// lockReset.addEventListener("click", function (r) {
//   if (r.currentTarget.innerText == "RESET") {
//     KC.reset(reset);
//   }
// });
// lockAdmin.addEventListener("click", function (a) {
//   if (a.currentTarget.innerText == "RESET ADMIN") {
//     KC.reset(admin);
//   }
// });
// const lockPad = document.querySelectorAll(".lock");
// const state = document.querySelectorAll(".lock__status");
// const keys = document.querySelectorAll(".lock__key");
// const reset = document.querySelectorAll(".lock__reset");
// const adminReset = document.querySelectorAll(".lock__reset lock__reset--admin");
// const keySet = document
//   .getElementsByClassName("lock__key")
//   .addEventListener("click", function () {

//   });

// eachLock();

// function eachLock() {
//   for (i = 0; i < lockPad.length; i++) {
//     if (lockPad[0]) {
//       keyCode = new KeyCodeDoorLock("8675309");
//       pressingKeys();
//       stateOfLock();
//       resetBtn();
//       adminBtn();
//     } else if (lockPad[1]) {
//       keyCode = new KeyCodeDoorLock("1234");
//       pressingKeys();
//       stateOfLock();
//       resetBtn();
//       adminBtn();
//     } else if (lockPad[2]) {
//       keyCode = new KeyCodeDoorLock("1111");
//       pressingKeys();
//       stateOfLock();
//       resetBtn();
//       adminBtn();
//     } else if (lockPad[3]) {
//       keyCode = new KeyCodeDoorLock("1234");
//       pressingKeys();
//       stateOfLock();
//       resetBtn();
//       adminBtn();
//     }
//   }
// }

// function pressingKeys() {
//   for (i = 0; i < lockPad.length; i++) {
//     lockPad[i].addEventListener("click", function (e) {
//       if (e.currentTarget.innerText == 0) {
//         keyCode.enterKey(0);
//         console.log(keyCode.status);
//       } else if (e.currentTarget.innerText == 1) {
//         keyCode.enterKey(1);
//       } else if (e.currentTarget.innerText == 2) {
//         keyCode.enterKey(2);
//       } else if (e.currentTarget.innerText == 3) {
//         keyCode.enterKey(3);
//       } else if (e.currentTarget.innerText == 4) {
//         keyCode.enterKey(4);
//         console.log(keyCode);
//       } else if (e.currentTarget.innerText == 5) {
//         keyCode.enterKey(5);
//       } else if (e.currentTarget.innerText == 6) {
//         keyCode.enterKey(6);
//       } else if (e.currentTarget.innerText == 7) {
//         keyCode.enterKey(7);
//       } else if (e.currentTarget.innerText == 8) {
//         keyCode.enterKey(8);
//       } else if (e.currentTarget.innerText == 9) {
//         keyCode.enterKey(9);
//       }
//     });
//   }
// }

// function resetBtn() {
//   for (i = 0; i < lockPad.length; i++) {
//     lockPad[i].addEventListener("click", function (s) {
//       if (s.currentTarget.innerText == "RESET") {
//         keyCode.reset(reset);
//       }
//     });
//   }
// }

// function adminBtn() {
//   for (i = 0; i < lockPad.length; i++) {
//     lockPad[i].addEventListener("click", function (d) {
//       if (d.currentTarget.innerText == "ADMIN RESET") {
//         keyCode.reset(admin);
//       }
//     });
//   }
// }

// function stateOfLock() {
//   for (i = 0; i < lockPad.length; i++) {
//     lockPad[i].addEventListener("click", function () {
//       const state = keyCode.status;
//       if (keyCode.status == "UNLOCKED") {
//         state.innerText = "UNLOCKED";
//       } else if (keyCode.status == "LOCKED") {
//         state.innerText = "LOCKED";
//       } else if (keyCode.status == "HARD_LOCKED") {
//         state.innerText = "HARD_LOCKED";
//       }
//     });
//   }
// }

// status2.forEach(function (lock__status) {
//   const state = lock__status;
//   if (keyCode.status == "UNLOCKED") {
//     state.innerText = "UNLOCKED";
//   } else if (keyCode.status == "LOCKED") {
//     state.innerText = "LOCKED";
//   } else if (keyCode.status == "HARD_LOCKED") {
//     state.innerText = "HARD_LOCKED";
//   }
// });

// reset.forEach(function (lock__reset) {
//   lock__reset.addEventListener("click", function (s) {
//     const resetBtn = s.currentTarget.classList;
//     if (s.currentTarget.innerText == "RESET") {
//       keyCode.reset(reset);
//     }
//   });
// // });
// const lockPads = document.querySelector(".lock");
// const status2 = document.querySelector(".lock__status");
// const keys = document.querySelectorAll(".lock__key");
// const reset = document.querySelectorAll(".lock__reset");
// const adminReset = document.querySelectorAll(".lock__reset lock__reset--admin");
// const keyCode = new KeyCodeDoorLock("1234");

// function newCode() {
// for (i = 0; i < lockPads.length; i++) {
// if (lockPads[i] == 0) {
//   let answer1 = "8675309";
//   const keyCode = new KeyCodeDoorLock(answer1);
// // }
// if (lockPads[i] == 1) {
//   let answer2 = "1234";
//   const keyCode1 = new KeyCodeDoorLock(answer2);
// }
// } else if (lockPads[i] == 2) {
//   let answer3 = "1111";
//   const keyCode = new KeyCodeDoorLock(answer3);
// } else if (lockPads[i] == 3) {
//   let answer4 = "1234";
//   const keyCode = new KeyCodeDoorLock(answer4);
// }
// }
// }
// lockPads.addEventListener("click", function (e) {
//   const numbers = e.currentTarget.classList;
//   console.log(e.currentTarget.innerText);

//   if (e.currentTarget.innerText == 0) {
//     keyCode.enterKey(0);
//     console.log(keyCode.enteredKeys);
//     console.log(keyCode.status);
//   } else if (e.currentTarget.innerText == 1) {
//     keyCode.enterKey(1);
//     console.log(keyCode.status);
//   } else if (e.currentTarget.innerText == 2) {
//     keyCode.enterKey(2);
//     console.log(keyCode.status);
//   } else if (e.currentTarget.innerText == 3) {
//     keyCode.enterKey(3);
//     console.log(keyCode.status);
//   } else if (e.currentTarget.innerText == 4) {
//     keyCode.enterKey(4);
//     console.log(keyCode.status);
//   } else if (e.currentTarget.innerText == 5) {
//     keyCode.enterKey(5);
//     console.log(keyCode.status);
//   } else if (e.currentTarget.innerText == 6) {
//     keyCode.enterKey(6);
//     console.log(keyCode.status);
//   } else if (e.currentTarget.innerText == 7) {
//     keyCode.enterKey(7);
//     console.log(keyCode.status);
//   } else if (e.currentTarget.innerText == 8) {
//     keyCode.enterKey(8);
//     console.log(keyCode.status);
//   } else if (e.currentTarget.innerText == 9) {
//     keyCode.enterKey(9);
//     console.log(keyCode.status);
//   }

//   status2.forEach(function (lock__status) {
//     const state = lock__status;
//     if (keyCode.status == "UNLOCKED") {
//       state.innerText = "UNLOCKED";
//     } else if (keyCode.status == "LOCKED") {
//       state.innerText = "LOCKED";
//     } else if (keyCode.status == "HARD_LOCKED") {
//       state.innerText = "HARD_LOCKED";
//     }
//   });
// });

// reset.forEach(function (lock__reset) {
//   lock__reset.addEventListener("click", function (s) {
//     const resetBtn = s.currentTarget.classList;
//     if (s.currentTarget.innerText == "RESET") {
//       keyCode.reset(reset);
//     }
//   });
// });
// adminReset.forEach(function (lock__reset) {
//   lock__reset.addEventListener("click", function (d) {
//     const adminBtn = d.currentTarget.classList;
//     if (d.currentTarget.innerText == "ADMIN RESET") {
//       keyCode.reset(admin);
//     }
//   });
// });
