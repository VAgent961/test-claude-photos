import { sql, hasDb } from '@/lib/db';
import { LogoutButton } from '@/lib/admin-ui';

export const dynamic = 'force-dynamic';
export const metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
};

function formatDate(date: string | Date) {
  return new Date(date).toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

async function getReservations() {
  if (!hasDb) return [];
  try {
    const rows = await sql`select id, created_at, name, date, time, party_size, special_requests, status from reservations order by created_at desc limit 100`;
    return rows;
  } catch {
    return [];
  }
}

export default async function AdminPage() {
  const reservations = await getReservations();

  return (
    <div className="min-h-[100dvh] bg-background text-on-background p-space-lg md:p-space-xl">
      <header className="mb-space-xl flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
        <div>
          <h1 className="text-headline-lg font-headline-lg text-on-surface">TEST Claude Photos</h1>
          <p className="text-body-md font-body-md text-secondary">Admin Dashboard</p>
        </div>
        <LogoutButton />
      </header>

      {!hasDb ? (
        <div className="bg-surface-container-low border border-outline-variant p-space-lg rounded-none">
          <p className="text-body-md font-body-md text-on-surface">
            The database is not connected yet. Set <code className="bg-surface-container-highest px-2 py-1 rounded-none">DATABASE_URL</code> in your environment variables to enable the admin dashboard.
          </p>
        </div>
      ) : (
        <section className="bg-surface-container-lowest border border-outline-variant overflow-hidden">
          <div className="p-space-lg border-b border-outline-variant">
            <h2 className="text-headline-md font-headline-md text-on-surface">Reservations (latest 100)</h2>
          </div>

          {reservations.length === 0 ? (
            <div className="p-space-xl text-center text-secondary">
              <p className="text-body-md font-body-md">No reservations yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left" role="table">
                <thead className="bg-surface-container-low border-b border-outline-variant">
                  <tr>
                    <th className="p-space-md font-label-md text-label-md uppercase tracking-wider text-secondary">Submitted At</th>
                    <th className="p-space-md font-label-md text-label-md uppercase tracking-wider text-secondary">Name</th>
                    <th className="p-space-md font-label-md text-label-md uppercase tracking-wider text-secondary">Date</th>
                    <th className="p-space-md font-label-md text-label-md uppercase tracking-wider text-secondary">Time</th>
                    <th className="p-space-md font-label-md text-label-md uppercase tracking-wider text-secondary">Party</th>
                    <th className="p-space-md font-label-md text-label-md uppercase tracking-wider text-secondary">Special Requests</th>
                    <th className="p-space-md font-label-md text-label-md uppercase tracking-wider text-secondary">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((r) => (
                    <tr key={r.id} className="border-b border-outline-variant/50 hover:bg-surface-container-low transition-colors">
                      <td className="p-space-md font-body-sm text-body-sm text-on-surface">{formatDate(r.created_at)}</td>
                      <td className="p-space-md font-body-md text-body-md text-on-surface">{r.name}</td>
                      <td className="p-space-md font-body-md text-body-md text-on-surface">{r.date}</td>
                      <td className="p-space-md font-body-md text-body-md text-on-surface">{r.time}</td>
                      <td className="p-space-md font-body-md text-body-md text-on-surface">{r.party_size}</td>
                      <td className="p-space-md font-body-sm text-body-sm text-secondary max-w-xs truncate">{r.special_requests || '—'}</td>
                      <td className="p-space-md">
                        <span className={`inline-block px-3 py-1 text-label-sm font-label-sm rounded-none ${
                          r.status === 'new' ? 'bg-primary-container text-on-primary-container' :
                          r.status === 'done' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {r.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
