<template>
    <div class="contact">
        <h1>Contact</h1>
        <form action="http://formspree.io/cassivance@gmail.com">
            email: <input type="text">
            name: <input type="text">
            message: <input type="text">
            <button>submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'contact',
        data() {
            return {
            }
        },
        methods: {

        }
    }

</script>

<style scoped>

form {
    display: flex;
    flex-direction: column;
    margin: 4rem 6rem;
}
</style>