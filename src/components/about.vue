<template>
    <div class="about">
        <div id="intro">
            <p> I write ads for companies like Squatty Potty and Chatbooks, write sketches for Studio C, and market for VidAngel. My parents wanted me to be a doctor. <br /> <br />I think comedy makes messages interesting, palatable, and ripe for connection. My goal is to create a comedic political show that encourages better discourse between conservatives, liberals, and libertarians. If you can help make that happen, I'd love to hear from you (see contact page). Particularly if you can introduce me to John Oliver, Samantha Bee, Jonathan Haidt, or David Brooks. <br /> <br />The videos I've written for have been viewed over 500 million times. My roommate said that means I've wasted about 40 lifetimes. I'm sorry.</p>
            <img src="https://github.com/jonnyvance/jonny/raw/master/src/assets/jonny.jpg">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'about',
        data() {
            return {
            }
        },
        methods: {

        }
    }

</script>

<style scoped>
    #intro {
        display: flex;
        margin: auto;
    }

    .view {
        margin: 2rem;
    }

    p {
        margin: 4rem 2rem;
        max-width: 60%;
    }

    img {
        align-self: center;
    }

    .view {
        margin: 4rem 4rem;
    }
</style>