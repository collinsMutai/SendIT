CREATE PROCEDURE insertParcel (@id VARCHAR(80),@senderName VARCHAR(200),@receiverName VARCHAR(200),
    @senderEmail VARCHAR(200),@receiverEmail VARCHAR(200),@origin VARCHAR(200),@destination VARCHAR(200),
    @dispatchedDate VARCHAR(200),@deliveryDate VARCHAR(200),@weight VARCHAR(200),@price VARCHAR(80))
AS
BEGIN

INSERT INTO ParcelsTable(
    id,senderName,receiverName,senderEmail,receiverEmail,
    origin,destination,dispatchedDate,deliveryDate,weight,price) 
    VALUES(@id,@senderName,@receiverName,
    @senderEmail,@receiverEmail,@origin,@destination,@dispatchedDate,@deliveryDate,@weight,@price)

END


CREATE PROCEDURE getParcels
AS
BEGIN
SELECT * FROM ParcelsTable
END



CREATE PROCEDURE getParcel(@id VARCHAR(80))
AS
BEGIN
SELECT * FROM ParcelsTable WHERE id =@id
END




CREATE PROCEDURE deleteParcel(@id VARCHAR(80))
AS
BEGIN
DELETE FROM ParcelsTable WHERE id =@id
END


CREATE PROCEDURE updateParcel(@id VARCHAR(80),@senderName VARCHAR(200),@receiverName VARCHAR(200),
    @senderEmail VARCHAR(200),@receiverEmail VARCHAR(200),@origin VARCHAR(200),@destination VARCHAR(200),
    @dispatchedDate VARCHAR(200),@deliveryDate VARCHAR(200),@weight INT,@price INT)
AS
BEGIN 
UPDATE ParcelsTable SET id=@id,senderName=@senderName,receiverName=@receiverName,
    senderEmail=@senderEmail,receiverEmail=@receiverEmail,origin=@origin,destination=@destination,
    dispatchedDate=@dispatchedDate,deliveryDate=@deliveryDate,weight=@weight,price=@price 
     WHERE id =@id

END