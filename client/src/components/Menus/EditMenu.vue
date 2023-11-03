<template>
  <div>
    <h1>Edit Menu</h1>
    <form v-on:submit.prevent="editMenu">
      <p>ชื่อเมนู : <input type="text" v-model="menu.name" /></p>
      <p>ประเภทเมนู : <input type="text" v-model="menu.type" /></p>
      <p>ขนาด : <input type="text" v-model="menu.size" /></p>
      <p>ความหวาน : <input type="text" v-model="menu.sweet" />%</p>
      <p>ราคา : <input type="text" v-model="menu.price" /> บาท</p>
      <p><button type="submit">Edit Menu</button></p>
    </form>
    <hr />
    <div>
      <p>Menu id: {{ menu.id }}</p>
      <p>ชื่อเมนู : {{ menu.name }}</p>
      <p>ประเภทเมนู : {{ menu.type }}</p>
      <p>ขนาด : {{ menu.size }}</p>
      <p>ความหวาน : {{ menu.sweet }}</p>
      <p>ราคา : {{ menu.price }}</p>
      
    </div>
  </div>
</template>
<script>
import MenuService from "@/services/MenuService";
export default {
  data() {
    return {
      menu: {
        name:"",
        type:"",
        size:"",
        sweet:"",
        price:""
      }
    };
  },
  methods: {
    async editMenu() {
      try {
        await MenuService.put(this.menu);
        this.$router.push({
          name: "menus"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      let menuId = this.$route.params.menuId;
      this.menu = (await MenuService.show(menuId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style scoped></style>
