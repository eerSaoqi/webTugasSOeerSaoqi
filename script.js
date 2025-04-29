// Burger Menu Toggle
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('toggle');
});

// Close burger menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burgerMenu.classList.remove('toggle');
    });
});

// Tugas Detail Modal
function showTugasDetail(tugasId) {
    const modal = document.getElementById('tugas-detail-modal');
    const content = document.getElementById('tugas-detail-content');
    
    // Data tugas (bisa diganti dengan data Anda)
    const tugasData = {
        1: {
            title: "Tugas 1: Analisis Kebutuhan",
            deadline: "10 Oktober 2023",
            deskripsi: "Buat dokumen analisis kebutuhan untuk sistem informasi akademik kampus. Dokumen harus mencakup: daftar stakeholder, kebutuhan fungsional, kebutuhan non-fungsional, dan use case diagram.",
            status: "Selesai",
            catatan: "Tugas sudah dikumpulkan melalui LMS pada 8 Oktober 2023."
        },
        2: {
            title: "Tugas 2: Desain Sistem",
            deadline: "25 Oktober 2023",
            deskripsi: "Buat desain arsitektur sistem dan desain antarmuka pengguna untuk sistem informasi akademik kampus. Sertakan: diagram arsitektur, diagram kelas, dan mockup antarmuka pengguna.",
            status: "Dalam Pengerjaan",
            catatan: "Sedang mengerjakan diagram kelas untuk modul registrasi mata kuliah."
        },
        3: {
            title: "Tugas 3: Implementasi",
            deadline: "15 November 2023",
            deskripsi: "Implementasikan modul registrasi mata kuliah berdasarkan desain yang telah dibuat. Gunakan bahasa pemrograman pilihan Anda dan sertakan dokumentasi kode.",
            status: "Belum Dimulai",
            catatan: "Menunggu penyelesaian tugas desain sistem."
        }
    };
    
    const tugas = tugasData[tugasId];
    
    content.innerHTML = `
        <h2>${tugas.title}</h2>
        <p><strong>Deadline:</strong> ${tugas.deadline}</p>
        <p><strong>Status:</strong> <span class="status-${tugas.status.toLowerCase().replace(' ', '-')}">${tugas.status}</span></p>
        
        <h3>Deskripsi Tugas</h3>
        <p>${tugas.deskripsi}</p>
        
        <h3>Catatan</h3>
        <p>${tugas.catatan}</p>
        
        <div class="modal-actions">
            <button onclick="closeModal()" class="modal-close-btn">Tutup</button>
        </div>
    `;
    
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('tugas-detail-modal');
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    const modal = document.getElementById('tugas-detail-modal');
    if (event.target === modal) {
        closeModal();
    }
});