<script>
  export let name;
  export let isActive;
  export let onClick;
  export let cssId;
</script>

<button id={cssId} on:click={onClick} class="{isActive ? 'active' : 'inactive'} button">
  {name}
</button>


<style>
  .button {
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
    transition: all 0.15s ease-in-out;
    cursor: pointer;
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

  #green.active {
    background-color: rgb(78, 158, 78);
    transform: translateY(4px);
  }

  #orange.active {
    background-color: rgb(201, 131, 76);
    transform: translateY(4px);
  }
  
  .inactive {
    background-color: lightgray;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
</style>
