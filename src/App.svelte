<script>
  import { Router, Route } from 'svelte-routing';
  import LandingPage from './routes/LandingPage.svelte';
  import WebApplication from './routes/WebApplication.svelte';
</script>

<Router>
  <Route path="/" component={LandingPage} />
  <Route path="/app/*" component={WebApplication} />
</Router>