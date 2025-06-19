export async function manageCredits(email: string, used: number) {
  try {
    const res = await fetch('/api/update-credits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, used }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Failed to update credits');

    return true;
  } catch (err) {
    console.error('Credit update error:', err);
    return false;
  }
}

