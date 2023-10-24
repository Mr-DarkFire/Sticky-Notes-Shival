

let createBox = document.getElementsByClassName('createBox')[0];
        let notes = document.getElementsByClassName('notes')[0];
        let input = document.getElementById('user');
        let i=0;

        createBox.addEventListener('keydown',content);

        document.getElementById("create").addEventListener("click", function(){
            createBox.style.display = "block";
        });

        function content(e){
            if(e.keyCode =='13'){
                divStyle(input.value);
                input.value="";
                createBox.style.display = "none";
            }
        }

        function color(){
            let randomColors = [ "#a8ff970", "#97d4ff", "#ce97ff", "#ff9797", "#ff97e8" ];
            if(i > randomColors.length - 1){
                i = 0;
            }
            return randomColors[i++];
        }

        function divStyle(text){
            let div = document.createElement("div");
            div.className = 'note';
            div.innerHTML= '<div class="details">'+'<h3>'+text+'<h3>'+'</div>';

                div.addEventListener("dblclick", function(){
                    div.remove();
                })
                div.setAttribute('style', 'background:'+color()+'');

            notes.appendChild(div);
        }
