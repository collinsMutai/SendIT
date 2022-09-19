CREATE TABLE CustomersTable( id VARCHAR(80), name VARCHAR(200), email VARCHAR(200) UNIQUE , 
password VARCHAR(200), role VARCHAR(200) DEFAULT 'customer', welcome VARCHAR(80) DEFAULT 0, 
)
