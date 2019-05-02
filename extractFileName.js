// You have to extract a portion of the file name as follows:

//     Assume it will start with date represented as long number
//     Followed by an underscore
//     Youll have then a filename with an extension
//     it will always have an extra extension at the end


// 1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

// 1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

// 1231231223123131_myFile.tar.gz2

// FILE_NAME.EXTENSION

// This_is_an_otherExample.mpg

// myFile.tar
// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        return'hello';
    }
}

console.log(FileNameExtractor.extractFileName('1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION'));

// Regexp almost working!!!         (([A-Z]\w+(?=.))(.)\w+)