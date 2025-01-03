<script>
  import { t } from 'svelte-i18n';
  import { onMount } from 'svelte';
  import { setupDropdownListeners } from '../utils/dropdown/event-manager';
  import logo from '../../public/squere-logo/192x192.webp';
  
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  onMount(() => {
    const removeListeners = setupDropdownListeners('.dropdown-content a');

    return () => removeListeners()
  })
</script>

<nav class="navbar bg-base-100">
  <!-- Desktop view START -->
  <a href="/" class="navbar-start hidden md:flex">
    <img class="w-8 rounded mr-2" src="{logo}" alt="logo" />
    <span class="text-xl">Simple Secrets</span>
  </a>

  <div class="navbar-center hidden md:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/app">{$t('navbar.menu.items.app')}</a></li>
      <li><a href="#pricing">{$t('navbar.menu.items.pricing')}</a></li>
      <li><a href="#about-us">{$t('navbar.menu.items.about-us')}</a></li>
    </ul>
  </div>

  <div class="navbar-end hidden md:flex">
    <button class="btn btn-ghost mr-2">{$t('navbar.auth.login')}</button>
    <button class="btn btn-primary">{$t('navbar.auth.signup')}</button>
  </div>
  <!-- Desktop view END -->

  <!-- Mobile view START -->
  <div class="navbar-start md:hidden">
    <div class="dropdown">
      <button 
        tabindex="0" 
        class="btn btn-ghost" 
        aria-label="Menu" 
        on:click={toggleDropdown}
        aria-expanded={isDropdownOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </button>

      <ul
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        class:hidden={!isDropdownOpen}
      >
        <li><a href="/app">{$t('navbar.menu.items.app')}</a></li>
        <li><a href="#pricing">{$t('navbar.menu.items.pricing')}</a></li>
        <li><a href="#about-us">{$t('navbar.menu.items.about-us')}</a></li>
      </ul>
    </div>
  </div>

  <a href="/" class="navbar-center btn btn-ghost text-xl md:hidden">
    <img class="w-8 rounded" src="/public/squere-logo/192x192.webp" alt="logo" />
    <span class="hidden sm:inline">Simple Secrets</span>
    <span class="inline sm:hidden">Secrets</span>
  </a>

  <div class="navbar-end md:hidden">
    <button class="btn btn-ghost">{$t('navbar.auth.login')}</button>
  </div>
  <!-- Mobile view END -->
</nav>