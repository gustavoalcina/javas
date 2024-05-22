function movimentaNaveTeclado(tecla){
    ctx.clearRect(x, 700 - 160, 160, 160);
    if (tecla == 83){
        x -= 50;
        x = Math.max(0, x);
    } else if (tecla == 70){
        x += 50;
        x = Math.min(canvas.width - 160, x);
    } else if (tecla == 37) {
        disparo(x + 50, 700 - 160);
    }

    ctx.drawImage(nave, x, 700 - 160);
}

function disparo(col, lin){
    if (lin > -6){
        ctx.clearRect(col, lin, 2, 5);
        ctx.fillRect(col, lin-6, 2, 5);
    }
    setTimeout(function(){ disparo(col, lin - 5) }, 1);
}
};
