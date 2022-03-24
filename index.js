const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const folderId = args[0];

const auth = new google.auth.GoogleAuth({
  keyFile: "./serviceAccount.json",
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
});
const drive = google.drive({ version: "v3", auth });

async function download(file) {
  console.log(file.name);
  const destPath = path.join("./dst", `${file.name}.pdf`);
  const dest = fs.createWriteStream(destPath);
  const res = await drive.files.export(
    { fileId: file.id, mimeType: "application/pdf" },
    { responseType: "stream" }
  );
  await new Promise((resolve, reject) => {
    res.data
      .on("error", reject)
      .pipe(dest)
      .on("error", reject)
      .on("finish", resolve);
  });
}

async function main() {
  const q = `'${folderId}' in parents`;
  const res = await drive.files.list({ q });
  const files = res.data.files;
  for await (const file of files) {
    await download(file);
  }
  console.log("Completed");
}

if (!folderId) {
  console.error(
    "The folder ID must be specified as an argument. See below. See below\nCommand: node index.js `Folder ID`"
  );
  process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
