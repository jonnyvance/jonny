<template>
    <div class="studioC">
        <div class="vidWidth">
            <div id="videos" v-for="video in videos">
                <div class='embed-container'>
                    <iframe :src="video.href" frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                </div>
                <h2>{{video.title}}</h2>
                <h3>{{video.role}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'studioC',
        data() {
            return {
                videos: [
                    {
                        title: 'Bop It Extreme',
                        href: 'https://www.youtube.com/embed/ayBmsWKqdnc',
                        role: 'Writer'
                    },                  
                    {
                        title: "The Hunger Games Musical: Peeta's Song",
                        href: 'https://www.youtube.com/embed/JXO44xIvyuY',
                        role: 'Co-Composer with David Vance'
                    },
                    {
                        title: "The Hunger Games Musical: Gale's Song",
                        href: 'https://www.youtube.com/embed/1cayQGVTwjs',
                        role: 'Co-Composer with David Vance'
                    },
                    {
                        title: "The Hunger Games Musical: Katniss' Song",
                        href: 'https://www.youtube.com/embed/am1tzttZ8Pc',
                        role: 'Co-Composer with David Vance'
                    },
                    {
                        title: 'No Such Thing as a Stupid Question',
                        href: 'https://www.youtube.com/embed/RLt1HoAPniM',
                        role: 'Writer'
                    },
                    {
                        title: 'Adopting a New Cat',
                        href: 'https://www.youtube.com/embed/1gobC1u-5Og',
                        role: 'Writer'
                    },
                    {
                        title: 'Marvel Avengers Musical',
                        href: 'https://www.youtube.com/embed/6OmQ7BnvWDU',
                        role: 'Co-Composer with David Vance'
                    }
                ]
            }
        },
        methods: {

        }
    }

</script>

<style scoped>

</style>