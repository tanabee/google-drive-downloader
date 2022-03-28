## About

Download Google Drive files (Docs, Spreadsheet, Slide, Jamboard, etc.) in a specific folder as PDF. Use service account for authentication.

![download-jamboard-using-drive-api](https://user-images.githubusercontent.com/2603644/160069424-309d4d76-cf0d-4787-9c52-ece07211e728.gif)

## Install

```
git clone [REPO]
cd google-drive-downloader
yarn
```

## Usage

1. Allow the GCP project to use Google Drive API
2. Create service account file and place the file directly under the project root folder. ( [Project Root]/serviceAccount.json )
3. Grant the service account the permission to view the target folder.
4. Run the following command.

```
node index.js [Folder ID]
ls dst
```
