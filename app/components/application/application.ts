
import  {Component} from 'angular2/core';
import  {NgFor} from 'angular2/common';
//import  CarouselComponent from 'app/components/carousel/carousel';
//import  FooterComponent from 'app/components/footer/footer';
//import  NavbarComponent from 'app/components/navbar/navbar';
import  ProductItemComponent from '../product-item/product-item';
//import  SearchComponent from 'app/components/search/search';
//import  {Product, ProductService} from 'app/services/product-service';


import {Component, bootstrap, provide} from 'angular2/core';
import {HomeComponent} from './../../components/home';
import {ProductDetailComponent} from "./../../components/product";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
	selector: 'auction-application',
	providers: [
//		ProductService
	],
	templateUrl: 'app/components/application/application.html',
	styleUrls: ['app/components/application/application.css'],


	directives: [
		ROUTER_DIRECTIVES,

		NgFor,
//		CarouselComponent,
//		FooterComponent,
//		NavbarComponent,
		ProductItemComponent,
//		SearchComponent
]
	})

@RouteConfig([
	{path: '/', component: HomeComponent,as: 'Home'},
	{path: '/product', component: ProductDetailComponent, as: 'ProductDetail'}
])

export default class ApplicationComponent {
//	products: Array<Product> = [];

	//constructor(private productService: ProductService) {
//		this.products = this.productService.getProducts();
//	}
	constructor() {

console.log('ApplicationComponent');
	}
}