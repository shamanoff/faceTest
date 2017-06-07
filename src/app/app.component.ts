import {Component, OnInit} from '@angular/core';

import {Post} from './post';
import {FacebookService} from 'ng2-facebook-sdk';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  error: any;
  url:string = 'https://graph.facebook.com/v2.9/samooborona.israel/posts?fields=description%2Cfull_picture%2Clink%2Cid&limit=10&access_token=EAACEdEose0cBAFZAWpFV1hVzLNzjMQtKVbjfviWXERESwBWKUk23llDKLMFFF5dBkZAfzuuw1ZAJU4nres9QJjn6kyYzzFSsyBTzPqVoh6qjOoZAgU2NekUZC3l0JHzgQhlUmPK7dWrZBlkWlywwFQxWPJpFXBgzK4VSEYoTJVUyJnQxNz2pCVjPEAjZAL60KoZD';
  posts: Array<Post> = [];

  constructor(private FB: FacebookService, private http: Http) {
    FB.init({
      appId: '447173098963097',
      xfbml: true,
      version: 'v2.9'
    }).catch((err) => {
      this.error = err;
    });
    console.log('constructor work');
  }
/*
  getPost(url: string): Observable<Post> {
    return this.http.get(url)
      .map(this.extractFeeds)
      .catch(this.handleError);

  }

  private extractFeeds(res: Response): Post {
    const feed = res.json();
    console.log(res.json());
    return feed || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }*/

/*  getPosts() {
    return this.FB.api('https://graph.facebook.com/v2.9/samooborona.israel/feed?fields=description%2Cfull_picture%2Clink&limit=25&access_token=EAACEdEose0cBAJZBdZBOv3qFdf4lL74TzZC3Jg3VD4KcPjajGHw7EdB8J6MoZBwPsfjgIAg6SF7cIGShnf6sH61xmZCzKpa274B6YHmZBDzM1rtMOseZAZCoW3LTOVvOC6OAy15Jg9wrWoZA7puEvpUemlynEERqGIr0PDeEVNvudBhgkUxvuZBklZCdZCEC9x0joXAZD')
      .then(res => {
        this.posts = res.json;
        console.log('getPosts work' + res );

      }).catch((err) => {
      this.error = err;
    });
  }*/

stat: any;

   getStatus(){
  this.FB.getLoginStatus().then(res => {

    this.stat = res.authResponse;

  }).catch((err) => {
    this.error = err;
  });
}
  ngOnInit(): void {
    console.log('onInit work');
     // this.getPost(this.url);
    this.getStatus();
     console.log(this.stat);
     // this.getPosts();

    // console.log(JSON.stringify(this.posts));
  }
}
