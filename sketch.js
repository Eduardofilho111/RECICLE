// imagem principal
var imagem;
// imagem intrucao
var instrucao;
// imagem créditos
var creditos;
// som do jogo
var msc;
// tela do menu
var tela = 1;
//fases
var fases;
// tela do jogo fase 1
var fase1;
// tela do jogo fase 2
var fase2;
//tela vitória
var win;
// tela derrota
var derrota;


// posição horizontal Iniciar e Intrucoes
var xMenu = 430;
// posição vertical Iniciar e Intrucoes
var yMenu1 = 45;
var yMenu2 = 80;
var yMenu3 = 115;
var largura = 150;
var altura = 30;

//largura, altura, horizontal e vertical(botão BACK do menu fases)
var xBack1 = 70;
var yBack1 = 48;
var larback1 = 130;
var altback1 = 30;

//largura, altura, horizontal e vertical(botão BACK das instruçoes)
var xBack2 = 435;
var yBack2 = 558;
var larback2 = 150;
var altback2 = 30;

//largura, altura, horizontal e vertical(botão continuar)
var xcont = 420;
var ycont = 48;
var lcont = 130;
var acont = 30;

//largura, altura, horizontal e vertical(botão BACK do jogo)
var xRetornar = 450;
var yRetornar1 = 595;

//variavel do for
var A;

//botão fase1 
var xf1 = 250
var yf1 = 178
var lf1 = 100
var af1 = 30
//botão fase2
var xf2 = 250
var yf2 = 228
var lf2 = 100
var af2 = 30

//////////////////////////////////////////////////////////////////////////////////////////////
//                                     CONTADORES FASE1                                     //
var cont1 = 0; 
var cont2 = 0;
var cont3 = 0;
var cont4 = 0;

//////////////////////////////////////////////////////////////////////////////////////////////
//                                       ITENS FASE1                                        //
//item1
var xitem1 = 150;
var yitem1 = 150;
var raio1 = 25;

//item2
var xitem2 = 250;
var yitem2 = 150;
var raio2 = 25;

//item3
var xitem3 = 350;
var yitem3 = 150;
var raio3 = 25;

//item4
var xitem4 = 450;
var yitem4 = 150;
var raio4 = 25;

//////////////////////////////////////////////////////////////////////////////////////////////
//                                     LIXEIRAS FASE1                                       //
//lixeira1 azul
var xlix1 = 160;
var ylix1 = 465;
var raiolix1 = 50;

//lixeira amarela
var xlix2 = 260;
var ylix2 = 465;
var raiolix2 = 50;

//lixeira verde
var xlix3 = 360;
var ylix3 = 465;
var raiolix3 = 50;

//lixeira vermelha
var xlix4 = 460;
var ylix4 = 465;
var raiolix4 = 50;

//////////////////////////////////////////////////////////////////////////////////////////////
//                                     CONTADORES FASE2                                     //
// contadores para quando o jogador errar //
var contt1 = 0; 
var contt2 = 0;
var contt3 = 0;
var contt4 = 0;
var contt5 = 0; 
var contt6 = 0;
var contt7 = 0;
var contt8 = 0;

// contadores para quando o jogador acertar //
var conttcorreto1 = 0; 
var conttcorreto2 = 0;
var conttcorreto3 = 0;
var conttcorreto4 = 0;
var conttcorreto5 = 0; 
var conttcorreto6 = 0;
var conttcorreto7 = 0;
var conttcorreto8 = 0;

//////////////////////////////////////////////////////////////////////////////////////////////
//                                       ITENS FASE2                                        //
//item1
var xitemm1 = 150;
var yitemm1 = 150;
var raioo1 = 25;

//item2
var xitemm2 = 250;
var yitemm2 = 150;
var raioo2 = 25;

//item3
var xitemm3 = 350;
var yitemm3 = 150;
var raioo3 = 25;

//item4
var xitemm4 = 450;
var yitemm4 = 150;
var raioo4 = 25;

//item5
var xitemm5 = 450;
var yitemm5 = 250;
var raioo5 = 25;

//item6
var xitemm6= 350;
var yitemm6 = 250;
var raioo6 = 25;

