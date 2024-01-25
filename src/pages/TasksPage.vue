<template>
    <main style="min-height: 50vh; margin-top: 2rem;">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <!-- Add new Task -->
                    <NewTasks @added="handleAddedTask"/>

                    <!-- List of uncompleted tasks -->
                    <Tasks :tasks="uncompletedTasks" 
                    @updated="handleUpdatedTask"
                    @completed="handleCompletedTask"
                    @removed="handleRemoveTask"/>

                    <!-- Show Toggle Button -->
                    <div class="text-center my-3" v-show="showToggleCompletedBtn">
                        <button class="btn btn-sm btn-secondary" @click="showCompletedTasks = !showCompletedTasks">
                            <span v-if="!showCompletedTasks">Show Completed</span>
                            <span v-else>Hide Completed</span>
                        </button>
                    </div> 

                    <!-- List of completed tasks -->
                    <Tasks :tasks="completedTasks" 
                    :show="completedTasksIsVisible && showCompletedTasks"
                    @completed="handleCompletedTask"
                    @removed="handleRemoveTask"/>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useTaskStore} from "../stores/task";
import { allTasks, createTask, updateTask, completeTask, removeTask } from "../http/tasks-api";
import Tasks from "../components/tasks/Tasks.vue";
import NewTasks from "../components/tasks/NewTask.vue";

const store = useTaskStore()
const { completedTasks, uncompletedTasks } = storeToRefs(store)
// const {task} = storeToRefs(store)
// store.task.name = "First task update";
// store.task.is_completed = true

// store.$patch({
//     task: {
//         name: "First task update using patch",
//         is_completed: false
//     }
// })



const tasks = ref([])

onMounted(async() =>{
    const { data } = await allTasks()
    tasks.value = data.data
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

const handleUpdatedTask = async (task) => {
    const { data: updatedTask } = await updateTask(task.id, {
        name: task.name
    })
    const currentTask = tasks.value.find(item => item.id === task.id)
    currentTask.name = updatedTask.data.name
}

const handleCompletedTask = async (task) => {
    const { data: updatedTask } = await completeTask(task.id, {
        is_completed: task.is_completed
    })
    const currentTask = tasks.value.find(item => item.id === task.id)
    currentTask.is_completed = updatedTask.data.is_completed
}

const handleRemoveTask = async (task)=>{
    await removeTask(task.id)
    const index = tasks.value.findIndex(item => item.id === task.id)
    tasks.value.splice(index, 1)
}
</script>