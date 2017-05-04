<template>
    <div class="ads">
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
        name: 'ads',
        data() {
            return {
                videos: [
                    {
                        title: 'Camp Chef',
                        href: 'https://www.youtube.com/embed/fulJLYgsfSw',
                        role: 'Head-Writer'
                    },
                    {
                        title: 'Chatbooks',
                        href: 'https://www.youtube.com/embed/PTTs7ewuDY8',
                        role: 'Co-Writer with David Vance'
                    },                  
                    {
                        title: 'Unicorn Gold',
                        href: 'https://www.youtube.com/embed/LqL4DRZ2EkA',
                        role: 'Co-Writer with David Vance'
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