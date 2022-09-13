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
