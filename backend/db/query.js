export const tableQuery = `DROP TABLE IF EXISTS Employees;
CREATE TABLE Employees (
    name VARCHAR(50) NOT NULL,
    position VARCHAR(50),
    office VARCHAR(20) NOT NULL,
    age int NOT NULL,
    start_date TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    salary NUMERIC (8,2) NOT NULL
);`;

export const insertData = `

insert into Employees values ('ALLEN','SALESMAN', 'India', 38, to_timestamp('98/8/15', 'YY/MM/DD'),1600);

insert into Employees values ('WARD','SALESMAN', 'London', 37, to_timestamp('96/3/26', 'YY/MM/DD'),1250);

insert into Employees values ('JONES','MANAGER', 'New York', 30, to_timestamp('95/10/31', 'YY/MM/DD'),2975);

insert into Employees values ('BLAKE','MANAGER', 'England', 34,to_timestamp('92/6/11', 'YY/MM/DD'),2850);

insert into Employees values ('CLARK','MANAGER', 'Australia', 30, to_timestamp('93/5/14', 'YY/MM/DD'),2450);

insert into Employees values ('SCOTT','ANALYST', 'China', 31, to_timestamp('96/3/5', 'YY/MM/DD'),3000);

insert into Employees values ('KING','PRESIDENT', 'Singapore', 32, to_timestamp('90/6/9', 'YY/MM/DD'),5000);

insert into Employees values ('TURNER','SALESMAN', 'Thailand', 30, to_timestamp('95/6/4', 'YY/MM/DD'),1500);

insert into Employees values ('ADAMS','CLERK', 'Sri Lanka', 35, to_timestamp('99/6/4', 'YY/MM/DD'),1100);

insert into Employees values ('JAMES','CLERK', 'US', 20 , to_timestamp('00/6/23', 'YY/MM/DD'),950);

insert into Employees values ('MILLER','CLERK', 'Africa', 25, to_timestamp('00/1/21', 'YY/MM/DD'),1300);

insert into Employees values ('FORD','ANALYST', 'India', 28, to_timestamp('97/12/5', 'YY/MM/DD'),3000);

insert into Employees values ('MARTIN','SALESMAN', 'US', 29, to_timestamp('98/12/5', 'YY/MM/DD'),1250);
`;

export const getData = `SELECT name, position, office, age, start_date, salary::FLOAT FROM Employees ORDER BY name ASC`;