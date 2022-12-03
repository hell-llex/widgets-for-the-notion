// $('#clock').fitText(0.6);
// $('#date').fitText(0.9);

function update() {
  $('#clock').html(moment().format(`H:ss:mm`));
  $('#date').html(moment().format('DD -- YYYY <br> MMMM'));
}

setInterval(update, 1000);