// Page load hote hi purana data load karein
window.onload = function() {
    loadPosts();
};

function postKishan() {
    let job = document.getElementById('kJob').value;
    let loc = document.getElementById('kLoc').value;
    let phone = document.getElementById('kPhone').value;
    let price = document.getElementById('kPrice').value;

    if(job && loc && phone) {
        let newPost = { type: 'kishan', job, loc, phone, price, id: Date.now() };
        saveToLocal(newPost);
        document.getElementById('kishanForm').reset();
    } else { alert("Kripya saari jankari bharein!"); }
}

function postMajdoor() {
    let name = document.getElementById('mName').value;
    let skill = document.getElementById('mSkill').value;
    let phone = document.getElementById('mPhone').value;

    if(name && skill && phone) {
        let newPost = { type: 'majdoor', name, skill, phone, id: Date.now() };
        saveToLocal(newPost);
        document.getElementById('majdoorForm').reset();
    } else { alert("Kripya saari jankari bharein!"); }
}

function saveToLocal(post) {
    let posts = JSON.parse(localStorage.getItem('kishanDostiPosts')) || [];
    posts.unshift(post); // Naya post sabse upar
    localStorage.setItem('kishanDostiPosts', JSON.stringify(posts));
    loadPosts();
}

function loadPosts() {
    let posts = JSON.parse(localStorage.getItem('kishanDostiPosts')) || [];
    let list = document.getElementById('unifiedList');
    list.innerHTML = '';

    posts.forEach(p => {
        let div = document.createElement('div');
        if(p.type === 'kishan') {
            div.className = 'post-item kishan-post';
            div.innerHTML = `<span class="tag">Kishan ki Zarurat</span>
                             <h3>${p.job}</h3>
                             <p>📍 ${p.loc} | 📞 ${p.phone} | 💰 ₹${p.price}</p>
                             <button class="call-btn" onclick="window.location.href='tel:${p.phone}'">Sampark Karein</button>`;
        } else {
            div.className = 'post-item majdoor-post';
            div.innerHTML = `<span class="tag-m">Majdoor Mil Jayega</span>
                             <h3>${p.name} (${p.skill})</h3>
                             <p>📞 ${p.phone}</p>
                             <button class="call-btn" onclick="window.location.href='tel:${p.phone}'">Kaam Par Bulayein</button>`;
        }
        list.appendChild(div);
    });
}
