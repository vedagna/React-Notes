import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h2>About This App</h2>
      <p>
        Welcome to our Notes App! This application is designed to help you organize your thoughts, tasks, and ideas in one convenient place. With a simple and user-friendly interface, it’s easy to add, edit, and delete notes, making sure that you always have access to your most important information.
      </p>
      
      <h3>Features</h3>
      <ul>
        <li><strong>Add Notes:</strong> Quickly jot down thoughts or reminders.</li>
        <li><strong>Edit Notes:</strong> Update or modify notes with ease.</li>
        <li><strong>Delete Notes:</strong> Remove notes that are no longer needed.</li>
        <li><strong>Persistent Storage:</strong> Your notes are saved in local storage, so they are available even after you close the browser.</li>
        <li><strong>Responsive Design:</strong> Use the app on both desktop and mobile devices seamlessly.</li>
      </ul>

      <h3>Technologies Used</h3>
      <p>
        This app is built with the following technologies:
      </p>
      <ul>
        <li><strong>React:</strong> A powerful JavaScript library for building interactive UIs.</li>
        <li><strong>Vite:</strong> A fast and efficient build tool that enhances development experience.</li>
        <li><strong>Local Storage:</strong> Ensures your notes persist between sessions without requiring a backend.</li>
        <li><strong>React Router:</strong> For seamless navigation between different pages within the app.</li>
      </ul>

      <h3>How to Use the App</h3>
      <ol>
        <li>Navigate to the "Notes" page.</li>
        <li>Type your note into the input field and click "Add Note" to save it.</li>
        <li>You can edit a note by clicking the "Edit" button or delete it by clicking "Delete."</li>
        <li>Use the "Login" or "Register" page if authentication features are added in the future.</li>
      </ol>

      <h3>About the Developer</h3>
      <p>
        This app was developed with a passion for clean, functional design and efficient note-taking. We aim to keep improving the app by adding more features and making it as helpful as possible for managing your notes.
      </p>

      <h3>Future Plans</h3>
      <p>
        Future updates may include additional features such as:
      </p>
      <ul>
        <li>Ability to categorize notes into folders.</li>
        <li>Search functionality to quickly find specific notes.</li>
        <li>Tagging system to organize and filter notes by topic.</li>
        <li>Cloud storage to sync notes across devices.</li>
      </ul>
      
      <p>Thank you for using our Notes App! We hope it helps you stay organized and productive.</p>
    </div>
  );
};

export default About;
