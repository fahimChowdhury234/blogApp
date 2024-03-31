<template>

    <div class="max-w-screen-xl mx-auto p-10">
        <h1 class="text-3xl font-bold text-gray-800 mb-5">Blog List</h1>
        <ul class="flex gap-2 flex-wrap" v-if="allBlogs.length > 0">
            <li v-for="blog in  allBlogs " :key="blog.id" class="px-4 py-4 border rounded-md w-[32%] relative">

                <div class="absolute top-3 right-3 w-6 h-6 flex justify-center items-center  rounded-full bg-gray-400 cursor-pointer"
                    @click="clickTool(blog.id)" v-if="isOpen == blog.id">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>


                </div>
                <div class="absolute top-3 right-3 w-6 h-6 flex justify-center items-center  rounded-full bg-gray-400 cursor-pointer"
                    @click="clickTool(blog.id)" v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                </div>

                <div v-if="isOpen === blog.id"
                    class="absolute top-9 right-4 flex flex-col  overflow-hidden  border w-32 bg-gray-100  rounded-lg ">
                    <button class="text-sm text-gray-600 p-2 capitalize hover:bg-slate-200 duration-200 ease-in "
                        @click="updateData(blog)">
                        update data
                    </button>
                    <button class="text-sm text-gray-600 p-2 capitalize hover:bg-slate-200 duration-200 ease-in"
                        @click="deleteData(blog.id)">
                        Delete data
                    </button>
                </div>
                <h2 class="text-xl text-gray-700 font-bold">{{ blog.title.substring(0, 20) }}</h2>

                <p class="text-base text-gray-700 mb-3"> {{ blog.description.substring(0, 150) }}</p>

                <button @click="send(blog.id)"
                    class="block  w-fit cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                    See More
                </button>
            </li>
            <li>

            </li>
        </ul>
        <p v-else class="text-2xl text-gray-600 font-semibold p-20 text-center">
            No blogs have been added yet
        </p>

    </div>

</template>

<script setup>
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { useBlogStore } from '../data';
import { useRouter } from 'vue-router';

const blogStore = useBlogStore()
const router = useRouter()
const { getAllBlogs } = storeToRefs(blogStore)
const allBlogs = ref([])
onMounted(() => {
    allBlogs.value = getAllBlogs.value;
});
const isOpen = ref(null)
const updateData = ((data) => {
    blogStore.openUpdateBlog(data)
})
const clickTool = ((id) => {

    if (isOpen.value == id) {
        isOpen.value = -1
    } else {
        isOpen.value = id;
    }
})
const send = (i) => {
    router.push({ path: `/blog/${i}`, params: { id: i } });
};

const deleteData = ((id) => {
    blogStore.deleteBlog(id)
})

</script>

<style lang="scss" scoped></style>