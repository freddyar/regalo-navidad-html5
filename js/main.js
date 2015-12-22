// var collectOnMe = document.querySelectorAll('.collectonme'),
//             buttons = document.getElementsByTagName("input");
        
//         for(var i = 0; i < collectOnMe.length; i++){
//             collectOnMe[i].style.display = "none";
//         }
        
        //default options
        snowFall.snow(document.body);

        var testContainer = document.querySelector('.test-container'),
            testContainerIsSnowing = true;

        snowFall.snow(testContainer);

        testContainer.addEventListener('click', function(e){
            testContainerIsSnowing = !testContainerIsSnowing;

            if(!testContainerIsSnowing){
                snowFall.snow(testContainer, "clear");
            }else{
                snowFall.snow(testContainer);
            }
        })


        function nieve(){
            document.body.className  = "lightBg";
            snowFall.snow(document.body, "clear");
            snowFall.snow(document.body, {round : true, shadow : true, minSize: 5, maxSize:8});
        }