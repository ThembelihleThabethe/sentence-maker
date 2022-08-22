import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as confetti from 'canvas-confetti';
import { Response } from 'src/app/service/sentence';
import { SentenceMakerService } from 'src/app/service/sentence.service';

@Component({
  selector: 'app-sentence-maker-dashboard',
  templateUrl: './sentence-maker-dashboard.component.html',
  styleUrls: ['./sentence-maker-dashboard.component.scss']
})
export class SentenceMakerDashboardComponent implements OnInit {
  public clicked = false
  public sentenceList = false
  public nouns: Response | any
  public verbs: Response | any
  public adjectives: Response | any
  public adverbs: Response | any
  public pronouns: Response | any
  public prepositions: Response | any
  public conjunctions: Response | any
  public determiners: Response | any
  public exclamations: Response | any
  public sentences : Response | any

  constructor(private dataService: SentenceMakerService, private changeDetector: ChangeDetectorRef) { }

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
    this.clicked = true;

    const textAreaElement = document.getElementById('textArea') as HTMLInputElement
    if (textAreaElement.value) {
      this.dataService.postSentence(textAreaElement.value).subscribe(res => {
        if (res) {
          this.changeDetector.detectChanges()

          const canvas = document.getElementById('myCanvas') as HTMLCanvasElement
          const canvas2 = document.getElementById('myCanvas2') as HTMLCanvasElement
          var ctx = canvas2.getContext("2d")
          if (ctx != null) {
            ctx.strokeStyle = "#FFA500"
            ctx.font = "50px Arial"
            ctx.strokeText("Thank You", 10, 120)
          }
          const myConfetti = confetti.create(canvas, {
            resize: true // will fit all screen sizes
          });

          myConfetti();
        }
      })
    }
  }

  public getsentenceList(){
    this.sentenceList = true
    this.clicked = false
    this.dataService.getSentences().subscribe(res => {
      this.sentences = res;
    });
  }

  public resubmit() {
    this.clicked = false
    this.sentenceList = false
  }
}
