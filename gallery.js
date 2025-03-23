document.getElementById("gallery-link").addEventListener("click", function () {
    document.getElementById("gallery-section").classList.remove("hidden");
    document.getElementById("upload-section").classList.add("hidden");
});

document.getElementById("upload-link").addEventListener("click", function () {
    document.getElementById("gallery-section").classList.add("hidden");
    document.getElementById("upload-section").classList.remove("hidden");
});

// Open Camera and Capture Image
document.getElementById("open-camera").addEventListener("click", function () {
    let cameraInput = document.createElement("input");
    cameraInput.type = "file";
    cameraInput.accept = "image/*";
    cameraInput.capture = "environment"; // Forces camera on mobile
    cameraInput.style.display = "none";

    cameraInput.addEventListener("change", function (event) {
        let file = event.target.files[0];
        if (file) {
            addImageToGallery(file);
        }
    });

    document.body.appendChild(cameraInput);
    cameraInput.click();
});

// Upload image from file manager
document.getElementById("file-upload-btn").addEventListener("click", function () {
    document.getElementById("file-upload").click();
});

document.getElementById("file-upload").addEventListener("change", function (event) {
    let file = event.target.files[0];
    if (file) {
        addImageToGallery(file);
    }
});

// Function to handle image upload and display
function addImageToGallery(file) {
    let reader = new FileReader();
    reader.onload = function (e) {
        let img = document.createElement("img");
        img.src = e.target.result;
        img.alt = "Uploaded Image";

        img.addEventListener("click", function () {
            if (confirm("Do you want to delete this image?")) {
                img.remove();
            }
        });

        document.getElementById("image-container").appendChild(img);
    };
    reader.readAsDataURL(file);
}
