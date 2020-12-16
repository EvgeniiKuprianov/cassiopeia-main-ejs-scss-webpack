const level1 = document.querySelector('.level1');
const level2 = document.querySelector('.level2');
const level3 = document.querySelector('.level3');
const level4 = document.querySelector('.level4');

const title = document.querySelector('.title-level');

const navigation = document.querySelector('.navigation-level');

const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
const page3 = document.querySelector('.page3');
const page4 = document.querySelector('.page4');

const btnMore = document.querySelector('.btn-main');


btnMore.onclick = () => {
    if (page2){
    page3.classList.remove('none'); 
    }
    page2.classList.remove('none');
    btnMore.disabled = true;
}


navigation.onclick = (event) => {
    let target = event.target;
    if (target.tagName !== "BUTTON") {
        return;
    }
    offButton(target);
}

function offButton (button) {
    if (button == level1) {
    title.innerHTML = "Level 1"
    page1.classList.add('page1');
    page2.classList.add('none');
    page3.classList.add('none');
    page4.classList.add('none');
    level1.disabled = true;
    level2.disabled = false;
    level3.disabled = false;
    level4.disabled = false;
    btnMore.disabled = false;
    } else if (button == level2) {
    title.innerHTML = "Level 2"
    page2.classList.remove('none');
    page1.classList.remove('page1');
    page3.classList.add('none');
    page4.classList.add('none');
    level1.disabled = false;
    level2.disabled = true;
    level3.disabled = false;
    level4.disabled = false; 
    btnMore.disabled = false;
    } else if (button == level3) {
    title.innerHTML = "Level 3"
    page3.classList.remove('none');
    page1.classList.remove('page1');
    page2.classList.add('none');
    page4.classList.add('none');
    level1.disabled = false;
    level2.disabled = false;
    level3.disabled = true;
    level4.disabled = false; 
    btnMore.disabled = false;
    } else if (button == level4) {
    title.innerHTML = "Level 4"
    page4.classList.remove('none');
    page1.classList.add('none');
    page2.classList.add('none');
    page3.classList.add('none');
    page1.classList.remove('page1');
    level1.disabled = false;
    level2.disabled = false;
    level3.disabled = false;
    level4.disabled = true; 
    btnMore.disabled = false;
    } 
}

