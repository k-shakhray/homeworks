
let tabs = document.querySelectorAll('.tabs-title');
let tabsContent = document.querySelectorAll('.tabs-content li');

tabs.forEach(function (i) {
    i.addEventListener('click', function () {
        let activeTab = this.getAttribute('data-tab');

        if(!(i.classList.contains('active'))){
            tabs.forEach(function (i) {
                if(i.classList.contains('active')){
                    i.classList.remove('active')
                }
            });
            i.classList.add('active');
        }

        tabsContent.forEach(function (i) {
            if(i.classList.contains('active')){
                i.classList.remove('active')
            }
            if(i.getAttribute('data-tab') === activeTab){
                i.classList.add('active');
            }
        })
    })
});