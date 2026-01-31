FROM php:8.1-apache
# Cài đặt extension PDO MySQL cho PHP
RUN docker-php-ext-install pdo pdo_mysql