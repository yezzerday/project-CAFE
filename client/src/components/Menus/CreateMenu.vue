<template>
  <div>
    <h1>Create Menu</h1>
    <form v-on:submit.prevent="createMenu">
      <p>ชื่อเมนู : <input type="text" v-model="menu.name" /></p>
      <p>ประเภทเมนู : <input type="text" v-model="menu.type" /></p>
      <p>ขนาด : <input type="text" v-model="menu.size" /></p>
      <p>ความหวาน : <input type="text" v-model="menu.sweet" />%</p>
      <p>ราคา : <input type="text" v-model="menu.price" /> บาท</p>
      <p><button type="submit">Create Menu</button></p>
    </form>
  </div>
</template>
<script>
import MenuService from "@/services/MenuService";
export default {
  data() {
    return {
      menu: {
        name: "",
        type: "",
        size: "",
        sweet: "",
        price: ""
      }
    };
  },
  methods: {
    async createMenu() {
      try {
        await MenuService.post(this.menu);
        this.$router.push({
          name: "menus"
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style scoped></style>
