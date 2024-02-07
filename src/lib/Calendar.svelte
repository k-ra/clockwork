<script>
  import TimeSlot from '../lib/TimeSlot.svelte';
  import { formatHour, parseHour, isInTimeRange } from '../utils/timeHelpers';
  import entriesData from '../assets/entriesData';

  let hours = Array.from({ length: 13 }, (_, i) => formatHour(9 + i));

  // Function to generate entries for each hour
  function generateHourlyEntries(hours, entriesData) {
    let hourlyEntries = {};
    hours.forEach(hour => {
    hourlyEntries[hour] = entriesData.filter(entry => isInTimeRange(hour, entry.start, entry.end))
                                     .map(entry => ({ type: entry.type }));
    });
    return hourlyEntries;
  }

  let hourlyEntries = generateHourlyEntries(hours, entriesData);
</script>
  

<div class="day-view-calendar">
  <div class="time-grid">
    {#each hours as hour, index (hour)}
      <div class="time-slot">
        <div class="slot-content">
          <div class="time-label">{hour}</div>
            <TimeSlot timeSlot={hour} entries={hourlyEntries[hour] || []} />
          </div>
        {#if index < hours.length - 1}
          <div class="grid-line"></div>
        {/if}
      </div>
    {/each}
  </div>
</div>
  
  
<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;300&display=swap');
  
  .day-view-calendar {
    display: flex;
    flex-direction: column;
    width: 80%;
    max-height: 80vh;
    overflow-y: auto;
    border: 1px solid #ccc;
    padding-left: 20px;
    padding-right: 20px;
  }
  .time-grid {
    position: relative;
  }
  .time-slot {
    display: flex;
    align-items: center;
    height: 65px;
    border-top: 1px solid #eee; /* Replace grid-line with a border */
  }
  .slot-content {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .time-label {
    width: 80px;
    padding-right: 10px;
    text-align: right;
    font-family: 'Noto Sans', sans-serif;
  }
</style>
  