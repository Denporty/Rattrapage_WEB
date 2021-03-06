<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210203111104 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE todo (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, company VARCHAR(255) NOT NULL, customer VARCHAR(255) NOT NULL, customer_postal_code INT NOT NULL, company_postal_code INT NOT NULL, customer_phone_number INT NOT NULL, company_phone_number INT NOT NULL, first_field VARCHAR(255) NOT NULL, first_price INT NOT NULL, second_field VARCHAR(255) NOT NULL, second_price INT NOT NULL, third_field VARCHAR(255) NOT NULL, third_price INT NOT NULL, total INT NOT NULL, tracking_number INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE todo');
    }
}
