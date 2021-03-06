import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Repos {
  id: string;
  name: string;
  html_url: string;
  description: string;
}

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})

export class HttpClientComponent implements OnInit {

userName: string = "2711-bharath"
baseURL: string = "https://api.github.com/";
repos: Repos[];


constructor(private http: HttpClient) {
}

ngOnInit() {
  this.getRepos()
}


public getRepos() {

  return this.http.get<Repos[]>(this.baseURL + 'users/' + this.userName + '/repos')
    .subscribe(
      (response) => {                           //Next callback
        console.log('response received')
        console.log(response);
        this.repos = response; 
      },
      (error) => {                              //Error callback
        console.error('Request failed with error')
        alert(error);
      },
      () => {                                   //Complete callback
        console.log('Request completed')
      })
}

}
