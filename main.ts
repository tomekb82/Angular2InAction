import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
@Component({
	selector: 'hello-world',
	template: '<h1>Hello {{ name }}!</h1>'
})

export class HelloWorldComponent {
	name: string;

	constructor() {
		this.name = 'HelloWorldComponent';
	}

	test(){
		return "aaa";
	}
}

console.log('HelloWorldComponent module is loaded'

bootstrap(HelloWorldComponent);
