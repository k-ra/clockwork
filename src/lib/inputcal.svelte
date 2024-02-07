<script lang="ts"> 
    import Calendar from '@event-calendar/core';
    import TimeGrid from '@event-calendar/time-grid';
    let ec;
    let plugins = [TimeGrid];
    let options = {
        hiddenDays: [1, 2, 4, 6],
        view: 'timeGridWeek',
        allDaySlot: false,
        headerToolbar: {start: '', center: 'title', end: ''},
        date: '2024-02-07',
        slotMaxTime: '21:00:00',
        slotMinTime: '8:00:00',
        selectable: true
    };
</script>

<h3>color in your availability</h3>
<Calendar bind:this={ec} {options} {plugins}/>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;300&display=swap');
    h3 {
        text-align: center;
        font-family: 'Noto Sans', sans-serif;
      }
      
    :global(.ec){
        max-width: 30vw;
        margin: 40px auto;
        font-family: 'Noto Sans', sans-serif;
      }
</style>
