# Multi-Page Train Schedule Application

This project is a comprehensive multi-page web application for managing and displaying train schedules for various routes. It utilizes HTML, CSS (including embedded styles and a shared stylesheet), and vanilla JavaScript, with data persistence handled via browser Local Storage.

## Features

**1. Master Input Page (`master_input.html`):**
    *   **Centralized Data Entry:** Provides 14 dedicated forms for inputting train schedule data for the following routes (both departure and arrival):
        *   Lahore (LHR) - Karachi (KC)
        *   Lahore (LHR) - Peshawar (PSH)
        *   Lahore (LHR) - Faisalabad (FSLD)
        *   Lahore (LHR) - Rawalpindi (RWP)
        *   Lahore (LHR) - Narowal (NWL)
        *   Lahore (LHR) - Mianwali
        *   Lahore (LHR) - Quetta (QTA)
    *   **Data Fields per Entry:** Train No, Train Name, Scheduled Time, Expected Time, Status, Platform No.
    *   **Themed Form Sections:** Each route pair's forms (e.g., LHR-KC Departure and KC-LHR Arrival) have a distinct background color for easier visual grouping.
    *   **Automatic Status Calculation:** When entering data, the status is automatically calculated based on Scheduled and Expected times:
        *   Expected Time > Scheduled Time: "Late"
        *   Expected Time < Scheduled Time: "Before"
        *   Expected Time == Scheduled Time: "On Time"
        *   Expected Time empty (but Scheduled Time present): "Cancelled"
        *   Manually selected final statuses ("Departed", "Arrived", "Cancelled") are respected.
    *   **Data Display:** Below each input form, a table displays all existing entries for that specific route, allowing for immediate review.
    *   **Full CRUD Operations:**
        *   **Create:** Add new train entries via the forms.
        *   **Read:** View existing entries in the tables on this page.
        *   **Update (Edit):** Each entry in the tables has an "Edit" button. Clicking it populates the corresponding input form with the entry's data, changes the "Add" button to "Update Entry", and shows a "Cancel Edit" button.
        *   **Delete:** Each entry has a "Delete" button with a confirmation prompt.
    *   **User Feedback:** Confirmation messages for add, update, and delete operations.
    *   **Wider Train Name Input:** The "Train Name" input field is styled to accommodate longer names, potentially in multiple languages.

**2. Display Pages (7 HTML files, e.g., `display_lhr_kc.html`):**
    *   **Route-Specific Views:** Each of the 7 display pages is dedicated to a pair of routes (e.g., LHR-KC Departures and KC-LHR Arrivals).
    *   **View-Only:** These pages are designed for display purposes only and do not have data modification controls.
    *   **Dual-Color Themes:**
        *   Departure sections/tables feature a dark green theme.
        *   Arrival sections/tables feature a dark blue theme.
    *   **Projector Optimized:** Styled with large fonts, clear layouts, and high contrast for readability on large screens.
    *   **Animations:**
        *   Train Name cells have a subtle glow animation.
        *   Status cells have a theme-appropriate subtle glow animation (greenish for departures, bluish for arrivals).
    *   **Automatic Page Cycling:** Display pages automatically navigate to the next page in a predefined sequence every 30 seconds. The sequence loops back to the first display page.
    *   **Live Updates:** Display pages listen for changes in Local Storage and automatically refresh their content if data is updated (e.g., from the `master_input.html` page in another tab).

**3. General Features:**
    *   **Data Persistence:** All schedule data is saved in the browser's Local Storage under the key `trainAppSchedules`.
    *   **Footer:** All 8 HTML pages (`master_input.html` + 7 display pages) include a footer "developed by M.Aurangzeb khan" with yellow text and a subtle glow animation.

## File Structure

The project consists of the following files, which should all be placed in the **same directory**:

*   **Master Input:**
    *   `master_input.html`
    *   `master_script.js`
*   **Display Pages (HTML):**
    *   `display_lhr_kc.html`
    *   `display_lhr_psh.html`
    *   `display_lhr_fsld.html`
    *   `display_lhr_rwp.html`
    *   `display_lhr_nwl.html`
    *   `display_lhr_mianwali.html`
    *   `display_lhr_qta.html`
*   **Display Pages (CSS - Shared):**
    *   `display_style.css`
*   **Display Pages (JavaScript):**
    *   `display_lhr_kc_script.js`
    *   `display_lhr_psh_script.js`
    *   `display_lhr_fsld_script.js`
    *   `display_lhr_rwp_script.js`
    *   `display_lhr_nwl_script.js`
    *   `display_lhr_mianwali_script.js`
    *   `display_lhr_qta_script.js`
*   **This File:**
    *   `README.md`

## Setup and Usage

1.  **Download/Save Files:** Ensure all 18 files listed above are saved into a single folder on your local computer.
2.  **Open `master_input.html`:** Start by opening `master_input.html` in a modern web browser (e.g., Chrome, Firefox, Edge, Safari). This is the page used to enter and manage all train schedule data.
    *   Use the 14 forms to add entries for different routes.
    *   View, edit, or delete existing entries using the tables and buttons displayed below each form.
3.  **Open Display Pages:** After entering some data, you can open any of the `display_*.html` pages (e.g., `display_lhr_kc.html`) in a separate browser tab or window. These pages will show the schedules for their specific routes.
    *   These pages will automatically cycle to the next display page in the sequence every 30 seconds.
    *   If you make changes on `master_input.html`, the display pages should auto-update (due to the Local Storage event listener).

## Notes

*   **Local Storage:** Data is stored in the browser's local storage. Clearing your browser's cache/data for this site will erase all saved schedules.
*   **Edit on Display Pages:** The `prompt()`-based edit functionality on display pages includes basic validation for the 'Status' field.
*   **Projector Display:** The `display_*.html` pages are styled with larger elements and distinct color themes for better visibility on projectors.
*   **No Backend:** This is a purely client-side application. There is no server-side database.
*   **URL Hiding:** The request to hide the browser's URL bar is a browser-level setting (e.g., Kiosk mode or Fullscreen mode - often F11) and cannot be controlled by the website's code itself.

Developed by M.Aurangzeb khan.
