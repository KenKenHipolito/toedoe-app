<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container py-2">
            <a href="#" class="navbar-brand">
                <span>Toedoe</span>
                <strong>List</strong>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/tasks" class="nav-link">Tasks</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/summary" class="nav-link">Summary</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link to="/login" class="btn btn-outline-secondary ms-2">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/register" class="btn btn-danger ms-2">Register</router-link>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="btn btn-outline-secondary ms-2">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.nav-link.router-link-active{
    color: rgba(255, 5, 5, 0.9);
}
</style>