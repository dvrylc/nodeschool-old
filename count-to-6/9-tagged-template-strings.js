function escape(str) {
  return str.replace(/&/g, '&amp;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function html(...args) {
  var structure = args[0];
  var subs = args.slice(1);
  var full = '';
  
  // Form string
  structure.forEach(function(piece, i) {
    if (i < subs.length) {
      full += piece + escape(subs[i]);
    } else {
      full += piece;
    }
  });
  
  return full;
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
