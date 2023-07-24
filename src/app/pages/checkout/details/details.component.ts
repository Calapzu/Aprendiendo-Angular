import { Component, OnInit } from '@angular/core';
import { ShopinCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

  total$ = this.shoppinCartSvc.totalAction$;
  cart$ = this.shoppinCartSvc.cartAction$;

  constructor(private shoppinCartSvc: ShopinCartService){ }

  ngOnInit(): void {
    
  }
}
