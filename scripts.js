document.getElementById('suggestionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const suggestionInput = document.getElementById('suggestion');
    const suggestion = suggestionInput.value.trim();
    if (suggestion !== '') {
        const suggestionElement = document.createElement('p');
        suggestionElement.textContent = suggestion;
        document.getElementById('suggestions').appendChild(suggestionElement);
        suggestionInput.value = '';
    } else {
        alert('Please enter a suggestion.');
    }
});

document.getElementById('toggleButton').addEventListener('click', function() {
    const suggestionsDiv = document.getElementById('suggestions');
    if (suggestionsDiv.style.display === 'none') {
        suggestionsDiv.style.display = 'block';
        this.textContent = 'Hide Suggestions';
    } else {
        suggestionsDiv.style.display = 'none';
        this.textContent = 'Show Suggestions';
    }
});
