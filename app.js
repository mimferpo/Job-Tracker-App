document.addEventListener("DOMContentLoaded", function () {
    const jobForm = document.getElementById("job-form");
    const jobsTableBody = document.querySelector("#jobs-table tbody");
    const searchInput = document.getElementById("search-input");
    const submitButton = document.querySelector("button[type='submit']");
    const exportButton = document.getElementById("export-btn");
    const importInput = document.getElementById("import-input");
    const importButton = document.getElementById("import-btn-action");

    let editingIndex = null; // Track which job is being edited

    function loadJobs(jobsToLoad) {
        jobsTableBody.innerHTML = ""; // Clear the table body first
        jobsToLoad.forEach((job, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${job.company || "N/A"}</td>
                <td>${job.position || "N/A"}</td>
                <td>${job.date || "N/A"}</td>
                <td>${job.status || "N/A"}</td>
                <td>${job.notes || "N/A"}</td>
                <td>
                    <button onclick="editJob(${index})">Edit</button>
                    <button onclick="confirmDelete(${index})">Delete</button>
                </td>
            `;
            jobsTableBody.appendChild(row);
        });
    }

    function filterJobs(query) {
        const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
        return jobs.filter(job =>
            job.company.toLowerCase().includes(query) ||
            job.position.toLowerCase().includes(query) ||
            job.status.toLowerCase().includes(query)
        );
    }

    searchInput.addEventListener("input", function () {
        const filteredJobs = filterJobs(searchInput.value.toLowerCase());
        loadJobs(filteredJobs);
    });

    jobForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const company = document.getElementById("company").value;
        const position = document.getElementById("position").value;
        const date = document.getElementById("date").value;
        const status = document.getElementById("status").value;
        const notes = document.getElementById("notes").value;

        const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

        if (editingIndex !== null) {
            // Update existing job if editing
            jobs[editingIndex] = { company, position, date, status, notes };
            editingIndex = null;
            submitButton.textContent = "Add Job"; // Reset button text
        } else {
            // Add new job
            jobs.push({ company, position, date, status, notes });
        }

        localStorage.setItem("jobs", JSON.stringify(jobs));
        loadJobs(jobs);
        jobForm.reset();
    });

    window.editJob = function (index) {
        const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
        const job = jobs[index];

        document.getElementById("company").value = job.company;
        document.getElementById("position").value = job.position;
        document.getElementById("date").value = job.date;
        document.getElementById("status").value = job.status;
        document.getElementById("notes").value = job.notes;

        editingIndex = index; // Set job being edited
        submitButton.textContent = "Save Changes"; // Change button text
    };

    window.confirmDelete = function (index) {
        const confirmDelete = confirm("Are you sure you want to delete this job?");
        if (confirmDelete) {
            deleteJob(index);
        }
    };

    window.deleteJob = function (index) {
        const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
        jobs.splice(index, 1);
        localStorage.setItem("jobs", JSON.stringify(jobs));
        loadJobs(jobs);
    };

    // Export to Excel or CSV using SheetJS
    exportButton.addEventListener("click", function () {
        const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
        const worksheet = XLSX.utils.json_to_sheet(jobs);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Jobs");
        XLSX.writeFile(workbook, "job_tracker_data.xlsx");
    });

    // Trigger file input when "Import XLSX" button is clicked
    importButton.addEventListener("click", function () {
        importInput.click(); // Trigger the file input to open file dialog
    });

    importInput.addEventListener("change", function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const data = new Uint8Array(event.target.result);
                const workbook = XLSX.read(data, { type: "array" });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const jobs = XLSX.utils.sheet_to_json(worksheet);

                if (jobs.length > 0) {
                    localStorage.setItem("jobs", JSON.stringify(jobs));
                    loadJobs(jobs); // Re-render the jobs table
                } else {
                    console.log("No valid jobs found in the file.");
                }
            };
            reader.readAsArrayBuffer(file);
        } else {
            console.log("No file selected.");
        }
    });

    // Initial load of jobs
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    loadJobs(jobs);
});
