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
  fileContent: any = '';
  wordCount: { [key: string]: number } = {};
  topWords: Array<{ word: string; count: number }> = [];

  constructor(private uploadService: UploadService){}

  onFilechange( files : FileList): void{
    console.log(files);
    let file = files[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function(x) {
      self.fileContent = fileReader.result;
    }

    fileReader.readAsText(file);
  }
  // onFilechange(event: any) {
  //   console.log(event.target.files[0])
  //   this.file = event.target.files[0]
  // }
  
  upload(event :any) {
    if(!this.fileContent){
      alert("Please select a File or File is empty")
    }
    else{
    const reader = new FileReader();
    
    console.log(this.fileContent);
    const cont=this.fileContent;
    const words=cont.split(' ');
    console.log(words);
    
    words.forEach((word: string | number) => {
      if (!this.wordCount[word]) {
        this.wordCount[word] = 1;
      } else {
        this.wordCount[word]++;
      }
    });

    this.topWords = Object.entries(this.wordCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([word, count]) => ({ word, count }));

      console.log(this.wordCount)
      console.log(this.topWords)
    // if (this.file) {
    //   this.uploadService.uploadfile(this.file).subscribe(resp => {
    //     alert("Uploaded")
    //   })

    //   console.log(this.file.text())
    //   alert("Uploaded")
    // } else {
    //   alert("Please select a file first")
    // }
  }
  
  }

  clearData() {
    this.wordCount = {};
    this.topWords = [];
  }
}
