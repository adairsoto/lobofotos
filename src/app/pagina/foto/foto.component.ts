import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  loboatual: any;

  lobos = [
  {
    foto:'https://www.loboswiki.com/Imagenes/lobos-grises.jpg', nome: 'Lobo Cinzento',
    info: 'Os lobos cinzentos são canídeos com caudas longas e espessas, muitas vezes com uma leve coloração preta na ponta. A cor da pelagem é basicamente uma mistura de cinza e marrom com marcas faciais muito peculiares que podem variar de cor do branco sólido a algumas combinações de preto. Os lobos cinzentos parecem um grande cão pastor alemão.',
  },
  
  {
    foto:'https://www.loboswiki.com/Imagenes/manada-de-lobos-del-artico.jpg', nome: 'Lobo Ártico',
    info: 'Uma das criaturas mais fascinantes que habitam o Ártico é precisamente o lobo ártico (Canis lupus arctos). Este animal pode ser considerado como uma raça, subespécie da variante geográfica do lobo cinzento (Canis lupus), uma espécie que originalmente vivia em todo o hemisfério norte. Ao nascer, o lobo ártico começa a apresentar uma pele branca com o nariz ligeiramente achatado, bem como as orelhas, o que permite distingui-lo de outras variantes do lobo cinzento. No entanto, a vida desta espécie é praticamente semelhante à de outros lobos ao redor do mundo.',
  },
  {
    foto:'https://www.loboswiki.com/Imagenes/manada-de-lobos-ibericos.jpg', nome: 'Lobo Ibérico',
    info: 'A subespécie do lobo cinzento, conhecida como lobo ibérico (Canis lupus signatus), foi identificada pela primeira vez em 1907 pelo zoólogo espanhol Ángel Cabrera. Embora muitos taxonomistas não reconheçam esta variante canídeo, o trabalho genético realizado pelo biólogo Robert Wayne da UCLA sugeriu que é uma verdadeira subespécie dentro do gênero. O lobo ibérico habita as florestas e planícies da região noroeste de Espanha, a zona alta do nordeste de Portugal e algumas áreas isoladas da Serra Morena. Mais de 50% dos lobos ibéricos residem no norte de Castilla y León.'
  }
 
  ]
  constructor() { }

  ngOnInit(): void {
  }
    pegarLobo(lobo: any) {
    this.loboatual = lobo;
  }

}



