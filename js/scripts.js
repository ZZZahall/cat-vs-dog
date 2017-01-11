
$(document).ready(function() {
  $("button#round1").click(function() {
    $("ul#dog").append("<li>Woof!</li>");
    $("ul#cat").append("<li>Meow</li>");
  });

  $("button#round2").click(function() {
    $("ul#dog").append("<li>Woof twice</li>");
    $("ul#cat").append("<li>Meow twice</li>");
  });

  $("button#stop").click(function() {
    $("ul").prepend("<li>Stop copying me!</li>");
  });

  $("#picdog").click(function() {
    $("#picdog").append('<img src="img/dog.jpg"/>')
    });

  $("#piccat").click(function() {
    $("#piccat").append('<img src="img/cat.jpeg"/>')
    });

  });
