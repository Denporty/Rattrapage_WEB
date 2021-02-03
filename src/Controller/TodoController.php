<?php

namespace App\Controller;

use App\Entity\Todo;
use App\Repository\TodoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/todo', name: 'api_todo')]
class TodoController extends AbstractController
{
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;
    private $todoRepository;


    public function __construct(EntityManagerInterface $entityManager, TodoRepository $todoRepository)
    { 
        $this->entityManager = $entityManager;
        $this->todoRepository = $todoRepository;
    }
    #[Route('/read', name: 'api_todo_read')]
    public function index(): Response
    {
       $todos = $this->todoRepository->findAll();

       $arrayOfTodos = [];

       foreach ($todos as $todo) {
           $arrayOfTodos[] = $todo->toArray();
       }
       return $this->json($arrayOfTodos);
    }
        #[Route('/create', name: 'api_todo_create')]
    # @param Request $request
    # @return JsonResponse
    public function create(Request $request)
    {
       $content = json_decode($request->getContent());
       $todo = new Todo();
       $todo->setName($content->name);
       $todo->setCompany($content->company);
       $todo->setCustomer($content->customer);
       $todo->setCustomerPostalCode($content->customerPostalCode);
       $todo->setCompanyPostalCode($content->companyPostalCode);
       $todo->setCustomerPhoneNumber($content->customerPhoneNumber);
       $todo->setCompanyPhoneNumber($content->companyPhoneNumber);
       $todo->setFirstField($content->firstField);
       $todo->setFirstPrice($content->firstPrice);
       $todo->setSecondField($content->secondField);
       $todo->setSecondPrice($content->secondPrice);
       $todo->setThirdField($content->thirdField);
       $todo->setThirdPrice($content->thirdPrice);
       $todo->setTotal($content->total);

       try {
           $this->entityManager->persist($todo);
           $this->entityManager->flush();
           return $this->json([
               'todo' => $todo->toArray(),
           ]);
       } catch (Exception $exception) {
           //error
       }
    }
    /**
     *@Route("/update/{id}", name= "api_todo_update", methods={"PUT"})
     *@param Request $request
     *@param Todo $todo
     *@return JsonResponse
     */

     public function update(Request $request, Todo $todo){
        $content = json_decode($request->getContent());
        $todo->setName($content->name);
        $todo->setCompany($content->company);
        $todo->setCustomer($content->customer);
        $todo->setCustomerPostalCode($content->customerPostalCode);
        $todo->setCompanyPostalCode($content->companyPostalCode);
        $todo->setCustomerPhoneNumber($content->customerPhoneNumber);
        $todo->setCompanyPhoneNumber($content->companyPhoneNumber);
        $todo->setFirstField($content->firstField);
        $todo->setFirstPrice($content->firstPrice);
        $todo->setSecondField($content->secondField);
        $todo->setSecondPrice($content->secondPrice);
        $todo->setThirdField($content->thirdField);
        $todo->setThirdPrice($content->thirdPrice);
        $todo->setTotal($content->total);

        try {
            $this->entityManager->flush();
        } catch (Exception $exception) {
            //error
        }

        return $this->json([
            'message' => 'Le devis a était modifié'
        ]);
     }



     /**
     *@Route("/delete/{id}", name= "api_todo_delete", methods={"DELETE"})
     *@param Todo $todo
     *@return JsonResponse
     */

    public function delete(Todo $todo){
        try {
            $this->entityManager->remove($todo);
            $this->entityManager->flush();
        } catch (Exception $exception) {

        }

        return $this->json([
            'message' => 'todo has been delected',
        ]);
     }

}

