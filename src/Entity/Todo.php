<?php

namespace App\Entity;

use App\Repository\TodoRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TodoRepository::class)
 */
class Todo
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $company;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $customer;

    /**
     * @ORM\Column(type="integer")
     */
    private $customerPostalCode;

    /**
     * @ORM\Column(type="integer")
     */
    private $companyPostalCode;

    /**
     * @ORM\Column(type="integer")
     */
    private $customerPhoneNumber;

    /**
     * @ORM\Column(type="integer")
     */
    private $companyPhoneNumber;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $firstField;

    /**
     * @ORM\Column(type="integer")
     */
    private $firstPrice;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $secondField;

    /**
     * @ORM\Column(type="integer")
     */
    private $secondPrice;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $thirdField;

    /**
     * @ORM\Column(type="integer")
     */
    private $thirdPrice;

    /**
     * @ORM\Column(type="integer")
     */
    private $total;

    /**
     * @ORM\Column(type="integer")
     */
    private $trackingNumber;

        /**
     * @ORM\Column(type="string", length=255)
     */
    private $validationStep;

    public function getId(): ?string
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCompany(): ?string
    {
        return $this->company;
    }

    public function setCompany(string $company): self
    {
        $this->company = $company;

        return $this;
    }

    public function getCustomer(): ?string
    {
        return $this->customer;
    }

    public function setCustomer(string $customer): self
    {
        $this->customer = $customer;

        return $this;
    }

    public function getCustomerPostalCode(): ?int
    {
        return $this->customerPostalCode;
    }

    public function setCustomerPostalCode(int $customerPostalCode): self
    {
        $this->customerPostalCode = $customerPostalCode;

        return $this;
    }

    public function getCompanyPostalCode(): ?int
    {
        return $this->companyPostalCode;
    }

    public function setCompanyPostalCode(int $companyPostalCode): self
    {
        $this->companyPostalCode = $companyPostalCode;

        return $this;
    }

    public function getCustomerPhoneNumber(): ?int
    {
        return $this->customerPhoneNumber;
    }

    public function setCustomerPhoneNumber(int $customerPhoneNumber): self
    {
        $this->customerPhoneNumber = $customerPhoneNumber;

        return $this;
    }

    public function getCompanyPhoneNumber(): ?int
    {
        return $this->companyPhoneNumber;
    }

    public function setCompanyPhoneNumber(int $companyPhoneNumber): self
    {
        $this->companyPhoneNumber = $companyPhoneNumber;

        return $this;
    }

    public function getFirstField(): ?string
    {
        return $this->firstField;
    }

    public function setFirstField(string $firstField): self
    {
        $this->firstField = $firstField;

        return $this;
    }

    public function getFirstPrice(): ?int
    {
        return $this->firstPrice;
    }

    public function setFirstPrice(int $firstPrice): self
    {
        $this->firstPrice = $firstPrice;

        return $this;
    }

    public function getSecondField(): ?string
    {
        return $this->secondField;
    }

    public function setSecondField(string $secondField): self
    {
        $this->secondField = $secondField;

        return $this;
    }

    public function getSecondPrice(): ?int
    {
        return $this->secondPrice;
    }

    public function setSecondPrice(int $secondPrice): self
    {
        $this->secondPrice = $secondPrice;

        return $this;
    }

    public function getThirdField(): ?string
    {
        return $this->thirdField;
    }

    public function setThirdField(string $thirdField): self
    {
        $this->thirdField = $thirdField;

        return $this;
    }

    public function getThirdPrice(): ?int
    {
        return $this->thirdPrice;
    }

    public function setThirdPrice(int $thirdPrice): self
    {
        $this->thirdPrice = $thirdPrice;

        return $this;
    }

    public function getTotal(): ?int
    {
        return $this->total;
    }

    public function setTotal(int $total): self
    {
        $this->total = $total;

        return $this;
    }
    public function getTrackingNumber(): ?int
    {
        return $this->trackingNumber;
    }

    public function setTrackingNumber(int $trackingNumber): self
    {
        $this->trackingNumber = $trackingNumber;

        return $this;
    }
    public function getValidationStep(): ?string
    {
        return $this->validationStep;
    }

    public function setValidationStep(string $validationStep): self
    {
        $this->validationStep = $validationStep;

        return $this;
    }
    public function toArray()
    {
        return ['id' => $this->id, 'name' => $this->name, 'company' => $this->company, 'customer' => $this->customer, 'customerPostalCode' => $this->customerPostalCode, 'companyPostalCode' => $this->companyPostalCode, 'customerPhoneNumber' => $this->customerPhoneNumber, 'companyPhoneNumber' => $this->companyPhoneNumber, 'firstField' => $this->firstField, 'firstPrice' => $this->firstPrice, 'secondField' => $this->secondField, 'secondPrice' => $this->secondPrice, 'thirdField' => $this->thirdField, 'thirdPrice' => $this->thirdPrice, 'total' => $this->total, 'trackingNumber' => $this->trackingNumber, 'validationStep' => $this->validationStep];
    }
}
