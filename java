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
