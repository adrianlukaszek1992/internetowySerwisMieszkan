use ProjektIndywidualny;

CREATE TABLE User (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	surname VARCHAR(50) NOT NULL,
	login VARCHAR(50) NOT NULL,
	password VARCHAR(50) NOT NULL,
    birth_date date NOT NULL,
	email VARCHAR(50) NOT NULL,
	created_date date NOT NULL,
	balance double NOT NULL
);

use ProjektIndywidualny;

CREATE TABLE  Administrator (
    administrator_id INT AUTO_INCREMENT PRIMARY KEY,
	user_id INT NOT NULL Unique,
	City varchar(50) NOT NULL,
	Street varchar(50),
	street_number varchar(5) NOT NULL,
	local_number varchar(5),
	Postcode char(6) NOT NULL,
	Pesel char(11) NOT NULL,
	phone_number varchar(12) NOT NULL,

	FOREIGN KEY (user_id) REFERENCES User(user_id)
);


use ProjektIndywidualny;

CREATE TABLE Flats (
    flat_id INT AUTO_INCREMENT PRIMARY KEY,
	user_id INT,
	name varchar(50) NOT NULL,
	country varchar(50) NOT NULL,
	city varchar(50) NOT NULL,
	street varchar(50),
	street_number varchar(5) NOT NULL,
	local_number varchar(5),
	latidue double NOT NULL,
    longtitude double NOT NULL,
	price_per_day INT NOT NULL,
	FOREIGN KEY (user_id) REFERENCES User(user_id)
);

use ProjektIndywidualny;

use ProjektIndywidualny;

CREATE TABLE Bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
	flat_id INT NOT NULL,
	user_id INT NOT NULL,
	start_date date NOT NULL,
	end_date date NOT NULL,
	total_price int NOT NULL,
	FOREIGN KEY (flat_Id) REFERENCES Flats(flat_Id),
	FOREIGN KEY (user_id) REFERENCES User(user_id)
);



