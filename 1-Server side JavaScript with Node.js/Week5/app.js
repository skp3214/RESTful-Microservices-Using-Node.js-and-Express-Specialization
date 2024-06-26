const fs=require('fs');
const loadNotes=()=>{
    const buffer=fs.readFileSync('notes.json');
    const dataStr=buffer.toString();

    const obj=JSON.parse(dataStr);
    return obj;
}

const addNote=(title,author)=>{
    const notes=loadNotes();
    const duplicateNotes=notes.filter((note)=>note.title===title);
    if(duplicateNotes.length==0){
        notes.push({
            title:title,
            author:author
        })
    }
    else{
        console.log("Note title already exists");
    }
    saveNotes(notes);
}
const saveNotes=(notes)=>{
    const dataStr=JSON.stringify(notes);
    fs.writeFileSync("notes.json",dataStr);
}
const getAllNotes=()=>{
    const notes=loadNotes();
    notes.forEach((note)=>{
        console.log(note.title);
    })
}
const readNote=(title)=>{
    const notes=loadNotes();
    var note=notes.find((note)=>note.title===title);
    if(note){
        console.log("Title"+title);
    }
    else{
        console.log("note not found")
    }
}
const removeNote=(title)=>{
    const notes=loadNotes();
    const findIndex=notes.findIndex(note=>note.title===title);
    if(findIndex!==-1){
        notes.splice(findIndex,1);
    }
    else{
        console.log("No note found")
    }
    saveNotes(notes);
}
module.exports={addNote,getAllNotes,readNote,removeNote}

