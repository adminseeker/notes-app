# notes-app

This is node.js console based notes taking app.

node app.js [command]

Commands:
  app.js add     adds a note
  app.js remove  removes a note
  app.js list    List Notes
  app.js read    reads a note

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
 
 // for adding a note
 
node app.js add [Options]

adds a note

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  --title    Note title                                      [string] [required]
  --body     Note body                                       [string] [required]

// for removing a note
node app.js remove [Options]

removes a note

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  --title    Note title                                      [string] [required]

//for listing notes

node app.js list

//for reading a note

node app.js read [Options]

reads a note

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  --title    Note title                                      [string] [required]
