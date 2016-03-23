import {Component} from 'angular2/core';
import {RouteParams, RouteData} from 'angular2/router';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {SellerInfoComponent} from './seller';
import {ProductDescriptionComponent} from './product_description';

@Component({
	selector: 'product',
	template: `<div class="product">
			<h1>Product Detail for Product: {{productID}}</h1>
			<router-outlet></router-outlet>
			<a [routerLink]="['./SellerInfo', {id: 123}]">Seller Info</a>
		</div>` ,
	styles: ['.product {background: cyan}'],
	directives: [ROUTER_DIRECTIVES]})

@RouteConfig([
	{path: '/', component: ProductDescriptionComponent, as: 'ProductDescription'
	{path: '/seller/:id', component: SellerInfoComponent, as: 'SellerInfo'}
])

export class ProductDetailComponent {
	productID: string;
	
	constructor(params: RouteParams/*, data: RouteData*/) {
		this.productID = params.get('id');

		console.log('ProductDetailComponent');
		//console.log(`Is this prod environment: ${data.get('isProd')}`);
	}

}



