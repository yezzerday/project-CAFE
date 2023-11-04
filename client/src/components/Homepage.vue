<template>
    <div class="background-image">
        <div class="container-fluid">

            <div class="text text-center">
                <p class="display-2" style="color: #black;">CAFE DAYA <br>
                <button style="font-size:xx-large;" v-on:click="navigateTo('/login')">LOGIN</button></p>
            </div>

        </div>
    </div>
</template>
   
<script>
export default {
    name: 'Homepage',
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        },
    },
};
</script>
   
<style scoped>
.background-image {
    text-align: center;
    background-image: url('../assets/bg1.gif');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
}

.container-fluid {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: auto;
    /* background-color: black; */
    height: 100%;
}

.text {
    font-size: 90px;
}
</style>
   