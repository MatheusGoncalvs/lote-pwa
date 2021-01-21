FROM mcr.microsoft.com/mssql/server:2019-latest

USER root

# creating directories
RUN mkdir /var/opt/sqlserver
RUN mkdir /var/opt/sqlserver/data
RUN mkdir /var/opt/sqlserver/log
RUN mkdir /var/opt/sqlserver/backup

# set permissions on directories
RUN chown -R root:root /var/opt/sqlserver
RUN chown -R root:root /var/opt/mssql

# starting SQL Server
CMD /opt/mssql/bin/sqlservr