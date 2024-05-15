const data=require('./app');
data.addNote('title1','author1');
data.readNote("To kill a mockingbird");
data.removeNote("title1");
data.getAllNotes();