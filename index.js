const fs = require("fs");
const path = require("path");
const readDir = require("./lib/readDir.js");
const getFiles = require("./lib/getFiles.js");
const fndFlswName = require("./lib/fndFlswName.js");
const fndFlsNotFound = require("./lib/fndFlsNotFound.js");
const getIdxofFilesFound = require("./lib/getIdxofFilesFound.js");
const getIdxofFilesNotFound = require("./lib/getIdxofFilesnotFound.js");
const rnFlsNFndwNameAIdx = require("./lib/rnFlsNFndwNameAIdx.js");
module.exports = {
  moveData: (oldPath, newPath) => {
    if (fs.existsSync(oldPath) && fs.existsSync(newPath)) {
      let content = fs.readdirSync(oldPath);
      if (content.length > 0) {
        let movedFiles = [];
        for (let item of content) {
          if (`${oldPath}\\${item}` === newPath) {
            continue;
          }
          fs.renameSync(`${oldPath}\\${item}`, `${newPath}\\${item}`);
          movedFiles.push(`${newPath}\\${item}`);
        }
        return {
          filesAndFoldersMoved: movedFiles.length,
          movedFiles: movedFiles
        };
      } else {
        return `\"${oldPath}\" folder is empty!`;
      }
    } else {
      if (!fs.existsSync(oldPath)) {
        return `\"${oldPath}\" not found`;
      }
      if (!fs.existsSync(newPath)) {
        return `\"${newPath}\" not found`;
      }
    }
  },
  renameAllFiles: (dirPath, newName = "File") => {
    if (fs.existsSync(dirPath) && dirPath) {
      let content = readDir(dirPath);
      if (content.length > 0) {
        let files = getFiles(content);
        if (files.length > 0) {
          let filesFound = fndFlswName(files, newName);
          let filesNotFound = fndFlsNotFound(files, filesFound);
          if (filesNotFound.length > 0) {
            let indexOfFilesFound = getIdxofFilesFound(filesFound);
            let indexOfFilesNotFound = getIdxofFilesNotFound(
              files,
              indexOfFilesFound
            );
            let renamedFiles = rnFlsNFndwNameAIdx(
              filesNotFound,
              indexOfFilesNotFound,
              newName,
              dirPath
            );
            return {
              totalFilesRenamed: filesNotFound.length,
              renamedFiles: renamedFiles
            };
          } else {
            return `\'${filesFound.length}\' Files with name \"${newName}\" already exists`;
          }
        } else {
          return `No files found in \"${dirPath}\" folder`;
        }
      } else {
        return `\"${dirPath}\" folder is empty!`;
      }
    } else {
      if (dirPath == undefined) {
        return `\"dirPath\" not found!`;
      }
      if (!fs.existsSync(dirPath)) {
        return `\"${dirPath}\" not found!`;
      }
    }
  },
  renAllFlsWithExts: (dirPath, newName = "File") => {
    if (fs.existsSync(dirPath) && dirPath) {
      let content = fs.readdirSync(dirPath);
      if (content.length > 0) {
        let files = content.filter(item => {
          if (path.extname(item)) {
            return item;
          }
        });
        if (files.length > 0) {
          let exts = files.map(item => {
            return path.extname(item).split(".")[1];
          });
          let uniqueExts = [];
          for (const ext of exts) {
            if (!uniqueExts.includes(ext)) {
              uniqueExts.push(ext);
            }
          }
          let noFilesofExts = [];
          for (const uniqueExt of uniqueExts) {
            noFilesofExts.push({
              fileType: uniqueExt,
              totalFiles: files.filter(file => {
                if (path.extname(file).split(".")[1] === uniqueExt) {
                  return 1;
                }
              }).length,
              filesRenamed: files.filter(file => {
                if (path.extname(file).split(".")[1] === uniqueExt) {
                  return 1;
                }
              })
            });
          }
          for (const noFilesofExt of noFilesofExts) {
            let temp = [];
            for (const item of noFilesofExt.filesRenamed) {
              fs.renameSync(
                `${dirPath}\\${item}`,
                `${dirPath}\\${newName} ${noFilesofExt.filesRenamed.indexOf(
                  item
                ) + 1}${path.extname(item)}`
              );
              temp.push(
                `${dirPath}\\${newName} ${noFilesofExt.filesRenamed.indexOf(
                  item
                ) + 1}${path.extname(item)}`
              );
            }
            noFilesofExt.filesRenamed = temp;
          }
          noFilesofExts.unshift({ totalFilesRenamed: files.length });
          return noFilesofExts;
        } else {
          return `No files found in \"${dirPath}\" folder`;
        }
      } else {
        return `\"${dirPath}\" folder is empty!`;
      }
    } else {
      if (dirPath == undefined) {
        return `\"dirPath\" not found!`;
      }
      if (!fs.existsSync(dirPath)) {
        return `\"${dirPath}\" not found!`;
      }
    }
  }
};
