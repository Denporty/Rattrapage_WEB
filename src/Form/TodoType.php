<?php

namespace App\Form;

use App\Entity\Todo;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class TodoType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'constraints'=> [
                    new NotBlank(['message' => "L'intitulé du devis ne peut pas être vide !"]),
                    new Length([
                        'min' => 8,
                        'max' => 255,

                        'minMessage' => "L'intitulé du devis doit contenir plus de 8 caractères !",
                        'maxMessage' => "Vous avez rentré {{ value }} charactéres ne peut pas contenir plus de {{ limit }} caractères !",
                    ])
                ]
            ])
            ->add('company', TextType::class, [
                'constraints'=> [
                    new NotBlank(['message' => "Le nom de l'entreprise ne peut pas être vide !"]),
                    new Length([
                        'min' => 1,
                        'max' => 40,

                        'minMessage' => "Le nom de l'entreprise doit contenir plus de 1 caractères !",
                        'maxMessage' => "Vous avez rentré {{ value }} charactéres mais le nom de l'entreprise ne peut pas contenir plus de {{ limit }} caractères !",
                    ])
                ]
            ])
            ->add('customer', TextType::class, [
                'constraints'=> [
                    new NotBlank(['message' => "Le nom du client ne peut pas être vide !"]),
                    new Length([
                        'min' => 1,
                        'max' => 40,

                        'minMessage' => "Le nom du client doit contenir plus de 1 caractères !",
                        'maxMessage' => "Vous avez rentré {{ value }} charactéres mais le nom du client ne peut pas contenir plus de {{ limit }} caractères !",
                    ])
                ]
            ])
            ->add('customerPostalCode', TextType::class, [
                'constraints'=> [
                    new NotBlank(['message' => "Le code postal du client ne peut pas être vide !"]),
                    new Length([
                        'min' => 5,
                        'max' => 5,

                        'minMessage' => "Le code postal du client doit contenir 5 caractères !",
                        'maxMessage' => "Vous avez rentré {{ value }} charactéres mais le code postal du client ne peut pas contenir plus de {{ limit }} caractères !",
                    ])
                ]
            ])
            ->add('companyPostalCode', TextType::class, [
                'constraints'=> [
                    new NotBlank(['message' => "Le code postal de l'entreprise ne peut pas être vide !"]),
                    new Length([
                        'min' => 5,
                        'max' => 5,

                        'minMessage' => "Le code postal de l'entreprise doit contenir 5 caractères !",
                        'maxMessage' => "Vous avez rentré {{ value }} charactéres mais le code postal de l'entreprise ne peut pas contenir plus de {{ limit }} caractères !",
                    ])
                ]
            ])
            ->add('customerPhoneNumber', TextType::class, [
                'constraints'=> [
                    new NotBlank(['message' => "Le numéro de téléphone du client ne peut pas être vide !"]),
                    new Length([
                        'min' => 9,
                        'max' => 10,

                        'minMessage' => "Le numéro de téléphone du client doit contenir plus de 9 caractères !",
                        'maxMessage' => "Vous avez rentré {{ value }} charactéres mais le numéro de téléphone du client ne peut pas contenir plus de {{ limit }} caractères !",
                    ])
                ]
            ])
            ->add('companyPhoneNumber', TextType::class, [
                'constraints'=> [
                    new NotBlank(['message' => "Le numéro de téléphone de l'entreprise ne peut pas être vide !"]),
                    new Length([
                        'min' => 9,
                        'max' => 10,

                        'minMessage' => "Le numéro de téléphone de l'entreprise doit contenir plus de 9 caractères !",
                        'maxMessage' => "Vous avez rentré {{ value }} charactéres mais le numéro de téléphone de l'entreprise ne peut pas contenir plus de {{ limit }} caractères !",
                    ])
                ]
            ])
            ->add('firstField', TextType::class, [
                'constraints'=> [
                    new NotBlank(['message' => "Le premier champs du devis ne peut pas être vide !"]),
                    new Length([
                        'min' => 5,
                        'max' => 1000,

                        'minMessage' => "Le premier champs doit contenir plus de 5 caractères !",
                        'maxMessage' => "Vous avez rentré {{ value }} charactéres mais le premier champs ne peut pas contenir plus de {{ limit }} caractères !",
                    ])
                ]
            ])
            ->add('firstPrice', TextType::class, [
                'constraints'=> [
                    new NotBlank(['message' => "Le prix du premier champs du devis ne peut pas être vide !"]),
                    new Length([
                        'min' => 1,
                        'max' => 12,

                        'minMessage' => "Le prix du premier champs du devis doit contenir plus de 1 caractères !",
                        'maxMessage' => "Vous avez rentré {{ value }} charactéres mais le prix du premier champs du devis ne peut pas contenir plus de {{ limit }} caractères !",
                    ])
                ]
            ])
            ->add('secondField', TextType::class, [
                'constraints'=> [
                    new NotBlank(['message' => "Le second champs du devis ne peut pas être vide !"]),
                    new Length([
                        'min' => 5,
                        'max' => 1000,

                        'minMessage' => "Le second champs doit contenir plus de 5 caractères !",
                        'maxMessage' => "Vous avez rentré {{ value }} charactéres mais le second champs ne peut pas contenir plus de {{ limit }} caractères !",
                    ])
                ]
            ])
            ->add('secondPrice', TextType::class, [
                'constraints'=> [
                    new NotBlank(['message' => "Le prix du second champs du devis ne peut pas être vide !"]),
                    new Length([
                        'min' => 1,
                        'max' => 12,

                        'minMessage' => "Le prix du second champs du devis doit contenir plus de 1 caractères !",
                        'maxMessage' => "Vous avez rentré {{ value }} charactéres mais le prix du second champs du devis ne peut pas contenir plus de {{ limit }} caractères !",
                    ])
                ]
            ])
            ->add('thirdField', TextType::class, [
                'constraints'=> [
                    new NotBlank(['message' => "Le troisieme champs du devis ne peut pas être vide !"]),
                    new Length([
                        'min' => 5,
                        'max' => 1000,

                        'minMessage' => "Le troisieme champs doit contenir plus de 5 caractères !",
                        'maxMessage' => "Vous avez rentré {{ value }} charactéres mais le troisieme champs ne peut pas contenir plus de {{ limit }} caractères !",
                    ])
                ]
            ])
            ->add('thirdPrice', TextType::class, [
                'constraints'=> [
                    new NotBlank(['message' => "Le prix du troisieme champs du devis ne peut pas être vide !"]),
                    new Length([
                        'min' => 1,
                        'max' => 12,

                        'minMessage' => "Le prix du troisieme champs du devis doit contenir plus de 1 caractères !",
                        'maxMessage' => "Vous avez rentré {{ value }} charactéres mais le prix du troisieme champs du devis ne peut pas contenir plus de {{ limit }} caractères !",
                    ])
                ]
            ])
            ->add('total', TextType::class, [
                'constraints'=> [
                    new NotBlank(['message' => "Le total du prix du devis ne peut pas être vide !"]),
                    new Length([
                        'min' => 1,
                        'max' => 12,

                        'minMessage' => "Le total du prix du devis doit contenir plus de 1 caractères !",
                        'maxMessage' => "Vous avez rentré {{ value }} charactéres mais le total du prix du devis ne peut pas contenir plus de {{ limit }} caractères !",
                    ])
                ]
            ])
            ->add('trackingNumber', TextType::class, [
                'constraints'=> [
                    new NotBlank(['message' => "Le numéro de devis ne peut pas être vide !"]),
                    new Length([
                        'min' => 10,
                        'max' => 10,

                        'minMessage' => "Le total du prix du devis doit contenir plus de 1 caractères !",
                        'maxMessage' => "Vous avez rentré {{ value }} charactéres mais le total du prix du devis ne peut pas contenir plus de {{ limit }} caractères !",
                    ])
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Todo::class,
            'csrf_protection' => false,
        ]);
    }
}
