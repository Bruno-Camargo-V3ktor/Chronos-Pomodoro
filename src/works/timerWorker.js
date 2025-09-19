self.onmessage = function(event) {
    console.log("Recebeu: ", event.data);
    self.postMessage('Olá para voce tambem');
}