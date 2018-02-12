(function () {
    chrome.tabs.getSelected(null, function (tab) {
        $("#title").text(tab.title)
        $("#url").text(tab.url)

        $("#qrcode").qrcode({
            text: tab.url,
            width: 256,
            height: 256
        })
    })
}.call(this))