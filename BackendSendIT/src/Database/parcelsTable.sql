CREATE TABLE ParcelsTable( id VARCHAR(80), sender_name VARCHAR(200), receiver_name VARCHAR(200), 
sender_email VARCHAR(200), receiver_email VARCHAR(200), dispatched_date VARCHAR(200),delivery_date VARCHAR(200),
on_transit VARCHAR(80) DEFAULT 0, delivered VARCHAR(80) DEFAULT 0
)