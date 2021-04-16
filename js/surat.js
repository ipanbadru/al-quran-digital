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
    })
});

const no = dataURL.no[0];

$.get('https://api.npoint.io/99c279bb173a6e28359c/surat/' + no, (data) => {
    let ayats = '';
    $.each(data, (i, ayat) => {
        ayats += `<li class="list-group-item"><h4 class="text-right ayat-ar">${ayat.ar}</h4><h5 class="text-secondary ayat-terjemahan">${ayat.id}</h5></li>`;
    });
    $('.list-ayat').html(ayats);
});



const scrollBtn = document.querySelector('.scrolling-container');

window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 200);
})