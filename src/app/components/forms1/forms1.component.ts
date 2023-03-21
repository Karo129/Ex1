import { Component } from '@angular/core';

@Component({
  selector: 'app-forms1',
  templateUrl: './forms1.component.html',
  styleUrls: ['./forms1.component.css']
})
export class Forms1Component {
firstNb: number = 0;
secondNb: number = 0;
thirdNb: number= 0;
Result: {max: number, min: number, mid: number}={max: 0, min: 0, mid: 0};

// showNumbers(){
// const numbers= [this.firstNb, this.secondNb, this.thirdNb];
// const max = Math.max(...numbers);
// const min = Math.min(...numbers);
// const mid = numbers.reduce((a,b)=> a+b, 0)- max - min;
//   this.Result= {max, min, mid};
// }


showNumbers(){
  const numbers= [this.firstNb, this.secondNb, this.thirdNb];
  const sortedNumbers = numbers.sort((a,b)=> a-b);
  const max = sortedNumbers[2];
  const min = sortedNumbers[0];
  const mid = sortedNumbers[1];
    this.Result= {max, min, mid};
  }
}
