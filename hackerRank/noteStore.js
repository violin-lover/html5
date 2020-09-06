/*class NotesStore {
noteObj = {};

addNote(state,name){

if(this.noteObj[state]){
  this.noteObj[state].push(name)
  } else {
  this.noteObj[state] = [name]
  }

}

getNote(state){
if(state == "active" || state == "completed" || state == "others"){ 
return this.noteObj[state]
} else {
throw `Error: invalid state ${state}`
}

}
}

let store = new NotesStore();
store.addNote("complete","Jessie")
store.addNote("active","Raymond")
store.addNote("other","Hillary")
console.log(store.getNote("active"))*/


class NotesStore {
noteObj = {};

addNotes(state, name){
debugger;
if(this.noteObj[state]){
this.noteObj[state].push(name);
} else {
this.noteObj[state] = [name]
}
}

getNotes(state){
if(state == "active" || state == "completed" || state == "other"){
return this.noteObj[state];
} else {
throw `Invalid State ${state}`;
}
}
}

let store = new NotesStore();
store.addNotes("completed", "Jessie");
store.addNotes("active", "Raymond");
store.addNotes("other","Hillary");
store.getNotes("completed");
