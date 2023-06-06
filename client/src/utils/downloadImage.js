import FileSaver from "file-saver";

const downloadImage = (image) => {
    FileSaver.saveAs(image, "image.jpg")
}

export default downloadImage;