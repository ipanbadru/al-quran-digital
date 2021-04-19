const createHTML = (data) => {
    return `<div class="col-md-6 col-xl-4 mb-4 surat">
          <div class="card shadow-sm">
            <a href="surat.html?no=${data.nomor} " class="card-body" data-id="${data.nomor}">
              <h4 class="text-dark">${data.nomor}. ${data.nama} <span class="text-secondary" style="font-size: .8em;">ayat(${data.ayat})</span></h4>
              <div class="d-flex justify-content-between">
                <span class="text-secondary">Surat Ke-${data.urut}</span>
                <h2 class="text-right text-success text-arab">${data.asma}</h2>
              </div>
              <p class="text-dark">${data.arti}</p>
            </a>
          </div>
        </div>`;
};
let dataSurat = '';
let allSurat;
$.get('https://api.npoint.io/99c279bb173a6e28359c/data', (data) => {
    allSurat = data;
    $.each(data, (i, d) => {
        dataSurat += createHTML(d);
    });
    $('.list-surat').html(dataSurat);
    $('.content').removeClass('d-none');
    $('.loader').fadeOut(1000);
    $('.content').fadeIn(1000);
});
const searchSurat = () => {
    const kata = $('.cari-surat').val().toLowerCase();
    if (kata == '') {
        $('.list-surat').html(dataSurat);
    } else {
        const dataBaru = allSurat.filter(surat => surat.nama.toLowerCase().includes(kata) || surat.arti.toLowerCase().includes(kata));
        if (dataBaru.length) {
            let dataSuratBaru = '';

            $.each(dataBaru, (i, data) => {
                dataSuratBaru += createHTML(data);
            });
            $('.list-surat').html(dataSuratBaru);
        } else {
            $('.list-surat').html(`<div class="col-12">
      <h3 class="text-secondary text-center">Surat Yang Anda Cari Tidak Ada..!!</h3>
    </div>`);
        }
    }
};



const scrollBtn = document.querySelector('.scrolling-container');

window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 200);
})