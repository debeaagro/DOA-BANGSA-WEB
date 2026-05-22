/**
 * CATALOG JAVASCRIPT SYSTEM - DOA BANGSA AGROBISNIS
 * Responsive filtering, search, sorting, modal detail, and WhatsApp routing.
 */

// Configuration
const COMPANY_PHONE = "6281318466100"; // Format: 62... without '+' or spaces

// Static Product Database
const PRODUCTS_DATA = [
    {
        id: 1,
        title: "POC DBA Super (Pupuk Organik Cair)",
        category: "pupuk",
        price: 65000,
        formattedPrice: "Rp 65.000 / Liter",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
        description: "Pupuk Organik Cair (POC) DBA Super diformulasikan khusus dengan mikroba aktif penyubur tanah dan ekstrak bahan nabati pilihan. Sangat efektif untuk merangsang pembelahan sel, pertumbuhan vegetatif daun, serta memacu pembungaan dan pembuahan tanaman pangan maupun hortikultura.",
        specs: {
            "Volume": "1 Liter",
            "Bentuk": "Cair (Konsentrat)",
            "Kandungan": "N, P, K Organik, Asam Humat, Hormon Auxin & Giberelin",
            "Aplikasi": "Disemprotkan ke daun (5ml/Liter air) atau dikocor ke perakaran",
            "Saran Pakai": "Setiap 7-10 hari sekali pada pagi atau sore hari"
        }
    },
    {
        id: 2,
        title: "Kompos Organik Granul DBA",
        category: "pupuk",
        price: 45000,
        formattedPrice: "Rp 45.000 / Karung 25kg",
        image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80",
        description: "Pupuk kompos organik berbentuk granul yang telah melalui proses fermentasi sempurna (matang). Bebas dari biji gulma dan bakteri patogen. Granul memudahkan pengaplikasian di sawah maupun perkebunan, membantu memperbaiki struktur fisik, kimia, dan biologi tanah yang keras.",
        specs: {
            "Berat Bersih": "25 kg",
            "Bentuk": "Granul (Butiran)",
            "Bahan Dasar": "Kotoran hewan terfermentasi, abu vulkanik, asam humat",
            "Kelembaban": "< 20%",
            "Rekomendasi": "Pupuk dasar sebelum tanam atau pupuk susulan perkebunan"
        }
    },
    {
        id: 3,
        title: "Benih Padi Inpari 32 Unggul DBA",
        category: "benih",
        price: 95000,
        formattedPrice: "Rp 95.000 / Kemasan 5kg",
        image: "https://images.unsplash.com/photo-1536882240095-0379873feb4e?auto=format&fit=crop&w=600&q=80",
        description: "Benih padi bersertifikat varietas Inpari 32 dengan persentase daya tumbuh di atas 90%. Varietas ini sangat diminati karena memiliki ketahanan yang baik terhadap penyakit Hawar Daun Bakteri (HDB) serta menghasilkan bulir padi yang bernas dengan rasa nasi pulen yang disukai pasar.",
        specs: {
            "Berat Kemasan": "5 kg",
            "Varietas": "Inpari 32 HDB",
            "Daya Tumbuh": "Minimal 90%",
            "Potensi Hasil": "8.5 - 10 Ton / Hektar",
            "Umur Panen": "120 Hari Setelah Semai"
        }
    },
    {
        id: 4,
        title: "Benih Jagung Hibrida DBA-1",
        category: "benih",
        price: 85000,
        formattedPrice: "Rp 85.000 / Kemasan 1kg",
        image: "https://images.unsplash.com/photo-1551754625-70c90487530d?auto=format&fit=crop&w=600&q=80",
        description: "Benih Jagung Hibrida F1 varietas unggulan dengan produktivitas tinggi. Memiliki perakaran yang sangat kuat sehingga tahan roboh akibat angin kencang. Warna bulir kuning orange mengkilap dengan rendemen hasil pipilan tinggi, serta toleran terhadap penyakit bulai jagung.",
        specs: {
            "Berat Kemasan": "1 kg",
            "Jenis": "Hibrida F1 (Silang Tunggal)",
            "Daya Berkecambah": "Minimal 85%",
            "Kadar Air": "Maksimal 12%",
            "Potensi Hasil": "11 Ton / Hektar Pipilan Kering"
        }
    },
    {
        id: 5,
        title: "Biopestisida DBA Shield (Pengendali Hama Alami)",
        category: "pestisida",
        price: 55000,
        formattedPrice: "Rp 55.000 / Botol 500ml",
        image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=600&q=80",
        description: "Insektisida organik cair berbasis minyak mimba (neem oil) dan ekstrak sereh wangi. Sangat efektif mengendalikan hama ulat grayak, kutu daun, kutu kebul, dan tungau pada tanaman cabai, tomat, dan sayuran tanpa meninggalkan residu kimia berbahaya pada hasil panen.",
        specs: {
            "Volume": "500 ml",
            "Bahan Aktif": "Azadirachtin (Minyak Mimba) & Citronella",
            "Sasaran": "Ulat grayak, kutu daun, thrips, belalang, walang sangit",
            "Dosis": "3 - 5 ml per Liter air",
            "Karakteristik": "Aman untuk serangga penyerbuk seperti lebah"
        }
    },
    {
        id: 6,
        title: "Fungisida Organik Trichoderma DBA",
        category: "pestisida",
        price: 40000,
        formattedPrice: "Rp 40.000 / Kemasan 1kg",
        image: "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?auto=format&fit=crop&w=600&q=80",
        description: "Agens hayati pengendali jamur patogen tanah yang diformulasikan dengan jamur antagonis Trichoderma harzianum. Sangat ampuh mencegah serangan penyakit layu fusarium, busuk akar, dan busuk pangkal batang pada berbagai tanaman pangan dan perkebunan.",
        specs: {
            "Berat Bersih": "1 kg",
            "Bahan Aktif": "Trichoderma harzianum (spora aktif)",
            "Bentuk": "Serbuk (WSP)",
            "Target Penyakit": "Layu Fusarium, Phytophthora, Pythium, Busuk Akar",
            "Cara Aplikasi": "Dicampur pupuk kompos atau dikocorkan langsung pada lubang tanam"
        }
    },
    {
        id: 7,
        title: "Alat Semprot Elektrik DBA Premium Sprayer",
        category: "peralatan",
        price: 380000,
        formattedPrice: "Rp 380.000 / Unit",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80",
        description: "Knapsack sprayer elektrik dengan kapasitas tangki besar dan kekuatan semburan yang stabil. Dilengkapi baterai rechargeable tahan lama yang mampu menyemprot hingga 15-18 tangki sekali charge. Sangat ergonomis dengan busa punggung yang empuk sehingga nyaman digunakan berjam-jam.",
        specs: {
            "Kapasitas Tangki": "16 Liter",
            "Tipe Baterai": "Lityum / Lead Acid 12V 8AH",
            "Tekanan Pompa": "0.4 - 0.45 Mpa",
            "Kelengkapan": "Charger baterai, 4 jenis nozzle (spuyer), tali gendong tebal",
            "Garansi": "1 Bulan (Service)"
        }
    },
    {
        id: 8,
        title: "Alat Penguji Tanah 3-in-1 (pH, Kelembaban, Cahaya)",
        category: "peralatan",
        price: 75000,
        formattedPrice: "Rp 75.000 / Unit",
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c3a9?auto=format&fit=crop&w=600&q=80",
        description: "Soil analyzer 3-in-1 yang sangat andal untuk mengukur pH tanah, kelembaban tanah, serta intensitas cahaya matahari di sekitar tanaman secara akurat tanpa baterai. Sangat penting bagi petani modern untuk memastikan media tumbuh tanaman dalam kondisi ideal.",
        specs: {
            "Fungsi Alat": "Pengukur pH tanah (3.5 - 8.0), Kelembaban (1 - 10), Cahaya (0 - 2000 lux)",
            "Panjang Probe": "20 cm (Sensor logam tembaga & aluminium)",
            "Daya": "Bekerja mandiri tanpa baterai (Tenaga elektro-kimia)",
            "Cara Penggunaan": "Tancapkan probe ke dalam tanah sedalam 10-15 cm, geser switch ke fungsi yang diinginkan"
        }
    }
];

