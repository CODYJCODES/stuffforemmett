// public/scripts.js

const suggestionForm = document.getElementById('suggestionForm');
const suggestionList = document.getElementById('suggestionList');
const toggleButton = document.getElementById('toggleButton');
let automaticShowingEnabled = true;

// Function to fetch all suggestions from the server
async function fetchSuggestions() {
  try {
    const response = await fetch('/api/suggestions');
    if (!response.ok) {
      throw new Error('Failed to fetch suggestions');
    }
    const suggestions = await response.json();
    suggestionList.innerHTML = suggestions.map(suggestion => `<li>${suggestion.suggestion}</li>`).join('');
  } catch (error) {
    console.error(error);
    alert('An error occurred while fetching suggestions');
  }
}

// Function to submit a suggestion to the server
async function submitSuggestion(suggestion, userId) {
  try {
    const response = await fetch('/api/suggestions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ suggestion, userId }),
    });
    if (!response.ok) {
      throw new Error('Failed to submit suggestion');
    }
    alert('Suggestion submitted successfully');
    if (automaticShowingEnabled) {
      await fetchSuggestions();
    }
    suggestionForm.reset();
  } catch (error) {
    console.error(error);
    alert('An error occurred while submitting the suggestion');
  }
}

// Event listener for form submission
suggestionForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const suggestionInput = document.getElementById('suggestion');
  const userIdInput = document.getElementById('userId');
  const suggestion = suggestionInput.value.trim();
  const userId = userIdInput.value.trim();
  if (suggestion !== '' && userId !== '') {
    await submitSuggestion(suggestion, userId);
  } else {
    alert('Please enter a suggestion and your user ID');
  }
});

// Event listener for toggle button
toggleButton.addEventListener('click', async () => {
  automaticShowingEnabled = !automaticShowingEnabled;
  if (automaticShowingEnabled) {
    await fetchSuggestions();
    toggleButton.textContent = 'Disable Automatic Showing';
  } else {
    suggestionList.innerHTML = '';
    toggleButton.textContent = 'Enable Automatic Showing';
  }
});
