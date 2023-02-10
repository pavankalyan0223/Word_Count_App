import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-wordcount',
  templateUrl: './wordcount.component.html',
  styleUrls: ['./wordcount.component.css']
})
export class WordcountComponent implements OnInit {
  ngOnInit(): void {

  
  }
  
  file!: File;
  fileContent: any = '';
  wordCount: { [key: string]: number } = {};
  topWords: Array<{ word: string; count: number }> = [];

  constructor(){}

  onFilechange( files : FileList): void{
    
    console.log(files);
    this.file = files[0];
    
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function(x) {
      self.fileContent = fileReader.result;
    }

    fileReader.readAsText(this.file);
  
  }
  
  
  upload() {
    if(!this.fileContent){
      alert("Selected File is empty.")
    }
    else if(!this.fileContent){
      alert("Selected File is empty.")
    }
    else{
    const reader = new FileReader();
    
    this.clearData();

    const cont=this.fileContent;
    console.log(cont);
    
    const words=cont.split(' ');
    console.log(words);
    
    words.forEach((word: string | number) => {
      if (!this.wordCount[word]) {
        this.wordCount[word] = 1;
      } else {
        this.wordCount[word]++;
      }
    });

    console.log(this.wordCount)

    this.topWords = Object.entries(this.wordCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([word, count]) => ({ word, count }));

      console.log(this.topWords)
  }
  }

  clearData() {
    this.wordCount = {};
    this.topWords = [];
  }
}
