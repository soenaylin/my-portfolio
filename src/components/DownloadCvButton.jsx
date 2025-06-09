export default function DownloadCvButton() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/SoeNayLin's_CV_V1.0.pdf"; // path relative to the public folder
        link.download = "SoeNayLin's_CV_V1.0.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            className="download-button"
            onClick={handleDownload}
            style={{ border: "none" }}
        >
            Download CV
        </button>
    );
}
