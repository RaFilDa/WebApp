use master
go

create database RaFilDa 
go

use RaFilDa
go

create table Computers(ID int identity, Name varchar(50), Groups int null, MAC char(17), Connected bit)
create table Groups(ID int identity, Name varchar(50))
create table Config(ID int identity, Name varchar(50), RetentionSize int,
FrequencyOfBackup datetime, PackageSize int null, BackupType int, FileType bit)
create table Source(ID int identity, Path varchar(250))
create table FTP(ID int identity, IP varchar(15), Path varchar(250))
create table Local(ID int identity, Path varchar(250))
create table Net(ID int identity, Path varchar(300))
create table CompGroup(ID int identity, CompID int, GroupID int)
create table CompConf(ID int identity, ConfigID int, CompID int)
create table SourceConf(ID int identity, ConfigID int, SourceID int)
create table FTPConf(ID int identity, ConfigID int, FTPID int)
create table LocalConf(ID int identity, ConfigID int, LocalID int)
create table NetConf(ID int identity, ConfigID int, NetID int)

alter table Computers add constraint Pk_Computers_ID primary key(ID)
alter table Groups add constraint Pk_Groups_ID primary key(ID)
alter table Config add constraint Pk_Config_ID primary key(ID)
alter table Source add constraint Pk_Source_ID primary key(ID)
alter table FTP add constraint Pk_FTP_ID primary key(ID)
alter table Local add constraint Pk_Local_ID primary key(ID)
alter table Net add constraint Pk_Net_ID primary key(ID)
alter table CompGroup add constraint Pk_CompGroup_ID primary key(ID)
alter table CompConf add constraint Pk_CompConf_ID primary key(ID)
alter table SourceConf add constraint Pk_SourceConf_ID primary key(ID)
alter table FTPConf add constraint Pk_FTPConf_ID primary key(ID)
alter table LocalConf add constraint Pk_LocalConf_ID primary key(ID)
alter table NetConf add constraint Pk_NetConf_ID primary key(ID)

alter table CompGroup add constraint Pk_CompGroup_GroupID_Groups_ID foreign key(GroupID) references Groups(ID)
alter table CompConf add constraint Pk_CompConf_CompID_Computers_ID foreign key(CompID) references Computers(ID)
alter table SourceConf add constraint Pk_SourceConf_SourceID_Source_ID foreign key(SourceID) references Source(ID)
alter table FTPConf add constraint Pk_FTPConf_FTPID_FTP_ID foreign key(FTPID) references FTP(ID)
alter table LocalConf add constraint Pk_LocalConf_LocalID_Local_ID foreign key(LocalID) references Local(ID)
alter table NetConf add constraint Pk_NetConf_NetID_Net_ID foreign key(NetID) references Net(ID)

alter table CompGroup add constraint Pk_CompGroup_CompID_Computers_ID foreign key(CompID) references Computers(ID)
alter table CompConf add constraint Pk_CompConf_ConfigID_Config_ID foreign key(ConfigID) references Config(ID)
alter table SourceConf add constraint Pk_SourceConf_ConfigID_Config_ID foreign key(ConfigID) references Config(ID)
alter table FTPConf add constraint Pk_FTPConf_ConfigID_Config_ID foreign key(ConfigID) references Config(ID)
alter table LocalConf add constraint Pk_LocalConf_ConfigID_Config_ID foreign key(ConfigID) references Config(ID)
alter table NetConf add constraint Pk_NetConf_ConfigID_Config_ID foreign key(ConfigID) references Config(ID)