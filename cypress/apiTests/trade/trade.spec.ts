/**
 * This api test based on tables created from 
 * cypress\sql\Position_detail_report_tables_creation.sql and 
 * cypress\sql\Position_detail_report_tables_insert_values.sql
 * with PostgreSQL
 */

describe('API Tests', () => {
    it('should create a trade and verify market price through API', () => {
      // Create a trade
      cy.request({
        method: 'POST',
        url: 'http://localhost:5432/api/trades',
        body: {
          instrument_name: 'Instrument1',
          trade_type: 'BUY',
          quantity: 1000,
          trade_date: '2019-01-01',
          entity_name: 'Entity1',
          strategy_name: 'Strategy1',
          custodian_name: 'Custodian1',
        },
      }).then((tradeResponse) => {
        // Verify the trade was created successfully
        expect(tradeResponse.status).to.eq(201);
  
        // Verify market price for the created instrument and date
        cy.request({
          method: 'GET',
          url: 'http://localhost:5432/api/market-price',
          qs: { instrument_name: 'Instrument1', date: '2019-01-01' },
        }).then((marketPriceResponse) => {
          // Verify the market price
          expect(marketPriceResponse.status).to.eq(200);
          expect(marketPriceResponse.body.value).to.eq(90.0);
        });
      });
    });
  });
  