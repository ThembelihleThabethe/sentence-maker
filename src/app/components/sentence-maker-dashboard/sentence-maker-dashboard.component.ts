import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import * as confetti from 'canvas-confetti';
import { Sentence } from 'src/app/service/sentence';
import { SentenceMakerService } from 'src/app/service/sentence.service';

@Component({
  selector: 'app-sentence-maker-dashboard',
  templateUrl: './sentence-maker-dashboard.component.html',
  styleUrls: ['./sentence-maker-dashboard.component.scss']
})
export class SentenceMakerDashboardComponent implements OnInit {
  public clicked = false
  public nouns: Object | any
  public verbs: Object | any
  public adjectives: Object | any
  public adverbs: Object | any
  public pronouns: Object | any
  public prepositions: Object| any
  public conjunctions: Object | any
  public determiners: Object | any
  public exclamations: Object | any

  constructor(private dataService: SentenceMakerService, private renderer2: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.dataService.getNouns().subscribe(res => {
      this.nouns = res;
    });
    this.dataService.getVerbs().subscribe(res => {
      this.verbs = res;
    });
    this.dataService.getAdjectives().subscribe(res => {
      this.adjectives = res;
    });
    this.dataService.getAdverbs().subscribe(res => {
      this.adverbs = res;
    });
    this.dataService.getPronouns().subscribe(res => {
      this.pronouns = res;
    });
    this.dataService.getPrepositions().subscribe(res => {
      this.prepositions = res;
    });
    this.dataService.getConjunctions().subscribe(res => {
      this.conjunctions = res;
    });
    this.dataService.getDeterminers().subscribe(res => {
      this.determiners = res;
    });
    this.dataService.getExclamations().subscribe(res => {
      this.exclamations = res;
    });
  }

  public concatStrings(textString: string) {
    const textAreaElement = document.getElementById('textArea') as HTMLInputElement

    textAreaElement.value = textAreaElement.value + textString + " "
  }

  public submit(): void {
    const textAreaElement = document.getElementById('textArea') as HTMLInputElement

    this.dataService.postSentence(textAreaElement.value).subscribe(res => {
      console.log(res)
    });


    const canvas = this.renderer2.createElement('canvas')

    this.renderer2.appendChild(this.elementRef.nativeElement, canvas)

    const myConfetti = confetti.create(canvas, {
      resize: true // will fit all screen sizes
    });

    myConfetti();
    this.clicked = true;
  }
}
