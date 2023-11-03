<template>
  <div>
    <h1><center>CAFE DAYA</center></h1>
    <h1>Show All Menu</h1>
    <h2>เมนูทั้งหมด {{ menus.length }}</h2>
    <div>
      <button @click="navigateTo('/menu/create')">+Create Menu</button>
      <button @click="navigateTo('/users')">กลับไป Users</button>
    </div>
    <hr />
    <div v-for="menu in menus" v-bind:key="menu.id">
      <p>Menu id : {{ menu.id }}</p>
      <p>ชื่อเมนู : {{ menu.name }}</p>
      <p>ประเภทเมนู : {{ menu.type }}</p>
      <p>ขนาด : {{ menu.size }}</p>
      <p>ความหวาน : {{ menu.sweet }} %</p>
      <p>ราคา : {{ menu.price }} บาท</p>
      <div>
        <button v-on:click="navigateTo('/menu/' + menu.id)">ดูข้อมูล Menu</button>
        <button @click="navigateTo('/menu/edit/' + menu.id)">Edit Menu</button>
        <button @click="deleteMenu(menu)">Delete Menu</button>
      </div>
      <hr />
    </div>
  </div>
</template>
<script>
import MenuService from "@/services/MenuService";

export default {
  data() {
    return {
      menus: []
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteMenu(menu) {
      let result = confirm("Want of delete?");
      if (result) {
        try {
          await MenuService.delete(menu);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.menus = (await MenuService.index()).data;
    }
  },
  async created() {
    try {
      this.menus = (await MenuService.index()).data;
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style></style>
