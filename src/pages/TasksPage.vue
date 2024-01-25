<template>
    <main style="min-height: 50vh; margin-top: 2rem;">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <!-- Add new Task -->
                    <NewTasks @added="handleAddedTask"/>

                    <!-- List of uncompleted tasks -->
                    <Tasks :tasks="uncompletedTasks"/>

                    <!-- Show Toggle Button -->
                    <div class="text-center my-3" v-show="showToggleCompletedBtn">
                        <button class="btn btn-sm btn-secondary" @click="showCompletedTasks = !showCompletedTasks">
                            <span v-if="!showCompletedTasks">Show Completed</span>
                            <span v-else>Hide Completed</span>
                        </button>
                    </div> 

                    <!-- List of completed tasks -->
                    <Tasks :tasks="completedTasks" :show="completedTasksIsVisible && showCompletedTasks"/>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { allTasks, createTask } from "../http/tasks-api";
import Tasks from "../components/tasks/Tasks.vue";
import NewTasks from "../components/tasks/NewTask.vue";

const tasks = ref([])

onMounted(async() =>{
    const { data } = await allTasks()
    tasks.value = data.data
})

const uncompletedTasks = computed(() => {
    return tasks.value.filter(task => !task.is_completed)
})

const completedTasks = computed(() => {
    return tasks.value.filter(task => task.is_completed)
})

const showToggleCompletedBtn = computed(() => {
    return uncompletedTasks.value.length > 0 && completedTasks.value.length > 0
})

const completedTasksIsVisible = computed(() => {
    return uncompletedTasks.value.length === 0 || completedTasks.value.length > 0
})

const showCompletedTasks = ref(false)

const handleAddedTask = async(newTask) => {
    const {data: createdTask} = await createTask(newTask)
    tasks.value.unshift(createdTask.data)
}
</script>