<script>
  import InputCal from '../lib/inputcal.svelte';
  import ViewCal from '../lib/Calendar.svelte';
</script>

<div class="page-container">
  <InputCal/>
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


