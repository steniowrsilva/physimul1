const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
//variáveis
const angle = -Math.atan(550/250);
let massa = 10;
let g = 10;
let t = 0; // Começar o tempo em 0
let dS = 0; // Inicializar dS como 0
let dX = 0;
let dY = 0;
const maxTime = 16.25; // Tempo máximo de 10 unidades

function updatePositions() {
    // Atualizar dS, dX e dY de acordo com o tempo t
    dS = (0.5 * g * Math.cos(-angle)) * (t ** 2);
    dX = dS * Math.cos(Math.PI/2 + angle);
    dY = dS * Math.sin(Math.PI/2 + angle);

    // Limitar o tempo ao valor máximo
    t = Math.min(t, maxTime);
}

function drawAll(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //----------------------------------------------------
    //---------------------RAMPA--------------------------
    //----------------------------------------------------
    // rampa
    let r_dx = 0;
    let r_dy = 100;
    ctx.beginPath();
    ctx.moveTo(50 + r_dx, 50 + r_dy);
    ctx.lineTo(600 + r_dx, 300 + r_dy);
    ctx.lineTo(50 + r_dx, 300 + r_dy);
    ctx.closePath();
    ctx.stroke();

    // ctx.arc(500, 300, raio, 0, Math.PI);

    // preenchimento da rampa
    ctx.beginPath();
    ctx.moveTo(50 + r_dx, 50 + r_dy);
    ctx.lineTo(600 + r_dx, 300 + r_dy);
    ctx.lineTo(50 + r_dx, 300 + r_dy);
    ctx.fillStyle = 'yellow';
    ctx.fill();

    //----------------------------------------------------
    //---------------------BLOCO--------------------------
    //----------------------------------------------------
    // bloco
    b_size = 50;
    // let b_dx = 0;
    // let b_dy = 0;
    ctx.beginPath();
    ctx.moveTo(50 + r_dx + dX, 50 + r_dy + dY);
    ctx.lineTo(b_size*Math.cos(angle)+50 + r_dx + dX, b_size*Math.sin(angle)+50 + r_dy + dY);
    ctx.lineTo(b_size*Math.cos(Math.PI/2 + angle) + b_size*Math.cos(angle)+50 + r_dx + dX,
               b_size*Math.sin(Math.PI/2 + angle) + b_size*Math.sin(angle)+50 + r_dy + dY);
    ctx.lineTo(b_size*Math.cos(Math.PI/2 + angle) + 50 + r_dx + dX,
               b_size*Math.sin(Math.PI/2 + angle) + 50 + r_dy + dY);
    ctx.closePath();
    ctx.stroke();

    //preenchimento do bloco
    ctx.beginPath();
    ctx.moveTo(50 + r_dx + dX, 50 + r_dy + dY);
    ctx.lineTo(b_size*Math.cos(angle)+50 + r_dx + dX, b_size*Math.sin(angle)+50 + r_dy + dY);
    ctx.lineTo(b_size*Math.cos(Math.PI/2 + angle) + b_size*Math.cos(angle)+50 + r_dx + dX,
               b_size*Math.sin(Math.PI/2 + angle) + b_size*Math.sin(angle)+50 + r_dy + dY);
    ctx.lineTo(b_size*Math.cos(Math.PI/2 + angle) + 50 + r_dx + dX,
               b_size*Math.sin(Math.PI/2 + angle) + 50 + r_dy + dY);
    ctx.fillStyle = 'pink';
    ctx.fill();

    //----------------------------------------------------
    //---------------------VETOR PESO---------------------
    //----------------------------------------------------


    let caudaX = b_size/2
    let caudaY = caudaX;
    let phi =  Math.PI / 6;
    let cabeca = 10;
    ctx.beginPath();
    ctx.moveTo(caudaX*Math.cos(Math.PI/2 + angle)+50 + r_dx + dX, caudaY*Math.sin(Math.PI/2 + angle)+50 + r_dy + dY);
    ctx.lineTo(caudaX*Math.cos(Math.PI/2 + angle)+50 + r_dx + dX, caudaY*Math.sin(Math.PI/2 + angle)+50 + r_dy + massa*g + dY);
    ctx.lineWidth = 2;
    ctx.stroke()
    ctx.closePath();

    // cabeça do vetor
    ctx.beginPath();
    ctx.moveTo(cabeca*Math.cos(-Math.PI/2 + phi) + caudaX*Math.cos(Math.PI/2 + angle)+50 + r_dx + dX,
               cabeca*Math.sin(-Math.PI/2 + phi) + caudaY*Math.sin(Math.PI/2 + angle)+50 + r_dy + massa*g + dY);
    ctx.lineTo(caudaX*Math.cos(Math.PI/2 + angle)+50 + r_dx + dX, caudaY*Math.sin(Math.PI/2 + angle)+50 + r_dy + massa*g + dY);
    ctx.lineTo(cabeca*Math.cos(-Math.PI/2 - phi) + caudaX*Math.cos(Math.PI/2 + angle)+50 + r_dx + dX,
               cabeca*Math.sin(-Math.PI/2 - phi) + caudaY*Math.sin(Math.PI/2 + angle)+50 + r_dy + massa*g + dY);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    //----------------------------------------------------
    //-------------COMPONENTES DO VETOR PESO--------------
    //----------------------------------------------------
    // COMPONENTE X
    let pesoX = massa*g*Math.cos(-angle);
    ctx.beginPath();
    ctx.moveTo(caudaX*Math.cos(Math.PI/2 + angle)+50 + r_dx + dX, caudaY*Math.sin(Math.PI/2 + angle)+50 + r_dy + dY);
    ctx.lineTo(caudaX*Math.cos(Math.PI/2 + angle)+50 + r_dx + pesoX*Math.cos(Math.PI/2 + angle) + dX,
               caudaY*Math.sin(Math.PI/2 + angle)+50 + r_dy + pesoX*Math.sin(Math.PI/2 + angle) + dY);
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
    // cabeça da componente x
    ctx.beginPath();
    ctx.moveTo(caudaX*Math.cos(Math.PI/2 + angle)+50 + r_dx + pesoX*Math.cos(Math.PI/2 + angle) + dX,
               caudaY*Math.sin(Math.PI/2 + angle)+50 + r_dy + pesoX*Math.sin(Math.PI/2 + angle) + dY);
    ctx.lineTo(caudaX*Math.cos(Math.PI/2 + angle)+50 + r_dx + pesoX*Math.cos(Math.PI/2 + angle) + cabeca*Math.cos(3*Math.PI/2 + angle - phi) + dX,
               caudaY*Math.sin(Math.PI/2 + angle)+50 + r_dy + pesoX*Math.sin(Math.PI/2 + angle) + cabeca*Math.sin(3*Math.PI/2 + angle - phi) + dY);
    ctx.lineTo(caudaX*Math.cos(Math.PI/2 + angle)+50 + r_dx + pesoX*Math.cos(Math.PI/2 + angle) + dX,
               caudaY*Math.sin(Math.PI/2 + angle)+50 + r_dy + pesoX*Math.sin(Math.PI/2 + angle) + dY);
    ctx.lineTo(caudaX*Math.cos(Math.PI/2 + angle)+50 + r_dx + pesoX*Math.cos(Math.PI/2 + angle) + cabeca*Math.cos(-Math.PI/2 + angle + phi) + dX,
               caudaY*Math.sin(Math.PI/2 + angle)+50 + r_dy + pesoX*Math.sin(Math.PI/2 + angle) + cabeca*Math.sin(-Math.PI/2 + angle + phi) + dY);
    ctx.stroke();
    ctx.closePath();

    // COMPONENTE Y
    let pesoY = massa*g*Math.sin(-angle);
    ctx.beginPath();
    ctx.moveTo(caudaX*Math.cos(Math.PI/2 + angle)+50 + r_dx + dX, caudaY*Math.sin(Math.PI/2 + angle)+50 + r_dy + dY);
    ctx.lineTo(caudaX*Math.cos(Math.PI/2 + angle)+50 + r_dx + pesoY*Math.cos(Math.PI + angle) + dX,
               caudaY*Math.sin(Math.PI/2 + angle)+50 + r_dy + pesoY*Math.sin(Math.PI + angle) + dY);
    ctx.stroke();
    ctx.closePath();
    //cabeça componente Y
    ctx.beginPath();
    ctx.moveTo(caudaX*Math.cos(Math.PI/2 + angle)+50 + r_dx + pesoY*Math.cos(Math.PI + angle) + dX,
               caudaY*Math.sin(Math.PI/2 + angle)+50 + r_dy + pesoY*Math.sin(Math.PI + angle) + dY);
    ctx.lineTo(caudaX*Math.cos(Math.PI/2 + angle)+50 + r_dx + pesoY*Math.cos(Math.PI + angle) + cabeca*Math.cos(angle + phi) + dX,
               caudaY*Math.sin(Math.PI/2 + angle)+50 + r_dy + pesoY*Math.sin(Math.PI + angle) + cabeca*Math.sin(angle + phi) + dY);
    ctx.lineTo(caudaX*Math.cos(Math.PI/2 + angle)+50 + r_dx + pesoY*Math.cos(Math.PI + angle) + dX,
               caudaY*Math.sin(Math.PI/2 + angle)+50 + r_dy + pesoY*Math.sin(Math.PI + angle) + dY);
    ctx.lineTo(caudaX*Math.cos(Math.PI/2 + angle)+50 + r_dx + pesoY*Math.cos(Math.PI + angle) + cabeca*Math.cos(angle - phi) + dX,
               caudaY*Math.sin(Math.PI/2 + angle)+50 + r_dy + pesoY*Math.sin(Math.PI + angle) + cabeca*Math.sin(angle - phi) + dY);
    ctx.stroke();
    ctx.closePath();


    //----------------------------------------------------
    //---------------------VETOR NORMAL-------------------
    //----------------------------------------------------
    let normal = massa*g*Math.sin(-angle);
    ctx.beginPath();
    ctx.moveTo((b_size/2)*Math.cos(Math.PI/2 + angle) + b_size*Math.cos(angle)+50 + r_dx + dX,
                (b_size/2)*Math.sin(Math.PI/2 + angle) + b_size*Math.sin(angle)+50 + r_dy + dY);
    ctx.lineTo((b_size/2)*Math.cos(Math.PI/2 + angle) + b_size*Math.cos(angle)+50 + r_dx + normal*Math.cos(angle) + dX,
                (b_size/2)*Math.sin(Math.PI/2 + angle) + b_size*Math.sin(angle)+50 + r_dy + normal*Math.sin(angle) + dY);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();

    //cabeça do vetor
    ctx.beginPath();
    ctx.moveTo((b_size/2)*Math.cos(Math.PI/2 + angle) + b_size*Math.cos(angle)+50 + r_dx + normal*Math.cos(angle) + dX,
                (b_size/2)*Math.sin(Math.PI/2 + angle) + b_size*Math.sin(angle)+50 + r_dy + normal*Math.sin(angle) + dY);
    ctx.lineTo((b_size/2)*Math.cos(Math.PI/2 + angle) + b_size*Math.cos(angle)+50 + r_dx + normal*Math.cos(angle) + cabeca*Math.cos(Math.PI+angle + phi) + dX,
                (b_size/2)*Math.sin(Math.PI/2 + angle) + b_size*Math.sin(angle)+50 + r_dy + normal*Math.sin(angle) + cabeca*Math.sin(Math.PI+angle + phi) + dY);
    ctx.lineTo((b_size/2)*Math.cos(Math.PI/2 + angle) + b_size*Math.cos(angle)+50 + r_dx + normal*Math.cos(angle) + dX,
                (b_size/2)*Math.sin(Math.PI/2 + angle) + b_size*Math.sin(angle)+50 + r_dy + normal*Math.sin(angle) + dY);
    ctx.lineTo((b_size/2)*Math.cos(Math.PI/2 + angle) + b_size*Math.cos(angle)+50 + r_dx + normal*Math.cos(angle) + cabeca*Math.cos(Math.PI+angle - phi) + dX,
                (b_size/2)*Math.sin(Math.PI/2 + angle) + b_size*Math.sin(angle)+50 + r_dy + normal*Math.sin(angle) + cabeca*Math.sin(Math.PI+angle - phi) + dY);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(620, 400, 80, Math.PI, Math.PI + 0.34); 
    ctx.stroke();
    
    ctx.fillStyle = 'black';
    ctx.font = "15px Arial";
    ctx.fillText("θ", 525, 390);

    //----------------------------------------------------
    //---------------------LEGENDAS--------------------------
    //----------------------------------------------------
    ctx.fillStyle = 'black';
    ctx.font = "15px Arial";
    ctx.fillText("N", 130 + dX, 20 + dY);
    ctx.fillStyle = 'black';
    ctx.font = "15px Arial";
    ctx.fillText("→", 130 + dX, 10 + dY);

    ctx.fillStyle = 'black';
    ctx.font = "15px Arial";
    ctx.fillText("P", 70 + dX, 280 + dY);
    ctx.font = "15px Arial";
    ctx.fillText("→", 70 + dX, 270 + dY);

    ctx.fillStyle = 'black';
    ctx.font = "15px Arial";
    ctx.fillText("mgsenθ", 110 + dX, 200 + dY);

    ctx.fillStyle = 'black';
    ctx.font = "15px Arial";
    ctx.fillText("mgcosθ", 0 + dX, 260 + dY);

    // Atualizar o tempo e as posições
    t += 0.1; // Incrementar o tempo (ajuste conforme necessário)
    updatePositions();

    // Agendar o próximo frame de animação, desde que o tempo não tenha excedido o limite
    if (t <= maxTime) {
        requestAnimationFrame(drawAll);
    }
    

}


//----------------------------------------------------
//---------------------ANIMAÇÃO-----------------------
//----------------------------------------------------

drawAll();



