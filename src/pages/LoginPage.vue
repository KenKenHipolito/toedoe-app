<template>
    <h1>login page</h1>

    <button @click="handleClick" class="btn btn-primary">Task</button>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter()

const handleClick = () =>{
    router.push('/tasks')
}
</script>