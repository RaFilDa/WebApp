--for SQL only
--use master
--go

--create database RaFilDa 
--go

--use RaFilDa
--go

create table Computers(ID int AUTO_INCREMENT PRIMARY KEY, Name varchar(50), MAC char(17), IP varchar(16), LastSeen datetime)
create table Groups(ID int AUTO_INCREMENT PRIMARY KEY, Name varchar(50))
create table Config(ID int AUTO_INCREMENT PRIMARY KEY, Name varchar(50), UserID int, RetentionSize int,
FrequencyOfBackup varchar(25), TimeZone varchar(50), PackageSize int null, BackupType int, FileType bit)
create table Source(ID int AUTO_INCREMENT PRIMARY KEY, ConfigID int, Path varchar(250))
create table FTP(ID int AUTO_INCREMENT PRIMARY KEY, IP varchar(15), Username varchar(50), Password nvarchar(50))
create table Local(ID int AUTO_INCREMENT PRIMARY KEY, ConfigID int, Path varchar(250))
create table Net(ID int AUTO_INCREMENT PRIMARY KEY, Username varchar(50), Password nvarchar(50))
create table CompGroup(ID int AUTO_INCREMENT PRIMARY KEY, CompID int, GroupID int)
create table CompConf(ID int AUTO_INCREMENT PRIMARY KEY, ConfigID int, CompID int, Updated bit default 1)
create table FTPConf(ID int AUTO_INCREMENT PRIMARY KEY, ConfigID int, FTPID int, Path varchar(250))
create table NetConf(ID int AUTO_INCREMENT PRIMARY KEY, ConfigID int, NetID int, Path varchar(300))
create table Users(ID int AUTO_INCREMENT PRIMARY KEY, Username varchar(50), Password nvarchar(50), Email varchar(100))
create table Reports(ID int AUTO_INCREMENT PRIMARY KEY, CompConfID int, Date datetime, Type varchar(5), IsError bit, Message varchar(500))


alter table Config add constraint Fk_Config_UserID_Users_ID foreign key(UserID) references Users(ID)
alter table CompGroup add constraint Fk_CompGroup_GroupID_Groups_ID foreign key(GroupID) references Groups(ID)
alter table CompConf add constraint Fk_CompConf_CompID_Computers_ID foreign key(CompID) references Computers(ID)
alter table FTPConf add constraint Fk_FTPConf_FTPID_FTP_ID foreign key(FTPID) references FTP(ID)
alter table NetConf add constraint Fk_NetConf_NetID_Net_ID foreign key(NetID) references Net(ID)
alter table Local add constraint Fk_Local_ConfigID_Config_ID foreign key(ConfigID) references Config(ID)
alter table Source add constraint Fk_Source_ConfigID_Config_ID foreign key(ConfigID) references Config(ID)
alter table Reports add constraint Fk_Reports_CompConfID_CompConf_ID foreign key(CompConfID) references CompConf(ID)


alter table CompGroup add constraint Fk_CompGroup_CompID_Computers_ID foreign key(CompID) references Computers(ID)
alter table CompConf add constraint Fk_CompConf_ConfigID_Config_ID foreign key(ConfigID) references Config(ID)
alter table FTPConf add constraint Fk_FTPConf_ConfigID_Config_ID foreign key(ConfigID) references Config(ID)
alter table NetConf add constraint Fk_NetConf_ConfigID_Config_ID foreign key(ConfigID) references Config(ID)


insert into Users values(default,'admin','admin','admin@admin.com')

