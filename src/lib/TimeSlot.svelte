<script>
    export let entries;

    // Constants for the width increment
    const WIDTH_INCREMENT = 40;

    // Calculate widths for each availability type
    function calculateWidths(entries) {
        let availableWidth = 0;
        let possibleWidth = 0;
        entries.forEach(entry => {
            if (entry.type === 'available') {
                availableWidth += WIDTH_INCREMENT;
            } else if (entry.type === 'possible') {
                possibleWidth += WIDTH_INCREMENT;
            }
        });
        return { availableWidth, possibleWidth };
    }

    $: widths = calculateWidths(entries);
</script>

<div class="time-slot">
    <div class="bar-container">
        <div class="bar available" style="width: {widths.availableWidth}px"></div>
        <div class="bar possible" style="width: {widths.possibleWidth}px"></div>
    </div>
</div>

<style>
    .time-slot {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    .bar-container {
        display: flex;
        align-items: center;
        height: 50px;
        padding-top: 10px;
        margin-left: 10px;
    }
    .bar {
        height: 100%;
        display: inline-block;
        border-radius: 10%;
    }
    .available {
        background-color: rgb(149, 225, 149);
    }
    .possible {
        background-color: rgb(251, 164, 105);
    }
</style>
