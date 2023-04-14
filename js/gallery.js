// Pagination


    let thisPage = 1;
    let limit = 12;
    let list = document.querySelectorAll('.gallery__cover_one');
    
    function loadItem(){
        let beginGet = limit * (thisPage - 1);
        let endGet = limit * thisPage - 1;
        list.forEach((item, key)=>{
            if(key >= beginGet && key <= endGet){
                item.style.display = 'block';
            }else{
                item.style.display = 'none';
            }
        })
        listPage();
    }
    loadItem();
    function listPage(){
        let count = Math.ceil(list.length / limit);
        document.querySelector('.paginaton__list').innerHTML = '';
    
        if(thisPage != 1){
            let prev = document.createElement('li');
            prev.classList.add('pagination__item_text')
            prev.innerHTML = '	&larr;';
            prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
            document.querySelector('.paginaton__list').appendChild(prev);
        }
    
        for(i = 1; i <= count; i++){
            let newPage = document.createElement('li');
            newPage.classList.add('pagination__item')
            newPage.innerText = i;
            if(i == thisPage){
                newPage.classList.add('active');
            }
            newPage.setAttribute('onclick', "changePage(" + i + ")");
            document.querySelector('.paginaton__list').appendChild(newPage);
        }
    
        if(thisPage != count){
            let next = document.createElement('li');
            next.classList.add('pagination__item_text')
            next.innerHTML = '&rarr;';
            next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
            document.querySelector('.paginaton__list').appendChild(next);
        }
    }
    function changePage(i){
        thisPage = i;
        loadItem();
    }


    const tabsItem = Array.from(document.querySelectorAll('.tabs__item'));

    tabsItem.forEach((item) => {
        if(item.classList.contains('tabs__item_one')) {
            console.log('dgsg')
        }
        
    })




// Gallery tabs 

const gallery = document. querySelector(".gallery-main ");
if(gallery) {
    const tabsGallery  = document.querySelector(".gallery-main__tabs");
    const contentGallery = document.getElementById ("tabs__content_gallery");
    const tabsElementsGallery = Array.from(document.querySelectorAll(".tabs__btn_gallery"));
    const GalleryCurrent = document.querySelector(".gallery__current");
    
    
    
    const changeClassGallery = el => {
        for (let i = 0; i < tabsGallery.children.length; i++) {
            tabsGallery.children[i].classList.remove('active');
        }
        el.classList.add('active');
    };
    
    for(let index = 0; index < tabsElementsGallery.length; index++) {
        tabsElementsGallery[index].addEventListener('click', (e) => {
            let currTab = e.target.dataset.btn;
            changeClassGallery(e.target);
            for (let i = 0; i < contentGallery.children.length; i++) {
                contentGallery.children[i].classList.remove('active');
                if (contentGallery.children[i].dataset.content == currTab) {
                    contentGallery.children[i].classList.add('active');
                }
            };
        });
    }
}
