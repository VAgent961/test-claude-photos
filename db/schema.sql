-- Reservations table for TEST Claude Photos
create table if not exists reservations (
  id bigserial primary key,
  created_at timestamptz not null default now(),
  name text not null,
  date date not null,
  time time not null,
  party_size int not null,
  special_requests text,
  status text not null default 'new'
);

create index if not exists reservations_created_at_idx on reservations (created_at desc);
