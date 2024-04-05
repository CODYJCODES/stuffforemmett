let automaticShowingEnabled = true;

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
    
    if (!automaticShowingEnabled) {
        document.getElementById('suggestions').style.display = 'none';
    }
});

document.getElementById('toggleButton').addEventListener('click', function() {
    automaticShowingEnabled = !automaticShowingEnabled;
    const buttonLabel = automaticShowingEnabled ? 'Disable Automatic Showing' : 'Enable Automatic Showing';
    this.textContent = buttonLabel;
});
