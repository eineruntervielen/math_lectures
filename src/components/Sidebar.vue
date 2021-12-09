<template>
     <div class="sidenav">
     <ul>
         <li>1.1 Einführung</li>
         <li>1.2 Nochmal</li>
         <li>1.3 Mengen</li>
     </ul>
     </div> 
</template>

<script>
export default {
    name: "Sidebar",
    
}
</script>


<style scoped>
.sidenav {
    height: 100%;
    margin-top: 90px;
    position: fixed;
    top: 0;
    left: 0 ;
    display: block;
    width: 20vw;
    overflow-x: hidden;
    background: rgb(237, 237, 237);
}
</style>