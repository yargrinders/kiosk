$(document).ready(function() {
  $.getJSON("data/data.json", function(data) {
    $.each(data.arrayObject, function(i, item) {
      $("#data-container-1").append(
        "<p><span>" + item.text + "</span><span>" + item.value1 + "</span><span>" + item.value2 + "</span><span>" + item.value3 + "</span></p>"
      );
    });
  });
});

$(document).ready(function() {
  $.getJSON("data/data2.json", function(data) {
    $.each(data.arrayObject, function(i, item) {
      $("#data-container-2").append(
        "<p><span>" + item.text + "</span><span>" + item.value1 + "</span><span>" + item.value2 + "</span><span>" + item.value3 + "</span></p>"
      );
    });
  });
});

$(document).ready(function() {
  $.getJSON("data/data3.json", function(data) {
    $.each(data.arrayObject, function(i, item) {
      $("#data-container-3").append(
        "<p><span>" + item.text + "</span><span>" + item.value1 + "</span><span>" + item.value2 + "</span><span>" + item.value3 + "</span></p>"
      );
    });
  });
});