import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newCustom'
})
export class NewCustomPipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;
    
    let prePositions = ["the", "is", "of"]
    let words = value.split(" ");
    for (let i = 0; i < words.length; i++) {
      let word = words[i]
      if (i > 0 && this.isPreposition(word))
        words[i] = word.toLowerCase();
      else 
        words[i] = this.toTitleCase(word);
      
    }
    return words.join("  ")
  }

  private isPreposition(word:string) : boolean{
    let prePositions = ["the", "is", "of"];
      return prePositions.includes(word.toLowerCase())
  }

  private toTitleCase(word:string) : string{
      return  word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  }
}


// {
//   if (!value) return null;
  
//   let prePositions = ["the", "is", "of"]
//   let words = value.split(" ");

//   for (let i = 0; i < words.length; i++) {
//     if (i > 0 && prePositions.includes(words[i].toLowerCase()))
//       words[i] = words[i].toLowerCase();

//     else {
//       words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1).toLowerCase();
//     }
//   }
//   return words.join("  ")
// }