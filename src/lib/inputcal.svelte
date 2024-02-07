<script lang="ts">
    import Calendar from "@event-calendar/core";
    import TimeGrid from "@event-calendar/time-grid";
    import Interaction from "@event-calendar/interaction";
    let ec;
    let plugins = [TimeGrid, Interaction];
    let options = {
        hiddenDays: [1, 2, 4, 6],
        view: "timeGridDay",
        allDaySlot: false,
        headerToolbar: { start: "", center: "title", end: "" },
        date: "2024-02-07",
        slotMaxTime: "21:00:00",
        slotMinTime: "9:00:00",
        selectable: true,
        unselectAuto: false,
        editable: true,
        select: function (info) {
            //ask if green or orange
            let colorInfo = {...info, backgroundColor: getColor()};
            ec.addEvent(colorInfo);
            // ...info + color
        },
        eventBackgroundColor: "rgb(110, 224, 110)",
        selectBackgroundColor: "rgb(151, 204, 151)",
    };

    function submitEvents() {
        let events = ec.getEvents();
        
        console.log(events);
    }


    function getColor() {
        if (ec.getOption("selectBackgroundColor") ==  "rgb(151, 204, 151)" )
            return "rgb(110, 224, 110)"
        else
            return "rgb(251, 164, 105)"
    }
    function setGreen() {
        ec.setOption("selectBackgroundColor", "rgb(151, 204, 151)");
    }

    function setOrange() {
        ec.setOption("selectBackgroundColor", "rgb(207, 160, 129)");
    }
</script>

<div class="inputcal-container">
  <div>
    <h3>color in your availability</h3>

    <div class="palette">
      <button id="green" on:click={setGreen}> green </button>
      <button id="orange" on:click={setOrange}> orange </button>
    </div>
  
    <Calendar bind:this={ec} {options} {plugins} />
  </div>
  <div class="submit-container">
    <button on:click={submitEvents} id="submit">Submit</button>
  </div>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;300&display=swap");
    .inputcal-container { 
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 100vh;
        flex-direction: row;
    }

    .submit-container {
        margin-left: 4rem;
        margin-right: 4rem;
    }

    button {
        display: inline-block;
        outline: none;
        font-size: 14px;
        line-height: 1;
        border-radius: 500px;
        transition-property: background-color, border-color, color, box-shadow,
            filter;
        transition-duration: 0.3s;
        font-weight: 700;
        text-align: center;
        padding: 17px 48px;
        color: #fff;
        height: 48px;
        border: 1px solid transparent;
    }

    button:hover {
        transform: scale(1.04);
    }

    #green {
        background-color: rgb(110, 224, 110);
    }

    #orange {
        background-color: rgb(251, 164, 105);
    }

    #submit {
        background-color: #aaadb3;
    }

    .palette {
        text-align: center;
    }

    h3 {
        text-align: center;
        font-family: "Noto Sans", sans-serif;
    }

    :global(.ec) {
        max-width: 30vw;
        margin: 40px auto;
        font-family: "Noto Sans", sans-serif;
    }
</style>
