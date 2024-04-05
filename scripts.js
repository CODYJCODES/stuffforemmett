<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Suggestion Box</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to the Suggestion Box</h1>
    </header>
    <main>
        <form id="suggestionForm">
            <label for="suggestion">Enter your suggestion:</label>
            <input type="text" id="suggestion" name="suggestion" required>
            <button type="submit">Submit</button>
        </form>
        <button id="toggleButton">Toggle Suggestions</button>
        <div id="suggestions" style="display: none;">
            <h2>All Suggestions</h2>
            <ul id="suggestionList"></ul>
        </div>
    </main>
    <script src="scripts.js"></script>
</body>
</html>
