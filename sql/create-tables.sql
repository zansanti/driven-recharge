-- Tabela phones
CREATE TABLE phones (
  id SERIAL PRIMARY KEY,
  phone_number VARCHAR(11) NOT NULL UNIQUE,
  carrier_id INTEGER NOT NULL REFERENCES carriers(id),
  name VARCHAR(255) NOT NULL,
  document VARCHAR(11) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabela recharges
CREATE TABLE recharges (
  id SERIAL PRIMARY KEY,
  phone_id INTEGER NOT NULL REFERENCES phones(id),
  amount DECIMAL(10,2) NOT NULL CHECK (amount >= 10 AND amount <= 1000),
  created_at TIMESTAMP DEFAULT NOW()
);