// Application State
let activeCategory = "all";
let searchQuery = "";
let activeSort = "default";

// DOM Elements
const productsGrid = document.getElementById("productsGrid");
const resultsCount = document.getElementById("resultsCount");
const searchInput = document.getElementById("productSearch");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const sortSelect = document.getElementById("productSort");
const categoryTabs = document.getElementById("categoryTabs");
const noProductsState = document.getElementById("noProductsState");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");

// Modal Elements
const productModal = document.getElementById("productModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalProductImg = document.getElementById("modalProductImg");
const modalProductBadge = document.getElementById("modalProductBadge");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");
const modalSpecsBody = document.getElementById("modalSpecsBody");
const modalWaBtn = document.getElementById("modalWaBtn");

// Initialize Catalog
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    setupEventListeners();
});

// Setup All Interactive Listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        toggleClearButton();
        filterAndRender();
    });

    // Clear search button
    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        clearSearchBtn.style.display = "none";
        searchInput.focus();
        filterAndRender();
    });

    // Sort Select
    sortSelect.addEventListener("change", (e) => {
        activeSort = e.target.value;
        filterAndRender();
    });

    // Category Tabs Selection
    categoryTabs.addEventListener("click", (e) => {
        const tab = e.target.closest(".category-tab");
        if (!tab) return;

        // Update active class
        document.querySelectorAll(".category-tab").forEach(btn => btn.classList.remove("active"));
        tab.classList.add("active");

        activeCategory = tab.dataset.category;
        filterAndRender();
    });

    // Reset Filters in Empty State
    resetFiltersBtn.addEventListener("click", resetAllFilters);

    // Modal Close
    modalCloseBtn.addEventListener("click", closeModal);
    productModal.addEventListener("click", (e) => {
        if (e.target === productModal) closeModal();
    });

    // Keyboard ESC key to close modal
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && productModal.classList.contains("active")) {
            closeModal();
        }
    });
}

