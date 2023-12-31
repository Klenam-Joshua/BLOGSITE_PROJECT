
export const validateFiles = (files, allowedFileTypes, allowedFileSize) => {

    let filteredFiles = [];

    if (files.length > 0) {

        for (let _file in files) {
            if (!files[_file].type) {
                console.log(files[_file])

                continue
            }
            if (!allowedFileTypes.includes(files[_file].type)) {

                //toast to be used here
                alert("hey my friend , the file must be in image format", files[_file])

                continue
            }
            if (files[_file].size > allowedFileSize) {
                /// toast to be used here
                alert("the size of the image is just too large")
                continue
            }


            // there is a different betweent the files passed as th
            filteredFiles.push(
                {
                    file: files[_file],
                    uploadingImage: false,
                    uploadedImage: false,
                    isSelected: false,
                    error: ""
                })

            //  console.log(filteredFiles)




        }
    }



    return filteredFiles
}



