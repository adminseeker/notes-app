const fs=require("fs");
const chalk=require("chalk");
const getNotes = function(){
    return "hi from notes.js"
}

const addNotes = (title,body)=>{
    const notes = loadNotes();
    const duplicate = notes.find((note)=>title===note.title);
    if(!duplicate){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
        console.log(chalk.green("New note added!"))
    }else{
        console.log(chalk.red("Note with same title exist!"));
    }
}

const loadNotes = ()=>{
    try{
    const dataFromTxt = fs.readFileSync("notes.json").toString();
    return JSON.parse(dataFromTxt);
    }catch(e){
        return [];
    }
}

const saveNotes = (notes)=>{
    const stringified = JSON.stringify(notes);
    fs.writeFileSync("notes.json",stringified);
}

const removeNotes = (title)=>{
    const loadedNotes = loadNotes();
    const notesToKeep = loadedNotes.filter((note)=>{
        return !(note.title==title);
    })

    if(loadedNotes.length > notesToKeep.length){
        console.log(chalk.green("Note succesfully removed!"));
        saveNotes(notesToKeep);
    }else{
        console.log(chalk.red("No note found to remove!"));
    }
}

const listNotes=()=>{
    console.log(chalk.green("Your Notes:"));
    const loadedNotes = loadNotes();
    loadedNotes.forEach((note)=>{
        console.log(note.title);
    })   
}

const readNotes=(title)=>{
    const foundNote = loadNotes().find((note)=>title===note.title);
    if(foundNote){
        console.log(chalk.green(foundNote.title + ":")+foundNote.body);
    }else{
        console.log(chalk.red("No note found with that title name"));
    }
}

module.exports = {
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
};