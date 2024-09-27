const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');
const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;
//Calcula o número de colunas de texto baseando-se na tela
const cols = Math.floor(w/10)+1;
const yPos = Array(cols).fill(0);

ctx.fillStyle = '#b00b69';
ctx.fillRect(0,0,w,h);

function DesenhaMatrix(){
    ctx.fillStyle = '#0001';
    ctx.fillRect(0,0,w,h);

    ctx.fillStyle = '#fff';//cor da letra
    ctx.font ='10 monospace';//tamanho fonte
    /*Itera por cada coluna do texto*/
    yPos.forEach((y,ind)=>{
        //gera um caractere aleatório com código ascii entre 1 a 128
        const text = String.fromCharCode(Math.random()*128);
        //define a posição x com base no indice da coluna
        const x = ind * 10;
        //desenha  o texto na posição x e y atuais
        ctx.fillText(text,x,y);

        if(y>100 + Math.random() * 10000) yPos[ind] = 0;
        else yPos[ind] = y + 10;//Espaçamento (altura) entre as letras
    })
}
setInterval(DesenhaMatrix, 50);//Velocidade