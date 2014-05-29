try {
  var child_process = require('child_process');
  window.$ = window.jQuery = require('../bower_components/jquery/dist/jquery.min');
} catch(e) {console.log(e)}

$('#ping').on('click', function (){
  var opts = {
    encoding: 'utf8',
    timeout: 2000,
    maxBuffer: 200*1024,
    killSignal: 'SIGKILL',
    cwd: null,
    env: null
  };
  var cmd = 'ping -t 1 -c 1 ' + $('#addr').val();
  var child = child_process.exec(cmd, opts, function(error, stdout, stderr) {
    $('#ping-result').empty();
    if(stdout.length > 0){
      $('#ping-result').append('<pre>' + stdout + '</pre>');
    }
    if(stderr.length > 0){
      $('#ping-result').append('<pre>' + stderr + '</pre>');
    }
  });
});

