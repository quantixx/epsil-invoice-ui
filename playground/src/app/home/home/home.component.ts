import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: object;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.data = this.http.get('http://localhost:5555/invoices');
  }
}
