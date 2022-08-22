import { Injectable } from '@angular/core';
import { Sentence } from './sentence';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SentenceMakerService {
  // Node/Express API
  REST_API: string = 'http://localhost:8000/api';
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  postSentence(data: string): Observable<Sentence> {
    let API_URL = `${this.REST_API}/sentence`;
    return this.httpClient
      .post(API_URL, { text: data })
      .pipe(catchError(this.handleError));
  }

  getSentences() {
    return this.httpClient.get(`${this.REST_API}/sentences`);
  }

  getNouns() {
    return this.httpClient.get(`${this.REST_API}/nouns`);
  }

  getVerbs() {
    return this.httpClient.get(`${this.REST_API}/verbs`);
  }

  getAdjectives() {
    return this.httpClient.get(`${this.REST_API}/adjectives`);
  }

  getAdverbs() {
    return this.httpClient.get(`${this.REST_API}/adverbs`);
  }

  getPronouns() {
    return this.httpClient.get(`${this.REST_API}/pronouns`);
  }

  getPrepositions() {
    return this.httpClient.get(`${this.REST_API}/prepositions`);
  }

  getConjunctions() {
    return this.httpClient.get(`${this.REST_API}/conjunctions`);
  }

  getDeterminers() {
    return this.httpClient.get(`${this.REST_API}/determiners`);
  }

  getExclamations() {
    return this.httpClient.get(`${this.REST_API}/exclamations`);
  }


  // Determiner
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    window.alert(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }
}