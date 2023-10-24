<script>
	import { onMount } from 'svelte';
  import Draggable from './Draggable.svelte';

  let createBox;
  let notes;
  let input;
  let i = 0;

  onMount(() => {
    createBox = document.getElementsByClassName('createBox')[0];
    notes = document.getElementsByClassName('notes')[0];
    input = document.getElementById('user');

    createBox.addEventListener('keydown', content);

    document.getElementById('create').addEventListener('click', () => {
      createBox.style.display = 'block';
    });
  });

        function content(e){
            if(e.keyCode =='13'){
                divStyle(input.value);
                input.value="";
                createBox.style.display = "none";
            }
        }

        function color(){
            let randomColors = [ "#a8ff97", "#97d4ff", "#ffea97", "#ce97ff", "#ff9797", "#ff97e8" ];
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
      

  </script>

<div class="container">
        <div class="notes">
          <Draggable><div class="note"> Welcome to <br> Sticky Notes... </div></Draggable>
            <div id="create">
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM11 11H8V13H11V16H13V13H16V11H13V8H11V11Z"></path></svg>
                <div class="createBox">
                    <div class="inBox">
                        <textarea placeholder="Write Here..." id="user" maxlength="160"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
<style>
	*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Hellounicorn';
		color: black;
}

body{
    background: #444444;
}
.container{
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 50px;
    padding: 50px;
}
.notes{
    display: flex;
    justify-content: flex-start;
    align-items:center;
    flex-wrap: wrap;
    gap: 50px;
    font-size: 30px;
}
.note{
    padding: 20px;
    position: relative;
    width: 300px;
    height: 300px;
    background: #ffea97;
    box-shadow: 0 15px 45px #000000b1;
    font-size: 35px;
    cursor: move;
}
.note::before{
    content: 'Click on + to start creating your own Sticky Note  Double Click on created Sticky Note to Remove it...';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #00000048;
    padding: 3px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    transition: 0.4s;
}

#create{
    position: relative;
    width: 300px;
    height: 300px;
    background: #8d8d8db1;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.svg{
    position: absolute;
    height: 100px;
    -webkit-transform: scaleY(-1);
}
#create:hover .svg{
    height: 110px;
    transition: ease-in-out .4s;
}
.createBox{
    position: relative;
    width: 300px;
    height: 300px;
    z-index: 1000;
    display: none;
}
.createBox textarea{
    position:absolute;
    left:0;
    top:0;
    width: 300px;
    height: 300px;
    padding: 20px;
    outline: none;
    font-size:35px;
    resize: none;
}

.details h3{
    font-family: 'Hellounicorn';
    font-weight: 100;
    user-select: none;
}
</style>
