use master
go

create database RaFilDa 
go

use RaFilDa
go

create table Computers(ID int identity, Name varchar(50), MAC char(17), LastSeen datetime)
create table Groups(ID int identity, Name varchar(50))
create table Config(ID int identity, Name varchar(50), UserID int, RetentionSize int,
FrequencyOfBackup varchar(25), TimeZone varchar(50), PackageSize int null, BackupType int, FileType bit)
create table Source(ID int identity, ConfigID int, Path varchar(250))
create table FTP(ID int identity, IP varchar(15), Username varchar(50), Password nvarchar(50))
create table Local(ID int identity, ConfigID int, Path varchar(250))
create table Net(ID int identity, Username varchar(50), Password nvarchar(50))
create table CompGroup(ID int identity, CompID int, GroupID int)
create table CompConf(ID int identity, ConfigID int, CompID int, Updated bit default 1)
create table FTPConf(ID int identity, ConfigID int, FTPID int, Path varchar(250))
create table NetConf(ID int identity, ConfigID int, NetID int, Path varchar(300))
create table Users(ID int identity, Username varchar(50), Password nvarchar(50), Email varchar(100))
create table Reports(ID int identity, CompConfID int, Date datetime, Type varchar(5), IsError bit, Message varchar(500))

alter table Computers add constraint Pk_Computers_ID primary key(ID)
alter table Groups add constraint Pk_Groups_ID primary key(ID)
alter table Config add constraint Pk_Config_ID primary key(ID)
alter table Source add constraint Pk_Source_ID primary key(ID)
alter table FTP add constraint Pk_FTP_ID primary key(ID)
alter table Local add constraint Pk_Local_ID primary key(ID)
alter table Net add constraint Pk_Net_ID primary key(ID)
alter table CompGroup add constraint Pk_CompGroup_ID primary key(ID)
alter table CompConf add constraint Pk_CompConf_ID primary key(ID)
alter table FTPConf add constraint Pk_FTPConf_ID primary key(ID)
alter table NetConf add constraint Pk_NetConf_ID primary key(ID)
alter table Users add constraint Pk_Users_ID primary key(ID)
alter table Reports add constraint Pk_Reports_ID primary key(ID)


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


insert into Users values('admin','admin','admin@admin.com')

