from playwright.sync_api import sync_playwright, Page, expect
import os

def test_hospital_features(page: Page):
    """
    This test verifies the core features of the hospital website.
    """
    # --- Verify Doctor Profile Page ---
    doctor_profile_path = os.path.abspath("doctors_profile.html")
    page.goto(f"file://{doctor_profile_path}")

    # Add a new doctor
    page.get_by_role("button", name="Add Doctor").click()
    page.get_by_label("Name:").fill("Dr. Test")
    page.get_by_label("Checkup Fee:").fill("500")
    page.get_by_label("Department:").fill("Testing")
    page.get_by_label("Experience (years):").fill("5")
    page.get_by_label("Specialization:").fill("QA")

    # Set a dummy image file
    page.get_by_label("Picture:").set_input_files('README.md') # Using a dummy file for the picture

    page.get_by_role("button", name="Save").click()

    # Verify the new doctor is in the list
    doctor_details_section = page.locator("#doctor-details")
    expect(doctor_details_section.get_by_text("Dr. Test")).to_be_visible()

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/doctor_profile_verification.png")


    # --- Verify Patient Registration Page ---
    patient_registration_path = os.path.abspath("patient_registration.html")
    page.goto(f"file://{patient_registration_path}")

    # Fill out the registration form
    page.get_by_label("Full Name:").fill("Test Patient")
    page.get_by_label("Date of Birth:").fill("2000-01-01")
    page.get_by_label("Address:").fill("123 Test Street")
    page.get_by_label("Phone Number:").fill("1234567890")

    # Handle the alert
    page.on("dialog", lambda dialog: dialog.accept())

    page.get_by_role("button", name="Register").click()

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/patient_registration_verification.png")


# Boilerplate to run the test
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    test_hospital_features(page)
    browser.close()