<script>
  import { Router, Route, Link } from 'svelte-routing';
  import LandingPage from './routes/LandingPage.svelte';
  import WebApp from './routes/WebApp.svelte';
</script>

<Router>
  <Route path="/" component={LandingPage} />
  <Route path="/app/*" component={WebApp} />
</Router>