<script>
  import { Router, Route, Link } from 'svelte-routing';

  import LandingPage from './pages/LandingPage.svelte';
  import WebApplication from './pages/WebApplication.svelte';
</script>

<h1>Test</h1>

<Router>
  <Route path="/"><LandingPage /></Route>
  <Route path="/app/*"><WebApplication /></Route>
</Router>
