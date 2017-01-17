$(document).ready(function() {
  $('form#transportation-methods').submit(function(event) {
    event.preventDefault();
    $("#work-responses, #days-responses").show();
    $('input:checkbox[name=work-transportation]:checked').each(function() {
      var workTransportation = $(this).val();
      $("#work-responses").append(workTransportation + "<br>");
    });
    $("input:checkbox[name=days-of-the-week]:checked").each(function() {
      var days = $(this).val();
      console.log(days);
      $("#days-responses").append(days + "<br>");
    });
    $('#transportation-methods').hide();

  });
});
