<template>
    <div class="card mt-2" v-if="tasks.length && show">
        <ul class="list-group list-group-flush">
            <Task v-for="task in tasks" :task="task" :key="task.id" 
            @updated="handleUpdatedTask"
            @completed="handleCompletedTask"
            @removed="handleRemoveTask"
            />
        </ul>
    </div>
</template>

<script setup>
import Task from "./Task.vue";
import { useTaskStore } from "../../stores/task";
const store = useTaskStore()
const { handleAddedTask, handleUpdatedTask, handleCompletedTask, handleRemoveTask } = store

    defineProps({
        tasks: Array,
        show: {
            type: Boolean,
            default: true
        }
    })
</script>