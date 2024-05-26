-- CREATE DATABASE IF NOT EXIST codrrdb
SELECT 'CREATE DATABASE codrrdb'
WHERE NOT EXIST (SELECT FROM pg_database WHERE datname = 'codrrdb')\gexec 