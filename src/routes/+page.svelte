<script>
  import InputCal from '../lib/inputcal.svelte';
  import ViewCal from '../lib/Calendar.svelte';
</script>

<InputCal/>
<div class="page-container">
  <ViewCal />
</div>

<style>
  .page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
  }
</style>


