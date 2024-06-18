<template>
    <footer class="mt-5">
        <div id="footerBackground"></div>
        <div id="footerLeft">
         <span>
            Copyright &copy; 2024 Bollywood <br> All Rights Reserved.
         </span >
        </div>

        <div id="footerMid">
                <h6>This project was made by:</h6>
            <ul class="m-auto">
                <li>
                    Luca Sasso
                </li>
                <li>
                    Wojciech Potoniec
                </li>
                <li>
                    Stefano D'Aniello
                </li>
                <li>
                    Nazario Zaccagnino
                </li>
                <li>
                    Lorenzo De Giorgi
                </li>
                <li>
                    Daniel Bosa
                </li>
            </ul>
                <p class="mb-5"> with &hearts; </p>
        </div>

        <div id="footerRight">
            <span class="mb-5">
                Contattaci a questo indirizzo: <br> Bolly@wood.com 
            </span>
        </div>
    </footer>
    
</template>

<script>
    export default {
        name: 'FooterComponent',
    }
</script>
4
<style lang="scss" scoped>
footer {
    background-color: black;
    font-size: small;
    color: white;
    min-height: 200px;
    display: flex;
    justify-content: space-between;
    padding: 80px 90px ;
    padding-bottom: 30px;
    width: 100%;
    background-color: #161e2e;
    background-image: url("../img/footer-background.png");
    background-size: 135% 280%;
    background-repeat: no-repeat;
    background-position: bottom center;
    align-items: end;
    text-align: center;

    ul {
        list-style: none;
        display: flex;
        li {
            display: inline-block;
            margin-left: 5px;
            margin-right: 5px;
        }
    }
    #footerMid {
        padding-bottom: 100px;
        h6 {
            display: inline;
        }
    }


}


</style>