# Airtable setup for WISECEO Academy

About 20 minutes. Add these tables to the **Student Job Search** base (or a new base if you prefer to keep the academy separate).

## 1. Import the tables
For each CSV file here, in order: in the base, click **+ Add or import → CSV file**, upload it, and name the table without the number (for example `Applications`).

## 2. Set the field types
After importing, click each field name → **Edit field** and set the type:

**Applications** (filled by the application form)
- Student email, Parent or guardian email: Email
- Parent or guardian phone: Phone number
- Grade: Single select (9, 10, 11, 12)
- Track interest: Single select (Cybersecurity, Energy & Infrastructure, AI & Technical Integration, Not sure yet)
- Parent or guardian knows about this application: Checkbox
- Status: Single select (New, Accepted, Waitlisted, Enrolled, Withdrawn)
- Add a field **Submitted**: Created time

**Partner Inquiries** (filled by the partner form)
- Email: Email · Phone: Phone number
- Ways to partner: Multiple select (Sponsor a cohort, Fund exam vouchers, Host a live session, Open a first job)
- Track interest: Multiple select (the three tracks)
- Status: Single select (New, In conversation, Committed, Declined)
- Add a field **Submitted**: Created time

**Speakers**
- Track: Single select (the three tracks) · Date: Date · Photo URL: URL
- Confirmed, Published: Checkbox

**Credentials**
- Tracks: Multiple select · Level: Single select (1, 2) · Cost: Single select (Free, Low cost / aid, Exam fee) · Minimum age: Number

**Fellow Progress** (powers the partner outcome report)
- Fellow: Link to Applications · Track: Single select · Modules completed, Projects completed: Number
- Credential attempted, Credential passed: Link to Credentials · Voucher funded by: Link to Partner Inquiries
- Placement: Single select (Internship, Apprenticeship, Job shadow, Job)

## 3. Make the two forms
1. Open **Applications** → **Create a form view**. Hide Status, Notes, and Submitted. Make the student name, student email, grade, parent or guardian name and email, and the "knows about this application" checkbox required.
2. Open **Partner Inquiries** → **Create a form view**. Hide Status, Notes, and Submitted.
3. On each form, click **Share form** and copy the link.

## 4. Turn on the buttons on the site
In `assets/site.js`, paste the links:
```js
const APPLY_URL = "https://airtable.com/...";   // Applications form
const PARTNER_URL = "https://airtable.com/...";  // Partner Inquiries form
```
Commit to `main`. The Apply and Become a partner buttons switch on right away.

## Privacy
Applications hold minors' and families' information. Share the base only with staff who need it, and never share student names with partners without family permission (the site promises this).
