<template>
  <div>
 <h1>Show Menu By Id</h1>
 <p>Menu id : {{ menu.id }}</p>
    <p>ชื่อเมนู : {{ menu.name }}</p>
      <p>ประเภทเมนู : {{ menu.type }}</p>
      <p>ขนาด : {{ menu.size }}</p>
      <p>ความหวาน : {{ menu.sweet }} %</p>
      <p>ราคา : {{ menu.price }} บาท</p>
 <div><button @click="navigateTo('/menu/edit/'+menu.id)">Edit Menu</button>
 <button @click="navigateTo('/menus')">กลับ</button></div>
  </div>
 </template>
 <script>
import MenuService from "@/services/MenuService";

export default {
  data() {
    return {
      menu: null
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  async created() {
    try {
      let menuId = this.$route.params.menuId;
      this.menu = (await MenuService.show(menuId)).data;
      console.log(this.menu);
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style></style>