//item7
var xitemm7 = 250;
var yitemm7 = 250;
var raioo7 = 25;

//item8
var xitemm8 = 150;
var yitemm8 = 250;
var raioo8 = 25;

//////////////////////////////////////////////////////////////////////////////////////////////
//                                     LIXEIRAS FASE2                                       //
//lixeira1 azul
var xlixx1 = 160;
var ylixx1 = 465;
var raiolixx1 = 50;

//lixeira amarela
var xlixx2 = 260;
var ylixx2 = 465;
var raiolixx2 = 50;

//lixeira verde
var xlixx3 = 360;
var ylixx3 = 465;
var raiolixx3 = 50;

//lixeira vermelha
var xlixx4 = 460;
var ylixx4 = 465;
var raiolixx4 = 50;

function preload() {
  
// imagem tela principal
  imagem = loadImage("Menu.jpg");
// imagem das fases
  fases = loadImage("fases.jpg");
// imagem fase1
  fase1 = loadImage("fase1.png");
// imagem fase2
  fase2 = loadImage("fase2.png");
// imagem vitória
  win = loadImage("win.jpg");
// imagem derrota
  derrota = loadImage("derrota.jpg");
// imagem intruçoes
  instrucao = loadImage("instrucoes.jpg");
// imagem creditos
  creditos = loadImage("creditos.png");
// som tela principal
  soundFormats('mp3');
  msc = loadSound("musica.mp3");
}

function setup() {
  tela = 1;
  createCanvas(626, 626);
  
// musiquinha
  msc.play();
  msc.setVolume(0);
}

