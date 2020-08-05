function analyzeText(txt){
debugger;
txt = txt.replace(/[\~\`\!\@\#\$\%\^\&\*\(\)\+\=\{\}\[\]\|\:\;\"\<\>\,\.\?\\]/g,' ')
txt = txt.replace(/[\_\-\/]/g,' ')
let words = txt.split(" ")
const wordMap = new Map()

for(let i = 0; i < words.length; i++){
if(wordMap.has(words[i])){
wordMap.set(words[i] , wordMap.get(words[i]) + 1);
} else {
wordMap.set(words[i] , 1)
    }
  }
  display(wordMap)
}

 const createRow = function(k){
   let rowHtml = `<tr>
   <td>${k[0]}</td>
   <td>${k[1]}</td>
   </tr>`
    return rowHtml;
 }

function display(wordMap){
let tableHTML = `
<table>
<tr>
  <th>Words Sorted By its Frequency</th>
  <th>Occurence</th>
  <th>Frequency</th>
</tr>`

for(const k of wordMap.entries()){
tableHTML += createRow(k)
  }
  tableHTML += `</table>`
  wordFrequencyAnswer.innerHTML = tableHTML;
}


