<template>
    <div class="ads">
        <h1>Advertisements</h1>
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