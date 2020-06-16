<template>
    <div data-testId='hello-component'>
        <h1>
        {{ msg }}
    </h1>
    </div>
</template>

<script>
export default {
    props:{
        msg:{
            type: String,
            default: 'GOD I LIGHT BUT, THE MAN LOVE THE DARKNESS',
            required: true
        }
    }
}
</script>