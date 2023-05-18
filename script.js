let menu1 = document.getElementById('main')
let line = document.getElementById('line3')

let line2 = document.getElementById('line2')
let line1 = document.getElementById('line1')


function toggle() {
    menu1.style.display = (menu1.style.display === 'block')?'none':'block';
    line.style.display = (line.style.display === 'none')?'block':'none';

    line2.style.rotate = (line2.style.rotate === '45deg')?'0deg':'45deg';
    line1.style.rotate = (line1.style.rotate === '-45deg')?'0deg':'-45deg';

    line1.style.top =(line1.style.top === '34px')?'24px':'34px';
}





