$(document).ready(function() {

  function scream(a) {

    var flavors = ["vanilla", "Chocolate", "Peach", "Cookies n Cream", "Oreo BLAST", "Mint", "Bubblegum"];

    if (a === "p#van") {
      var onlyvan = flavors.shift();
      $(".icecream").append(onlyvan);
    } else if (a === "p#choco") {
      var onlychoco = flavors[1];
      $(".icecream").append(onlychoco);
    } else {
      alert("I can't hear you!")
    }
  }


  var tagArray = ["p#van", "p#choco", "h1"];
  tagArray.forEach(function(tag) {
    $(tag).click(function() {
      scream(tag);
    });
  });
});


//   $("button#go").click(function() {
//     var listflavors = flavors.map(function(flavor) {
//       alert(flavor);
//     });
//     // flavors.forEach(function(flavor) {
//   //     $(".van").append(flavors[3]);
//   //   // });
//   });
// });
