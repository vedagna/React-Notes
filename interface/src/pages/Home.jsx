import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to the Notes App</h2>
      <p>Use this app to organize your thoughts, tasks, and ideas in one place.</p>

      <h3>Why Use This App?</h3>
      <p>
        Whether you're keeping track of to-do lists, jotting down creative ideas, or just making quick reminders, this app is designed to help you stay organized and productive. It’s simple, intuitive, and fast!
      </p>

      <h3>Key Features:</h3>
      <ul>
        <li><strong>Add New Notes:</strong> Easily add new notes to keep your ideas and tasks organized.</li>
        <li><strong>Edit Notes:</strong> Modify or update existing notes whenever you need to.</li>
        <li><strong>Delete Notes:</strong> Remove notes that are no longer necessary.</li>
        <li><strong>Persistent Storage:</strong> Notes are saved locally, ensuring they’re available even after you close the browser.</li>
      </ul>

      <h3>How to Get Started</h3>
      <p>
        Getting started is easy. Here’s how you can begin:
      </p>
      <ol>
        <li>Go to the "Notes" page after you login.</li>
        <li>Click "Add Note" to create your first note.</li>
        <li>Start organizing your thoughts and tasks right away!</li>
      </ol>

      <h3>What's Next?</h3>
      <p>
        We’re continuously working on improving the app. Future features may include syncing notes across devices, categorizing notes into folders, and adding a search feature to find specific notes more easily.
      </p>

      <h3>Get Started Now</h3>
      <p>
        Ready to start? Click the button below to add your first note and begin organizing your ideas today!
      </p>
      <button onClick={() => window.location.href = '/login'}>Proceed to Login</button>
    </div>
  );
};

export default Home;
