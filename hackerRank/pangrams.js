function pangrams(s) {
/*debugger;
let str = s.toLowerCase().split("").sort().join("")
str.replace(/\s/g, "");
let alphabet = "abcdefghijklmnopqrstuvwxyz"
let count = 0;

for(let i = 0; i < s.length; i++){
if(str.includes(alphabet.split[i])){
count = count;
        } else {
        count++    
        }

        if(count == 25){
        return "pangram"
        } else {return "not pangram"}
    }*/
//--------------------------------------------------------------
    /*let str = s.toLowerCase();
    let alphabet='abcdefghijklmnopqrstwxyz';
    let count = 0;
    for(const c of alphabet){
        if(str.includes(c)){
            count++;
        }
    }
    return (count === alphabet.length) ? 'pangram' : 'not pangram';*/

    let str = s.toLowerCase();
    let alphabet='abcdefghijklmnopqrstwxyz';
    for(const c of alphabet){
        if(!str.includes(c)){
            return "not pangram"
        }
    }
    return "pangram"
//---------------------------------------------------------------
}

//return Array.from((new Map(s.toLowerCase().replace(/\s/g, '').split('').map(e=>[e,e]))).keys()).length===26?"pangram":"not pangram";

//return Object.keys(Object.fromEntries(s.toLowerCase().replace(/\s/g, '').split('').map(e=>[e,e]))).length===26?"pangram":"not pangram";

/*let cleanA = s.toLowerCase().replace(/\s/g, '').split('');
let set = new Set(cleanA);
return set.size===26?"pangram":"not pangram";*/

