import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: "multipleRow"})
export class MultipleRowPipe implements PipeTransform {

  transform(originalArray: any[], rowNumber: number): any[][] {
    rowNumber = rowNumber || 2;
    return originalArray.reduce((previousValue, currentValue, currentIndex) => {
      if (currentIndex % rowNumber === 0) {
        previousValue.push([currentValue]);
      } else {
        previousValue[previousValue.length - 1].push(currentValue);
      }

      return previousValue;
    }, <any[][]> []);
  }

}
