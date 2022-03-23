import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora DAW2';
  calc = '0'
  eval = '0'

  clear():void {
    this.calc = '0'
    this.eval = '0'
  }

  pressKey(key: string): void {
    if (key === '/' || key === '*' || key === '+' || key === '-' || key === '.'){
      if (this.calc !== ''){
        if (this.calc === '0') this.calc += key;
        let lastKey = this.calc[this.calc.length - 1]
        if (lastKey === '/' || lastKey === '*' || lastKey === '+' || lastKey === '-' || lastKey === '.'){
          let _calc = this.calc.slice(0, -1) + key;
          this.calc = _calc;
          return
        }
      }
    }
    if (this.calc === '0') this.calc = '';
    this.calc += key
  }

  evaluate(): void {
    let lastKey = this.calc[this.calc.length - 1]
    if (lastKey === '/' || lastKey === '*' || lastKey === '+' || lastKey === '-' || lastKey === '.') return
    if (eval(this.eval) === this.calc) return
    this.eval = this.calc
    this.calc = eval(this.calc)
  }
}
