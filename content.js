document.addEventListener("mouseup", function (e) {
    // Ignore clicks on the button itself
    if (e.target.id === 'highlight-save-button') return;

    const selectedText = window.getSelection().toString().trim();
    if (selectedText.length > 0) {
        showSaveButton(e.clientX + window.scrollX, e.clientY + window.scrollY, selectedText);
    }
});

function showSaveButton(x, y, selectedText) {
    const existingButton = document.getElementById('highlight-save-button');
    if (existingButton) existingButton.remove();

    const button = document.createElement('button');
    button.id = 'highlight-save-button';
    button.textContent = 'Save Highlight?';
    button.style.position = 'absolute';
    button.style.left = `${x + 10}px`; 
    button.style.top = `${y + 10}px`;
    button.style.zIndex = 9999;
    button.style.padding = '5px 10px';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
    document.body.appendChild(button);

    button.addEventListener('click', (event) => {
        event.stopPropagation();
        saveHighlight(selectedText);
        window.getSelection().removeAllRanges();  // Clear selection
        button.remove();
    });
}

function saveHighlight(text) {
    chrome.storage.local.get({ highlights: [] }, (result) => {
        const updatedHighlights = result.highlights;
        updatedHighlights.push(text);
        chrome.storage.local.set({ highlights: updatedHighlights });
    });
}