import { defineStore } from "pinia";
import { reactive, watchEffect } from "vue";

export const useBlogStore = defineStore("blog", {
   state: () => ({
      blogs: JSON.parse(localStorage.getItem("blogs")) || [],
      formData: {
         id: Math.floor(Math.random() * 1000),
         title: "",
         description: "",
      },
      isModal: false,
      isUpdate: false,
   }),
   getters: {
      getAllBlogs(state) {
         return state.blogs;
      },
   },
   actions: {
      addBlog(blog) {
         this.blogs.push(blog);

         localStorage.setItem("blogs", JSON.stringify(this.blogs));
      },
      openUpdateBlog(data) {
         this.isModal = true;
         this.isUpdate = true;
         this.formData.id = data.id;
         this.formData.title = data.title;
         this.formData.description = data.description;
      },
      updateBlog(data) {
         const index = this.blogs.findIndex((blog) => blog.id === data.id);
         console.log(index);
         if (index !== -1) {
            this.blogs[index].title = data.title;
            this.blogs[index].description = data.description;
            localStorage.setItem("blogs", JSON.stringify(this.blogs));
         }
         this.isModal = false;
         this.isUpdate = false;
         this.formData = {
            id: Math.floor(Math.random() * 1000),
            title: "",
            description: "",
         };
      },
      deleteBlog(id) {
         const index = this.blogs.findIndex((blog) => blog.id === id);
         if (index !== -1) {
            this.blogs.splice(index, 1);
            localStorage.setItem("blogs", JSON.stringify(this.blogs));
         }
      },
   },
});

watchEffect(() => {
   useBlogStore.blogs = JSON.parse(localStorage.getItem("blogs")) || [];
});
