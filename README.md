## About

Download Google Drive files in a specific folder as PDF. Use service account for authentication.

## Install

```
git clone [REPO]
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
