<template>
    <footer class="mt-5">
        <div id="footerBackground"></div>
        <div id="footerLeft">
         <span>
            Copyright &copy; 2024
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
                <p class="p-0"> with &hearts; </p>
        </div>

        <div id="footerRight">
            <span>
                Contattaci a questo indirizzo: Bolly@wood.com 
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
    padding: 130px;
    padding-bottom: 0px;
    width: 100%;
    background-color: #161e2e;
    background-image: url("../img/footer-background.png");
    background-size: 100% 220%;
    background-repeat: no-repeat;
    height: 100%;
    background-position: bottom center;
    

    ul {
        list-style: none;
        padding-left: 0px;
    }
    #footerMid {
        text-align: center;
        padding-bottom: 100px;
        h6 {
            display: inline;
        }
    }
}


</style>