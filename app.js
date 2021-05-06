
function makeGrid(){

    for ( let i = 0; i < 64; i++ ){
        $('.grid').append(`<div class = cell><div/>`)
    }
}

makeGrid()

function makePalette(){

    const PALETTE =[
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'indigo',
        'violet',
        'black',
        'aquamarine',
        "#ccc",
    ]


  for (let k = 0; k < PALETTE.length; k++) {
    // access the color
    const nextColor = PALETTE[k]
    const but = $('<button/>')
    but.css({
        backgroundColor : nextColor})
    $('.palette') .append(but) 
        
  }

}

makePalette();

$('.palette button').first().addClass('active');


function onPaletteClick(){
    $('.active').removeClass()
    $(this).addClass('active')
}
$('.palette button').click(onPaletteClick);

// function onGridClick(){
//     $(this).css({
//         backgroundColor: $('.active').css('backgroundColor'),
//     })
// }

function onGridClick(){
    if ($(this).css('backgroundColor') === $('.active').css('backgroundColor')) {
        $(this).css({
            backgroundColor: '',
        }) }else{
            $(this).css({
             backgroundColor: $('.active').css('backgroundColor'),
        })
     }
}


$('.grid .cell').click(onGridClick);

function onClearClick() {
    $('.grid .cell').css({
        backgroundColor: ''
    })

}

$('.controls .clear').click(onClearClick);

function onFillAllClick() {
    $('.grid .cell').css({
        backgroundColor: $('.active').css('backgroundColor'),
    })

}

$('.controls .fill-all').click(onFillAllClick);



function onFillEmtptyClick() {

        const elements = $('.grid .cell')
        const fillEmptyColor = $('.active').css('backgroundColor')
        // console.log(elements)
        for (let g = 0; g < elements.length; g++){
         let nextElement = $( elements[g] );
        //  console.log(nextElement)
            if (nextElement.css('backgroundColor') === 'rgba(0, 0, 0, 0)') {
                nextElement.css({
                    backgroundColor: fillEmptyColor,
            } )
    }
}

}  


$('.controls .fill-empty').click(onFillEmtptyClick);

