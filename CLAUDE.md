# CodeViz Research Context

> **Note**: This file contains research context from CodeViz. Most recent contexts are at the bottom.

---

## Research Query

cual archivo se encarga de la barrade nevegacion

*Session: e969fe6f847adef6795d841e1e6b421f | Generated: 5/8/2025, 19:57:15*

### Analysis Summary

# Codebase Analysis Report: Navigation Bar

## Mid-Level Component Analysis: Navigation Bar

The navigation bar functionality is primarily handled by the **Header** component, located at [src/components/Header.jsx](src/components/Header.jsx). This component acts as a container for the main navigation elements of the application.

### **Header Component** [src/components/Header.jsx](src/components/Header.jsx)

*   **Purpose:** The `Header` component, internally named `Navbar`, is responsible for rendering the main navigation bar of the application. It provides links to different sections of the website, displays the application logo, and manages responsive behavior for mobile views.
*   **Internal Parts:**
    *   **Logo:** An image element displaying the "GoMichoacán" logo, which also serves as a link to the home page.
    *   **Navigation Links:** A `<ul>` element containing various navigation links such as "Eventos", "Municipios", and "Noticias". Some links like "Experiencias" and "Alojamientos" are marked as "Próximamente" (Coming Soon).
    *   **Action Buttons:** Buttons for "Inicia Sesión" (Login) and "Anúnciate" (Advertise), also marked as "Próximamente".
    *   **Mobile Menu Toggle:** An input checkbox and label that control the visibility of the mobile navigation menu.
    *   **Mobile Navigation Menu:** A separate `<ul>` element that appears on smaller screens when the menu toggle is activated, mirroring the main navigation links and action buttons.
*   **External Relationships:**
    *   **`Container` Component:** Imports and utilizes the [Container](src/components/ui/Container.js) component to provide consistent layout and spacing for the navigation bar content.
    *   **`Button` Component:** Imports and uses the [Button](src/components/ui/Button.js) component for the "Inicia Sesión" and "Anúnciate" actions.
    *   **`usePathname` Hook:** From `next/navigation`, used to determine the current path and apply specific styling or behavior (e.g., scroll effects) based on whether the user is on an internal page.
    *   **`applyNavbarScrollEffect` Utility:** Imports [applyNavbarScrollEffect](src/utils/scrollHandler.js) from [src/utils/scrollHandler.js](src/utils/scrollHandler.js) to handle visual changes to the navigation bar (e.g., background color, text color) based on scroll position and page type.

