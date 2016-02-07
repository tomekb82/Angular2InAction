import {Component, OnInit} from 'angular2/core';
import { NgFor} from 'angular2/common';
@Component({	
	templateUrl: 'app/components/stars/stars.html',
	styles: [` .starrating { color: #d17581; }`],
	directives: [NgFor],
	selector: 'auction-stars',
	inputs: ['rating', 'count']
})

export default class StarsComponent implements OnInit {
	count: number = 5;
	rating: number = 0;
	stars: boolean[] = [];

	ngOnInit() {
		for (let i = 1; i <= this.count; i++) {
			this.stars.push(i > this.rating);
		}
	}
}
