$(document).ready(function(){
    
    //random blocks in first block
    $(".first-block").html($(".first-block .element").sort(function(){
        return Math.random()-0.5;
    }));
    
    
    
    //start button
    $('.startG').on('click', function(){
        
        alert('The grey block is the last block');

        //allow blocks to be sortable
        $('.block').sortable({
            connectWith: '.first-block, .second-block',
        })

        //change disables
        $('.startG').prop('disabled', true);
        $('.checkR').prop('disabled', false);
        
        
        //set timer
        let sec = 59;
        let time = setInterval(function(){
            if(sec<10 && sec>=0) sec = `0` + sec;
            if(sec<0){
                alert('lose');
                clearInterval(time);
            }
            $('.timer').text(`00:${sec}`);
            $('.you-sure-text').text(`You still have time, you sure? 00:${sec}`)
            sec--;
        },1000)
        
        
        //check button
        let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
        let check = true;
        
        $('.checkR').on('click', function(){

            $('.you-sure').css('display', 'block');
            $('.black-background').css('display', 'block');

            $('.cancel').on('click', function(){
                $('.you-sure').css('display', 'none');
                $('.win').css('display', 'none');
                $('.lost').css('display', 'none');
                $('.black-background').css('display', 'none');

            })
            $('.checkSecondary').on('click', function(){
                for(let i = 0; i<$('.element').length; i++){
                    if($('.element').eq(i).text() != numbersArray[i]){
                        check = false;
                        break;
                    }
                }
                if(check){
                    clearInterval(time);
                    
                    $('.checkR').prop('disabled', true);
                    $('.you-sure').css('display', 'none');
                    $('.win').css('display', 'block');
                    $('.black-background').css('display', 'block');


                } 
                else {
                    clearInterval(time);
                    $('.checkR').prop('disabled', true);
                    
                    $('.you-sure').css('display', 'none');
                    $('.lost').css('display', 'block');
                    $('.black-background').css('display', 'block');

                }
                check = true;
            
            })

            
        })
        
    })
    
    
    
    
    
})