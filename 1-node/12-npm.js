//npm - global command, comes with node
//npm --version

//local dependency - use it only in this project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root, create properties etc.)
//npm init (step by step, press enter to skip)
//npm init -y(everything default)

//package.json contains all the node modules under dependancies. Once you shared
//your work with other people no need to share node modules(they can be larger in size)
//instead after cloning project in to other pc simply command npm install, and it will
//check for package.json file and will download relevant packages.



//scripts in package.json

//
// In a Node.js project, the package.json file contains metadata about the project
// and its dependencies. It also includes a section called "scripts" where you can
// define custom commands that can be executed using the npm or yarn commands.
//     The "scripts" section in package.json allows you to define various commands
// to perform common tasks in your project, such as running tests, starting a development
// server, building the project, or executing custom scripts.

//ex - "scripts": {
//  "start": "node app.js"
// }