CREATE TABLE Entity (
    entity_id SERIAL PRIMARY KEY,
    entity_name VARCHAR(100) NOT NULL
);

CREATE TABLE Strategy (
    strategy_id SERIAL PRIMARY KEY,
    strategy_name VARCHAR(100) NOT NULL
);

CREATE TABLE Custodian (
    custodian_id SERIAL PRIMARY KEY,
    custodian_name VARCHAR(100) NOT NULL
);

CREATE TABLE Instrument (
    instrument_id SERIAL PRIMARY KEY,
    instrument_name VARCHAR(255) NOT NULL,
    type VARCHAR(50) CHECK (type IN ('Bank Debt', 'Common Stock', 'Corporate Bond', 'Preferred Equity')) NOT NULL,
    multiplier DECIMAL(10, 2) CHECK (multiplier > 0) NOT NULL
);

CREATE TABLE Trade (
    trade_id SERIAL PRIMARY KEY,
    trade_type VARCHAR(3) CHECK (trade_type IN ('BUY', 'SELL')) NOT NULL,
    quantity INTEGER NOT NULL CHECK (quantity >= 0),
    trade_date DATE NOT NULL,
    entity_id INTEGER REFERENCES Entity(entity_id),
    strategy_id INTEGER REFERENCES Strategy(strategy_id),
    custodian_id INTEGER REFERENCES Custodian(custodian_id),
    instrument_id INTEGER REFERENCES Instrument(instrument_id)
);

CREATE TABLE Market_Price (
    instrument_id INTEGER PRIMARY KEY REFERENCES Instrument(instrument_id),
    date DATE NOT NULL,
    value DECIMAL(10, 2) NOT NULL CHECK (value >= 0)
);

