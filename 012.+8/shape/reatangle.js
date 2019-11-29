// exports.area = (width,height)=> width * height;

// exports.cir = (width,height) => 2 * ( width + height );

module.exports = {
    area:(width,height) => {
        return width * height;
    },
    cir: (width,height) => {
        console.log("continue")
        return 2*(width + height);
    }
    currentDateTime: Date(),
}