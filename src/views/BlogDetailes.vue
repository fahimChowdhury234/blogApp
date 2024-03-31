<template>
    <div class="max-w-screen-xl mx-auto p-10">
        <div v-if="blog" class="blog-details">
            <h2 class="text-3xl text-gray-700 font-bold mb-4"> {{ blog.title }}</h2>
            <p class="text-base text-gray-600 leading-7 font-normal mb-3"> {{ blog.description }}</p>
            <router-link to="/"
                class="flex items-center gap-2 p-3 bg-gray-100 rounded-md w-fit text-base text-gray-600 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="w-5 h-5 text-gray-600">
                    <path fill-rule="evenodd"
                        d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                        clip-rule="evenodd" />
                </svg>
                Back to Home
            </router-link>
        </div>
        <div v-else>
            <p class="text-2xl text-gray-600 font-semibold"> No blog found with the specified ID.</p>
            <router-link to="/" class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="w-6 h-6 text-gray-600">
                    <path fill-rule="evenodd"
                        d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                        clip-rule="evenodd" />
                </svg>
                Back to Home
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useBlogStore } from '../data';
import { storeToRefs } from 'pinia';

const blogStore = useBlogStore()
const { getAllBlogs } = storeToRefs(blogStore)

const route = useRoute()

const blog = computed(() => {
    const id = Number(route.params.id);
    return getAllBlogs.value.find(blog => blog.id === id);
});

</script>

<style lang="scss" scoped></style>
