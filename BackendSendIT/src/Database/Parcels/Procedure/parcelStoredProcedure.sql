CREATE OR ALTER PROCEDURE ProjectCreateOrUpdate ( @id VARCHAR(80),@senderName VARCHAR(200),@receiverName VARCHAR(200),
    @senderEmail VARCHAR(200),@receiverEmail VARCHAR(200),@origin VARCHAR(200),@destination VARCHAR(200),
    @dispatchedDate VARCHAR(200),@deliveryDate VARCHAR(200),@weight INT,@price INT,
     @senderLat INT , @senderLng INT , @receiverLat INT , @receiverLng INT )
AS
BEGIN
     DECLARE @exists BIT;
select @exists = count(id) FROM ParcelsTable where id = @id
    if @exists = 0
    BEGIN
        INSERT INTO ParcelsTable
(id,senderName,receiverName,
    senderEmail,receiverEmail,origin,destination,
    dispatchedDate,deliveryDate,weight,price,senderLat, senderLng, receiverlat, receiverlng)
VALUES
(@id,@senderName,@receiverName,
    @senderEmail,@receiverEmail,@origin,@destination,
    @dispatchedDate,@deliveryDate,@weight,@price,@senderLat,@senderLng, @receiverLat, @receiverLng)
END
    ELSE
        BEGIN
             UPDATE ParcelsTable SET id=@id,senderName=@senderName,receiverName=@receiverName,
    senderEmail=@senderEmail,receiverEmail=@receiverEmail,origin=@origin,destination=@destination,
    dispatchedDate=@dispatchedDate,deliveryDate=@deliveryDate,weight=@weight,price=@price, senderLat=@senderLat, senderLng=@senderLng, receiverlat=@receiverLat, receiverlng=@receiverLngWHERE id=@id
        END
END

CREATE PROCEDURE getParcels
AS
BEGIN
SELECT * FROM ParcelsTable WHERE is_deleted=0 AND delivered=0
END

CREATE PROCEDURE getParcel(@id VARCHAR(80))
AS
BEGIN
SELECT * FROM ParcelsTable WHERE id =@id
BEGIN
SET is_delivered=1 
END
END

CREATE PROCEDURE softDeleteParcel(@id VARCHAR(80))
AS
BEGIN
    IF EXISTS(SELECT * FROM ParcelsTable WHERE id=@id)
    BEGIN
        UPDATE ParcelsTable SET is_deleted=1 WHERE id =@id
    END
    ELSE
    BEGIN
        RAISERROR ('No parcel with that ID',11,1);
        RETURN
    END
END

CREATE PROCEDURE parcelDelivered (@id VARCHAR(80))
AS
BEGIN
UPDATE ParcelsTable SET delivered=1 WHERE id=@id
END

-- CREATE PROCEDURE insertParcel (@id VARCHAR(80),@senderName VARCHAR(200),@receiverName VARCHAR(200),
--     @senderEmail VARCHAR(200),@receiverEmail VARCHAR(200),@origin VARCHAR(200),@destination VARCHAR(200),
--     @dispatchedDate VARCHAR(200),@deliveryDate VARCHAR(200),@weight INT,@price INT)
-- AS
-- BEGIN
-- INSERT INTO ParcelsTable(
--     id,senderName,receiverName,senderEmail,receiverEmail,
--     origin,destination,dispatchedDate,deliveryDate,weight,price) 
--     VALUES(@id,@senderName,@receiverName,
--     @senderEmail,@receiverEmail,@origin,@destination,@dispatchedDate,@deliveryDate,@weight,@price)
-- END

-- CREATE PROCEDURE updateParcel(@id VARCHAR(80),@senderName VARCHAR(200),@receiverName VARCHAR(200),
--     @senderEmail VARCHAR(200),@receiverEmail VARCHAR(200),@origin VARCHAR(200),@destination VARCHAR(200),
--     @dispatchedDate VARCHAR(200),@deliveryDate VARCHAR(200),@weight INT,@price INT)
-- AS
-- BEGIN 
-- UPDATE ParcelsTable SET id=@id,senderName=@senderName,receiverName=@receiverName,
--     senderEmail=@senderEmail,receiverEmail=@receiverEmail,origin=@origin,destination=@destination,
--     dispatchedDate=@dispatchedDate,deliveryDate=@deliveryDate,weight=@weight,price=@price 
--      WHERE id =@id
-- END






