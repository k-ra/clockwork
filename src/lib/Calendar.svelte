<script>
  import TimeSlot from '../lib/TimeSlot.svelte';
  import { formatHour, parseHour, isInTimeRange } from '../utils/timeHelpers';
  import { entries } from '../stores/index.js';

  let hours = Array.from({ length: 12 }, (_, i) => formatHour(9 + i));

  // Create entriesData from the store
  $: entriesData = $entries;

  // Function to generate entries for each hour
  function generateHourlyEntries(hours, entriesData) {
    let hourlyEntries = {};
    hours.forEach(hour => {
    hourlyEntries[hour] = entriesData.filter(entry => isInTimeRange(hour, entry.start, entry.end))
                                     .map(entry => ({ type: entry.type }));
    });
    return hourlyEntries;
  }

  $: hourlyEntries = generateHourlyEntries(hours, entriesData);
</script>
<div class="display-cal">
  <h3>Group Availability</h3>
<div class="day-view-calendar">
  <div class="time-grid">
    {#each hours as hour, index (hour)}
      <div class="time-slot">
        <div class="slot-content">
          <div class="time-label">{hour}</div>
            <TimeSlot entries={hourlyEntries[hour] || []} />
          </div>
        {#if index < hours.length - 1}
          <div class="grid-line"></div>
        {/if}
      </div>
    {/each}
  </div>
</div>
</div>
  
<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;300&display=swap');

  .day-view-calendar {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 80vh;
    border: 1px solid #ccc;
    padding: 10px;
  }
  .time-grid {
    position: relative;
  }
  .time-slot {
    display: flex;
    align-items: center;
    height: 50px;
    border-top: 1px solid #eee; /* Replace grid-line with a border */
  }
  .slot-content {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .time-label {
    width: 70px;
    padding-right: 10px;
    text-align: right;
    font-family: 'Noto Sans', sans-serif;
  }
  h3 {
    text-align: center;
    font-family: "Noto Sans", sans-serif;
  }

</style>
  