<script>
    export let timeSlot;
    export let entries;

    // Constants for the width increment
    const WIDTH_INCREMENT = 40; // Adjust this value based on your UI requirements

    // Calculate widths for each availability type
    function calculateWidths(entries) {
        let availableWidth = 0;
        let possibleWidth = 0;
        entries.forEach(entry => {
            if (entry.type === 'available') {
                availableWidth += WIDTH_INCREMENT;
            } else if (entry.type === 'possible') {
                // Assuming you want the possible to fill the rest, it may not need to increment based on entries
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
        height: 60px;
        background-color: #f0f0f0;
        margin-left: 10px;
    }
    .bar {
        height: 100%;
        display: inline-block;
        border-radius: 10%;
    }
    .available {
        background-color: green;
    }
    .possible {
        background-color: orange;
    }
</style>
