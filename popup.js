document.addEventListener('DOMContentLoaded', () => {
    loadHighlights();
    document.getElementById('summarizeButton').addEventListener('click', summarizeHighlights);
});

function loadHighlights() {
    chrome.storage.local.get({ highlights: [] }, (result) => {
        const highlightsList = document.getElementById('highlightsList');
        highlightsList.innerHTML = '';

        result.highlights.forEach((text, index) => {
            const div = document.createElement('div');
            div.textContent = text;
            div.className = 'highlight-item';

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.style.height = '24px';
            deleteButton.style.marginLeft = '2px';
            deleteButton.onclick = () => deleteHighlight(index);

            div.appendChild(deleteButton);
            highlightsList.appendChild(div);
        });
    });
}

function deleteHighlight(index) {
    chrome.storage.local.get({ highlights: [] }, (result) => {
        const updatedHighlights = result.highlights;
        updatedHighlights.splice(index, 1);
        chrome.storage.local.set({ highlights: updatedHighlights }, loadHighlights);
    });
}

async function summarizeHighlights() {

        alert('Highlight button tapped.'); 
}