// Toggle display of search cross button
function toggleClearButton() {
    if (searchQuery.length > 0) {
        clearSearchBtn.style.display = "flex";
    } else {
        clearSearchBtn.style.display = "none";
    }
}

// Reset all search, category and sort variables
function resetAllFilters() {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.style.display = "none";
    
    sortSelect.value = "default";
    activeSort = "default";
    
    document.querySelectorAll(".category-tab").forEach(btn => btn.classList.remove("active"));
    const allTab = document.querySelector('[data-category="all"]');
    if (allTab) allTab.classList.add("active");
    activeCategory = "all";
    
    filterAndRender();
}

// Process data filters and sorting
function filterAndRender() {
    // 1. Filter by category
    let filtered = PRODUCTS_DATA.filter(product => {
        const matchesCategory = activeCategory === "all" || product.category === activeCategory;
        
        // 2. Filter by search query
        const matchesSearch = product.title.toLowerCase().includes(searchQuery) || 
                              product.description.toLowerCase().includes(searchQuery) ||
                              product.category.toLowerCase().includes(searchQuery);
                              
        return matchesCategory && matchesSearch;
    });

    // 3. Sort products
    if (activeSort === "name-asc") {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (activeSort === "name-desc") {
        filtered.sort((a, b) => b.title.localeCompare(a.title));
    } else if (activeSort === "price-asc") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (activeSort === "price-desc") {
        filtered.sort((a, b) => b.price - a.price);
    }
    
    renderProducts(filtered);
}

// Render product card elements to DOM
function renderProducts(products = PRODUCTS_DATA) {
    // Empty loading state
    productsGrid.innerHTML = "";
    
    // Check if empty
    if (products.length === 0) {
        noProductsState.style.display = "flex";
        resultsCount.textContent = "Menampilkan 0 produk";
        return;
    }
    
    noProductsState.style.display = "none";
    resultsCount.textContent = `Menampilkan ${products.length} produk`;

    products.forEach(product => {
        const card = document.createElement("article");
        card.className = "product-card";
        
        // Build Specs HTML Summary
        let specsSummaryHtml = "";
        let count = 0;
        for (const [key, value] of Object.entries(product.specs)) {
            if (count >= 2) break; // Limit 2 specs on card for cleanliness
            specsSummaryHtml += `<li><i class="fa-solid fa-circle-check"></i> <strong>${key}:</strong> ${value}</li>`;
            count++;
        }

        // WhatsApp direct message text template
        const waText = generateWhatsAppMessage(product.title, product.formattedPrice);
        const waLink = `https://wa.me/${COMPANY_PHONE}?text=${encodeURIComponent(waText)}`;

        card.innerHTML = `
            <div class="product-img-wrapper">
                <span class="product-badge">${capitalizeFirstLetter(product.category)}</span>
                <img src="${product.image}" alt="${product.title}" loading="lazy">
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">${product.formattedPrice}</div>
                <p class="product-description">${product.description}</p>
                <ul class="product-specs-summary">
                    ${specsSummaryHtml}
                </ul>
                <div class="product-footer-actions">
                    <a href="${waLink}" target="_blank" class="btn-whatsapp-cta">
                        <i class="fa-brands fa-whatsapp"></i> Tanya Produk
                    </a>
                    <button class="btn-quickview" onclick="openQuickView(${product.id})" aria-label="Detail ${product.title}">
                        <i class="fa-regular fa-eye"></i> Detail
                    </button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(card);
    });
}

// Open modal and load detail info
window.openQuickView = function(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    modalProductImg.src = product.image;
    modalProductImg.alt = product.title;
    modalProductBadge.textContent = capitalizeFirstLetter(product.category);
    modalTitle.textContent = product.title;
    modalPrice.textContent = product.formattedPrice;
    modalDesc.textContent = product.description;

    // Load specs table
    modalSpecsBody.innerHTML = "";
    for (const [key, value] of Object.entries(product.specs)) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${key}</td>
            <td>${value}</td>
        `;
        modalSpecsBody.appendChild(row);
    }

    // Set WhatsApp button link
    const waText = generateWhatsAppMessage(product.title, product.formattedPrice);
    modalWaBtn.href = `https://wa.me/${COMPANY_PHONE}?text=${encodeURIComponent(waText)}`;

    // Open modal
    productModal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
};

// Close modal
function closeModal() {
    productModal.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scrolling
}

// Generate dynamic Whatsapp message template
function generateWhatsAppMessage(productTitle, productPrice) {
    return `Halo Doa Bangsa Agrobisnis,\n\nSaya tertarik dengan produk berikut:\n📦 *${productTitle}*\n💰 *Harga:* ${productPrice}\n\nMohon informasi ketersediaan stok, tata cara pemesanan, dan opsi pengiriman. Terima kasih.`;
}

// Helper to Capitalize text
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
