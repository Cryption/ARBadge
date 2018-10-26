$('fieldset input').change(function() {
   $('#glyph').attr('src', $(this).val());
});

let colors = ['#F7CAC9', '#F7786B', '#91A8D0', '#034F84', '#98DDDE', '#9896A4', '#B18F6A', '#DD4132', '#FAE03C', '#79C753'];

$('#inputAppURL').on('input', function() {
    let val = $(this).val().hashCode();
    let gradient = val.toString(colors.length).split('').map((v, i) => (i % 2 == 0 ? colors : colors)[parseInt(v)]).join(', ');
    $('.ar-badge').attr('style', 
        `background-image: linear-gradient(white, white), radial-gradient(circle at top left, ${gradient});`);
    console.log(gradient);
});

String.prototype.hashCode = function() {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr   = this.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash) % 10000;
  };