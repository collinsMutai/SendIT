CREATE TABLE ParcelsTable( id VARCHAR(80),senderName VARCHAR(200),receiverName VARCHAR(200),
    senderEmail VARCHAR(200),receiverEmail VARCHAR(200),origin VARCHAR(200),destination VARCHAR(200),
    dispatchedDate VARCHAR(200),deliveryDate VARCHAR(200),weight VARCHAR(200),price VARCHAR(80),
onTransit VARCHAR(80) DEFAULT 0, delivered VARCHAR(80) DEFAULT 0
)