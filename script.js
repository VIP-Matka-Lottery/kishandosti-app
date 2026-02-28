function addJob() {
    const title = document.getElementById('jobTitle').value;
    const location = document.getElementById('jobLocation').value;
    const price = document.getElementById('jobPrice').value;

    if(title && location && price) {
        const jobList = document.getElementById('jobList');
        
        const newJob = document.createElement('div');
        newJob.className = 'job-item';
        newJob.innerHTML = `
            <div class="job-info">
                <h3>${title}</h3>
                <p><i class="fas fa-map-marker-alt"></i> ${location} | <i class="fas fa-money-bill-wave"></i> ₹${price}/din</p>
            </div>
            <button class="btn-apply" onclick="applyJob()">Apply</button>
        `;
        
        jobList.prepend(newJob);
        document.getElementById('jobForm').reset();
        alert("Kaam saphalta purvak post ho gaya!");
    } else {
        alert("Kripya saari jankari bharein.");
    }
}

function applyJob() {
    alert("Aapka aavedan kishan tak pahuch gaya hai! Woh aapse jald sampark karenge.");
}
