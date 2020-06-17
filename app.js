const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.command({
    command:"add",
    describe:"adds a note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){
        notes.addNotes(argv.title,argv.body);
    }
    
});

yargs.command({
    command:"remove",
    describe:"removes a note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        }
    },
    handler:(argv)=>{
        notes.removeNotes(argv.title);
    }
});

yargs.command({
    command:"list",
    describe:"List Notes",
    handler(){
        notes.listNotes();
    }
});

yargs.command({
    command:"read",
    describe:"reads a note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.readNotes(argv.title);
    }
});

yargs.parse();