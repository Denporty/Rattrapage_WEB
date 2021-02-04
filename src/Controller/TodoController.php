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
use App\Form\TodoType;


#[Route('/api/todo', name: 'api_todo')]
class TodoController extends AbstractController
{
    private $entityManager;
    private $todoRepository;


    public function __construct(EntityManagerInterface $entityManager, TodoRepository $todoRepository)
    { 
        $this->entityManager = $entityManager;
        $this->todoRepository = $todoRepository;
    }
    #[Route('/read', name: 'api_todo_read')]
    public function read(): Response
    {
       $todos = $this->todoRepository->findAll();

       $arrayOfTodos = [];

       foreach ($todos as $todo) {
           $arrayOfTodos[] = $todo->toArray();
       }
       return $this->json($arrayOfTodos);
    }
    /**
     * @Route("/create", name="api_todo_create", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function create(Request $request)
    {
       $content = json_decode($request->getContent());
       $form = $this->createForm(TodoType::class);
       $form->submit((array)$content);
        if (!$form->isValid()) {
            $errors = [];
            foreach ($form->getErrors(true, true) as $error){
                $propertyName = $error->getOrigin()->getName();
                $errors[$propertyName] = $error->getMessage();
            }
            return $this->json([
                'message' => ['text' => implode("\n", $errors), 'level' => 'error'],
            ]);
        }
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
       } catch (Exception $exception) {
        return $this->json([
            'message' => ["text" => ["Le devis n'as pas était ajouté !"], "level" => "error"]
        ]);

    }
       return $this->json([
        'todo' => $todo->toArray(),
        'message' => ["text" => ['Le devis a bien était ajouté !', 'Devis: ' . $content->name], "level" => "success"]
    ]);
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
            'message' => 'Le devis a était supprimé !',
        ]);
     }
}