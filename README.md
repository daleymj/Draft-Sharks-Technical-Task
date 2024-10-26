# Draft Sharks Technical Task

## Project Overview

This project is a responsive, accessible depth chart page created to demonstrate Vue.js skills and front-end development practices. The assignment was completed within the 2-3 hour time limit, focusing on essential functionality, Vue usage, and basic accessibility.

### Features Implemented

1. **Responsive Design**: 
   - Created a fully responsive layout using CSS Flexbox, adapting seamlessly across desktop, tablet, and mobile screens.
   
2. **Vue.js for Interactivity**:
   - Used Vue.js via CDN to handle state management and interactivity.
   - Implemented essential functionality, including position filtering, offense vs. defense toggling, and independent sorting for each section.

3. **Dark Mode**:
   - Added a dark mode toggle, allowing users to switch between light and dark themes.

4. **Accessibility**:
   - Included a “Skip to Main Content” link for screen reader users.
   - Used semantic HTML with `aria` labels and roles.
   - Ensured keyboard navigation across interactive elements.

5. **Hover Effects**:
   - Added hover effects to improve user experience. Filtering options change color on hover, providing visual feedback, and dropdown lists include hover styling for better accessibility.

6. **Selective Team Display for Demonstration**:
   - For the purpose of this project, only a few teams were included to demonstrate functionality and interactivity quickly. With more time, this could be expanded to include a full set of teams.

---

### Additional Enhancements (Given More Time)

With more time, I would implement the following enhancements to improve scalability, accessibility, and user experience. Given the 2-3 hour time constraint, I prioritized the essential functionality and responsiveness as outlined in the project requirements:

1. **Componentization in Vue**:
   - Breaking down the application into reusable components (e.g., `TeamSelector`, `Filters`, and `PlayerList`) would improve code organization and make future updates easier to manage. Given the scope and tools used here, I implemented these within a single file to align with project constraints.

2. **Expanded Interactivity**:
   - Building on the existing hover/focus effects, I would add additional visual cues for player cards and filter sections, such as animations or tooltips for more detailed player stats.

---

### File Structure

To complete the assignment quickly, all files are in a single directory. In a full-scale project, I would implement a more organized structure for improved clarity and ease of maintenance using seperate component files.
   - **`/src`**:
   - **`/src/images`**
   - **`/src/styles`**
     - `compiledSCSS.css`
     - `dsTechTask.scss`
   - **`/src/components`**
     - `TeamSelection.vue`
     - `PositionSelection.vue`
     - `PlayerList.vue`
     - `DarkModeToggle.vue`
     - `LogoDisplay.vue`
     - `SortButton.vue`
   - **`App.vue`**
   - **`main.js`**

---

### Technologies Used

- **Vue.js** (via CDN): for state management and interactivity.
- **Plain CSS**: for responsive layout, including Flexbox, with compiled SCSS for enhanced maintainability.
- **Semantic HTML**: to support basic accessibility requirements.

---

### Installation & Usage

1. Clone the repository.
2. Open `dsTechTask.html` in your browser to view the project.

---

### Summary

This project illustrates a solid foundation in responsive design and Vue.js within a limited time frame, meeting core functional requirements. The additional enhancements mentioned highlight my knowledge of scalable, user-centered front-end development and demonstrate how I would improve the application with additional time.
