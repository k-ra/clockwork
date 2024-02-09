<script>
  export let entries;

  // Constants for the width increment
  const WIDTH_INCREMENT = 40;

  // Calculate widths for each availability type
  function calculateWidths(entries) {
    let availableWidth = 0;
    let possibleWidth = 0;
    let availableCount = 0;
    let possibleCount = 0;
    entries.forEach((entry) => {
      if (entry.type === "available") {
        availableWidth += WIDTH_INCREMENT;
        availableCount++;
      } else if (entry.type === "possible") {
        possibleWidth += WIDTH_INCREMENT;
        possibleCount++;
      }
    });
    return { availableWidth, possibleWidth, availableCount, possibleCount };
  }

  $: info = calculateWidths(entries);
</script>

<div class="time-slot">
  <div class="bar-container">
    <div class="bar available" style="width: {info.availableWidth}px"></div>
    <div class="bar possible" style="width: {info.possibleWidth}px"></div>
    <span class="tooltip">
      Available: {info.availableCount}, If Need Be: {info.possibleCount}
    </span>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;300&display=swap");

  .time-slot {
    position: relative;
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
  .tooltip {
    visibility: hidden;
    width: 200px;
    background-color: rgb(128, 128, 128, 0.8);
    color: #fff;
    font-family: "Noto Sans", sans-serif;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 80%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
  .bar-container:hover .tooltip {
    visibility: visible;
  }
</style>
