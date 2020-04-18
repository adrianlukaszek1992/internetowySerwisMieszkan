use projektindywidualny;
insert into user(name, surname, login, password, birth_date, email, created_date, balance)
values ('name1','surname1','login1', 'password1', '2000-1-04', 'email1', '2008-7-04', 100.2);
insert into user(name, surname, login, password, birth_date, email, created_date, balance)
values ('name2','surname2','login2', 'password2', '2000-1-05', 'email2', '2007-7-04', 200.2);
insert into Administrator(user_id, Pesel, City, Street, street_number, local_number, phone_number, postcode)
values (1,'92113003447','Warszawa', 'Marszałkowska', '2', '3', '777 666 555', '02-333');
insert into Administrator(user_id, Pesel, City, Street, street_number, local_number, phone_number, postcode)
values (2,'92113003448','Warszawa', 'Rakowiecka', '3', '4', '888 444 333','01-321');
insert into Flats(user_id, name, country, city, street, street_number, local_number, latidue, longtitude, price_per_day)
values (1,'Name1', 'Poland', 'Warsaw', 'Marszałkowska', '8', '3', 52.214841, 21.021123, 100);
insert into Flats(user_id, name, country, city, street, street_number, local_number, latidue, longtitude, price_per_day)
values (2,'Name2','Poland', 'Warsaw', 'Rakowiecka', '3', '6', 52.209531, 21.020628, 200);
insert into Bookings(flat_id, user_id, start_date, end_date, total_price)
values (2,1,'2020-10-05', '2020-10-07', 400);
insert into Bookings(flat_id, user_id, start_date, end_date, total_price)
values (1,2,'2020-11-05', '2020-11-07', 200);
