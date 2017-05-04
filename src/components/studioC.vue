<template>
    <div class="studioC">
        <h1>Studio C</h1>
        <div id="videos" v-for="video in videos">
            <h3>{{video.title}}</h3>
            <h4>{{video.role}}</h4>
            <div class='embed-container'>
                <iframe :src="video.href" frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
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
    h1 {
        margin: 1.2rem;
    }
    
    h3 {
        margin-top: 0;
    }

    h4 {
        margin: 0;
    }
</style>