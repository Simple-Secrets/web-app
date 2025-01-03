<script>
  import { Router, Route, Link } from 'svelte-routing';

  import LandingPage from './pages/LandingPage.svelte';
  import WebApplication from './pages/WebApplication.svelte';
</script>

<Router>
  <Route path="/"><LandingPage /></Route>
  <Route path="/app/*"><WebApplication /></Route>
</Router>
