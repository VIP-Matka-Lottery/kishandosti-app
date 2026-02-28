function postKishan() {
    let job = document.getElementById('kJob').value;
    let loc = document.getElementById('kLoc').value;
    let phone = document.getElementById('kPhone').value;
    let price = document.getElementById('kPrice').value;

    if(job && loc && phone) {
        let list = document.getElementById('unifiedList');
        list.innerHTML = `
            <div class="post-item kishan-post">
                <span class="tag">Kishan ki Zarurat</span>
                <h3>${job}</h3>
                <p>📍 ${loc} | 📞 ${phone} | 💰 ₹${price}/din</p>
                <button class="call-btn" onclick="window.location.href='tel:${phone}'">Sampark Karein</button>
            </div>
        ` + list.innerHTML;
        document.getElementById('kishanForm').reset();
    }
}

function postMajdoor() {
    let name = document.getElementById('mName').value;
    let skill = document.getElementById('mSkill').value;
    let phone = document.getElementById('mPhone').value;

    if(name && skill && phone) {
        let list = document.getElementById('unifiedList');
        list.innerHTML = `
            <div class="post-item majdoor-post">
                <span class="tag-m">Majdoor available</span>
                <h3>${name} (${skill})</h3>
                <p>📞 ${phone}</p>
                <button class="call-btn" onclick="window.location.href='tel:${phone}'">Kaam Par Bulayein</button>
            </div>
        ` + list.innerHTML;
        document.getElementById('majdoorForm').reset();
    }
}
