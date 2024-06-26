    function moveTitle() {
        const title = document.querySelector('.slideshow-title');
        const container = document.querySelector('.slideshow-container');
        
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        
        const titleWidth = title.clientWidth;
        const titleHeight = title.clientHeight;
        
        const maxLeft = containerWidth - titleWidth;
        const maxTop = containerHeight - titleHeight;
        
        const randomLeft = Math.random() * maxLeft;
        const randomTop = Math.random() * maxTop;
        
        title.style.left = `${randomLeft}px`;
        title.style.top = `${randomTop}px`;
        title.style.transform = 'translate(0, 0)';
    }
