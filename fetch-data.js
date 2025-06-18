async function fetchUserData() {
    // Declare a constant apiUrl and assign it the API endpoint for user data.
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    // Select the HTML element where the API data will be displayed.
    const dataContainer = document.getElementById('api-data');

    // Employ a try-catch block to handle the fetching process and potential errors.
    try {
        // Use await with the fetch function to asynchronously get data from apiUrl.
        const response = await fetch(apiUrl);
        // Convert the response to JSON using await response.json().
        const users = await response.json();

        // Clear the existing content (the “Loading user data…” message).
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold the user list.
        const userList = document.createElement('ul');

        // Loop through the users array with forEach.
        users.forEach(user => {
            // Create an <li> element for each user.
            const listItem = document.createElement('li');
            // Set the text content of the <li> to the user’s name.
            listItem.textContent = user.name;
            // Append the <li> to the userList.
            userList.appendChild(listItem);
        });

        // After the loop, append the userList to the dataContainer.
        dataContainer.appendChild(userList);
    } catch (error) {
        // In the catch block, clear the existing content.
        dataContainer.innerHTML = '';
        // Set its text content to an error message.
        dataContainer.textContent = 'Failed to load user data.';
        // Log the error to the console for debugging.
        console.error('Error fetching user data:', error);
    }
}

// Add an event listener to document for the DOMContentLoaded event.
// This ensures your data fetching logic runs once the HTML document has fully loaded.
document.addEventListener('DOMContentLoaded', fetchUserData);
