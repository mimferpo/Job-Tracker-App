# Jober

A simple job application tracker built with HTML, CSS, and JavaScript. The app allows you to add, edit, and delete job applications, search through your job records, and import/export job data as excel files using SheetJS.

# Get started
Use the following link to get using it right away! [Visit the site](https://mimferpo.github.io/Jober/)


## Features

- Add and edit job applications with company, position, date, status, and notes.
- Search job applications by company, position, or status.
- Export job data to a CSV file.
- Import job data from a CSV file.

## Technologies Used

- HTML
- CSS
- JavaScript
- SheetJS (for CSV import/export)

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/job-tracker.git
   ```

2. Open the `index.html` file in your browser to use the application.

## Usage

### Add a New Job Application
1. Enter the job details (company, position, date, status, notes) in the form section.
2. Click **Add Job** to save the job application.

### Edit an Existing Job Application
1. Click **Edit** next to the job entry you wish to edit.
2. Make changes and click **Save Changes**.

### Delete a Job Application
1. Click **Delete** next to the job entry you want to remove.

### Search Jobs
1. Use the search bar to filter job applications by company, position, or status.

### Import/Export Job Data
1. **Export**: Click the **Export to CSV** button to download your job data as a CSV file.
2. **Import**: Click **Import CSV** to upload a CSV file and add the data to your job tracker.

# QA manual Testing Documentation for Jober

## Test Cases Overview

| **Test Case ID** | **Test Case Description**     | **Steps**                                                                                                                   | **Expected Result**                                                                                                          | **Priority** | **Test Passed?** |
|------------------|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|--------------|------------------|
| TC01             | Add a New Job                 | 1. Navigate to the ""Job Form"".<br>2. Enter details (Company, Position, Date, Status, Notes).<br>3. Click Add Job.         | The job is added to the table with the correct details (company name, position, date, status, and notes).                    | Low          | Passed           |
| TC02             | Validate Required Fields      | 1. Leave all fields blank.<br>2. Click Add Job.                                                                             | The form should display a validation message indicating required fields.                                                     | Low          | Passed           |
| TC03             | Test Job Display in Table     | 1. Add ""Tech Corp"" job with details.<br>2. Add ""Dev Solutions"" job with details.<br>3. Verify both appear in the table. | Both jobs should appear in the table with the correct details (company, position, date, status, and notes).                  | Low          | Passed           |
| TC04             | Edit an Existing Job          | 1. Click Edit for an existing job.<br>2. Modify the position and status.<br>3. Click Save Changes.                          | The job's position and status should be updated in the table.                                                                | Low          | Passed           |
| TC05             | Delete a Job                  | 1. Click Delete for an existing job.<br>2. Confirm deletion.                                                                | The job should be removed from the table.                                                                                    | Low          | Passed           |
| TC06             | Search Functionality          | 1. Type a search query (e.g., ""Tech Corp"") in the search bar.<br>2. Verify filtered results.                              | Only jobs that match the search query should be displayed.                                                                   | Medium       | Failed           |
| TC07             | Import Jobs from XLSX File    | 1. Click Import Jobs.<br>2. Select and import an XLSX file.<br>3. Verify jobs appear in the table.                          | The jobs from the XLSX file should be added to the table with correct details.                                               | Medium       | Failed           |
| TC08             | Export Jobs to XLSX File      | 1. Click Export Jobs.<br>2. Save the file.<br>3. Verify the file contains correct data.                                     | The jobs should be exported into an XLSX file with the correct data.                                                         | Low          | Passed           |
| TC09             | Job Table Sort Functionality  | 1. Click the column headers (Company, Date, Position) to sort.<br>2. Verify sorting order.                                  | The table should sort by the selected column in ascending order, and toggle between ascending/descending when clicked again. | Low          | Passed           |
| TC10             | Job Status Update and Display | 1. Click Edit for a job.<br>2. Change the status.<br>3. Click Save Changes.                                                 | The job's status should be updated in the table.                                                                             | Low          | Passed           |
| TC11             | Prevent Duplicate Job Entries | 1. Try adding a duplicate job (same company, position).<br>2. Click Add Job.                                                | The system should prevent adding the duplicate job and display an error message.                                             | Medium       | Failed           |
| TC12             | Responsive Design Check       | 1. Open app on mobile, tablet, and desktop.<br>2. Verify layout responsiveness.                                             | The layout should adjust to screen size, ensuring the app is fully usable on different devices.                              | Low          | Passed           |
| TC13             | Browser Compatibility         | 1. Open app on Chrome, Firefox, and Edge.<br>2. Test functionality (add, edit, delete jobs).                                | The app should function correctly on all browsers without issues.                                                            | Not set      | Not tested       |

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## Acknowledgments

###### SheetJS for handling CSV export/import functionality.
###### Browser APIs for managing local data storage.

## License

This project is licensed under the MIT License