function draw() {
  textStyle(NORMAL);
  background(220);
  
// imagem fundo
  image(imagem,0,0);
  
// tela principal
  if ( tela == 1){
    
// botão start
    textAlign(CENTER);
    textSize(20);
    
    if( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura ) {
       stroke(10);
       fill(255,204,4);
       rect(xMenu, yMenu1, largura, altura, 20);
       if (mouseIsPressed) {
       tela = 2;
       cont1 = 0
       cont2 = 0
       cont3 = 0
       cont4 = 0
       }
       }
       fill(10)
       noStroke();
       text("Iniciar", 505, 70);
    
// botão instruções
    if( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura ) {
       stroke(10);
       fill(363,0,0);
       rect(xMenu, yMenu2, largura, altura, 20);
       
       if (mouseIsPressed) {
       tela = 3;
       }
       }
       fill(10)
       noStroke();
       text("Instruções", 505, 100);
    
// botão creditos
    if( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura ) {
       stroke(10);
       fill(0,0,255);
       rect(xMenu, yMenu3, largura, altura, 20);
       
       if (mouseIsPressed) {
       tela = 6;
       }
       }
       fill(10)
       noStroke();
       text("Créditos", 505, 135);
    
    
  }
  
// tela menu das fases
  else if ( tela == 2){
  image(fases,0,0);
  
//orientacao  
  text("Olá amiguinho, selecione a fase que deseja jogar!" ,310,130) ;
    
//botão selecionar fase1    
  if( mouseX > xf1 && mouseX < xf1 + lf1 && mouseY > yf1 && mouseY < yf1 + af1 ) {
       stroke(10);
       fill(255);
       rect(xf1, yf1, lf1, af1, 20);
       
       if (mouseIsPressed) {
       tela = 4; //tela da fase1          
         
       }  
       }
       fill(10)
       noStroke()
    
  if( mouseX > xf2 && mouseX < xf2 + lf2 && mouseY > yf2 && mouseY < yf2 + af2 ) {
       stroke(10);
       fill(255);
       rect(xf2, yf2, lf2, af2, 20);
       
       if (mouseIsPressed) {
       tela = 5; //tela da fase2         
         
       }  
       }
       fill(10)
       noStroke()
       
//for para as fases    
  for (let i=1,A=200;i<=2;i++,A+=50)
      {text("Fase "+i, 300, A) }
    
// botão back das fases
    if( mouseX > xBack1 && mouseX < xBack1 + larback1 && mouseY > yBack1 && mouseY < yBack1 + altback1 ) {
       stroke(10);
       fill(255);
       rect(xBack1, yBack1, larback1, altback1, 20);
       
       if (mouseIsPressed) {
       tela = 1;
       }
       }
       fill(20)
       noStroke();
       text("→ Retornar", 130, 70);
   
  }
  
// tela instruções
  else if ( tela == 3){
    image(instrucao,0,0);
    
// botão back instrucao
    if( mouseX > xBack2 && mouseX < xBack2 + larback2 && mouseY > yBack2 && mouseY < yBack2 + altback2 ) {
       stroke(10);
       fill(363,0,0);
       rect(xBack2, yBack2, larback2, altback2, 20);
       
       if (mouseIsPressed) {
       tela = 1;
       }
    }
    fill(20)
    noStroke();
    text("→ Retornar", 510, 580);
  }

// tela créditos
  else if ( tela == 6){
    image(creditos,0,0);
    
// botão back instrucao
    if( mouseX > xBack2 && mouseX < xBack2 + larback2 && mouseY > yBack2 && mouseY < yBack2 + altback2 ) {
       stroke(10);
       fill(363,0,0);
       rect(xBack2, yBack2, larback2, altback2, 20);
       
       if (mouseIsPressed) {
       tela = 1;
       }
    }
    fill(20)
    noStroke();
    text("→ Retornar", 510, 580);
  }
  
// primeira fase
  else if ( tela == 4){
    image(fase1,0,0);
    
//informacoes
  fill(15)
  text("Organize o lixo nas suas respectivas lixeiras.",310,65)

//lixeira1 azul
  fill(0,0,255)  
  ellipse(xlix1, ylix1, 2*raiolix1, 2*raiolix1)
//lixeira2 amarela
  fill(255,255,0)  
  ellipse(xlix2, ylix2, 2*raiolix2, 2*raiolix2)    
//lixeira3 verde
  fill(0,128,0)  
  ellipse(xlix3, ylix3, 2*raiolix3, 2*raiolix3)      
//lixeira4 vermelha
  fill(255,0,0)  
  ellipse(xlix4, ylix4, 2*raiolix4, 2*raiolix4)
  
    
//item1 na lixeira1 
  if (mouseIsPressed && dist( xitem1, yitem1, mouseX, mouseY) < raio1){
    xitem1 = mouseX;
    yitem1 = mouseY;
  } 
    fill(0,0,255)
    ellipse(xitem1, yitem1, 2*raio1, 2*raio1);

  if ( dist(xitem1, yitem1, xlix1, ylix1) < raio1 + raiolix1){
  cont1 = cont1 + 1;  
  xitem1 = -20
  yitem1 = -20
  }
  else if ( dist(xitem1, yitem1, xlix2, ylix2) < raio2+ raiolix2){
  cont1 = cont1 +2;
  xitem1 = -20
  yitem1 = -20
  }
  else if ( dist(xitem1, yitem1, xlix3, ylix3) < raio3 + raiolix3){
  cont1 = cont1 +2;
  xitem1 = -20
  yitem1 = -20
  }
  else if ( dist(xitem1, yitem1, xlix4, ylix4) < raio4 + raiolix4){
  cont1 = cont1 + 2; 
  xitem1 = -20
  yitem1 = -20
  }   
    
//item2 na lixeira2 
  if (mouseIsPressed && dist( xitem2, yitem2, mouseX, mouseY) < raio2){
    xitem2 = mouseX;
    yitem2 = mouseY;
  } 
    fill(255,255,0)
    ellipse(xitem2, yitem2, 2*raio2, 2*raio2);

  if ( dist(xitem2, yitem2, xlix2, ylix2) < raio2 + raiolix2){
  cont2 = cont2 + 3;  
  xitem2 = -20
  yitem2 = -20
  }  
  else if ( dist(xitem2, yitem2, xlix1, ylix1) < raio1+ raiolix1){
  cont2 = cont2 +4;
  xitem2 = -20
  yitem2 = -20
  }
  else if ( dist(xitem2, yitem2, xlix3, ylix3) < raio3 + raiolix3){
  cont2 = cont2 +4;
  xitem2 = -20
  yitem2 = -20
  }
  else if ( dist(xitem2, yitem2, xlix4, ylix4) < raio4 + raiolix4){
  cont2 = cont2 + 4;  
  xitem2 = -20
  yitem2 = -20
  }
  
//item3 na lixeira3  
  if (mouseIsPressed && dist( xitem3, yitem3, mouseX, mouseY) < raio3){
    xitem3 = mouseX;
    yitem3 = mouseY;
  } 
    fill(0,128,0)
    ellipse(xitem3, yitem3, 2*raio3, 2*raio3);

  if ( dist(xitem3, yitem3, xlix3, ylix3) < raio3 + raiolix3){
  cont3 = cont3 + 5;  
  xitem3 = -20
  yitem3 = -20
  }
  else if ( dist(xitem3, yitem3, xlix1, ylix1) < raio1+ raiolix1){
  cont3 = cont3 +6;
  xitem3 = -20
  yitem3 = -20
  }
  else if ( dist(xitem3, yitem3, xlix2, ylix2) < raio2 + raiolix2){
  cont3 = cont3 +6;
  xitem3 = -20
  yitem3 = -20
  }
  else if ( dist(xitem3, yitem3, xlix4, ylix4) < raio4 + raiolix4){
  cont3 = cont3 + 6;  
  xitem3 = -20
  yitem3 = -20
  }
    
//item4 na lixeira4 
  if (mouseIsPressed && dist( xitem4, yitem4, mouseX, mouseY) < raio4){
    xitem4 = mouseX;
    yitem4 = mouseY;
  } 
    fill(255,0,0)
    ellipse(xitem4, yitem4, 2*raio4, 2*raio4);

  if ( dist(xitem4, yitem4, xlix4, ylix4) < raio4 + raiolix4){
  cont4 = cont4 + 7;  
  xitem4 = -20
  yitem4 = -20 
  }  
  else if ( dist(xitem4, yitem4, xlix1, ylix1) < raio1+ raiolix1){
  cont4 = cont4 +8;
  xitem4 = -20
  yitem4 = -20 
  }
  else if ( dist(xitem4, yitem4, xlix2, ylix2) < raio2 + raiolix2){
  cont4 = cont4 +8;
  xitem4 = -20
  yitem4 = -20 
  }
  else if ( dist(xitem4, yitem4, xlix3, ylix3) < raio3 + raiolix4){
  cont4 = cont4 + 8;  
  xitem4 = -20
  yitem4 = -20 
  }
    
// comando win
  if(cont1 == 1 && cont2 == 3 && cont3 == 5 && cont4 == 7){
  image(win,0,0);
    
// botão back da vitória
    if( mouseX > xBack1 && mouseX < xBack1 + larback1 && mouseY > yBack1 && mouseY < yBack1 + altback1 ) {
       stroke(10);
       fill(255);
       rect(xBack1, yBack1, larback1, altback1, 20);
       
       if (mouseIsPressed) {
       tela = 1;
       }
       }
       fill(20)
       noStroke();
       text("→ Retornar", 130, 70);    
    
// botão continuar
    if( mouseX > xcont && mouseX < xcont + lcont && mouseY > ycont && mouseY < ycont + acont ) {
       stroke(10);
       fill(363,0,0);
       rect(xcont, ycont, lcont, acont, 20);
       
       if (mouseIsPressed) {
       tela = 5;
       }
    }
    fill(20)
    noStroke();
    text("→ Continuar", 478, 70);
}
  
// comando game over    
  if(cont1 == 2 || cont2 == 4 || cont3 == 6 || cont4 == 8){
  image(derrota,0,0);

// botão back da derrota
    if( mouseX > xBack1 && mouseX < xBack1 + larback1 && mouseY > yBack1 && mouseY < yBack1 + altback1 ) {
       stroke(10);
       fill(255);
       rect(xBack1, yBack1, larback1, altback1, 20);
       
       if (mouseIsPressed) {
       tela = 1;
       }
       }
       fill(20)
       noStroke();
       text("→ Retornar", 130, 70);
    
  }       
 }
  
// segunda fase  
  else if ( tela == 5){
    image(fase2,0,0)
    
//informacoes
  fill(15)
  text("Organize o lixo nas suas respectivas lixeiras.",310,65)
    
//lixeira1 azul
  fill(0,0,255)  
  ellipse(xlixx1, ylixx1, 2*raiolixx1, 2*raiolixx1)
//lixeira2 amarela
  fill(255,255,0)  
  ellipse(xlixx2, ylixx2, 2*raiolixx2, 2*raiolixx2)    
//lixeira3 verde
  fill(0,128,0)  
  ellipse(xlixx3, ylixx3, 2*raiolixx3, 2*raiolixx3)      
//lixeira4 vermelha
  fill(255,0,0)  
  ellipse(xlixx4, ylixx4, 2*raiolixx4, 2*raiolixx4)
    
//itemm1 na lixeira1 
  if (mouseIsPressed && dist( xitemm1, yitemm1, mouseX, mouseY) < raioo1){
    xitemm1 = mouseX;
    yitemm1 = mouseY;
  } 
    fill(0,0,255)
    ellipse(xitemm1, yitemm1, 2*raioo1, 2*raioo1);

  if ( dist ( xitemm1, yitemm1, xlixx1, ylixx1) < raioo1 + raiolixx1){
  conttcorreto1 = conttcorreto1 + 5;  
  console.log("acertou")
  xitemm1 = -20
  yitemm1 = -20
  }
  else if ( dist(xitemm1, yitemm1, xlixx2, ylixx2) < raioo2+ raiolixx2){
  contt1 = contt1 +2;
  console.log("errou")
  xitemm1 = -20
  yitemm1 = -20
  }
  else if ( dist(xitemm1, yitemm1, xlixx3, ylixx3) < raioo3 + raiolixx3){
  contt1 = contt1 +2;
  console.log("errou")
  xitemm1 = -20
  yitemm1 = -20
  }
  else if ( dist(xitemm1, yitemm1, xlixx4, ylixx4) < raioo4 + raiolixx4){
  contt1 = contt1 + 2; 
  console.log("errou")
  xitemm1 = -20
  yitemm1 = -20
  } 
   
//item2 na lixeira2 
  if (mouseIsPressed && dist( xitemm2, yitemm2, mouseX, mouseY) < raioo2){
    xitemm2 = mouseX;
    yitemm2 = mouseY;
  } 
    fill(255,255,0)
    ellipse(xitemm2, yitemm2, 2*raioo2, 2*raioo2);

  if ( dist ( xitemm2, yitemm2, xlixx2, ylixx2) < raioo2 + raiolixx2){
  conttcorreto2 = conttcorreto2 + 5;  
  console.log("acertou")
  xitemm2 = -20
  yitemm2 = -20
  }  
  else if ( dist(xitemm2, yitemm2, xlixx1, ylixx1) < raioo1+ raiolixx1){
  contt2 = contt2 +4;
  console.log("errou")
  xitemm2 = -20
  yitemm2 = -20
  }
  else if ( dist(xitemm2, yitemm2, xlixx3, ylixx3) < raioo3 + raiolixx3){
  contt2 = contt2 +4;
  console.log("errou")
  xitemm2 = -20
  yitemm2 = -20
  }
  else if ( dist(xitemm2, yitemm2, xlixx4, ylixx4) < raioo4 + raiolixx4){
  contt2 = contt2 + 4;  
  console.log("errou")
  xitemm2 = -20
  yitemm2 = -20
  }
    
//item3 na lixeira3  
  if (mouseIsPressed && dist( xitemm3, yitemm3, mouseX, mouseY) < raioo3){
    xitemm3 = mouseX;
    yitemm3 = mouseY;
  } 
    fill(0,128,0)
    ellipse(xitemm3, yitemm3, 2*raioo3, 2*raioo3);

  if ( dist ( xitemm3, yitemm3, xlixx3, ylixx3) < raioo3 + raiolixx3){
  conttcorreto3 = conttcorreto3 + 5;
  console.log("acertou")
  xitemm3 = -20
  yitemm3 = -20
  }
  else if ( dist(xitemm3, yitemm3, xlixx1, ylixx1) < raioo1+ raiolixx1){
  contt3 = contt3 +6;
  console.log("errou")
  xitemm3 = -20
  yitemm3 = -20
  }
  else if ( dist(xitemm3, yitemm3, xlixx2, ylixx2) < raioo2 + raiolixx2){
  contt3 = contt3 +6;
  console.log("errou")
  xitemm3 = -20
  yitemm3 = -20
  }
  else if ( dist(xitemm3, yitemm3, xlixx4, ylixx4) < raioo4 + raiolixx4){
  contt3 = contt3 + 6; 
  console.log("errou")
  xitemm3 = -20
  yitemm3 = -20
  }
    
//item4 na lixeira4 
  if (mouseIsPressed && dist( xitemm4, yitemm4, mouseX, mouseY) < raioo4){
    xitemm4 = mouseX;
    yitemm4 = mouseY;
  } 
    fill(255,0,0)
    ellipse(xitemm4, yitemm4, 2*raioo4, 2*raioo4);

  if ( dist ( xitemm4, yitemm4, xlixx4, ylixx4) < raioo4 + raiolixx4){
  conttcorreto4 = conttcorreto4 + 5;  
  console.log("acertou")
  xitemm4 = -20
  yitemm4 = -20 
  }  
  else if ( dist(xitemm4, yitemm4, xlixx1, ylixx1) < raioo1+ raiolixx1){
  contt4 = contt4 +8;
  console.log("errou")
  xitemm4 = -20
  yitemm4 = -20 
  }
  else if ( dist(xitemm4, yitemm4, xlixx2, ylixx2) < raioo2 + raiolixx2){
  contt4 = contt4 +8;
  console.log("errou")
  xitemm4 = -20
  yitemm4 = -20 
  }
  else if ( dist(xitemm4, yitemm4, xlixx3, ylixx3) < raioo3 + raiolixx4){
  contt4 = contt4 + 8; 
  console.log("errou")
  xitemm4 = -20
  yitemm4 = -20 
  }
    
//itemm5 na lixeira1 
  if (mouseIsPressed && dist( xitemm5, yitemm5, mouseX, mouseY) < raioo5){
    xitemm5 = mouseX;
    yitemm5 = mouseY;
  } 
    fill(0,0,255)
    ellipse(xitemm5, yitemm5, 2*raioo5, 2*raioo5);

  if ( dist ( xitemm5, yitemm5, xlixx1, ylixx1) < raioo1 + raiolixx1){
  conttcorreto1 = conttcorreto1 + 5;  
  console.log("acertou")
  xitemm5 = -20
  yitemm5 = -20
  }
  else if ( dist(xitemm5, yitemm5, xlixx2, ylixx2) < raioo2+ raiolixx2){
  contt1 = contt1 +2;
  console.log("errou")
  xitemm5 = -20
  yitemm5 = -20
  }
  else if ( dist(xitemm5, yitemm5, xlixx3, ylixx3) < raioo3 + raiolixx3){
  contt1 = contt1 +2;
  console.log("errou")
  xitemm5 = -20
  yitemm5 = -20
  }
  else if ( dist(xitemm5, yitemm5, xlixx4, ylixx4) < raioo4 + raiolixx4){
  contt1 = contt1 + 2; 
  console.log("errou")
  xitemm5 = -20
  yitemm5 = -20
  } 
    
//item6 na lixeira2 
  if (mouseIsPressed && dist( xitemm6, yitemm6, mouseX, mouseY) < raioo6){
    xitemm6 = mouseX;
    yitemm6 = mouseY;
  } 
    fill(255,255,0)
    ellipse(xitemm6, yitemm6, 2*raioo6, 2*raioo6);

  if ( dist ( xitemm6, yitemm6, xlixx2, ylixx2) < raioo2 + raiolixx2){
  conttcorreto2 = conttcorreto2 + 5;  
  console.log("acertou")
  xitemm6 = -20
  yitemm6 = -20
  }  
  else if ( dist(xitemm6, yitemm6, xlixx1, ylixx1) < raioo1+ raiolixx1){
  contt2 = contt2 +4;
  console.log("errou")
  xitemm6 = -20
  yitemm6 = -20
  }
  else if ( dist(xitemm6, yitemm6, xlixx3, ylixx3) < raioo3 + raiolixx3){
  contt2 = contt2 +4;
  console.log("errou")
  xitemm6 = -20
  yitemm6 = -20
  }
  else if ( dist(xitemm6, yitemm6, xlixx4, ylixx4) < raioo4 + raiolixx4){
  contt2 = contt2 + 4;  
  console.log("errou")
  xitemm6 = -20
  yitemm6 = -20
  }
    
//item7 na lixeira3  
  if (mouseIsPressed && dist( xitemm7, yitemm7, mouseX, mouseY) < raioo7){
    xitemm7 = mouseX;
    yitemm7 = mouseY;
  } 
    fill(0,128,0)
    ellipse(xitemm7, yitemm7, 2*raioo7, 2*raioo7);

  if ( dist ( xitemm7, yitemm7, xlixx3, ylixx3) < raioo3 + raiolixx3){
  conttcorreto3 = conttcorreto3 + 5;
  console.log("acertou")
  xitemm7 = -20
  yitemm7 = -20
  }
  else if ( dist(xitemm7, yitemm7, xlixx1, ylixx1) < raioo1+ raiolixx1){
  contt3 = contt3 +6;
  console.log("errou")
  xitemm7 = -20
  yitemm7 = -20
  }
  else if ( dist(xitemm7, yitemm7, xlixx2, ylixx2) < raioo2 + raiolixx2){
  contt3 = contt3 +6;
  console.log("errou")
  xitemm7 = -20
  yitemm7 = -20
  }
  else if ( dist(xitemm7, yitemm7, xlixx4, ylixx4) < raioo4 + raiolixx4){
  contt3 = contt3 + 6; 
  console.log("errou")
  xitemm7 = -20
  yitemm7 = -20
  }
    
//item8 na lixeira4 
  if (mouseIsPressed && dist( xitemm8, yitemm8, mouseX, mouseY) < raioo8){
    xitemm8 = mouseX;
    yitemm8 = mouseY;
  } 
    fill(255,0,0)
    ellipse(xitemm8, yitemm8, 2*raioo8, 2*raioo8);

  if ( dist ( xitemm8, yitemm8, xlixx4, ylixx4) < raioo4 + raiolixx4){
  conttcorreto4 = conttcorreto4 + 5;  
  console.log("acertou")
  xitemm8 = -20
  yitemm8 = -20 
  }  
  else if ( dist(xitemm8, yitemm8, xlixx1, ylixx1) < raioo1+ raiolixx1){
  contt4 = contt4 +8;
  console.log("errou")
  xitemm8 = -20
  yitemm8 = -20 
  }
  else if ( dist(xitemm8, yitemm8, xlixx2, ylixx2) < raioo2 + raiolixx2){
  contt4 = contt4 +8;
  console.log("errou")
  xitemm8 = -20
  yitemm8 = -20 
  }
  else if ( dist(xitemm8, yitemm8, xlixx3, ylixx3) < raioo3 + raiolixx4){
  contt4 = contt4 + 8; 
  console.log("errou")
  xitemm8 = -20
  yitemm8 = -20 
  }
    
// comando win
  if(conttcorreto1 == 10 && conttcorreto2 == 10 && conttcorreto3 == 10 && conttcorreto4 == 10){
  image(win,0,0);
    
// botão back da vitória
    if( mouseX > xBack1 && mouseX < xBack1 + larback1 && mouseY > yBack1 && mouseY < yBack1 + altback1 ) {
       stroke(10);
       fill(255);
       rect(xBack1, yBack1, larback1, altback1, 20);
       
       if (mouseIsPressed) {
       tela = 1;
       }
       }
       fill(20)
       noStroke();
       text("→ Retornar", 130, 70);    
}
    
// comando game over    
  if(contt1 == 2 || contt2 == 4 || contt3 == 6 || contt4 == 8){
  image(derrota,0,0);

// botão back da derrota
    if( mouseX > xBack1 && mouseX < xBack1 + larback1 && mouseY > yBack1 && mouseY < yBack1 + altback1 ) {
       stroke(10);
       fill(255);
       rect(xBack1, yBack1, larback1, altback1, 20);
       
       if (mouseIsPressed) {
       tela = 1;
       }
       }
       fill(20)
       noStroke();
       text("→ Retornar", 130, 70);
    
    }
  }
}