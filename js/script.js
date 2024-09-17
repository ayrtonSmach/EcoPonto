document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('list');
    const btn_close = document.getElementById('btn_close');
    const btn_info = document.querySelector('.btn_info button');

    openCloseList();
});



function openCloseInfo() {
    
}

function openCloseList() {
    btn_close.addEventListener('click', function() {
        if (list.style.display === 'none' || list.style.display === '') {
            list.style.display = 'block';
        }
        else {
            list.style.display = 'none';
        }
    });
}

