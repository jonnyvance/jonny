<template>
    <div class="contact">
        <form action="https://formspree.io/Jonny@harmonbrothers.com"
            method="POST">
            name: <input type="text" name="name">
            <br />
            email: <input type="email" name="_replyto">
            <br />
            message: <textarea name="message" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="Send" id="button">
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

.view {
    margin-top: 3rem;
}

form {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 60%;
}

#button {
    max-width: 10rem;
}
</style>