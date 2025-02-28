document.getElementById("hamburger").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", function (event) {
    const navLinks = document.getElementById("nav-links");
    const hamburger = document.getElementById("hamburger");

    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove("active");
    }
});

// Close menu when clicking a link
document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", function () {
        document.getElementById("nav-links").classList.remove("active");
    });
})
// here

document.getElementById("downloadResume").addEventListener("click", function() {
    const resumeUrl = "https://drive.google.com/file/d/1TKrxARzwv9ul9o_jjDlkfGlF3-gDqGSp/view?usp=drive_link";

    // Open in a new tab
    window.open(resumeUrl, "_blank");

    // Try downloading the file
    fetch(resumeUrl)
        .then(response => response.blob()) // Convert response to a blob
        .then(blob => {
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = "Zainab-Shoaib.pdf"; // Set a custom filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        })
        .catch(error => console.error("Download failed:", error));
});

