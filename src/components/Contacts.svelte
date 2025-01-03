<script>
  let contacts = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Smith", email: "jane@example.com" },
    { name: "Alice Johnson", email: "alice@example.com" }
  ];
</script>

<section id="contacts" class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">Contacts</h1>
  <ul class="list-none">
    {#each contacts as contact}
      <li class="mb-2 p-4 bg-base-200 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold">{contact.name}</h2>
        <p class="text-gray-600">{contact.email}</p>
      </li>
    {/each}
  </ul>
</section>