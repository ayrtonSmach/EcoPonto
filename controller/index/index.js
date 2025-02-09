document.addEventListener('DOMContentLoaded', () => {
    const btn_close = document.getElementById('btn_close');
    const btn_open = document.getElementById('text-area')
    const btn_info = document.querySelectorAll('.btn_info button');

    openCloseInfo(btn_info);
    openCloseList(btn_close);
    openCloseList(btn_open);
});

function openCloseInfo(btn) {
    btn.forEach(btn => {
        btn.addEventListener('click', () => {
            card = document.getElementById(`${btn.id}_content`);
            if (card.style.display === 'none' || card.style.display === '') {
                card.style.display = 'block';
            }
            else {
                card.style.display = 'none';
            }
        });
    });
}

function openCloseList(btn) {
    const list = document.getElementById('list');
    btn.addEventListener('click', () => {
        if (list.style.display === 'none' || list.style.display === '') {
            list.style.display = 'block';
        }
        else {
            list.style.display = 'none';
        }
    });
}

