const nomor = dataURL.no[0] - 1;
$.get('https://api.npoint.io/99c279bb173a6e28359c/data', (data) => {
    const surat = data[nomor];
    $('.nama-surat').html(surat.nama);
    $('.asma').html(surat.asma);
    $('.arti').html(surat.arti);
    $('.ayat').html(`Ayat(${surat.ayat})`);
    $('.surat-ke').html(`Surat ke-${surat.urut}`);
    $('.diturunkan').html(`Di ${surat.type}`);
    $('audio').html(`s<source src="${surat.audio}" type="audio/mpeg">`)
    $(document).on({
        ajaxStop: () => {
            $('.content').removeClass('d-none');
            $('.loader').fadeOut(1000);
            $('.content').fadeIn(1000);
        },
    });
    $('.keterangan').html(surat.keterangan);
});

const no = dataURL.no[0];

$.get('https://api.npoint.io/99c279bb173a6e28359c/surat/' + no, (data) => {
    let ayats = '';
    $.each(data, (i, ayat) => {
        ayats += `<li class="list-group-item px-0 py-2"><h3 class="text-right ayat-ar">${ayat.ar}</h3><h5 class="ayat-terjemahan text-secondary" style="font-size: .8rem;">${ayat.nomor}. ${ayat.id}</h5></li>`;
    });
    $('.list-ayat').html(ayats);
});



const scrollBtn = document.querySelector('.scrolling-container');

window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 200);
})