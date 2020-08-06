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
  let total = frequency(wordMap)
  let entries = wordMap.entries()
  let sortedEntries = Array.from(entries).sort(sortOccurence)
  display(total,sortedEntries)
}

 const createRow = function(k,total){
   let percent = 100*(k[1] / total)
   let rowHtml = `<tr>
   <td>${k[0]}</td>
   <td>${k[1]}</td>
   <td>${percent.toFixed(2) + "%"}</td>
   </tr>`
    return rowHtml;
 }

function display(total,sortedEntries){
debugger;
let tableHTML = `
<table>
<tr>
  <th>Words Sorted By its Frequency</th>
  <th>Occurence</th>
  <th>Frequency</th>
</tr>`

for(const k of sortedEntries){
tableHTML += createRow(k,total)
  }
  tableHTML += `</table>`
  wordFrequencyAnswer.innerHTML = tableHTML;
}

function frequency(wordMap){
let total = 0;
for(const k of wordMap.values()){
total += k;
  }
  return total;
}

const sortOccurence = function(entryA,entryB){
return entryB[1] - entryA[1];
}


