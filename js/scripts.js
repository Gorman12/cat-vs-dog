$(function(){
    $("button#meow").click(function(){
      $("ul#garfield").before("<li>Stop poking me.</li>");
      $("ul#lassie").before("<li> Be nice Garfield.</li>");
    });

    $("button#bark").click(function(){
      $("ul#lassie").before("<li>I love you.</li>");
      $("ul#garfield").append("<li>I hate you dog</li>");

    });
});
