

function doit() {
    domtoimage.toPng(document.getElementById('my-node'))
    .then(function (dataUrl) {
        const ogImg = document.getElementById("og-img");
        var img = new Image();
        img.src = dataUrl
        document.body.appendChild(img);
        

        ogImg.setAttribute("content", `${objectUrl}`);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
}
