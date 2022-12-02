$('#clock').fitText(0.7);
$('#date').fitText(0.9);

function update() {
  $('#clock').html(moment().format('H:mm:ss'));
  $('#date').html(moment().format('DD MMMM YYYY'));
}

setInterval(update, 1000);