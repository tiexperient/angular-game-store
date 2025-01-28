import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() 
  gameCover: string = "";
  @Input() 
  gameLabel: string = "";
  @Input() 
  gameType: string = "";
  @Input() 
  gamePrice: string = "";
  @Input() 
  gameName: string = "";
  @Input() 
  gameNumbers: string = "";
  @Input() 
  gameAge: number = 0;
  @Input() 
  gameClassificacao: string = "";
  @Input() 
  gameDescription: string = "";
  @Input() 
  gameStar: number = 0;

  isFavorite: boolean = false;  // Variável para controlar o estado de favorito
  isAddedToCart: boolean = false; // Variável para controlar o estado do botão

  constructor() { }

  ngOnInit(): void {}

  get fullStars(): number[] {
    return Array(Math.floor(this.gameStar));
  }

  get hasHalfStar(): boolean {
    return this.gameStar % 1 !== 0;
  }

  get emptyStars(): number[] {
    const totalEmpty = 5 - Math.ceil(this.gameStar);
    return Array(totalEmpty);
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }

  // Função para adicionar ao carrinho
  addToCart(): void {
    this.isAddedToCart = true;
    console.log(`${this.gameLabel} foi adicionado ao carrinho.`);
  }
}
