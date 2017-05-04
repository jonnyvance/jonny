<template>
    <div class="contact">
        <form action="https://formspree.io/Jonny@harmonbrothers.com"
            method="POST">
            name: <input type="text" name="name">
            email: <input type="email" name="_replyto">
            message: <textarea name="message" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="Send">
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