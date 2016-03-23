import {Component} from 'angular2/core';


@Component({
	selector: 'seller',
	template: '<p>The seller of this product is Mary Lou (98% positive feedback)</p>',
	styles: [':host {background: yellow}']}
)

export class SellerInfoComponent {}
