create table Computers(ID int AUTO_INCREMENT PRIMARY KEY, Name varchar(50), MAC char(17), IP varchar(16), LastSeen datetime);
create table Groups(ID int AUTO_INCREMENT PRIMARY KEY, Name varchar(50));
create table Config(ID int AUTO_INCREMENT PRIMARY KEY, Name varchar(50), UserID int, RetentionSize int,
FrequencyOfBackup char(1), Cron varchar(300), TimeZone varchar(50), PackageSize int null, BackupType int, FileType bit);
create table CompGroup(ID int AUTO_INCREMENT PRIMARY KEY, CompID int, GroupID int);
create table CompConf(ID int AUTO_INCREMENT PRIMARY KEY, ConfigID int, CompID int, Updated bit default 1);
create table Source(ID int AUTO_INCREMENT PRIMARY KEY, ConfigID int, Path varchar(100));
create table Destination(ID int AUTO_INCREMENT PRIMARY KEY, ConfigID int, Type char(3), Path varchar(100), IP varchar(16), Username varchar(50), Password varchar(50));
create table Users(ID int AUTO_INCREMENT PRIMARY KEY, Username varchar(50), Password varchar(50), Email varchar(100));
create table Reports(ID int AUTO_INCREMENT PRIMARY KEY, CompConfID int, Date datetime, Type varchar(5), IsError bit, Message varchar(500));


alter table Config add constraint Fk_Config_UserID_Users_ID foreign key(UserID) references Users(ID);
alter table CompGroup add constraint Fk_CompGroup_GroupID_Groups_ID foreign key(GroupID) references Groups(ID);
alter table CompConf add constraint Fk_CompConf_CompID_Computers_ID foreign key(CompID) references Computers(ID);
alter TABLE Reports add CONSTRAINT Fk_Reports_CompConfID_CompConf_ID FOREIGN KEY(CompConfID) references CompConf(ID);
alter TABLE Source add CONSTRAINT Fk_Source_ConfigID_Config_ID FOREIGN KEY(ConfigID) REFERENCES Config(ID);
alter TABLE Destination add CONSTRAINT Fk_Destination_ConfigID_Config_ID FOREIGN KEY(ConfigID) REFERENCES Config(ID);

alter table CompGroup add constraint Fk_CompGroup_CompID_Computers_ID foreign key(CompID) references Computers(ID);
alter table CompConf add constraint Fk_CompConf_ConfigID_Config_ID foreign key(ConfigID) references Config(ID);


insert into Users values(default,'admin','admin','admin@admin.com');
