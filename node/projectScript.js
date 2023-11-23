const fs = require("fs");
const folderName = process.argv[2] || "Project";
const html = "/index.html";

fs.mkdirSync(folderName);

fs.writeFileSync(`${folderName}/index.html`, "");
fs.writeFileSync(`${folderName}/app.js`, "");
fs.writeFileSync(`${folderName}/style.css`, "");
