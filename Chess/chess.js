window.addEventListener("load", init);

function init() {

    const board = document.querySelector('.board')

    for(let rows = 0; rows < 8; rows++){

        let boxColor;
        let boxStartColorWhite = rows % 2 === 0? true : false;


        for(let columns = 0; columns < 8; columns++){

            if(boxStartColorWhite)   
                boxColor = columns % 2 === 0? 'brown' : 'beige';
            else
                boxColor = columns % 2 === 0? 'beige' : 'brown';
            
            let box = document.createElement('div');
            box.style.width = board.clientWidth / 8 + 'px';
            box.style.height = board.clientHeight / 8 + 'px';
            box.style.backgroundColor = boxColor;

            board.append(box);
            
            box.addEventListener('click', function(box){
                box.target.classList.toggle('pawn');
            })
        }
    }
}





