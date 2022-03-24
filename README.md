## About

Download Google Drive files in a specific folder as PDF. Use service account for authentication.

## Install

```
git clone [REPO]
yarn
```

## Usage

1. Create service account file and place the file directly under the project root folder. ( [Project Root]/serviceAccount.json )
2. Grant the service account the permission to view the target folder.
3. Run the following command.

```
node index.js [Folder ID]
ls dst
```
