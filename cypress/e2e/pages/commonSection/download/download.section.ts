class DownloadSection{
    get selectors(): any {
        return {
            DIRECTED_DOWNLOAD_BTN: '#direct-download'
        };
    }
}
const downloadSection = new DownloadSection();
export {downloadSection};