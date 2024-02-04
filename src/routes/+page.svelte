<script lang="ts" >
    import Calendar from '@event-calendar/core';
    import TimeGrid from '@event-calendar/time-grid';

    let plugins = [TimeGrid];
    let options = {
         hiddenDays: [1, 2, 6],
        view: 'timeGridWeek',
        allDaySlot: false,
        headerToolbar: {start: '', center: 'title', end: ''},
        date: '2024-02-07',
    };
</script>


<h3>color in the lines!</h3>
<p>the color part is still loading</p>

<Calendar {plugins} {options} />

<style>
    h3 {
        font-family: 'Courier New', Courier, monospace;
        text-align: center
      }
      
    :global(.ec){
        max-width: 1100px;
        margin: 40px auto;
        font-family: 'Courier New', Courier, monospace;
      }
</style>
