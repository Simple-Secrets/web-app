<script lang="ts">
  import { onMount } from 'svelte';

  interface Password {
    id: number;
    title: string;
    username: string;
    password: string;
  }

  let passwords: Password[] = [];
  let newPassword: Password = { id: 0, title: '', username: '', password: '' };
  let isEditing = false;

  const loadPasswords = (): void => {
    const storedPasswords = localStorage.getItem('passwords');
    passwords = storedPasswords ? JSON.parse(storedPasswords) : [];
  };

  const savePasswords = (): void => {
    localStorage.setItem('passwords', JSON.stringify(passwords));
  };

  const addPassword = (): void => {
    if (newPassword.title && newPassword.username && newPassword.password) {
      passwords.push({ ...newPassword, id: Date.now() });
      newPassword = { id: 0, title: '', username: '', password: '' };
      savePasswords();
    }
  };

  const updatePassword = (): void => {
    passwords = passwords.map((item) =>
      item.id === newPassword.id ? { ...newPassword } : item
    );
    newPassword = { id: 0, title: '', username: '', password: '' };
    isEditing = false;
    savePasswords();
  };

  const editPassword = (id: number): void => {
    const password = passwords.find((item) => item.id === id);
    if (password) {
      newPassword = { ...password };
      isEditing = true;
    }
  };

  const deletePassword = (id: number): void => {
    passwords = passwords.filter((item) => item.id !== id);
    savePasswords();
  };

  const handleDragEnd = (event: DragEvent): void => {
    if (!event.dataTransfer) return;

    const draggedId = event.dataTransfer.getData('id');
    const droppedId = (event.target as HTMLElement).dataset.id;

    if (draggedId && droppedId && draggedId !== droppedId) {
      const draggedIndex = passwords.findIndex((item) => item.id == +draggedId);
      const droppedIndex = passwords.findIndex((item) => item.id == +droppedId);

      if (draggedIndex >= 0 && droppedIndex >= 0) {
        const [movedItem] = passwords.splice(draggedIndex, 1);
        passwords.splice(droppedIndex, 0, movedItem);

        savePasswords();
      }
    }
  };

  onMount(() => {
    loadPasswords();
  });
</script>

<div class="container mx-auto p-6">
  <h1 class="text-3xl font-bold text-center mb-6">Password Manager</h1>

  <!-- Form -->
  <div class="card shadow-lg bg-base-200 p-6 mb-6">
    <h2 class="text-xl font-bold mb-4">{isEditing ? 'Edit Password' : 'Add Password'}</h2>
    <div class="form-control mb-4">
      <label for="title" class="label">
        <span class="label-text">Title</span>
      </label>
      <input
        id="title"
        type="text"
        class="input input-bordered"
        bind:value={newPassword.title}
      />
    </div>
    <div class="form-control mb-4">
      <label for="username" class="label">
        <span class="label-text">Username</span>
      </label>
      <input
        id="username"
        type="text"
        class="input input-bordered"
        bind:value={newPassword.username}
      />
    </div>
    <div class="form-control mb-4">
      <label for="password" class="label">
        <span class="label-text">Password</span>
      </label>
      <input
        id="password"
        type="password"
        class="input input-bordered"
        bind:value={newPassword.password}
      />
    </div>
    <div class="form-control">
      <button
        class={`btn ${isEditing ? 'btn-warning' : 'btn-primary'}`}
        on:click={isEditing ? updatePassword : addPassword}>
        {isEditing ? 'Update Password' : 'Add Password'}
      </button>
    </div>
  </div>

  <!-- Password List -->
  <ul class="space-y-4">
    {#each passwords as { id, title, username, password }}
      <li
        class="card shadow-lg bg-base-100 p-4 flex items-center justify-between"
        draggable="true"
        on:dragstart={(event) => event.dataTransfer?.setData('id', id.toString())}
        on:dragover={(event) => event.preventDefault()}
        on:drop={handleDragEnd}
        data-id={id}>
        <div>
          <h3 class="text-lg font-bold">{title}</h3>
          <p>Username: {username}</p>
          <p>Password: {password}</p>
        </div>
        <div class="flex space-x-2">
          <button class="btn btn-sm btn-warning" on:click={() => editPassword(id)}>Edit</button>
          <button class="btn btn-sm btn-error" on:click={() => deletePassword(id)}>Delete</button>
        </div>
      </li>
    {/each}
  </ul>
</div>