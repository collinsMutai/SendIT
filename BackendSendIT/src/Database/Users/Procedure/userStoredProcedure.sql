CREATE PROCEDURE insertCustomer ( @id VARCHAR(80), @name VARCHAR(200), @email VARCHAR(200), @password VARCHAR(200))
AS
BEGIN
    INSERT INTO CustomersTable(id,name,email,password) VALUES(@id, @name, @email, @password)
END

CREATE PROCEDURE getUsers
AS
BEGIN
    SELECT * FROM CustomersTable
END


CREATE PROCEDURE getUser(@email VARCHAR(200))
AS
BEGIN
    SELECT * FROM CustomersTable WHERE email =@email
END


CREATE PROCEDURE getSent(@email VARCHAR(200))
AS
BEGIN
    SELECT * FROM ParcelsTable WHERE senderEmail =@email AND is_deleted=0
END


CREATE PROCEDURE getReceived(@email VARCHAR(200))
AS
BEGIN
    SELECT * FROM ParcelsTable WHERE receiverEmail =@email AND is_deleted=0
END

CREATE PROCEDURE welcomeEmail()
AS
BEGIN
    SELECT * FROM CustomersTable WHERE welcome=0
END

CREATE PROCEDURE resetWelcomeEmail(@id VARCHAR(200))
AS
BEGIN
    UPDATE CustomersTable SET welcome=1 WHERE id = @id
END

CREATE PROCEDURE transitEmail
AS
BEGIN
    SELECT * FROM ParcelsTable WHERE onTransit=0
END

CREATE PROCEDURE resettransitEmail(@id VARCHAR(80))
AS
BEGIN
    UPDATE ParcelsTable SET onTransit=1 WHERE id = @id
END

CREATE PROCEDURE deliveredEmail
AS
BEGIN
    SELECT * FROM ParcelsTable WHERE delivered=0
END

CREATE PROCEDURE resetdeliveredEmail(@id VARCHAR(80))
AS
BEGIN
    UPDATE ParcelsTable SET delivered=1 WHERE id = @id
END

CREATE PROCEDURE onTransit
AS
BEGIN
    SELECT * FROM ParcelsTable WHERE onTransit=1
END

CREATE PROCEDURE delivered
AS
BEGIN
    SELECT * FROM ParcelsTable WHERE delivered=1
END
