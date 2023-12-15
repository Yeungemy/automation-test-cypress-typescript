INSERT INTO Entity (entity_name) VALUES ('Entity1');

INSERT INTO Strategy (strategy_name) VALUES ('Strategy1');

INSERT INTO Custodian (custodian_name) VALUES ('Custodian1');

INSERT INTO Instrument (instrument_name, type, multiplier) VALUES ('Instrument1', 'Common Stock', 1.0);

INSERT INTO Trade (instrument_id, trade_type, quantity, trade_date, entity_id, strategy_id, custodian_id)
VALUES (
    (SELECT instrument_id FROM Instrument WHERE instrument_name = 'Instrument1'),
    'BUY',
    1000,
    '2019-01-01',
    (SELECT entity_id FROM Entity WHERE entity_name = 'Entity1'),
    (SELECT strategy_id FROM Strategy WHERE strategy_name = 'Strategy1'),
    (SELECT custodian_id FROM Custodian WHERE custodian_name = 'Custodian1')
);

INSERT INTO Market_Price (instrument_id, date, value)
VALUES (
    (SELECT instrument_id FROM Instrument WHERE instrument_name = 'Instrument1'),
    '2019-01-01',
    90.0
);
