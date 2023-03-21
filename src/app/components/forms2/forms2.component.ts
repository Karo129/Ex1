import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { myNumbers } from 'src/app/myNumbers.interface';

@Component({
  selector: 'app-forms2',
  templateUrl: './forms2.component.html',
  styleUrls: ['./forms2.component.css'],
})
export class Forms2Component {
  myForm: FormGroup;
  Result: any[] = [];
  wynik: any;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      one: ['', Validators.required],
      two: ['', Validators.required],
      three: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  showNumbers() {
    const numbers: myNumbers = {
      one: this.myForm.get('one')!.value,
      two: this.myForm.get('two')!.value,
      three: this.myForm.get('three')!.value,
    };

    this.Result = new Array(...'numbers');
  
    const max = Math.max(...this.Result);
    const min = Math.min(...this.Result);
    const mid = this.Result.reduce((a, b) => a + b, 0) - max - min;

    this.wynik = { min, max, mid };

    console.log(max);
  }
}
