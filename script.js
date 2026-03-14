const products = [
    { id: 1, name: "iPhone 13 Pro Max", type: "أيفون", price: "1,199 $", img: 'img/iph/13promax.jpeg', specs: ["ذاكره 512GB /1T" , "ضد الماء" , "بطارية +90" , "جميع الالوان متوفرة"] },
    { id: 1, name: "iPhone 17 Pro Max (COPY)", type: "أيفون", price: "1,199 $", img: 'img/iph/17promax.jpeg', specs: ["ذاكرة 256GB" , "يدعم شريحتين 77/73" , "يدعم CDMA/VOLTE/GSM" , "بطارية 5000"] },
    { id: 2, name: "Samsung S22 Ultra", type: "سامسونج", price: "850 $", img: "img/sam/sam s22.jpeg", specs: ["شريحة واحدة" , "رام 12GB" , "ذاكرة 512GB"] },
    { id: 2, name: "+Samsung Galaxy Note 10", type: "سامسونج", price: "850 $", img: "img/sam/sam not10.jpeg", specs: ["ذاكرة 256GB" , "رام 12GB" , "سرعة عالية وسلاسة ملحوظة في التنقل بين التطبيقات" , "قلم S Pen"] },
    { id: 3, name: "REDMI Note 14 5G", type: "ردمي", price: "999 $", img: "img/red/14 5G.jpeg", specs: ["ذاكرة 256GB" , "رام 8GB" , "يدعم شريحتين"] },
    { id: 4, name: "REDMI Note 13 pro plus", type: "ردمي", price: "1,050 $", img: "img/red/13proplus.jpeg", specs: ["ذاكرة 512GB" , "رام 12GB" , "يدعم شريحتين"] }
];

function renderProducts(data) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = data.map(p => `
        <div class="product-card">
            <img src="${p.img}">
            <div class="product-info">
                <h3>${p.name}</h3>
                <div class="product-price">${p.price}</div>
            </div>
            <button class="btn-view" onclick="openProduct(${p.id})">عرض الفخامة</button>
        </div>
    `).join('');
}

function filterData(type, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(type === 'الكل' ? products : products.filter(p => p.type === type));
}

function openProduct(id) {
    const p = products.find(x => x.id === id);
    document.getElementById('detail-title').innerText = p.name;
    document.getElementById('detail-img').src = p.img;
    document.getElementById('detail-price').innerText = "السعر: " + p.price;
    document.getElementById('detail-specs').innerHTML = p.specs.map(s => `<li><i class="fa-solid fa-circle-check"></i> ${s}</li>`).join('');
    showMainSection('detail-section');
}

function showMainSection(id) {
    const sections = ['home-section', 'about-section', 'contact-section', 'detail-section'];
    sections.forEach(s => document.getElementById(s).style.display = 'none');
    
    document.getElementById(id).style.display = 'block';
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('overlay').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('menu-toggle').onclick = () => { 
    document.getElementById('sidebar').classList.add('active'); 
    document.getElementById('overlay').style.display = 'block'; 
};

document.getElementById('close-sidebar').onclick = () => { 
    document.getElementById('sidebar').classList.remove('active'); 
    document.getElementById('overlay').style.display = 'none'; 
};

document.getElementById('overlay').onclick = () => { 
    document.getElementById('sidebar').classList.remove('active'); 
    document.getElementById('overlay').style.display = 'none'; 
};

document.getElementById('theme-btn').onclick = () => { 
    const isDark = document.body.classList.toggle('dark'); 
    const btn = document.getElementById('theme-btn');
    btn.className = isDark ? 'fa-solid fa-sun menu-icon' : 'fa-solid fa-moon menu-icon';
};

window.onload = () => renderProducts(products);