<style>
</style>

<page>
    <actionBar title="Demo 2">
        <navigationButton text="Go back" on:tap={goBack} />
    </actionBar>
    <stackLayout>
        <label text="This is the second demo..." />
        <label text="This image is from the shared assets directory." />
        <image src="~/image.png" />
    </stackLayout>
</page>

<script lang="typescript">
    import { goBack } from 'svelte-native';
</script>
