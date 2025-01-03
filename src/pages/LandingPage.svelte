<script lang="ts">
  import { t } from 'svelte-i18n';
  import NavBar from '../components/NavBar.svelte';
</script>

<NavBar />

<h1>{$t('welcome')}</h1>